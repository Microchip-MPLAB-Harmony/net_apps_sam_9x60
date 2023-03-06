/* ----------------------------------------------------------------------------
 *         SAM Software Package License
 * ----------------------------------------------------------------------------
 * Copyright (c) 2015, Atmel Corporation
 *
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the disclaimer below.
 *
 * Atmel's name may not be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * DISCLAIMER: THIS SOFTWARE IS PROVIDED BY ATMEL "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE
 * DISCLAIMED. IN NO EVENT SHALL ATMEL BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 * OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * ----------------------------------------------------------------------------
 */

/*----------------------------------------------------------------------------
 *        Headers
 *----------------------------------------------------------------------------*/

#include "arm_fault_handlers_aa.h"

#include <stdio.h>
#include <stdint.h>

#include "system/debug/sys_debug.h"

/*----------------------------------------------------------------------------
 *        Constants
 *----------------------------------------------------------------------------*/


/* IFSR status */
static const char* _prefetch_abort_status[32] = {
	NULL,
	NULL,
	"debug event",
	"access flag fault, section",
	NULL,
	"translation fault, section",
	"access flag fault, page",
	"translation fault, page",
	"synchronous external abort",
	"domain fault, section",
	NULL,
	"domain fault, page",
	"L1 translation, synchronous external abort",
	"permission fault, section",
	"L2 translation, synchronous external abort",
	"permission fault, page",
};

/* DFSR status */
static const char* _data_abort_status[32] = {
	NULL,
	"alignment fault",
	"debug event",
	"access flag fault, section",
	"instruction cache maintenance fault",
	"translation fault, section",
	"access flag fault, page",
	"translation fault, page",
	"synchronous external abort, nontranslation",
	"domain fault, section",
	NULL,
	"domain fault, page",
	"1st level translation, synchronous external abort",
	"permission fault, section",
	"2nd level translation, synchronous external abort",
	"permission fault, page",
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	NULL,
	"asynchronous external abort"
};


/*----------------------------------------------------------------------------
 *        Functions
 *----------------------------------------------------------------------------*/
int aaLeave = 0;    // @@@@
uint32_t aaXcptCnt = 0;
/**
 * \brief Default handler for "Undefined Instruction" exception
 */
void arm_undefined_instruction_irq_handler(void)
{
	SYS_CONSOLE_MESSAGE("\r\n#####################\r\nUndefined Instruction\r\n#####################\r\n");

    while(aaLeave == 0)
    {
        aaXcptCnt++;
    }

    return;

}


/**
 * \brief Default handler for "Software Interrupt" exception
 */
void arm_software_interrupt_irq_handler(void)
{
	SYS_CONSOLE_MESSAGE("\r\n##################\r\nSoftware Interrupt\r\n##################\r\n");

    while(aaLeave == 0)
    {
        aaXcptCnt++;
    }

    return;

}

/**
 * \brief Default handler for "Data Abort" exception
 */
void arm_data_abort_irq_handler(void)
{
	uint32_t v1, v2, dfsr;

	asm("mrc p15, 0, %0, c5, c0, 0" : "=r"(v1));
	asm("mrc p15, 0, %0, c6, c0, 0" : "=r"(v2));

	SYS_CONSOLE_MESSAGE("\r\n####################\r\n");
	dfsr = ((v1 >> 4) & 0x0F);
	SYS_CONSOLE_PRINT("Data Fault occured in %x domain\r\n", (unsigned int)dfsr);
	dfsr = (((v1 & 0x400) >> 6) | (v1 & 0x0F));
	if (_data_abort_status[dfsr])
		SYS_CONSOLE_PRINT("Data Fault reason is: %s\r\n", _data_abort_status[dfsr]);
	else
		SYS_CONSOLE_MESSAGE("Data Fault reason is unknown\r\n");
	SYS_CONSOLE_PRINT("Data Fault occured at address: 0x%08x\r\n", (unsigned int)v2);
	SYS_CONSOLE_PRINT("Data Fault status register value: 0x%x\r\n", (unsigned int)v1);
	SYS_CONSOLE_MESSAGE("####################\n\r");

    while(aaLeave == 0)
    {
        aaXcptCnt++;
    }

    return;

}

/**
 * \brief Default handler for "Prefetch Abort" exception
 */
void arm_prefetch_abort_irq_handler(void)
{
	uint32_t v1, v2, ifsr;

	asm("mrc p15, 0, %0, c5, c0, 1" : "=r"(v1));
	asm("mrc p15, 0, %0, c6, c0, 2" : "=r"(v2));

	SYS_CONSOLE_MESSAGE("\r\n####################\r\n");
	ifsr = (((v1 & 0x400) >> 6) | (v1 & 0x0F));
	if (_prefetch_abort_status[ifsr])
		SYS_CONSOLE_PRINT("Prefetch Fault reason is: %s\r\n", _prefetch_abort_status[ifsr]);
	else
		SYS_CONSOLE_MESSAGE("Prefetch Fault reason is unknown\r\n");
	SYS_CONSOLE_PRINT("prefetch Fault occured at address: 0x%08x\r\n", (unsigned int)v2);
	SYS_CONSOLE_PRINT("Prefetch Fault status register value: 0x%x\r\n", (unsigned int)v1);
	SYS_CONSOLE_MESSAGE("####################\n\r");

    while(aaLeave == 0)
    {
        aaXcptCnt++;
    }

    return;

}
