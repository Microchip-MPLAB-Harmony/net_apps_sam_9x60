/*******************************************************************************
  MIIM Driver Local Data Structures

  Company:
    Microchip Technology Inc.

  File Name:
    drv_miim_mapping.h

  Summary:
    MIIM driver mapping for different internal MACs.

  Description:
    This file contains routines for MIIM driver register access.
*******************************************************************************/

//DOM-IGNORE-BEGIN
/*
Copyright (C) 2018-2023, Microchip Technology Inc., and its subsidiaries. All rights reserved.

The software and documentation is provided by microchip and its contributors
"as is" and any express, implied or statutory warranties, including, but not
limited to, the implied warranties of merchantability, fitness for a particular
purpose and non-infringement of third party intellectual property rights are
disclaimed to the fullest extent permitted by law. In no event shall microchip
or its contributors be liable for any direct, indirect, incidental, special,
exemplary, or consequential damages (including, but not limited to, procurement
of substitute goods or services; loss of use, data, or profits; or business
interruption) however caused and on any theory of liability, whether in contract,
strict liability, or tort (including negligence or otherwise) arising in any way
out of the use of the software and documentation, even if advised of the
possibility of such damage.

Except as expressly permitted hereunder and subject to the applicable license terms
for any third-party software incorporated in the software and any applicable open
source software license terms, no license or other rights, whether express or
implied, are granted under any patent or other intellectual property rights of
Microchip or any third party.
*/

//DOM-IGNORE-END

#ifndef _DRV_MIIM_MAPPING_H
#define _DRV_MIIM_MAPPING_H


// *****************************************************************************
// *****************************************************************************
// Section: File includes
// *****************************************************************************
// *****************************************************************************

#include <stdint.h>
#include <stdbool.h>
#include <stddef.h>
#include "device.h"
// *****************************************************************************
// *****************************************************************************
// Section: Data Type Definitions
// *****************************************************************************
// *****************************************************************************

static  __inline__ DRV_MIIM_RESULT
__attribute__((always_inline)) _DRV_MIIM_ETH_ENABLE( uintptr_t ethPhyId )
{
    return DRV_MIIM_RES_OK;
}

static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_MII_RELEASE_RESET( uintptr_t ethPhyId )
{
}

static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_SETUP_PREAMBLE(
    uintptr_t               ethPhyId,
    const DRV_MIIM_SETUP *  pSetUp
    )
{
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_SCAN_INCREMENT(
    uintptr_t               ethPhyId,
    const DRV_MIIM_SETUP *  pSetUp
    )
{
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_MNGMNT_PORT_ENABLE( uintptr_t ethPhyId )
{
    emac_registers_t * macRegs = (emac_registers_t *) ethPhyId; // EMAC0_REGS or EMAC1_REGS
    if( EMAC_NCR_MPE_Msk != (macRegs->EMAC_NCR & EMAC_NCR_MPE_Msk) )
    {   // once enabled should not toggle RE or TE because that will
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
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_MNGMNT_PORT_DISABLE( uintptr_t ethPhyId )
{
}
static  __inline__ bool
__attribute__((always_inline)) _DRV_MIIM_IS_BUSY( uintptr_t ethPhyId )
{
    emac_registers_t * macRegs = (emac_registers_t *) ethPhyId; // EMAC0_REGS or EMAC1_REGS
   if ((macRegs->EMAC_NSR & EMAC_NSR_IDLE_Msk) != EMAC_NSR_IDLE_Msk)
       return true;
   else
       return false;
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_PHYADDR_SET(
    uintptr_t           ethPhyId,
    DRV_MIIM_OP_DCPT *  pOpDcpt
    )
{
}
static  __inline__ DRV_MIIM_TXFER_STAT
__attribute__((always_inline)) _DRV_MIIM_OP_SCAN_ENABLE( uintptr_t ethPhyId )
{
     return DRV_MIIM_TXFER_SCAN_STALE;
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_OP_WRITE_DATA(
    uintptr_t           ethPhyId,
    DRV_MIIM_OP_DCPT *  pOpDcpt
    )
{
    emac_registers_t * macRegs = (emac_registers_t *) ethPhyId; // EMAC0_REGS or EMAC1_REGS
    macRegs->EMAC_MAN = EMAC_MAN_SOF( 1 )       // clause 22 start of frame
                        | EMAC_MAN_RW( 1 )      // write
                        | EMAC_MAN_PHYA( pOpDcpt->phyAdd )
                        | EMAC_MAN_REGA( pOpDcpt->regIx )
                        | EMAC_MAN_CODE( 2 )
                        | EMAC_MAN_DATA( pOpDcpt->opData )
                        ;
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_WRITE_START( uintptr_t ethPhyId )
{
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_OP_READ_START(
    uintptr_t           ethPhyId,
    DRV_MIIM_OP_DCPT *  pOpDcpt
    )
{
    emac_registers_t * macRegs = (emac_registers_t *) ethPhyId; // EMAC0_REGS or EMAC1_REGS
    macRegs->EMAC_MAN = EMAC_MAN_SOF( 1 )       // clause 22 start of frame
                        | EMAC_MAN_RW( 2 )      // read
                        | EMAC_MAN_PHYA( pOpDcpt->phyAdd )
                        | EMAC_MAN_REGA( pOpDcpt->regIx )
                        | EMAC_MAN_CODE( 2 )
                        | EMAC_MAN_DATA( pOpDcpt->opData )
                        ;
}
static  __inline__ uint16_t
__attribute__((always_inline)) _DRV_MIIM_OP_READ_DATA_GET( uintptr_t ethPhyId )
{
    emac_registers_t * macRegs = (emac_registers_t *) ethPhyId; // EMAC0_REGS or EMAC1_REGS
    return (uint16_t)(macRegs->EMAC_MAN & EMAC_MAN_DATA_Msk);
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_CLEAR_DATA_VALID( uintptr_t ethPhyId )
{
}
static  __inline__ bool
__attribute__((always_inline)) _DRV_MIIM_IS_DATA_VALID( uintptr_t ethPhyId )
{
    return false;
}
static  __inline__ void
__attribute__((always_inline)) _DRV_MIIM_SCAN_DISABLE( uintptr_t ethPhyId )
{
}
static  __inline__ void __attribute__((always_inline)) _DRV_MIIM_SMI_CLOCK_SET(uintptr_t ethPhyId, uint32_t hostClock, uint32_t maxMIIMClock )
{ 
    emac_registers_t *  macRegs = (emac_registers_t *) ethPhyId; // EMAC0_REGS or EMAC1_REGS
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



#endif //#ifndef _DRV_MIIM_MAPPING_H

/*******************************************************************************
 End of File
*/

