# TCP/IP WolfSSL MQTT Application

The wolfMQTT application demonstrates a simple MQTT application using the 3rd party wolfMQTT library.

The application uses the console to implement a simple set of commands to start a MQTT connection to a selected broker.

The connection parameters can be adjusted using various MQTT related commands.

This demonstration uses the NET\_PRES layer which supports encrypted communication through an external service provider for TLS support \(usually wolfSSL\).

**TCP/IP WolfSSL MQTT MHC Configuration**

The following Project Graph diagram shows the Harmony components included in the MQTT demonstration application.

-   MHC is launched by selecting **Tools \> Embedded \> MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_sam9x60_project](../../docs/GUID-B704D892-2311-4059-B8CC-42419969671F-low.png)

-   **TCP/IP Root Layer Project Graph**

    The root layer project shows that USART1 peripheral is selected to do read and write operation for TCP/IP commands.

    This is the basic configuration with SYS\_CONSOLE, SYS\_DEBUG and SYS\_COMMAND modules. These modules are required for TCP/IP command execution.

    ![tcpip_sam9x60_project](../../docs/GUID-C317C90A-2BB1-4C99-82ED-D08718B7A703-low.png)

    **NOTE:-****FreeRTOS** component is required for RTOS application. For bare-metal \(non-RTOS\) **FreeRTOS** component should not be selected.

    The below snapshot provides the details of the wolfssl\_crypto, wolfSSL and presentation layer configuration.

    ![tcpip_sam9x60_project](../../docs/GUID-EFC6F748-3987-40B5-9885-BFDA8962E1B8-low.png)

    The configuration options for the wolfMQTT are the standard ones supported by wolfMQTT \(see wolfMQTT site\). Note that the project has already selected the 3rd party wolfMQTT and wolfSSL libraries \(for supporting encrypted connections\).

    The NET\_PRES layer is also needed because the Harmony wolfMQTT NET glue layer uses the NET\_PRES to handle the connections to the broker.

    Use the github repositories for wolfMQTT and wolfSSL.

    To configure the wolfMQTT and the wolfMWQTT NET glue layer, select the "wolfMQTT Library" module:

    ![tcpip_same70_v71_project](../../docs/GUID-48CEF35D-B9B2-4F91-A43C-2461163EF0F4-low.png)

    The configuration options for the wolfMQTT NET glue allow the application to:

    -   force TLS mode

    -   enable IPv6 operation

    -   set the maximum length of the MQTT broker

    -   enable the NET glue debug and debug strings

    -   set the allocation functions

    -   set the MQTT TX and RX buffer sizes

    -   generate the custom MQTT application template:

    -   the files app\_mqtt\_task.c, app\_mqtt\_task.h and app\_mqtt\_commands.c will be added to the project


-   **TCP/IP Required Application**

    TCP/IP demo use these application module components for this demo.

    **Announce** module to discover the Microchip devices within a local network.

    **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server.

    **DNS Client** provides DNS resolution capabilities to the stack. During these components selection, the required transport and network modules are also selected.

    ![tcpip_wolfmqtt_demo_project](../../docs/GUID-87D3ED53-381F-423B-8AF1-52733CFA951A-low.png)

-   **TCPIP Driver Layer**

    **Internal ethernet driver\(emac0\)** is enabled with the external **KSZ8081 PHY driver** library for SAM9x60 demonstration.

    ![tcpip_sam9x60_project](../../docs/GUID-CF42C6A6-0889-47EF-88FF-12F44B24E145-low.png)

    The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.


**TCP/IP WolfSSL MQTT Hardware Configuration**

This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration.

1.  This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit

    -   Refer to the SAM 9X60 Xplained Ultra Evaluation Kit [User Guide](https://ww1.microchip.com/downloads/en/DeviceDoc/SAM9X60-EK-UG-DS50002907B.pdf)

        ![required_hardware](../../docs/GUID-4D799D4B-A6DB-4B08-BB9D-9F94F5993213-low.png)

        • Insert the SD Card with the "harmony.bin" output of the project into the SD card slot, J5

        • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24

        • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23

        • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22

        • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector




**TCP/IP WolfSSL MQTT Running Application**

This table lists the name and location of the MPLABX IDE project folder for the demonstration.

|Project Name|Target Device|Target Development Board|Description|
|------------|-------------|------------------------|-----------|
|sam\_9x60\_ek\_MPLABX.X|SAM 9X60|SAM9X60-EK + KSZ8081 PHY Daughter board|Demonstrates the TCP/IP WolfSSL MQTT on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a Non-RTOS implementation. HW crypto enabled|
|sam\_9x60\_ek\_freertos\_mplabx.X|SAM 9X60|SAM9X60-EK + KSZ8081 PHY Daughter board|Demonstrates the TCP/IP WolfSSL MQTT on development board with SSAM9X60 device and an on-board KSZ8081 PHY. This is a FreeRTOS implementation|

1.  Build the demo by opening the project in the MPLABX IDE

2.  Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image.


**Running Demonstration Steps**

1.  Build and download the demonstration project on the target board.

2.  If the board has a UART connection:

    1.  A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector.

    2.  Open a standard terminal application on the computer \(like Hyper-terminal or Tera Term\) and configure the virtual COM port.

    3.  Set the serial baud rate to 115200 baud in the terminal application.

    4. Insert the SD Card with the "harmony.bin" output of the project into the SD card slot, J5

    5.  See that the initialization prints on the serial port terminal.

    6.  When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal.

        -   Alternatively: Use the Announce service or ping to get the IP address of the board.

        -   Run **tcpip\_discoverer.jar** to discover the IPv4 and IPv6 address for the board.

3.  Execution : The wolfMQTT demo is interactive, using a set of special MQTT commands that have been added to this demo.

    Pressing "mqtt help" at the command prompt displays the list of the available commands/options:

4.  Most of the commands are self explanatory.

    All settings come with default values.

    A brief description of the most important settings/commands follows:

    ![tcpip_wolfmqtt_server_project](../../docs/GUID-BD1C9BB5-F5F3-4307-950A-00C91C0CFC91-low.png)


-   "mqtt broker": sets the MQTT broker to connect to. The default value is "iot.eclipse.org"

-   "mqtt port": sets the MQTT port to use. Default is 1883

-   "mqtt qos": setd the QoS. Default is MQTT\_QOS\_0.

-   "mqtt topi": sets the MQTT topic. Default is "MQTT\_NET\_Client topic"

-   "mqtt tls": sets the force TLS flag. Default is 0.

-   "mqtt user": sets the user name. Default is "MQTT\_NET\_User"

-   "mqtt txbuf": sets the size of the TX buffer for the connection. Default is 1024

-   "mqtt rxbuf": sets the size of the RX buffer for the connection. Default is 1024


**Note:** The connection to the broker is normally done using the port number: 1883 for plain connections, 8883 for encrypted ones.

1.  Wolf MQTT Connection:

    Using the "force TLS" will force an encrypted connection regardless of the port number.

    The wolfMQTT demo is based on the examples provided by wolfMQTT.

    To allow a simple usage of the wolfMQTT library, a wolfMQTT NET Glue layer has been added to the Harmony port,

    The NET glue layer takes care of all the connections to the broker, supporting both encrypted and plain connections.

    This way the application does not have to be concerned with the communication mechanisms and can use directly the wolfMQTT API on a Harmony platform without the need to add other supporting code.

    The configuration parameters for the wolfmqtt demonstration are defined in the app\_mqtt\_task.h file that's part of the project.

    The configuration parameters for the NET glue layer can be configured with MHC \(see MHC Configuration\).

    The demo starts with all parameters having default values \(see above\).

    If needed, parameters can be adjusted as the application requires.

    Then a connection to the broker can be started using the command: "mqtt start".

    A successful connection should render the following output:

    The "mqtt stop" command can be used to request the ongoing MQTT transaction to be aborted.

    The "mqtt stat" can be used to display the current state of the MQTT connection cycle.

    ![tcpip_wolfmqtt_server_project](../../docs/GUID-1571EF5B-451A-40C2-9042-46B4470C78C5-low.png)



**Parent topic:**[MPLAB® Harmony 3 TCP/IP Application for SAM 9X60 Family](../../docs/GUID-E9DE90C9-151B-4975-A6F1-B20C092FDE6A.md)

