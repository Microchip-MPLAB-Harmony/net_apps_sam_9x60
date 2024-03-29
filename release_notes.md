![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Microchip MPLAB® Harmony 3 Release Notes

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

- [MPLAB� X IDE v6.05](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB� XC32 C/C++ Compiler v4.20](https://www.microchip.com/mplab/compilers) or later
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

- [MPLAB� X IDE v6.00](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB� XC32 C/C++ Compiler v4.00](https://www.microchip.com/mplab/compilers) or later
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

- [MPLAB� X IDE v5.45](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB� XC32 C/C++ Compiler v2.50](https://www.microchip.com/mplab/compilers) or later
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


