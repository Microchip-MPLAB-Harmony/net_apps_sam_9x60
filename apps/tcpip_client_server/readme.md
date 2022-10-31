# TCP/IP TCP and UDP Client Server


The TCP Client Server configuration demonstrates creating a network client and a network server that uses the MPLAB Harmony TCP API. This demonstration is a combination of the TCP/IP Client and TCP/IP Server application for both TCP and UDP sockets.

**TCP/IP TCP and UDP Client Server MHC Configuration**

The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application.

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

    ![tcpip_sam9x60_project](../../docs/GUID-975873B7-BEC3-4B9B-9257-2D3223EC658C-low.png)

-   **TCPIP Driver Layer**

    **Internal ethernet driver\(emac0\)** is enabled with the external **KSZ8081 PHY driver** library for SAM9X60 demonstartion.

    ![tcpip_sam9x60_project](../../docs/GUID-77C2FD2F-8D0B-4F67-A9CB-0A7832741CBF-low.png)

    The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.


**TCP/IP TCP and UDP Client Server Hardware Configuration**

This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration.

1.  This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit

    -   Refer to the SAM 9X60 Xplained Ultra Evaluation Kit [User Guide](https://ww1.microchip.com/downloads/en/DeviceDoc/SAM9X60-EK-UG-DS50002907B.pdf)

        ![required_hardware](../../docs/GUID-4D799D4B-A6DB-4B08-BB9D-9F94F5993213-low.png)

        • Insert the SD Card with the "harmony.bin" output of the project into the SD card slot, J5

        • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24

        • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23

        • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22

        • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector


**TCP/IP TCP and UDP Client Server Running Application**

The Client Server configuration use combination of both TCP and UDP sockets for both client and server communication.

This table lists the name and location of the MPLAB X IDE project folder for the demonstration.

|Project Name|Target Device|Target Development Board|Description|
|------------|-------------|------------------------|-----------|
|sam\_9x60\_ek \_freertos.mplab.X|SAM 9X60|SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board|Demonstrates the TCP/IP Client Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS|

1.  Build the demo by opening the project in the MPLAB X IDE

2.  Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image.


**Running Demonstration Steps**

1.  Build and download the demonstration project on the target board.

2.  If the board has a UART connection:

    1.  A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2.  Open a standard terminal application on the computer \(like Hyper-terminal or Tera Term\) and configure the virtual COM port.

    3.  Set the serial baud rate to 115200 baud in the terminal application.

    4.  Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console.

    5.  See that the initialization prints on the serial port terminal.

    6.  When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

        -   Alternatively: Use the Announce service or ping to get the IP address of the board.

        -   Run **tcpip\_discoverer.jar** to discover the IPv4 and IPv6 address for the board.

3.  Execution :

    1.  After the successful broad bring up, the console output becomes

        ![tcpip_client_server_project](../../docs/GUID-F8745FDB-EB6E-4BB0-B296-1F6D60E09072-low.png)

    2.  Using "help" will display the available commands that can be used for this demo.

    3.  The application can create 4 separate connections, each one running in its own thread:

        -   A TCP client connection

        -   A TCP server connection

        -   A UDP client connection

        -   A UDP server connection

    4.  Each connection has its own set of commands.

        -   They can open or close the sockets, send messages to the socket they are connected to, they can display the received messages, etc.

        -   Using your preferred networking tools on the PC side \( netcat, Packet Sender, Hercules, python scripts, etc., etc. \) create sockets that talk to the ones opened by the client server application.

        -   This way you can exchange data with any/all of the communication threads that the demonstration creates.

    5.  After the successful broad bring up, the console output becomes

        ![tcpip_client_server_project](../../docs/GUID-C9E7CA5D-6230-4AD1-9421-274D3EC5A983-low.png)


    6.  For TCP Server test, the TCP Client application is required to run on the computer \(SocketTest, Packet Sender etc\). In this demonstration, we use the program, SocketTest \(http://sockettest.sourceforge.net/\). This demonstration is tested with **SocketTest v3.0**.

        -   Open the **SocketTest** software and set the configuration as shown in the following figure.

            ![tcpip_tcp_client_server_project](../../docs/GUID-27BD0B79-02B7-40A1-A73C-ABBAA3B54134-low.png)

        -   Press the Connect button on the **SocketTest** software after setting the configuration. The serial terminal indicates that the connection has been established.

        -   Type any message in the message box of the **SocketTest** program, and press the Send button. The Server running on the development board will echo back the message to the **SocketTest** program.

            ![tcpip_tcp_client_server_project](../../docs/GUID-2CC92F6C-B3ED-44A8-A542-06D2C6D2A28D-low.png)

    7.  For TCP Client test, the TCP Server application is required to run on the computer \(SocketTest, Packet Sender etc\). In this demonstration, we use the program, SocketTest \(http://sockettest.sourceforge.net/\). This demonstration is tested with **SocketTest v3.0**.


    8.  Simillarly UDP Client and Server test also performed using **SocketTest** tool.




**Parent topic:**[MPLAB® Harmony 3 TCP/IP Application for SAM 9X60 Family](../../docs/GUID-E9DE90C9-151B-4975-A6F1-B20C092FDE6A.md)

