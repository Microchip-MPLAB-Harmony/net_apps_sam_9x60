/*******************************************************************************
   PLIB MMU

  Company:
    Microchip Technology Inc.

  File Name:
    plib_mmu.c

  Summary:
    MMU implementation.

  Description:
    The MMU PLIB provies a simple interface to enable the MMU and caches.
*******************************************************************************/

// DOM-IGNORE-BEGIN
/*******************************************************************************
Copyright (c) 2019 released Microchip Technology Inc.  All rights reserved.

Microchip licenses to you the right to use, modify, copy and distribute
Software only when embedded on a Microchip microcontroller or digital signal
controller that is integrated into your product or third party product
(pursuant to the sublicense terms in the accompanying license agreement).

You should refer to the license agreement accompanying this Software for
additional information regarding your rights and obligations.

SOFTWARE AND DOCUMENTATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTY OF
MERCHANTABILITY, TITLE, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE.
IN NO EVENT SHALL MICROCHIP OR ITS LICENSORS BE LIABLE OR OBLIGATED UNDER
CONTRACT, NEGLIGENCE, STRICT LIABILITY, CONTRIBUTION, BREACH OF WARRANTY, OR
OTHER LEGAL EQUITABLE THEORY ANY DIRECT OR INDIRECT DAMAGES OR EXPENSES
INCLUDING BUT NOT LIMITED TO ANY INCIDENTAL, SPECIAL, INDIRECT, PUNITIVE OR
CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA, COST OF PROCUREMENT OF
SUBSTITUTE GOODS, TECHNOLOGY, SERVICES, OR ANY CLAIMS BY THIRD PARTIES
(INCLUDING BUT NOT LIMITED TO ANY DEFENSE THEREOF), OR OTHER SIMILAR COSTS.
*******************************************************************************/
// DOM-IGNORE-END

#include "device.h"
#include "peripheral/mmu/cp15.h"

/* TTB descriptor type for Section descriptor */
#define TTB_TYPE_SECT              (2 << 0)

/* TTB Section Descriptor: Buffered/Non-Buffered (B) */
#define TTB_SECT_WRITE_THROUGH     (0 << 2)
#define TTB_SECT_WRITE_BACK        (1 << 2)

/* TTB Section Descriptor: Cacheable/Non-Cacheable (C) */
#define TTB_SECT_NON_CACHEABLE     (0 << 3)
#define TTB_SECT_CACHEABLE         (1 << 3)

#define TTB_SECT_STRONGLY_ORDERED  (TTB_SECT_NON_CACHEABLE | TTB_SECT_WRITE_THROUGH)
#define TTB_SECT_SHAREABLE_DEVICE  (TTB_SECT_NON_CACHEABLE | TTB_SECT_WRITE_BACK)
#define TTB_SECT_CACHEABLE_WT      (TTB_SECT_CACHEABLE | TTB_SECT_WRITE_THROUGH)
#define TTB_SECT_CACHEABLE_WB      (TTB_SECT_CACHEABLE | TTB_SECT_WRITE_BACK)

/* TTB Section Descriptor: Domain */
#define TTB_SECT_DOMAIN(x)         (((x) & 15) << 5)

/* TTB Section Descriptor: Should-Be-One (SBO) */
#define TTB_SECT_SBO               (1 << 4)

/* TTB Section Descriptor: Access Privilege (AP) */
#define TTB_SECT_AP_PRIV_ONLY      (1 << 10)
#define TTB_SECT_AP_NO_USER_WRITE  (2 << 10)
#define TTB_SECT_AP_FULL_ACCESS    (3 << 10)

/* TTB Section Descriptor: Section Base Address */
#define TTB_SECT_ADDR(x)           ((x) & 0xFFF00000)

__ALIGNED(16384) static uint32_t trns_tbl[4096];

// *****************************************************************************
/* Function:
     void mmu_configure(void *trns_tbl)

  Summary:
    Configure MMU by setting TTRB0 address.

*/
static void mmu_configure(void *p_trns_tbl)
{
    /* Translation Table Base Register 0 */
    cp15_write_ttbr0((uint32_t)p_trns_tbl);

    /* Domain Access Register */
    /* only domain 15: access are not checked */
    cp15_write_dacr(0xC0000000);

    __DSB();
    __ISB();
}

// *****************************************************************************
/* Function:
     void mmu_enable(void)

  Summary:
    Enable the MMU.

*/
static void mmu_enable(void)
{
    uint32_t control;

    control = cp15_read_sctlr();
    if ((control & CP15_SCTLR_M) == 0)
        cp15_write_sctlr(control | CP15_SCTLR_M);
}



// *****************************************************************************
/* Function:
    void MMU_Initialize(void);

  Summary:
    Initialize and enable MMU.

  Description:
    Initialize the MMU with a flat address map (e.g. physical and virtual
    addresses are the same) and enable MMU and caches.

  Precondition:
    None.

  Parameters:
    None.

  Returns:
    None.
*/
void MMU_Initialize(void)
{
    uint32_t addr;

    /* Reset table entries */
    for (addr = 0; addr < 4096; addr++) {
        trns_tbl[addr] = 0;
    }


    /* 0x00000000: BOOT MEMORY */
    trns_tbl[0x000] = TTB_SECT_ADDR(0x00000000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_CACHEABLE_WB
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x00100000: ECC ROM */
    trns_tbl[0x001] = TTB_SECT_ADDR(0x00100000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_CACHEABLE_WB
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x00300000: SRAM0 */
    trns_tbl[0x003] = TTB_SECT_ADDR(0x00300000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_CACHEABLE_WB
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x00400000: SRAM1 */
    trns_tbl[0x004] = TTB_SECT_ADDR(0x00400000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_SHAREABLE_DEVICE
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x00500000: UDPHS RAM */
    trns_tbl[0x005] = TTB_SECT_ADDR(0x00500000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_SHAREABLE_DEVICE
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x00600000: UHPHS OHCI */
    trns_tbl[0x006] = TTB_SECT_ADDR(0x00600000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_SHAREABLE_DEVICE
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x00700000: UHPHS EHCI */
    trns_tbl[0x007] = TTB_SECT_ADDR(0x00700000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_SHAREABLE_DEVICE
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x10000000: EBI CS0 */
    for (addr = 0x100; addr < 0x200; addr++)
    {
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20U)
                    | TTB_SECT_AP_FULL_ACCESS
                    | TTB_SECT_DOMAIN(0xF)
                    | TTB_SECT_STRONGLY_ORDERED
                    | TTB_SECT_SBO
                    | TTB_TYPE_SECT;
    }

    /* 0x30000000: EBI CS2 */
    for (addr = 0x300; addr < 0x400; addr++)
    {
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20U)
                    | TTB_SECT_AP_FULL_ACCESS
                    | TTB_SECT_DOMAIN(0xF)
                    | TTB_SECT_STRONGLY_ORDERED
                    | TTB_SECT_SBO
                    | TTB_TYPE_SECT;
    }

    /* 0x40000000: EBI CS3 */
    for (addr = 0x400; addr < 0x500; addr++)
    {
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20U)
                    | TTB_SECT_AP_FULL_ACCESS
                    | TTB_SECT_DOMAIN(0xF)
                    | TTB_SECT_STRONGLY_ORDERED
                    | TTB_SECT_SBO
                    | TTB_TYPE_SECT;
    }

    /* 0x50000000: EBI CS4 */
    for (addr = 0x500; addr < 0x600; addr++)
    {
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20U)
                    | TTB_SECT_AP_FULL_ACCESS
                    | TTB_SECT_DOMAIN(0xF)
                    | TTB_SECT_STRONGLY_ORDERED
                    | TTB_SECT_SBO
                    | TTB_TYPE_SECT;
    }

    /* 0x60000000: EBI CS5 */
    for (addr = 0x600; addr < 0x700; addr++)
    {
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20U)
                    | TTB_SECT_AP_FULL_ACCESS
                    | TTB_SECT_DOMAIN(0xF)
                    | TTB_SECT_STRONGLY_ORDERED
                    | TTB_SECT_SBO
                    | TTB_TYPE_SECT;
    }

    /* 0x70000000: QSPIMEM */
    for (addr = 0x700; addr < 0x800; addr++)
    {
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20U)
                    | TTB_SECT_AP_FULL_ACCESS
                    | TTB_SECT_DOMAIN(0xF)
                    | TTB_SECT_STRONGLY_ORDERED
                    | TTB_SECT_SBO
                    | TTB_TYPE_SECT;
    }

    /* 0x80000000: SDMMC0 */
    trns_tbl[0x800] = TTB_SECT_ADDR(0x80000000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_STRONGLY_ORDERED
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x90000000: SDMMC1 */
    trns_tbl[0x900] = TTB_SECT_ADDR(0x90000000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_STRONGLY_ORDERED
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0xEFF00000: OTPC */
    trns_tbl[0xEFF] = TTB_SECT_ADDR(0xEFF00000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_STRONGLY_ORDERED
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0xF0000000: PERIPHERALS */
    trns_tbl[0xF00] = TTB_SECT_ADDR(0xF0000000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_STRONGLY_ORDERED
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0xF8000000: PERIPHERALS */
    trns_tbl[0xF80] = TTB_SECT_ADDR(0xF8000000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_STRONGLY_ORDERED
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0xFFF00000: SYSTEM CONTROLLER */
    trns_tbl[0xFFF] = TTB_SECT_ADDR(0xFFF00000)
                  | TTB_SECT_AP_FULL_ACCESS
                  | TTB_SECT_DOMAIN(0xF)
                  | TTB_SECT_STRONGLY_ORDERED
                  | TTB_SECT_SBO
                  | TTB_TYPE_SECT;

    /* 0x20000000: DDR Chip Select */
    /* (16MB strongly ordered) */
    for (addr = 0x200; addr < 0x210; addr++)
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20)
                      | TTB_SECT_AP_FULL_ACCESS
                      | TTB_SECT_DOMAIN(0xf)
                      | TTB_SECT_STRONGLY_ORDERED
                      | TTB_SECT_SBO
                      | TTB_TYPE_SECT;

    /* Remainder of the DRAM is configured as cacheable */
    for (addr = 0x210; addr < 0x300; addr++)
        trns_tbl[addr] = TTB_SECT_ADDR(addr << 20)
                      | TTB_SECT_AP_FULL_ACCESS
                      | TTB_SECT_DOMAIN(0xf)
                      | TTB_SECT_CACHEABLE_WB
                      | TTB_SECT_SBO
                      | TTB_TYPE_SECT;

    /* Enable MMU, I-Cache and D-Cache */
    mmu_configure(trns_tbl);
    mmu_enable();

    // disable the processor alignment fault testing
    uint32_t sctlrValue = cp15_read_sctlr();
    sctlrValue &= ~0x00000002;
    cp15_write_sctlr( sctlrValue );
}
