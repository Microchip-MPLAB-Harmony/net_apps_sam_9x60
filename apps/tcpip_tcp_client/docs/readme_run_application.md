---
grand_parent:  Harmony 3 TCP/IP Application for SAM 9X60 Family
parent: TCP/IP TCP Client
title: Running Application
nav_order: 3
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP TCP Client Running Application

## MPLAB X IDE Project
This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|  Target Device|  Target Development Board | Description  |
|:-------------:|:---------:|:---------:|:---------:|
|sam_9x60_ek_mplabx.X | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation |


## IAR Embeded Workbench IDE Project

This table lists the name and location of the IAR IDE project folder for the demonstration. 

|Project Name|  Target Device|  Target Development Board | Description  |
|:-------------:|:---------:|:---------:|:---------:|
|sam_9x60_ek.IAR | SAM 9X60  | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation  |
|sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board |Demonstrates the TCP/IP TCP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS |

## Running The Demonstration

1. Build the demo by opening the project in the IAR Embedded Workbench 

2. Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. 

3. Configure the Development Board as given  **[Configure Hardware](readme_hardware_configuration.md)**.

4. Make the demonstration setup as shown [Network Setup](../../readme.md).

5. Build and download the demonstration project on the target board.

6. If the board has a UART connection:

    1. A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2. Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port.

    3. Set the serial baud rate to 115200 baud in the terminal application.

    4. Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. 

    5. See that the initialization prints on the serial port terminal.

    6. When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

		* Alternatively: Use the Announce service or ping to get the IP address of the board.

        * Run **tcpip_discoverer.jar** to discover the IPv4 and IPv6 address for the board.
        
7. Execution :

	1. After the successful broad bring up, the console output becomes

        ![tcpip_tcp_client_project](images/dhcp_5.png)

    2. For TCP Client test, input the following command from the serial port: 
    	
    	**openurl < url >** - The < url > argument must be a fully formed URL; for instance, http://www.microchip.com/.

        For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command.
        
        The response received from the server will be printed on the terminal application through the serial port.

        The expected output -

        ![tcpip_tcp_client_project](images/http_put_6.png)