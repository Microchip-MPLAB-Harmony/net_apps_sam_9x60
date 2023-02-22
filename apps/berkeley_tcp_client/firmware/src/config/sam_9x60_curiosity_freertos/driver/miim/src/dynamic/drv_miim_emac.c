/*******************************************************************************
  MIIM Driver Device API for SAM EMAC devices

  Company:
    Microchip Technology Inc.

  File Name:
    drv_miim_emac.c

  Summary:
    MIIM driver device API for SAM platform - EMAC.

  Description:
    This file contains routines for MIIM driver register access.
*******************************************************************************/

//DOM-IGNORE-BEGIN
/*****************************************************************************
 Copyright (C) 2018-2023 Microchip Technology Inc. and its subsidiaries.

Microchip Technology Inc. and its subsidiaries.

Subject to your compliance with these terms, you may use Microchip software 
and any derivatives exclusively with Microchip products. It is your 
responsibility to comply with third party license terms applicable to your 
use of third party software (including open source software) that may 
accompany Microchip software.

THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER 
EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED 
WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR 
PURPOSE.

IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, 
INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND 
WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS 
BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE 
FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN 
ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY, 
THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
*****************************************************************************/

//DOM-IGNORE-END

// *****************************************************************************
// *****************************************************************************
// Section: File includes
// *****************************************************************************
// *****************************************************************************

#include <stdint.h>
#include <stdbool.h>
#include <stddef.h>
#include "device.h"

#include "driver/miim/src/drv_miim_local.h"
#include "drv_miim_device.h"

// *****************************************************************************
// *****************************************************************************
// Section: Data Type Definitions
// *****************************************************************************
// *****************************************************************************


//*****************************************************************************
/* MII Clock Selection

Summary:
Lists the possible speed selection for the Reduced Media Independent 
Interface (RMII).

Description:
This enumeration lists the possible speed selection for RMII.
The body contains only two states: RMII_10Mbps or RMII_100Mbps.

Remarks:
This enumeration is processor specific and is defined in the processor-
specific header files (see processor.h).
*/

static void _DRV_MIIM_SMIClockSet(uintptr_t miimId, uint32_t hostClock, uint32_t maxMIIMClock )
{ 
    emac_registers_t *  macRegs = (emac_registers_t *) miimId; // EMAC0_REGS or EMAC1_REGS
    uint32_t            tenRenSettings = macRegs->EMAC_NCR & (EMAC_NCR_RE_Msk | EMAC_NCR_TE_Msk);
    uint32_t            clockDivider;
    uint32_t            mdcDiv;
    mdcDiv = hostClock / maxMIIMClock;
    if( mdcDiv <= 8 )
    {
        clockDivider = EMAC_NCFGR_CLK_MCK_8;
    }
    else if( mdcDiv <= 16 )
    {
        clockDivider = EMAC_NCFGR_CLK_MCK_16;
    }
    else if( mdcDiv <= 32 )
    {
        clockDivider = EMAC_NCFGR_CLK_MCK_32;
    }
    else
    {
        clockDivider = EMAC_NCFGR_CLK_MCK_64;
    }
    if( !tenRenSettings )
    {   // REN and TEN are both disabled
        macRegs->EMAC_NCFGR |= clockDivider;
    }
    else
    {   // changing TEN will cause emac DMA to reset to first queue
        macRegs->EMAC_NCR &= ~tenRenSettings;
        macRegs->EMAC_NCFGR |= clockDivider;
        macRegs->EMAC_NCR |= tenRenSettings;
    }   
} 

// ************** API implementation

// sets up the device: enable the device, sets the clock and other settings
DRV_MIIM_RESULT DRV_MIIM_DeviceSetup(uintptr_t miimId, const DRV_MIIM_SETUP* pSetUp)
{
    // setup the clock
    _DRV_MIIM_SMIClockSet(miimId, pSetUp->hostClockFreq, pSetUp->maxBusFreq );

    // other settings if needed
    return DRV_MIIM_RES_OK;    
} 

void DRV_MIIM_PortEnable(uintptr_t miimId)
{
    emac_registers_t * macRegs = (emac_registers_t *) miimId; // EMAC0_REGS or EMAC1_REGS
    if( EMAC_NCR_MPE_Msk != (macRegs->EMAC_NCR & EMAC_NCR_MPE_Msk) )
    {   // once enabled should not toggle RE or TE 
        uint32_t tenRenSettings = macRegs->EMAC_NCR & (EMAC_NCR_RE_Msk | EMAC_NCR_TE_Msk);
        if( !tenRenSettings )
        {   // REN and TEN are both disabled
            macRegs->EMAC_NCR |=  EMAC_NCR_MPE_Msk;
        }
        else
        {   // changing TEN will cause emac DMA to reset to first queue
            macRegs->EMAC_NCR &= ~tenRenSettings;
            macRegs->EMAC_NCR |= EMAC_NCR_MPE_Msk;
            macRegs->EMAC_NCR |= tenRenSettings;
        }
    }
}

void DRV_MIIM_PortDisable(uintptr_t miimId)
{
}
    
bool DRV_MIIM_PortBusy(uintptr_t miimId)
{
    emac_registers_t * macRegs = (emac_registers_t *) miimId; // EMAC0_REGS or EMAC1_REGS
   return ((macRegs->EMAC_NSR & EMAC_NSR_IDLE_Msk) != EMAC_NSR_IDLE_Msk);
}

void DRV_MIIM_WriteData(uintptr_t miimId, uint16_t phyAdd, uint16_t regIx, uint16_t wData)
{
    emac_registers_t * macRegs = (emac_registers_t *) miimId; // EMAC0_REGS or EMAC1_REGS
    macRegs->EMAC_MAN = EMAC_MAN_SOF( 1 )       // clause 22 start of frame
                        | EMAC_MAN_RW( 1 )      // write
                        | EMAC_MAN_PHYA( phyAdd )
                        | EMAC_MAN_REGA( regIx )
                        | EMAC_MAN_CODE( 2 )
                        | EMAC_MAN_DATA( wData )
                        ;
}

void DRV_MIIM_ReadStart(uintptr_t miimId, uint16_t phyAdd, uint16_t regIx)
{
    emac_registers_t * macRegs = (emac_registers_t *) miimId; // EMAC0_REGS or EMAC1_REGS
    macRegs->EMAC_MAN = EMAC_MAN_SOF( 1 )       // clause 22 start of frame
                        | EMAC_MAN_RW( 2 )      // read
                        | EMAC_MAN_PHYA( phyAdd )
                        | EMAC_MAN_REGA( regIx )
                        | EMAC_MAN_CODE( 2 )
                        | EMAC_MAN_DATA( 0 )
                        ;
}

uint16_t DRV_MIIM_ReadDataGet(uintptr_t miimId)
{
    emac_registers_t * macRegs = (emac_registers_t *) miimId; // EMAC0_REGS or EMAC1_REGS
    return (uint16_t)(macRegs->EMAC_MAN & EMAC_MAN_DATA_Msk);
}

// scan not supported
DRV_MIIM_TXFER_STAT DRV_MIIM_ScanEnable(uintptr_t miimId, uint16_t phyAdd, uint16_t regIx)
{   
    return DRV_MIIM_TXFER_ERROR;
}
    
// scan not supported
void DRV_MIIM_ScanDisable(uintptr_t miimId)
{ 
}

// scan not supported
bool DRV_MIIM_GetScanData(uintptr_t miimId, uint32_t* scanData)
{
    return false;
}


/*******************************************************************************
  End of File
*/

