![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Harmony 3 Net library application examples for SAM9X60 family

MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC® microcontroller and microprocessor devices.  Refer to the following links for more information.

- [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit)
- [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus)
- [Microchip MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide)
- [Microchip MPLAB® Harmony](https://www.microchip.com/mplab/mplab-harmony)
- [Microchip MPLAB® Harmony Pages](https://microchip-mplab-harmony.github.io/)

This repository contains the MPLAB® Harmony 3 Net library application examples for SAM9X60 family

- [Release Notes](release_notes.md)
- [MPLAB® Harmony License](mplab_harmony_license.md)

This content can be downloaded using content manager by following these [instructions](https://github.com/Microchip-MPLAB-Harmony/contentmanager/wiki).

## Contents Summary

| Folder     | Description                             |
| ---        | ---                                     |
| apps       | Contains Net library example applications |
| docs       | Contains documentation in html format for offline viewing (to be used only after cloning this repository onto a local machine). Use [github pages](https://microchip-mplab-harmony.github.io/net_apps_sam_9x60/) of this repository for viewing it online. |

## Code Examples

The following applications are provided to demonstrate the typical or interesting usage models of the Net libraries.

| Name | Description |
| ---- | ----------- |
| [berkeley_tcp_client](./docs/GUID-C7192615-C089-4E61-A940-3482C1BA0DE2.html) | This example application shows a TCP Client demo using BSD API |
| [berkeley_tcp_server](./docs/GUID-0AC1973B-A8AD-42B2-8733-51ED12E95F50.html) | This example application shows a TCP Server demo using BSD API |
| [berkeley_udp_client](./docs/GUID-87963B18-6008-45A1-88B0-45D5C4DFD745.html) | This example application shows a UDP Client demo using BSD API |
| [berkeley_udp_relay](./docs/GUID-A15EE0F0-0E9B-4964-AF49-0446A132BEB2.html) | This example application shows a UDP Relay demo using BSD API |
| [berkeley_udp_server](./docs/GUID-0A2AED2A-4306-4959-A6D3-47C34DBD853D.html) | This example application shows a UDP Server demo using BSD API |
| [iperf_demo](./docs/GUID-92042EF1-BDC8-449F-833A-21CB87A12623.html) | This example application shows running iperf and measuring the network performance |
| [tcpip_client_server](./docs/GUID-B30E9AD3-2C03-4E3D-B7FC-0ECE9649E0E6.html) | This example application shows a multi-threaded example with TCP and UDP server and client threads |
| [tcpip_tcp_client](./docs/GUID-8FDB7D77-C6FA-4900-9495-53015704C2BD.html) | This example application shows a TCP Client demo using Harmony native API |
| [tcpip_tcp_client_server](./docs/GUID-05A6ACC5-5CC6-43E3-AE88-4FA8278BDA12.html) | This example application shows a TCP Client and Server demo using Harmony native API |
| [tcpip_tcp_server](./docs/GUID-3088FF1D-94EA-417E-8E9B-AB0A17CEE900.html) | This example application shows a TCP Server demo using Harmony native API |
| [tcpip_udp_client](./docs/GUID-687B2C50-9D4A-47B6-B7AD-B5E6DBE250E6.html) | This example application shows a UDP Client demo using Harmony native API |
| [tcpip_udp_client_server](./docs/GUID-C8BF2C11-759F-4017-B857-85F511DC26E9.html) | This example application shows a UDP Client and Server demo using Harmony native API|
| [tcpip_udp_server](./docs/GUID-90ABF39D-3B62-4ED9-ADF1-C46CA9FD87CC.html) | This example application shows a UDP Server demo using Harmony native API |
| [web_net_server_qspi_mpfs](./docs/GUID-7EB6E023-E021-4762-8030-843257F78F21.html) | This example application shows a Web server with MPFS file system on the onboard QSPI Flash Memory |
| [web_net_server_sdcard_fatfs](./docs/GUID-77478033-F6A4-4543-8059-E7424F158431.html) | This example application shows a Web server with FAT FS file system on the external SD card |
| [web_net_super_set_sdcard_fatfs](./docs/GUID-4388A144-2AB2-41C0-82AF-A0E6E8182320.html) | This example application shows a All modules built in demo (IPv6, DHCPv6 server, telnet, etc.) running a web server with FAT FS file system on the external SD card |
| [wolfmqtt_demo](./docs/GUID-831F44B0-8F61-4BD6-BAE9-8EB140DAB5C1.html) | This example application shows a MQTT demo using the 3rd party wolfMQTT library |
| [wolfssl_tcp_client](./docs/GUID-E1DD631D-4517-4F55-BEB9-AB1DE380CE14.html) | This example application shows a connection to a Web server using TLS to encrypt the connection with wolfSSL |
| [wolfssl_tcp_server](./docs/GUID-F7F6353E-6D15-46EF-99AA-49848F2F81BD.html) | This example application shows Web server demo accepting encrypted TLS connections using wolfSSL |

____

[![License](https://img.shields.io/badge/license-Harmony%20license-orange.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/blob/master/mplab_harmony_license.md)
[![Latest release](https://img.shields.io/github/release/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/releases/latest)
[![Latest release date](https://img.shields.io/github/release-date/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/releases/latest)
[![Commit activity](https://img.shields.io/github/commit-activity/y/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_sam_9x60/graphs/commit-activity)
[![Contributors](https://img.shields.io/github/contributors-anon/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg)]()

____

[![Developer Help](https://img.shields.io/badge/Youtube-Developer%20Help-red.svg)](https://www.youtube.com/MicrochipDeveloperHelp)
[![Developer Help](https://img.shields.io/badge/XWiki-Developer%20Help-torquiose.svg)](https://developerhelp.microchip.com/xwiki/bin/view/software-tools/harmony/)
[![Follow us on Youtube](https://img.shields.io/badge/Youtube-Follow%20us%20on%20Youtube-red.svg)](https://www.youtube.com/user/MicrochipTechnology)
[![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20us%20on%20LinkedIn-blue.svg)](https://www.linkedin.com/company/microchip-technology)
[![Follow us on Facebook](https://img.shields.io/badge/Facebook-Follow%20us%20on%20Facebook-blue.svg)](https://www.facebook.com/microchiptechnology/)
[![Follow us on Twitter](https://img.shields.io/twitter/follow/MicrochipTech.svg?style=social)](https://twitter.com/MicrochipTech)

[![](https://img.shields.io/github/stars/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg?style=social)]()
[![](https://img.shields.io/github/watchers/Microchip-MPLAB-Harmony/net_apps_sam_9x60.svg?style=social)]()
