var myVariable = `
{"0": {
    "doc": "TCP/IP Network Setup",
    "title": "TCP/IP Network Setup",
    "content": "For the TCP/IP demonstrations, both the target board and the host computer should be in the same network. The host computer can be connected to a router via an ethernet cable or Wi-Fi. The target board should be connected to the router via an ethernet cable. Please refer to the following connection diagram. | All the TCP/IP Application Demonstration projects that are part of this distribution use the Microchip hardware development boards. They are pre-configured with specific PHY Drivers. The default PHY driver can be changed as some of the hardware boards support different PHY daughter boards. To use a different PHY for a specific board, use MPLAB® Harmony Configurator (MHC) to select and configure the PHY. Make sure that correct PHY address and configuration flags are used for the particular PHY daughter board. The MII/RMII and I/O configuration flags should match the hardware for the PHY board. The TCP/IP application demonstrations assume that IPv4 is enabled. If IPv4 is not enabled in MHC, the code in app.c will not build and needs to be updated to remove the IPv4 dependencies. | All the demos have DHCP enabled, and expect a DHCP server to be available. If there is no DHCP server, then the default static IP address will be used: 192.168.100.11. If this static address does not match your network settings, use MPLAB® Harmony Configurator (MHC) to modify the static IP address of the network interface. | The NetBIOS name of the TCP/IP application is specified during the initialization of TCP/IP stack. It is the hostName member of TCPIP_HOSTS_CONFIGURATION structure. The NetBIOS service must be enabled in demonstration configuration, for the TCP/IP demonstration to respond to NetBIOS queries. Alternatively, use the IPv4 or IPv6 address (if IPv6 is enabled) of the board directly. | The IPv4 and IPv6 addresses can be obtained by running the TCP/IP Discovery utility on the computer. It requires the TCP/IP Announce module enabled in demonstration configuration, through MHC. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/readme.html",
    "relUrl": "/apps/readme.html"
  },"1": {
    "doc": "TCP/IP Web NET Server SDCARD FATFS Application",
    "title": "TCP/IP WEB-NET Server SDMMC Application",
    "content": "The Web Net Server SDCard configuration demonstrates creating an HTTP web server on a Microchip evaluation board. The FAT FS File System is used for storing the web pages on an external SD Card. This demonstration uses the HTTP_NET server which supports encrypted communication through the NET_PRES layer and an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/readme.html#tcpip-web-net-server-sdmmc-application",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/readme.html#tcpip-web-net-server-sdmmc-application"
  },"2": {
    "doc": "TCP/IP Web NET Server SDCARD FATFS Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the Web Net Server Application on SAM 9X60 family on both bare-metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/readme.html#development-kits",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/readme.html#development-kits"
  },"3": {
    "doc": "TCP/IP Web NET Server SDCARD FATFS Application",
    "title": "TCP/IP Web NET Server SDCARD FATFS Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/readme.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/readme.html"
  },"4": {
    "doc": "TCP/IP UDP Client Server",
    "title": "TCP/IP UDP Client Server",
    "content": "The UDP Client Server configuration demonstrates creating a network client and a network server that uses the MPLAB Harmony UDP API. This demonstration shows how the UDP/IP loopback works and it is a combination of the TCP/IP UDP Client and TCP/IP UDP Server application. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/readme.html#tcpip-udp-client-server",
    "relUrl": "/apps/tcpip_udp_client_server/readme.html#tcpip-udp-client-server"
  },"5": {
    "doc": "TCP/IP UDP Client Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP UDP Client Server Application on SAM 9X60 family on both bare metal(non rtos) and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_udp_client_server/readme.html#development-kits"
  },"6": {
    "doc": "TCP/IP UDP Client Server",
    "title": "TCP/IP UDP Client Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/readme.html",
    "relUrl": "/apps/tcpip_udp_client_server/readme.html"
  },"7": {
    "doc": "TCP/IP TCP Client",
    "title": "TCP/IP TCP Client",
    "content": "The TCP Client configuration demonstrates creating a network client with the MPLAB Harmony TCP API to make a TCP/IP connection to a web server. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/readme.html#tcpip-tcp-client",
    "relUrl": "/apps/tcpip_tcp_client/readme.html#tcpip-tcp-client"
  },"8": {
    "doc": "TCP/IP TCP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Client application on SAM 9X60 family on both bare metal and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_client/readme.html#development-kits"
  },"9": {
    "doc": "TCP/IP TCP Client",
    "title": "TCP/IP TCP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/readme.html",
    "relUrl": "/apps/tcpip_tcp_client/readme.html"
  },"10": {
    "doc": "TCP/IP TCP Server",
    "title": "TCP/IP TCP Server Application",
    "content": "The TCP/IP TCP Server configuration demonstrates creating a network server that uses the MPLAB Harmony TCP API to create a TCP/IP echo server on port 9760. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/readme.html#tcpip-tcp-server-application",
    "relUrl": "/apps/tcpip_tcp_server/readme.html#tcpip-tcp-server-application"
  },"11": {
    "doc": "TCP/IP TCP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Server Application on SAM 9X60 family development kits. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_server/readme.html#development-kits"
  },"12": {
    "doc": "TCP/IP TCP Server",
    "title": "TCP/IP TCP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/readme.html",
    "relUrl": "/apps/tcpip_tcp_server/readme.html"
  },"13": {
    "doc": "TCP/IP Web NET Server QSPI MPFS Application",
    "title": "TCP/IP Web NET Server QSPI MPFS Application",
    "content": "The Web Net Server MPFS configuration with QSPI peripheral demonstrates creating an HTTP web server on a Microchip evaluation board. The Microchip Proprietary File System (MPFS) is used for reading the web pages from the internal Flash and using MPFS upload feature, the QSPI flash is updated with new MPFS file. This demonstration uses the HTTP_NET server which supports encrypted communication through the NET_PRES layer and an external service provider for TLS support. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/readme.html#tcpip-web-net-server-qspi-mpfs-application",
    "relUrl": "/apps/web_net_server_qspi_mpfs/readme.html#tcpip-web-net-server-qspi-mpfs-application"
  },"14": {
    "doc": "TCP/IP Web NET Server QSPI MPFS Application",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the Web Server Application on SAM 9X60 family on both bare metal ( non-RTOS ) and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/readme.html#development-kits",
    "relUrl": "/apps/web_net_server_qspi_mpfs/readme.html#development-kits"
  },"15": {
    "doc": "TCP/IP Web NET Server QSPI MPFS Application",
    "title": "TCP/IP Web NET Server QSPI MPFS Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/readme.html",
    "relUrl": "/apps/web_net_server_qspi_mpfs/readme.html"
  },"16": {
    "doc": "TCP/IP UDP Server",
    "title": "TCP/IP UDP Server",
    "content": "The UDP Server configuration demonstrates creating a network server that uses the MPLAB Harmony UDP API to create a UDP/IP echo server on port 9760. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/readme.html#tcpip-udp-server",
    "relUrl": "/apps/tcpip_udp_server/readme.html#tcpip-udp-server"
  },"17": {
    "doc": "TCP/IP UDP Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP UDP Server Application on SAM 9X60 family on both bare metal(non rtos) and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_udp_server/readme.html#development-kits"
  },"18": {
    "doc": "TCP/IP UDP Server",
    "title": "TCP/IP UDP Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/readme.html",
    "relUrl": "/apps/tcpip_udp_server/readme.html"
  },"19": {
    "doc": "TCP/IP TCP Client Server",
    "title": "TCP/IP TCP Client Server",
    "content": "The TCP Client Server configuration demonstrates creating a network client and server that uses the MPLAB Harmony TCP API. This demonstration is a combination of the TCP/IP Client and TCP/IP Server application. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/readme.html#tcpip-tcp-client-server",
    "relUrl": "/apps/tcpip_tcp_client_server/readme.html#tcpip-tcp-client-server"
  },"20": {
    "doc": "TCP/IP TCP Client Server",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Client Server application on SAM 9X60 family on both bare metal and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_client_server/readme.html#development-kits"
  },"21": {
    "doc": "TCP/IP TCP Client Server",
    "title": "TCP/IP TCP Client Server",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/readme.html",
    "relUrl": "/apps/tcpip_tcp_client_server/readme.html"
  },"22": {
    "doc": "TCP/IP UDP Client",
    "title": "TCP/IP UDP Client",
    "content": "The UDP Client configuration demonstrates creating a network Client with the API to make a UDP/IP connection to a specified port. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/readme.html#tcpip-udp-client",
    "relUrl": "/apps/tcpip_udp_client/readme.html#tcpip-udp-client"
  },"23": {
    "doc": "TCP/IP UDP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP UDP Client Application on SAM 9X60 family on both bare metal(non rtos) and FreeRTOS. | Development Kit | . | SAM 9X60 Starter Kit MHC Configuration | . | SAM 9X60 Starter Kit Hardware Configuration | . | SAM 9X60 Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/readme.html#development-kits",
    "relUrl": "/apps/tcpip_udp_client/readme.html#development-kits"
  },"24": {
    "doc": "TCP/IP UDP Client",
    "title": "TCP/IP UDP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/readme.html",
    "relUrl": "/apps/tcpip_udp_client/readme.html"
  },"25": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP UDP Client Hardware Configuration",
    "content": "This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration"
  },"26": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_hardware_configuration.html"
  },"27": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Client Server Hardware Configuration",
    "content": "This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html#tcpip-tcp-client-server-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html#tcpip-tcp-client-server-hardware-configuration"
  },"28": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_hardware_configuration.html"
  },"29": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP UDP Client Hardware Configuration",
    "content": "This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration"
  },"30": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_hardware_configuration.html"
  },"31": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Web NET Server SDMMC FATFS Hardware Configuration",
    "content": "This is the section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-sdmmc-fatfs-hardware-configuration",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-sdmmc-fatfs-hardware-configuration"
  },"32": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_hardware_configuration.html"
  },"33": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP UDP Client Hardware Configuration",
    "content": "This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html#tcpip-udp-client-hardware-configuration"
  },"34": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_hardware_configuration.html"
  },"35": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Server Hardware Configuration",
    "content": "This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . | . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html#tcpip-tcp-server-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html#tcpip-tcp-server-hardware-configuration"
  },"36": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_hardware_configuration.html"
  },"37": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP Web Net Server QSPI MPFS Hardware Configuration",
    "content": "This is the section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-qspi-mpfs-hardware-configuration",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_hardware_configuration.html#tcpip-web-net-server-qspi-mpfs-hardware-configuration"
  },"38": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_hardware_configuration.html"
  },"39": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Client Hardware Configuration",
    "content": "This section describes the hardware configuration for ATSAM 9X60 Xplained Ultra Evaluation Kit and one can be used for the respective application demonstration. | This section describes the required default hardware configuration use SAM 9X60 Xplained Ultra Evaluation Kit . | Refer to the SAM 9X60 Xplained Ultra Evaluation Kit User Guide | . • Insert the SD Card with the “harmony.bin” output of the project into the SD card slot, J5 . • Connect the board to a USB port on the test PC by inserting the serial cable into the serial connector, J24 . • For debugging insert the Atmel SAM-ICE debugger to the JTAG port, J23 . • Connect the micro USB cable from the computer to the USB Power connector on the SAM9X60-EK to power the board, J22 . • Establish a connection between the router/switch with the SAM9X60-EK through the RJ45 connector . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-client-hardware-configuration"
  },"40": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html"
  },"41": {
    "doc": "MHC Configuration",
    "title": "TCP/IP UDP Client Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP root layer project graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. ![tcpip_sam9x60_project](/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/images/tcpip_default_root_9x60.png) . | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. During these components selection, the required transport and network modules are also selected. | TCPIP driver layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html#tcpip-udp-client-server-mhc-configuration",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html#tcpip-udp-client-server-mhc-configuration"
  },"42": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_mhc_configuration.html"
  },"43": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Web NET Server SDCARD FATFS MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP root layer project graph . QSPI peripheral with SDSPI driver supports Multimedia card communication. SD SPI driver provides abstraction to communicate with SD/eMMC card through the QSPI peripheral library interface. The TCP/IP application use FAT file system with SDSPI driver to read/write to/from an SD card. WolfSSL component is selected for secure connection which supports TLS v1.3 and WolfSSL-Crypto component is selected for MD5 and SHA authentication. Wolfssl crypto module enabled with MD5,SHA authentication. Wolfssl library configured with open secured socket. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. The FAT file system is selected for this application to read and write from the SDHC( sdcard ) module. This is the below snapshot for the FAT FS configuration. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP required application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the port number 443. | TCPIP driver layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-sdcard-fatfs-mhc-configuration",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-sdcard-fatfs-mhc-configuration"
  },"44": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_mhc_configuration.html"
  },"45": {
    "doc": "MHC Configuration",
    "title": "TCP/IP UDP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP root layer project graph . The root layer project shows that DBGU UART peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP driver layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_mhc_configuration.html#tcpip-udp-client-mhc-configuration",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_mhc_configuration.html#tcpip-udp-client-mhc-configuration"
  },"46": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_mhc_configuration.html"
  },"47": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Client Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that DBGU UART peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html#tcpip-tcp-client-server-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html#tcpip-tcp-client-server-mhc-configuration"
  },"48": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_mhc_configuration.html"
  },"49": {
    "doc": "MHC Configuration",
    "title": "TCP/IP UDP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in this application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP root layer project graph . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. During these components selection, the required transport and network modules are also selected. | TCPIP driver layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_mhc_configuration.html#tcpip-udp-server-mhc-configuration",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_mhc_configuration.html#tcpip-udp-server-mhc-configuration"
  },"50": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_mhc_configuration.html"
  },"51": {
    "doc": "MHC Configuration",
    "title": "TCP/IP Web NET Server QSPI MPFS MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the application demonstration. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP root layer project graph . The root layer project shows that DBUG UART peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. WolfSSL component is selected for secure connection which supports TLS v1.3 and WolfSSL-Crypto component is selected for MD5 and SHA authentication. The file system component is required to select MPFS module. This is the below snapshot for the FS configuration. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. HTTPNET module is selected to run the web_server for the secured port number 443. By default Enable MPFS upload via HTTP is selected. This is helpful When external EEPROM or serial Flash is used for storage, the option to upload the newly created image to the board is available. | TCPIP Driver Layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-qspi-mpfs-mhc-configuration",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_mhc_configuration.html#tcpip-web-net-server-qspi-mpfs-mhc-configuration"
  },"52": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_mhc_configuration.html"
  },"53": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Server MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that DBGU UART peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html#tcpip-tcp-server-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html#tcpip-tcp-server-mhc-configuration"
  },"54": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_mhc_configuration.html"
  },"55": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . The root layer project shows that DBGU UART peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. FreeRTOS component is required for RTOS application. For bare-metal (non-RTOS) FreeRTOS component should not be selected. NOTE - The above diagram contains FreeRTOS component and that is required for RTOS application. For bare-metal(non-RTOS) FreeRTOS component shouldn’t be selected. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP Required Application . TCP/IP demo use these application module components for this demo. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . Internal ethernet driver(emac0) is enabled with the external KSZ8081 PHY driver library for SAM9X60 demonstartion. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-client-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-client-mhc-configuration"
  },"56": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html"
  },"57": {
    "doc": "Running Application",
    "title": "TCP/IP Web NET Server QSPI MPFS Running Application",
    "content": "The HTTP net server module uses Microchip Proprietary File System (MPFS) to read web pages from the QSPI based peripheral Flash. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html#tcpip-web-net-server-qspi-mpfs-running-application",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html#tcpip-web-net-server-qspi-mpfs-running-application"
  },"58": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the web net server on development board with SAM9X60 device using QSPI based flash media and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"59": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . An HTTP server is hosted by the demonstration application. Open_a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. The demonstration application features following: . Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. Note: For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC). | Form Processing - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board) . | Authentication - Shows an example of the commonly used restricted access feature . | Cookies - Shows an example of storing small text strings on the client side . | Server Side Includes - An example of how SSI can be used to support dynamic content . | File Uploads - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. | Send E-mail - Shows simple SMTP POST methods . | Dynamic DNS - Exercises Dynamic DNS capabilities . | Network Configuration - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated . | MPFS Upload - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload . | . Notes: The location of the MPFS image is fixed at the beginning of the Flash page specified by DRV_MEMORY_DEVICE_START_ADDRESS. The size of the MPFS upload is limited to DRV_MEMORY_DEVICE_MEDIA_SIZE in the demonstration. The HTTP File Upload functionality has to be enabled when the project is generated. | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html#running-the-demonstration"
  },"60": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html",
    "relUrl": "/apps/web_net_server_qspi_mpfs/docs/readme_run_application.html"
  },"61": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_run_application.html#tcpip-tcp-server-running-application",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html#tcpip-tcp-server-running-application"
  },"62": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . | sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"63": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a TCP/IP connection on port 9760. | Send a TCP packet to the IP address of the hardware board using port 9760 from any TCP Client application running on the computer. | The TCP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | For TCP Server test, the TCP Client application is required to run on the computer (SocketTest, Packet Sender etc). In this demonstration, we use the program, SocketTest (http://sockettest.sourceforge.net/). This demonstration is tested with SocketTest v3.0. | Open the SocketTest software and set the configuration as shown in the following figure. | Press the Connect button on the SocketTest software after setting the configuration. The serial terminal indicates that the connection has been established. | Type any message in the message box of the SocketTest program, and press the Send button. The Server running on the development board will echo back the message to the SocketTest program. | . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html#running-the-demonstration"
  },"64": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_server/docs/readme_run_application.html"
  },"65": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_run_application.html#tcpip-tcp-client-running-application",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#tcpip-tcp-client-running-application"
  },"66": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek_mplabx.X | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"67": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . | sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"68": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | After the successful broad bring up, the console output becomes . | For TCP Client test, input the following command from the serial port: . | . openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - ![tcpip_tcp_client_project](/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/images/http_put_6.png) . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#running-the-demonstration"
  },"69": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html"
  },"70": {
    "doc": "Running Application",
    "title": "TCP/IP UDP Client Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_run_application.html#tcpip-udp-client-server-running-application",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#tcpip-udp-client-server-running-application"
  },"71": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP UDP Client Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . | sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP UDP Client Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"72": {
    "doc": "Running Application",
    "title": "Demonstration Commands",
    "content": "There are three sequential commands implemented in this demonstration. | setudppacketoptions &lt; hostname &gt; &lt; port &gt; &lt; message &gt; - This command specifies the following parameters for the UDP packet: Destination IP Address or Host name, Destination Port and Message to transfer . | getudppacketoptions - This command displays the current options . | sendudppacket - This command sends a UDP packet . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_run_application.html#demonstration-commands",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#demonstration-commands"
  },"73": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | Set the UDP packet options by typing setudppacketoptions at the terminal console. | Verify the UDP packet settings by typing getudppacketoptions at the terminal console. | Send the UDP packet to the destination using the sendudppacket command. | After the sendudppacket command is input, the demonstration will make a DNS query to look up the host name and send a UDP packet to that host. | The output message will be received by the UDP server on the port that is configured by the command setudppacketoption. | . | Testing the UDP Server part of demonstration: . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a UDP/IP connection on port 9760. | Send a UDP packet to the IP address of the hardware board and port 9760 from any UDP Client application running on the computer (SocketTest, Packet Sender etc). | The UDP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html#running-the-demonstration"
  },"74": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_udp_client_server/docs/readme_run_application.html"
  },"75": {
    "doc": "Running Application",
    "title": "TCP/IP Web NET Server SDCARD FATFS Running Application",
    "content": "This Web Net Server application uses the SD card as a memory media and reads the web pages stored according to the configured mount path. Web Server reads the external SD card content using FAT FS API. ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#tcpip-web-net-server-sdcard-fatfs-running-application",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#tcpip-web-net-server-sdcard-fatfs-running-application"
  },"76": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP Web net server on development board with SAM9X60 device using SDSPI driver with QSPi peripheral and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"77": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . An HTTP server is hosted by the demonstration application. Open_a web browser and direct it to the board running the HTTP server by typing the URL in the address bar (for example, https://mchpboard_c), and then pressing Enter. The demonstration application features following: . Real-time Hardware Control and Dynamic Variables - On the Overview page the LEDs can be clicked to toggle the LEDs on the Microchip hardware development board. The SWITCHes on the Microchip hardware development board can be pressed to toggle the Buttons on the web page. The dynamic variables can be updated in real-time on the HTTP server. Note: For the LED and SWITCH functionality portion of the demonstration, configure the GPIOs connected to LEDs and Switches on Microchip hardware development board, through the Pin Configuration manager in MPLAB® Harmony Configurator (MHC). | Form Processing - Input can be handled from the client by using the GET and POST methods (this functionality controls the on-board LEDs and is operational only on the Explorer 16 Development Board) . | Authentication - Shows an example of the commonly used restricted access feature . | Cookies - Shows an example of storing small text strings on the client side . | Server Side Includes - An example of how SSI can be used to support dynamic content . | File Uploads - Shows an example of a file upload using the POST method. The HTTP server can_accept_a user-defined MPFS/MPFS2 image file for web pages. | Send E-mail - Shows simple SMTP POST methods . | Dynamic DNS - Exercises Dynamic DNS capabilities . | Network Configuration - The MAC address, host name, and IP address of the evaluation kit can be viewed in the Network Configuration page and some configurations can be updated . | MPFS Upload - A new set of web pages can be uploaded to the web server using this feature, which is accessed through http://mchpboard_c/mpfsupload . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html#running-the-demonstration"
  },"78": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html",
    "relUrl": "/apps/web_net_server_sdcard_fatfs/docs/readme_run_application.html"
  },"79": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Client Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_run_application.html#tcpip-tcp-client-server-running-application",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html#tcpip-tcp-client-server-running-application"
  },"80": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . | sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP TCP Client Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"81": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | After the successful broad bring up, the console output becomes . | For TCP Client test, input the following command from the serial port: openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - . | For TCP Server test, the TCP Client application is required to run on the computer (SocketTest, Packet Sender etc). In this demonstration, we use the program, SocketTest (http://sockettest.sourceforge.net/). This demonstration is tested with SocketTest v3.0. | Open the SocketTest software and set the configuration as shown in the following figure. | Press the Connect button on the SocketTest software after setting the configuration. The serial terminal indicates that the connection has been established. | Type any message in the message box of the SocketTest program, and press the Send button. The Server running on the development board will echo back the message to the SocketTest program. | . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html#running-the-demonstration"
  },"82": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_tcp_client_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_client_server/docs/readme_run_application.html"
  },"83": {
    "doc": "Running Application",
    "title": "TCP/IP UDP Server Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_run_application.html#tcpip-udp-server-running-application",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html#tcpip-udp-server-running-application"
  },"84": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP UDP Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . | sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP UDP Server on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"85": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | As soon as a valid IP address is assigned through the DHCP to the demonstration, it is ready to accept a UDP/IP connection on port 9760. | Send a UDP packet to the IP address of the hardware board and port 9760 from any UDP Client application running on the computer (SocketTest, Packet Sender etc). | The UDP Server demonstration running on the evaluation kit will echo back everything it receives along the connection. | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html#running-the-demonstration"
  },"86": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_server/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_udp_server/docs/readme_run_application.html"
  },"87": {
    "doc": "Running Application",
    "title": "TCP/IP UDP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_run_application.html#tcpip-udp-client-running-application",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html#tcpip-udp-client-running-application"
  },"88": {
    "doc": "Running Application",
    "title": "IAR Embeded Workbench IDE Project",
    "content": "This table lists the name and location of the IAR IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | sam_9x60_ek.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP UDP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This is a bare-metal (non-RTOS) implementation | . | sam_9x60_ek _freertos.IAR | SAM 9X60 | SAM9X60 Xplained Ultra + KSZ8081 PHY Daughter board | Demonstrates the TCP/IP UDP Client on development board with SAM9X60 device and an on-board KSZ8081 PHY. This implementation is based on FreeRTOS | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_run_application.html#iar-embeded-workbench-ide-project",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html#iar-embeded-workbench-ide-project"
  },"89": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Build the demo by opening the project in the IAR Embedded Workbench . | Copy the project output, harmony.bin, to the SD card that is used to load the executable and run it on the SAM9X60-EK board. Note: the boot loader on the SD card, boot.bin, should be configured to load the harmony.bin image, not a uboot.bin image. | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | Insert the SD card into J5 on the SAM 9X60 board and press the reset button which is labeled ‘SW3’ on the silkscreen. At this moment the board should boot and display messages on the terminal console. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . setudppacketoptions, getudppacketoptions and sendudppacket are the UDP client APP commands. | Set the UDP packet options by typing setudppacketoptions at the terminal console. | Verify the UDP packet settings by typing getudppacketoptions at the terminal console. | Send the UDP packet to the destination using the sendudppacket command. | After the sendudppacket command is input, the demonstration will make a DNS query to look up the host name and send a UDP packet to that host. | The output message will be received by the UDP server on the port that is configured by the command setudppacketoptions. | For UDP Client test, the UDP Server application is required to run on the computer (SocketTest, Packet Sender etc). This demonstration is tested with SocketTest v3.0(http://sockettest.sourceforge.net/) . | Open the SocketTest software and select UDP server for the configured port number as per the command setudppacketoptions. | . | . | . ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html#running-the-demonstration"
  },"90": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_sam_9x60/apps/tcpip_udp_client/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_udp_client/docs/readme_run_application.html"
  },"91": {
    "doc": "Harmony 3 TCP/IP Application for SAM 9X60 Family",
    "title": "Harmony 3 TCP/IP Application for SAM 9X60 Family",
    "content": "[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com) # Harmony 3 TCP/IP Application for SAM 9X60 Family MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC microcontroller and microprocessor devices. Refer to the following links for more information. - [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit) - [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus) - [Microchip MPLAB® X IDE](https://www.microchip.com/mplab/mplab-x-ide) - [Microchip MPLAB® Harmony](https://www.microchip.com/mplab/mplab-harmony) - [Microchip MPLAB® Harmony Pages](https://microchip-mplab-harmony.github.io/) This repository contains the MPLAB® Harmony 3 Network Package (Net). The Net repo provides a free fast to market TCP/IP stack for Microchip 32-bit SAM and PIC microprocessor devices. The repo contains multiple applications that demonstrate communication over TCP/IP using well known protocols like TCP, UDP, HTTP, SMTP, etc. Refer to the following links for release notes, training materials, and interface reference information. - [Release Notes](release_notes.md) - [MPLAB® Harmony License](/net_apps_sam_9x60/mplab_harmony_license.html) To clone or download these applications from Github, go to the [main page of this repository](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60) and then click **Clone** button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these [instructions](https://github.com/Microchip-MPLAB-Harmony/contentmanager/wiki). ## Contents Summary | Folder | Description | --- | --- | apps | Demonstration of TCP/IP SAM 9X60 Applications | docs | Documents TCP/IP Application in html format for offline viewing. Use [github pages](https://microchip-mplab-harmony.github.io/net_apps_sam_9x60/) of this repository for viewing it online. | ## Code Examples The following applications are provided to demonstrate the typical or interesting usage models of one or more peripheral libraries. | Name | Description | ---- | ----------- |tcpip_tcp_client | [TCP/IP TCP Client Application](/net_apps_sam_9x60/apps/tcpip_tcp_client/readme.html) |tcpip_tcp_client_server | [TCP/IP TCP Client Server Application](/net_apps_sam_9x60/apps/tcpip_tcp_client_server/readme.html) |tcpip_tcp_server | [TCP/IP TCP Server Application](/net_apps_sam_9x60/apps/tcpip_tcp_server/readme.html) |tcpip_udp_client | [TCP/IP UDP Client Application](/net_apps_sam_9x60/apps/tcpip_udp_client/readme.html) |tcpip_udp_server | [TCP/IP UDP Server Application](/net_apps_sam_9x60/apps/tcpip_udp_server/readme.html) |tcpip_udp_client_server | [TCP/IP UDP Client Server Application](/net_apps_sam_9x60/apps/tcpip_udp_client_server/readme.html) |web_net_server_qspi_mpfs | [TCP/IP Secure WEB Server QSPI MPFS Application](/net_apps_sam_9x60/apps/web_net_server_qspi_mpfs/readme.html)|web_net_server_sdcard_fatfs | [TCP/IP Secure WEB Server SDCARD FATFS Application](/net_apps_sam_9x60/apps/web_net_server_sdcard_fatfs/readme.html)| ## TCP/IP New Application This following link guides through the steps to create a new TCP/IP application using MPLAB® Harmony 3 modules. [Create TCP/IP New Application Example](https://github.com/Microchip-MPLAB-Harmony/net/wiki/Create-your-first-tcpip-application) ## TCP/IP Migration from H2 to H3 Application This following link guides through the steps to migrate a TCP/IP application from H2 to H3. [H2 to H3 Migration](https://github.com/Microchip-MPLAB-Harmony/net/wiki/H2-to-H3-Migration) [![License](https://img.shields.io/badge/license-Harmony%20license-orange.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/blob/master/mplab_harmony_license.md) [![Latest release](https://img.shields.io/github/release/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/releases/latest) [![Latest release date](https://img.shields.io/github/release-date/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/releases/latest) [![Commit activity](https://img.shields.io/github/commit-activity/y/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/graphs/commit-activity) [![Contributors](https://img.shields.io/github/contributors-anon/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)]() ____ [![Follow us on Youtube](https://img.shields.io/badge/Youtube-Follow%20us%20on%20Youtube-red.svg)](https://www.youtube.com/user/MicrochipTechnology) [![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20us%20on%20LinkedIn-blue.svg)](https://www.linkedin.com/company/microchip-technology) [![Follow us on Facebook](https://img.shields.io/badge/Facebook-Follow%20us%20on%20Facebook-blue.svg)](https://www.facebook.com/microchiptechnology/) [![Follow us on Twitter](https://img.shields.io/twitter/follow/MicrochipTech.svg?style=social)](https://twitter.com/MicrochipTech) [![](https://img.shields.io/github/stars/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg?style=social)]() [![](https://img.shields.io/github/watchers/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg?style=social)]() ",
    "url": "http://localhost:4000/net_apps_sam_9x60/",
    "relUrl": "/"
  }
}
`;
var data_for_search

var repo_name = "net_apps_sam_9x60";
var doc_folder_name = "docs";
var localhost_path = "http://localhost:4000/";
var home_index_string = "Harmony 3 TCP/IP Application for SAM 9X60 Family";

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });

  const siteNav = document.getElementById('site-nav');
  const mainHeader = document.getElementById('main-header');
  const menuButton = document.getElementById('menu-button');

  jtd.addEvent(menuButton, 'click', function(e){
    e.preventDefault();

    if (menuButton.classList.toggle('nav-open')) {
      siteNav.classList.add('nav-open');
      mainHeader.classList.add('nav-open');
    } else {
      siteNav.classList.remove('nav-open');
      mainHeader.classList.remove('nav-open');
    }
  });
}
// Site search

function initSearch() {

    data_for_search = JSON.parse(myVariable);
    lunr.tokenizer.separator = /[\s/]+/

    var index = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 200 });
        this.field('content', { boost: 2 });
        this.field('url');
        this.metadataWhitelist = ['position']

        var location = document.location.pathname;
        var path = location.substring(0, location.lastIndexOf("/"));
        var directoryName = path.substring(path.lastIndexOf("/")+1);

        var cur_path_from_repo = path.substring(path.lastIndexOf(repo_name));

        // Decrement depth by 2 as HTML files are placed in repo_name/doc_folder_name
        var cur_depth_from_doc_folder = (cur_path_from_repo.split("/").length - 2);

        var rel_path_to_doc_folder = "";

        if (cur_depth_from_doc_folder == 0) {
            rel_path_to_doc_folder = "./"
        }
        else {
            for (var i = 0; i < cur_depth_from_doc_folder; i++)
            {
                rel_path_to_doc_folder = rel_path_to_doc_folder + "../"
            }
        }

        for (var i in data_for_search) {

            data_for_search[i].url = data_for_search[i].url.replace(localhost_path + repo_name, rel_path_to_doc_folder);

            if (data_for_search[i].title == home_index_string)
            {
                data_for_search[i].url = data_for_search[i].url + "index.html"
            }

            this.add({
                id: i,
                title: data_for_search[i].title,
                content: data_for_search[i].content,
                url: data_for_search[i].url
            });
        }
    });

    searchLoaded(index, data_for_search);
}function searchLoaded(index, docs) {
  var index = index;
  var docs = docs;
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var mainHeader = document.getElementById('main-header');
  var currentInput;
  var currentSearchIndex = 0;

  function showSearch() {
    document.documentElement.classList.add('search-active');
  }

  function hideSearch() {
    document.documentElement.classList.remove('search-active');
  }

  function update() {
    currentSearchIndex++;

    var input = searchInput.value;
    if (input === '') {
      hideSearch();
    } else {
      showSearch();
      // scroll search input into view, workaround for iOS Safari
      window.scroll(0, -1);
      setTimeout(function(){ window.scroll(0, 0); }, 0);
    }
    if (input === currentInput) {
      return;
    }
    currentInput = input;
    searchResults.innerHTML = '';
    if (input === '') {
      return;
    }

    var results = index.query(function (query) {
      var tokens = lunr.tokenizer(input)
      query.term(tokens, {
        boost: 10
      });
      query.term(tokens, {
        wildcard: lunr.Query.wildcard.TRAILING
      });
    });

    if ((results.length == 0) && (input.length > 2)) {
      var tokens = lunr.tokenizer(input).filter(function(token, i) {
        return token.str.length < 20;
      })
      if (tokens.length > 0) {
        results = index.query(function (query) {
          query.term(tokens, {
            editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
          });
        });
      }
    }

    if (results.length == 0) {
      var noResultsDiv = document.createElement('div');
      noResultsDiv.classList.add('search-no-result');
      noResultsDiv.innerText = 'No results found';
      searchResults.appendChild(noResultsDiv);

    } else {
      var resultsList = document.createElement('ul');
      resultsList.classList.add('search-results-list');
      searchResults.appendChild(resultsList);

      addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
    }

    function addResults(resultsList, results, start, batchSize, batchMillis, searchIndex) {
      if (searchIndex != currentSearchIndex) {
        return;
      }
      for (var i = start; i < (start + batchSize); i++) {
        if (i == results.length) {
          return;
        }
        addResult(resultsList, results[i]);
      }
      setTimeout(function() {
        addResults(resultsList, results, start + batchSize, batchSize, batchMillis, searchIndex);
      }, batchMillis);
    }

    function addResult(resultsList, result) {
      var doc = docs[result.ref];

      var resultsListItem = document.createElement('li');
      resultsListItem.classList.add('search-results-list-item');
      resultsList.appendChild(resultsListItem);

      var resultLink = document.createElement('a');
      resultLink.classList.add('search-result');
      resultLink.setAttribute('href', doc.url);
      resultsListItem.appendChild(resultLink);

      var resultTitle = document.createElement('div');
      resultTitle.classList.add('search-result-title');
      resultLink.appendChild(resultTitle);

      var resultDoc = document.createElement('div');
      resultDoc.classList.add('search-result-doc');
      resultDoc.innerHTML = '<svg viewBox="0 0 24 24" class="search-result-icon"><use xlink:href="#svg-doc"></use></svg>';
      resultTitle.appendChild(resultDoc);

      var resultDocTitle = document.createElement('div');
      resultDocTitle.classList.add('search-result-doc-title');
      resultDocTitle.innerHTML = doc.doc;
      resultDoc.appendChild(resultDocTitle);
      var resultDocOrSection = resultDocTitle;

      if (doc.doc != doc.title) {
        resultDoc.classList.add('search-result-doc-parent');
        var resultSection = document.createElement('div');
        resultSection.classList.add('search-result-section');
        resultSection.innerHTML = doc.title;
        resultTitle.appendChild(resultSection);
        resultDocOrSection = resultSection;
      }

      var metadata = result.matchData.metadata;
      var titlePositions = [];
      var contentPositions = [];
      for (var j in metadata) {
        var meta = metadata[j];
        if (meta.title) {
          var positions = meta.title.position;
          for (var k in positions) {
            titlePositions.push(positions[k]);
          }
        }
        if (meta.content) {
          var positions = meta.content.position;
          for (var k in positions) {
            var position = positions[k];
            var previewStart = position[0];
            var previewEnd = position[0] + position[1];
            var ellipsesBefore = true;
            var ellipsesAfter = true;
            for (var k = 0; k < 5; k++) {
              var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
              var nextDot = doc.content.lastIndexOf('. ', previewStart - 2);
              if ((nextDot >= 0) && (nextDot > nextSpace)) {
                previewStart = nextDot + 1;
                ellipsesBefore = false;
                break;
              }
              if (nextSpace < 0) {
                previewStart = 0;
                ellipsesBefore = false;
                break;
              }
              previewStart = nextSpace + 1;
            }
            for (var k = 0; k < 10; k++) {
              var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
              var nextDot = doc.content.indexOf('. ', previewEnd + 1);
              if ((nextDot >= 0) && (nextDot < nextSpace)) {
                previewEnd = nextDot;
                ellipsesAfter = false;
                break;
              }
              if (nextSpace < 0) {
                previewEnd = doc.content.length;
                ellipsesAfter = false;
                break;
              }
              previewEnd = nextSpace;
            }
            contentPositions.push({
              highlight: position,
              previewStart: previewStart, previewEnd: previewEnd,
              ellipsesBefore: ellipsesBefore, ellipsesAfter: ellipsesAfter
            });
          }
        }
      }

      if (titlePositions.length > 0) {
        titlePositions.sort(function(p1, p2){ return p1[0] - p2[0] });
        resultDocOrSection.innerHTML = '';
        addHighlightedText(resultDocOrSection, doc.title, 0, doc.title.length, titlePositions);
      }

      if (contentPositions.length > 0) {
        contentPositions.sort(function(p1, p2){ return p1.highlight[0] - p2.highlight[0] });
        var contentPosition = contentPositions[0];
        var previewPosition = {
          highlight: [contentPosition.highlight],
          previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
          ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
        };
        var previewPositions = [previewPosition];
        for (var j = 1; j < contentPositions.length; j++) {
          contentPosition = contentPositions[j];
          if (previewPosition.previewEnd < contentPosition.previewStart) {
            previewPosition = {
              highlight: [contentPosition.highlight],
              previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
              ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
            }
            previewPositions.push(previewPosition);
          } else {
            previewPosition.highlight.push(contentPosition.highlight);
            previewPosition.previewEnd = contentPosition.previewEnd;
            previewPosition.ellipsesAfter = contentPosition.ellipsesAfter;
          }
        }

        var resultPreviews = document.createElement('div');
        resultPreviews.classList.add('search-result-previews');
        resultLink.appendChild(resultPreviews);

        var content = doc.content;
        for (var j = 0; j < Math.min(previewPositions.length, 3); j++) {
          var position = previewPositions[j];

          var resultPreview = document.createElement('div');
          resultPreview.classList.add('search-result-preview');
          resultPreviews.appendChild(resultPreview);

          if (position.ellipsesBefore) {
            resultPreview.appendChild(document.createTextNode('... '));
          }
          addHighlightedText(resultPreview, content, position.previewStart, position.previewEnd, position.highlight);
          if (position.ellipsesAfter) {
            resultPreview.appendChild(document.createTextNode(' ...'));
          }
        }
      }
      var resultRelUrl = document.createElement('span');
      resultRelUrl.classList.add('search-result-rel-url');
      resultRelUrl.innerText = doc.relUrl;
      resultTitle.appendChild(resultRelUrl);
    }

    function addHighlightedText(parent, text, start, end, positions) {
      var index = start;
      for (var i in positions) {
        var position = positions[i];
        var span = document.createElement('span');
        span.innerHTML = text.substring(index, position[0]);
        parent.appendChild(span);
        index = position[0] + position[1];
        var highlight = document.createElement('span');
        highlight.classList.add('search-result-highlight');
        highlight.innerHTML = text.substring(position[0], index);
        parent.appendChild(highlight);
      }
      var span = document.createElement('span');
      span.innerHTML = text.substring(index, end);
      parent.appendChild(span);
    }
  }

  jtd.addEvent(searchInput, 'focus', function(){
    setTimeout(update, 0);
  });

  jtd.addEvent(searchInput, 'keyup', function(e){
    switch (e.keyCode) {
      case 27: // When esc key is pressed, hide the results and clear the field
        searchInput.value = '';
        break;
      case 38: // arrow up
      case 40: // arrow down
      case 13: // enter
        e.preventDefault();
        return;
    }
    update();
  });

  jtd.addEvent(searchInput, 'keydown', function(e){
    switch (e.keyCode) {
      case 38: // arrow up
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.classList.remove('active');
          if (active.parentElement.previousSibling) {
            var previous = active.parentElement.previousSibling.querySelector('.search-result');
            previous.classList.add('active');
          }
        }
        return;
      case 40: // arrow down
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          if (active.parentElement.nextSibling) {
            var next = active.parentElement.nextSibling.querySelector('.search-result');
            active.classList.remove('active');
            next.classList.add('active');
          }
        } else {
          var next = document.querySelector('.search-result');
          if (next) {
            next.classList.add('active');
          }
        }
        return;
      case 13: // enter
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.click();
        } else {
          var first = document.querySelector('.search-result');
          if (first) {
            first.click();
          }
        }
        return;
    }
  });

  jtd.addEvent(document, 'click', function(e){
    if (e.target != searchInput) {
      hideSearch();
    }
  });
}

// Switch theme

jtd.getTheme = function() {
  var cssFileHref = document.querySelector('[rel="stylesheet"]').getAttribute('href');
  return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(theme) {
  var cssFile = document.querySelector('[rel="stylesheet"]');
  cssFile.setAttribute('href', 'http://localhost:4000/net_apps_sam_9x60/assets/css/just-the-docs-' + theme + '.css');
}

// Document ready

jtd.onReady(function(){
  initNav();
  initSearch();
});

})(window.jtd = window.jtd || {});


