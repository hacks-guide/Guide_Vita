---
title: "Updating to 3.65 (Ensō)"
---

{% include toc title="Table of Contents" %}

### Required Reading

These steps are for updating a 3.60 HENkaku Ensō device to 3.65 (while retaining HENKaku Ensō). If you have a stock device and are trying to update to 3.65, follow [Updating to 3.65](updating-to-3.65).
{: .notice--warning}

Updating your HENkaku Ensō PS Vita (TV) to the firmware version 3.65 will allow you to access the PS Store, use online features, and play newer games which require newer firmware versions, all while retaining access to the convenient boot-time HENkaku Ensō homebrew exploit.

Note that updating your device to the firmware version 3.65 will render the standard HENkaku exploit unusable. Should you remove HENkaku Ensō for some reason, you will need to follow [Installing h-encore](installing-h-encore) to reinstall it.

In order to install the necessary `.vpk` (content package) files on your device, we use the [File Transfer Protocol (FTP)](https://wikipedia.org/wiki/File_Transfer_Protocol) to copy the files to your device's memory card. 

If you have a PS Vita 1000, you must also have an official Sony memory card (of any size) to follow this guide. An SD2Vita device will not work for this update process. This restriction does not apply to the PS Vita 2000 or PS TV as those devices have a built-in memory card.
{: .notice--info}

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* The latest release of [VitaShell](https://github.com/TheOfficialFloW/VitaShell/releases/latest/)
* The latest release of [HENkaku Ensō](https://github.com/henkaku/enso/releases/latest/)
* The latest release of [update365](https://github.com/TheOfficialFloW/update365/releases/latest) *(the `.PUP` and `.vpk` files)*
  
### Instructions

#### Section I - Prep Work

1. If you are using an alternative storage device (such as an SD2Vita, USB drive, or psvd), disable it 
  + You must use an official Sony memory card to perform the 3.65 update
  + You can either disable the plugin or remove the device, depending on your specific setup
1. Launch the molecularShell application
  + You can also use VitaShell if you already have it and it is version 1.82 or higher
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:` -> `data/`
1. Transfer `VitaShell.vpk` to the `data` folder
1. Transfer `updater.vpk` to the `data` folder
1. Transfer `PSP2UPDAT.PUP` to the `data` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing VPKs

1. On your device, navigate to `ux0:` -> `data/`
1. Press (Square) on each of the `.vpk` files to mark them
1. Press (Triangle) to open the menu, then select "More" -> "Install all" to install the marked files
1. Press (Cross) to confirm the install
1. Press (Cross) to continue the install each time you are prompted about extended permissions
1. Press (Triangle) to open the menu, then select "Delete" to delete the marked files
1. Press (Cross) to confirm the deletion

#### Section III - Moving PUP

1. Press (Triangle) on the `PSP2UPDAT.PUP` file to open the menu, then select "Move"
1. Press (Cross) to dismiss the copied file dialogue box
1. Press (Circle) to return to `ux0:`
1. Navigate to `app` -> `UPDATE365/`
1. Press (Triangle) to open the menu, then select "Paste" to move the `PSP2UPDAT.PUP` file to the current folder
1. Close the molecularShell application

#### Section IV - Unlinking Memory Card

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Uncheck "Enable PSN Spoofing"
1. Select "Unlink Memory Card"
  + If you do not unlink your memory card, the card will need to be formatted before it can be used on 3.65
  
#### Section V - Disabling Plugins

If you have not installed any plugins to the `ux0:tai/` or `ur0:tai/` folders, skip this section.
{: .notice--info}

1. Launch the molecularShell or VitaShell application
1. Edit the file `ux0:tai/config.txt` and remove the lines corresponding to any plugin files you have installed to `ux0:tai/`
1. Edit the file `ur0:tai/config.txt` and remove the lines corresponding to any plugin files you have installed to `ur0:tai/`
1. Close the molecularShell or VitaShell application

#### Section VI - Uninstalling HENkaku Ensō (3.60)

1. Launch the Ensō application
  + If the Ensō application is missing, you should [re-install it](https://github.com/henkaku/enso/releases/latest/) using molecularShell or VitaShell
1. Press (Circle) to proceed
1. Press (Triangle) to uninstall HENkaku Ensō
1. Reboot your device when prompted
  + If you are prompted to update after the reboot, decline the update
  + If you are an SD2Vita user, your SD2Vita device will not function until Ensō is re-installed

#### Section VII - Installing HENkaku Ensō (3.65)

1. Ensure your device's battery is at least 50% charged
1. Launch the browser and re-install HENkaku using the following URL on your device:
  + `http://henkaku.xyz`
  + If you get an error and cannot proceed, [follow this troubleshooting guide](troubleshooting#a-browser-based-exploit-is-not-working)
1. Launch the HENkaku Ensō 3.65 Update application
1. Follow the on-screen instructions
1. When your device reboots, you should see the Team Molecule boot-logo indicating your device is now on HENkaku Ensō 3.65

#### Section VIII - Reconfiguring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

___

You can now re-enable any plugins you may have disabled in the `ux0:tai/` or `ur0:tai/` folders. Note that, before you do so, you may need to download the latest version of the plugin for firmware version 3.65 to be supported.
{: .notice--info}

For installing recommended software and configuring your updated device, it is recommended (but not required) that you continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
