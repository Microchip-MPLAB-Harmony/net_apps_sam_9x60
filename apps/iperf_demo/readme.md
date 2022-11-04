# TCP/IP iperf Demo

The iperf configuration demonstrates an iperf standard benchmark with the MPLAB Harmony TCP and UDP API.

**TCP/IP iperf Demo MHC Configuration**

The following Project Graph diagram shows the Harmony components included in the iperf Demo demonstration application.

-   MHC is launched by selecting **Tools \> Embedded \> MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_sam9x60_project](../../docs/GUID-82E240D6-A985-44CB-8862-767697161843-low.png)

-   **TCP/IP Root Layer Project Graph**

    The root layer project shows that DBGU UART peripheral is selected to do read and write operation for TCP/IP commands.

    This is the basic configuration with SYS\_CONSOLE, SYS\_DEBUG and SYS\_COMMAND modules. These modules are required for TCP/IP command execution.

    ![tcpip_sam9x60_project](../../docs/GUID-417DF549-D427-4452-9BAD-1FCFA86134D3-low.png)

    **FreeRTOS** component is required for RTOS application. For bare-metal \(non-RTOS\) **FreeRTOS** component should not be selected.

    **NOTE** - The above diagram contains **FreeRTOS** component and that is required for RTOS application. For bare-metal\(non-RTOS\) **FreeRTOS** component shouldn't be selected.

    ![tcpip_sam9x60_project](../../docs/GUID-4975016D-B56E-4DD6-87C1-69235CF22F26-low.png)

    TCP sockets calculate the ISN using the wolfSSL crypto library.

-   **TCP/IP Required Application**

    TCP/IP demo use these application module components for this demo.

    **Announce** module to discover the Microchip devices within a local network.

    **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server.

    **DNS Client** provides DNS resolution capabilities to the stack.

    **iperf** provides the standard industry benchmark

    ![tcpip_sam9x60_project](../../docs/GUID-975873B7-BEC3-4B9B-9257-2D3223EC658C-low.png)

-   **TCPIP Driver Layer**

    **Internal ethernet driver\(emac0\)** is enabled with the external **KSZ8081 PHY driver** library for SAM9X60 demonstartion.

    ![tcpip_sam9x60_project](../../docs/GUID-77C2FD2F-8D0B-4F67-A9CB-0A7832741CBF-low.png)

    The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.


**TCP/IP iperf Demo Hardware Configuration**

This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration.

1.  This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit

    -   Refer to the SAM 9X60 Xplained Ultra Evaluation Kit [User Guide](https://ww1.microchip.com/downloads/en/DeviceDoc/SAM9X60-EK-UG-DS50002907B.pdf)

    ![required_hardware](../../docs/GUID-4D799D4B-A6DB-4B08-BB9D-9F94F5993213-low.png)

    • Insert the SD Card with the "harmony.bin" output of the project into the SD card slot, J5

    • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24

    • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23

    • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22

    • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector


**TCP/IP iperf Demo Running Application**

This table list the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|Target Device|Target Development Board|Description|
|------------|-------------|------------------------|-----------|
|sam\_9x60\_ek\_mplabx.X|SAM 9X60|SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board|Demonstrates the TCP/IP iperf Demo on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal \(non-RTOS\) implementation|

This table lists the name and location of the MPLABX IDE project folder for the demonstration.

|Project Name|Target Device|Target Development Board|Description|
|------------|-------------|------------------------|-----------|
|sam\_9x60\_ek\_mplabx.X|SAM 9X60|SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board|Demonstrates the TCP/IP iperf Demo on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal \(non-RTOS\) implementation|
|sam\_9x60\_ek \_freertos\_mplabx.X|SAM 9X60|SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board|Demonstrates the TCP/IP iperf Demo on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS|

1.  Build the demo by opening the project in the MPLABX IDE

2.  Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image.


**Running Demonstration Steps**

1.  Build and download the demonstration project on the target board.

2.  If the board has a UART connection:

    1.  A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2.  Open a standard terminal application on the computer \(like Hyper-terminal or Tera Term\) and configure the virtual COM port.

    3.  Set the serial baud rate to 115200 baud in the terminal application.

    4.  See that the initialization prints on the serial port terminal.

    5.  When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

        -   Alternatively: Use the Announce service or ping to get the IP address of the board.

        -   Run **tcpip\_discoverer.jar** to discover the IPv4 and IPv6 address for the board.

3.  Execution :

    -   The iperf demo is interactive, using a set of special iperf commands that are supported by the standard set of TCP/IP commands.

    -   Pressing "help iperf" at the command prompt displays the list of the available iperf commands/options:

        ![tcpip_iperf_project](../../docs/GUID-64FE56B3-057F-4582-8A6B-C559E5AD7721-low.png)

    -   A brief description of the most important settings/commands follows:

        -   "iperf": starts the iperf session. Use "iperf -s" for a server connection or "iperf -c address" for a client connection

            -   Look at the Iperf Module for examples of iperf benchmarks

        -   "iperfk" kills an ongoing iperf test. This is mainly useful for killing a iperf server waiting for connections. But the command could be also used to abort client test.

        -   "iperfi -a address" allows to set the interface to use for iperf when the test is run on a multi-interface host. When multiple iperf instabces are used, the extra parameter "-i" could be used to specify the iperf index to which the command refers to.

        -   "iperfs" command could be used to set the socket TX or RX buffer size dynamically. For example:

            -   "iperfs -tx 2048"

    **Note:**

    -   The iperf demo uses very few TCP/IP modules, to minimize the stack overhead and to obtain good throughput numbers.

        -   However ICMP server, NBNS and Announce modules are enabled to assist in the discovery of the board on the network.

        -   DHCP client is also enabled for acquiring a valid IP address within the network.

        -   Some of these modules could be further disabled if they are not used in the specific network environment of the application.

    -   The data throughput could vary dependent on the iperf socket settings and the network conditions.

        -   Larger TX and RX buffers will increase the corresponding throughput.

        -   Various devices on the network on the link between the board and the machine running the iperf application \(switches, routers, etc.\) could also affect the throughput.

        -   User can eliminate these effects by connecting the board running the iperf demo directly to the machine running the test on the PC side \(Linux, Windows, etc.\)



**Parent topic:**[MPLAB® Harmony 3 TCP/IP Application for SAM 9X60 Family](../../docs/GUID-E9DE90C9-151B-4975-A6F1-B20C092FDE6A.md)

