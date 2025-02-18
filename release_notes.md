![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Microchip MPLAB® Harmony 3 Release Notes

## Network Application Examples for SAM9X60 Family, v3.10.1

### New Features
- None

### Improvements and Bug Fixes
- Documentation updates

### Known Issues
- Same as previous release (v3.10.0)
	
### Development Tools
- Same as previous release (v3.10.0)

### Development Kit Support
- Same as previous release (v3.10.0)

## Net Release Notes
- Same as previous release (v3.10.0)

---
## Network Application Examples for SAM9X60 Family, v3.10.0

### New Features
- Added demo applications for SAM9X60 Curiosity Development Board.
- All applications with TCP/IP Configurator Plugin.

### Improvements and Bug Fixes
- SAM9X60-EK Evaluation Kit is obsolete, switch/update to new [SAM9X60 Curiosity Development Board](https://www.microchip.com/en-us/development-tool/EV40E67A). Few demo applications for SAM9X60-EK are still maintained (Refer to the demo documentation). 
- Fixed INVALID_SOCKET handle error condition.
- Moved at91bootstrap binaries from 'apps/binaries' folder to 'deps' folder.
- Fixed the wolfSSL+FreeRTOS demos to work with secure port 443.
- Updated demo documentation.
- Bug fixes in package.yml

### Known Issues
- Poor IPERF throughput in 'TCP server' mode.
	- Issue under investigation.
- While regenerationg the web_net_server_qspi_mpfs demo configurations do not overwrite the mpfs_net_img.c file.
    - The symbols used in the automatically generated file are not present in the project.
- Build warnings for third_party/wolfMQTT/mqtt_socket.c in wolfMQTT demo. Workaround is to uncheck 'Make warnings into errors' in xc32 options.
- wolfssl_tcp_client demos (BareMetal/RTOS based) requires higher TCPIP_TCP_SOCKET_DEFAULT_RX_SIZE to perform SSL negotiation & establish a connection with the remote server with secure port 443.
	- After the connection is established, the application does not close the connection for few remote servers. 
	- Application works good i.e., closes the connection for most of the servers (No issues seen).
	- Issue under investigation.
- web_net_server demos (BareMetal/RTOS based) delays updating the web_pages during run time.
	- Increasing the TCPIP_HTTP_NET_SKT_RX_BUFF_SIZE size improves it and makes the web_pages better responsive.
	- Issue under investigation.
	
### Development Tools

- [MPLAB® X IDE, v6.20](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler, v4.35](https://www.microchip.com/mplab/compilers) or later
- [MPLAB® Code Configurator(MCC) Plugin, v5.5.0](https://www.microchip.com/en-us/tools-resources/configure/mplab-code-configurator) or later
- [MPLAB® Harmony v3 net repository, v3.11.1](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.11.1)
- [MPLAB® Harmony v3 net\_apps\_sam\_9x60 demo apps repository, v3.10.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/tree/v3.10.0)

### Development Kit Support

This release supports applications for the following development kit.

| Development Kits |
| --- |
| [SAM9X60-EK Evaluation Kit](https://www.microchip.com/en-us/development-tool/DT100126) |
| [SAM9X60 Curiosity Development Board](https://www.microchip.com/en-us/development-tool/EV40E67A)|

## Net Release Notes

- See the [Net v3.11.1 Release Notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.11.1)

---
## Harmony 3 Network application examples for SAM9X60 family  v3.9.0

### New Features
New features added in this release are as follows:

- New MPLABX applications added to the SAM9X60 applications repository
- All applications use MCC for configuration
- All applications use the Net Plugin (beta)

### KNOWN ISSUES

The current known issues are as follows:
* Some demos using the file system on the QSPI lock up after mounting the SYS_FS.
    - Issue is under investigation.
* iperf demo has really low throughput on TCP using '-O1' build.
    - The -O3' build does not work.
    Issue is under investigation.
    The UDP throughput is not affected.
    - Debugging with MPLABX IDE is not possible for SAM9X60 platform.
* When regenerationg the SAM9X60 demos do not overwrite the mpfs_net_img.c file.
    - The symbols used in this automatically generated file are not present in the project.
* The SAM9x60 MPLABX should not overwrite the linker script ddram.ld when regenerated.
    - Otherwise the EMAC descriptors: EMAC0_DcptArray will not be placed in the '.region_nocache'
* wolfMQTT demos need to have the file third_party/wolfMQTT/mqtt_socket.c built without xc32 option 'Make warnings into errors'
    - That is because it uses the obsolete #include <sys/errno.h>
* DHCPv6 line #1041 the format specifier '%zu' is treated as an error by
    the xc32 on SAM platforms. xc21 will correct this issue in a next release.

### Development Tools

- [MPLAB® X IDE v6.05](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler v4.20](https://www.microchip.com/mplab/compilers) or later
- [Harmony net repository, 3.9.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.9.0)
- [Harmony net_apps_sam_9x60 demo apps repositories, 3.9.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/tree/v3.9.0)
- MPLAB Code Configurator (MCC), 5.2.1


#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [SAM9X60-EK Evaluation Kit](https://www.microchip.com/developmenttools/ProductDetails/DT100126) |


## Net release notes

- See the [Net 3.9.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.9.0)

## Harmony 3 Network application examples for SAM9X60 family  v3.8.0

### New Features
New features added in this release are as follows:

- Applications migrated from MHC to MCC
- Migration of select applications to the Net Plugin (beta)
- Ported the IAR projects to MPLABX

### KNOWN ISSUES

The current known issues are as follows:
* IAR projects are not supported in this release
* When regenerationg the SAM9X60 demos do not overwrite the mpfs_net_img.c file.
    - The symbols used in this automatically generated file are not present in the project.
* The SAM9x60 MPLABX should not overwrite the linker script ddram.ld when regenerated.
    - Otherwise the EMAC descriptors: EMAC0_DcptArray will not be placed in the '.region_nocache'




### Development Tools

- [MPLAB® X IDE v6.00](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler v4.00](https://www.microchip.com/mplab/compilers) or later
- [Harmony net repository, 3.8.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.8.0)
- [Harmony net_apps_sam_9x60 demo apps repositories, 3.8.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/tree/v3.8.0)
- MPLAB Code Configurator (MCC), 5.1.2
- MCC Harmony Core, 1.1.0


#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [SAM9X60-EK Evaluation Kit](https://www.microchip.com/developmenttools/ProductDetails/DT100126) |


## Full release notes

- See the full [Net 3.8.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.8.0)

## Harmony 3 Network application examples for SAM9X60 family  v3.7.0

### New Features
New features added in this release are as follows:

- Applications migrated from the net repository to this new application repository for SAM9X60 development boards


### Development Tools

- [MPLAB® X IDE v5.45](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler v2.50](https://www.microchip.com/mplab/compilers) or later
- [IAR Embedded Workbench for ARM - version 8.50.1](https://www.iar.com/iar-embedded-workbench/) or later 
- [Harmony net repository, 3.7.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.7.0)
- [Harmony net_apps_sam_9x60 demo apps repositories, 3.7.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/tree/v3.7.0)


#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [SAM9X60-EK Evaluation Kit](https://www.microchip.com/developmenttools/ProductDetails/DT100126) |


## Full release notes

- See the full [Net 3.7.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.7.0)


