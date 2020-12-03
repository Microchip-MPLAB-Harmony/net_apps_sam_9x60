---
grand_parent:  Harmony 3 TCP/IP Application for SAM 9X60 Family
parent: TCP/IP Web NET Server QSPI MPFS Application
title: MHC Configuration
nav_order: 1
has_children: false
has_toc: false
---
[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com)

# TCP/IP Web NET Server QSPI MPFS MHC Configuration

The following Project Graph diagram shows the Harmony components included in the application demonstration.

* MHC is launched by selecting **Tools > Embedded > MPLAB® Harmony 3 Configurator** from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated.

    ![tcpip_sam9x60_project](images/database_migration_successful.png)

* **TCP/IP root layer project graph**

  The root layer project shows that DBUG UART peripheral is selected to do read and write operation for TCP/IP commands.

  This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution.

  ![tcpip_sam9x60_project](images/tcpip_nvm_required_root_9x60.png)
  
  **WolfSSL** component is selected for secure connection which supports TLS v1.3 and **WolfSSL-Crypto** component is  selected for MD5 and SHA authentication.

  ![tcpip_sam9x60_project](images/wolfssl_demo_required_configuration.png)

  The file system component is required to select MPFS module. This is the below snapshot for the FS configuration.

  ![tcpip_sam9x60_project](images/FileSystem_mpfs_configuration.png)

  **FreeRTOS** component is required for RTOS application. For bare-metal (non-RTOS) **FreeRTOS** component should not be selected.

  TCP sockets calculate the ISN using the wolfSSL crypto library. 

* **TCP/IP Required Application**

    TCP/IP demo use these application module components for this demo.
    
    **Announce** module to discover the Microchip devices within a local network.

    **DHCP Client** module to discover the IPv4 address from the nearest DHCP Server. 
    
    **HTTPNET** module is selected to run the web_server for the secured port number **443**.
     
    ![tcpip_sam9x60_project](images/tcpip_app_module_selected.png)

    By default **Enable MPFS upload via HTTP** is selected. This is helpful When external EEPROM or serial Flash is used for storage, the option to upload the newly created image to the board is available.
    
* **TCPIP Driver Layer**

  **Internal ethernet driver(emac0)** is enabled with the external **KSZ8081 PHY driver** library for SAM9X60 demonstartion. 

  ![tcpip_sam9x60_project](images/tcpip_default_driver_9x60.png)

   The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed.
