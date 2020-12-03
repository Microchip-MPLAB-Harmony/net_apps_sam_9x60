---
grand_parent:  Harmony 3 TCP/IP Application for SAM 9X60 Family
parent: TCP/IP TCP Server
title: MHC Configuration
nav_order: 1
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP TCP Server MHC Configuration

The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application.

* MHC is launched by selecting **Tools > Embedded > MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_sam9x60_project](images/database_migration_successful.png)

* **TCP/IP Root Layer Project Graph**

  The root layer project shows that DBGU UART peripheral is selected to do read and write operation for TCP/IP commands.

  This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution.

  ![tcpip_sam9x60_project](images/tcpip_tcp_9x60_root_rtos.png)

  **FreeRTOS** component is required for RTOS application. For bare-metal (non-RTOS) **FreeRTOS** component should not be selected.

  **NOTE** - The above diagram contains **FreeRTOS** component  and that is required for RTOS application. For bare-metal(non-RTOS) **FreeRTOS** component shouldn't be selected.
  
  ![tcpip_sam9x60_project](images/tcpip_tcp_9x60_root.png)
  
  TCP sockets calculate the ISN using the wolfSSL crypto library. 


* **TCP/IP Required Application**

  TCP/IP demo use these application module components for this demo. **Announce** module to discover the Microchip devices within a local network.
  
  **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server.
  
  **DNS Client** provides DNS resolution capabilities to the stack. 
  
	![tcpip_sam9x60_project](images/tcpip_tcp_9x60_app.png)

* **TCPIP Driver Layer**

  **Internal ethernet driver(emac0)** is enabled with the external **KSZ8081 PHY driver** library for SAM9X60 demonstartion. 

    ![tcpip_sam9x60_project](images/tcpip_default_driver_9x60.png)

  
  The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.
