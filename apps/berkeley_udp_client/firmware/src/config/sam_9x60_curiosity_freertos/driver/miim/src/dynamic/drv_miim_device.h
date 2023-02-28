/*******************************************************************************
  MIIM Driver Device API

  Company:
    Microchip Technology Inc.

  File Name:
    drv_miim_device.h

  Summary:
    MIIM driver device API for different internal MACs.

  Description:
    This file contains the API for MIIM platform specific driver operations.
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

#ifndef _DRV_MIIM_DEVICE_H
#define _DRV_MIIM_DEVICE_H


// *****************************************************************************
// *****************************************************************************
// Section: File includes
// *****************************************************************************
// *****************************************************************************

#include <stdint.h>
#include <stdbool.h>


// sets up the device: enable the device, sets the clock and other settings
DRV_MIIM_RESULT DRV_MIIM_DeviceSetup(uintptr_t miimId, const DRV_MIIM_SETUP* pSetUp);

// enables the MIIM port
void DRV_MIIM_PortEnable(uintptr_t miimId);

// disables the MIIM port
void DRV_MIIM_PortDisable(uintptr_t miimId);
    
// returns true if the device is busy with an ongoing operation
// false otherwise
bool DRV_MIIM_PortBusy(uintptr_t miimId);

// writes wData using the supplied address and register
void DRV_MIIM_WriteData(uintptr_t miimId, uint16_t phyAdd, uint16_t regIx, uint16_t wData);

// initiates a data read using the supplied address and register    
void DRV_MIIM_ReadStart(uintptr_t miimId, uint16_t phyAdd, uint16_t regIx);

// returns the MIIM read data
uint16_t DRV_MIIM_ReadDataGet(uintptr_t miimId);
    
// enables the scan
// should return:
//      DRV_MIIM_TXFER_ERROR if scan not supported
//      DRV_MIIM_TXFER_SCAN_STALE if data is stale
//      DRV_MIIM_TXFER_SCAN_VALID if data is valid
DRV_MIIM_TXFER_STAT DRV_MIIM_ScanEnable(uintptr_t miimId, uint16_t phyAdd, uint16_t regIx);

// disables the scan
void DRV_MIIM_ScanDisable(uintptr_t miimId);
    
// returns true if scan data is available
//  if so, the data is saved at the scanData address (if not NULL)
//  and the hw 'data valid' indicator (if exists) is cleared, for the next scan
//
bool DRV_MIIM_GetScanData(uintptr_t miimId, uint32_t* scanData);
    

#endif //#ifndef _DRV_MIIM_DEVICE_H

/*******************************************************************************
 End of File
*/

