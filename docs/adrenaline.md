---
title: "Adrenaline"
sidebar: false
---

### Required Reading

Adrenaline is a homebrew application which modifies the official PSP Emulator of the PS Vita (TV) to run a PSP 6.61 custom firmware.

Additionally, adrenaline also enables access to a full PSP home menu running under the official PSP Emulator.

::: tip
You must have already installed VitaShell to use this.
:::

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
    + Alternatively, you can also use the USB transfer feature of VitaShell
* The latest release of [Adrenaline](https://github.com/TheOfficialFloW/Adrenaline/releases/latest)
* The latest release of [PSP Homebrew Browser](/assets/files/PSPhbb_dev.vpk)

### Instructions

#### Section I - Prep Work

1. Launch the VitaShell application
1. Press <Btn btn="SELECT" /> to enable FTP access on your device
    + You may need change from USB mode to FTP mode
    + To change to FTP mode, first press <Btn btn="start"> and change "SELECT button" from "USB" to "FTP"
    + For username, you can use "guest" and leave the password field blank
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:` -> `data/`
1. Transfer `Adrenaline.vpk` to the `data` folder
1. Transfer `PSPhbb_dev.vpk` to the `data` folder
1. Press <Btn btn="cancel" /> on your device to close the FTP connection

#### Section II - Installing VPKs

1. On your device, navigate to `ux0:` -> `data/`
1. Press <Btn btn="square" /> on each of the `.vpk` files to mark them
1. Press <Btn btn="triangle" /> to open the menu, then select "More" -> "Install all" to install the marked files
1. Press <Btn btn="confirm" /> to confirm the install
1. Press <Btn btn="confirm" /> to continue the install each time you are prompted about extended permissions
1. Press <Btn btn="triangle" /> to open the menu, then select "Delete" to delete the marked files
1. Press <Btn btn="confirm" /> to confirm the deletion
1. Press <Btn btn="cancel" /> to return to `ux0:`
1. Close the VitaShell application

#### Section III - Installing PSP XMB

1. Launch the Adrenaline application
1. Press <Btn btn="cross" /> to download the PSP 6.61 firmware
    + This process will take some time
    + If the download fails, the downloader will get confused and begin to give you the error `Cannot find ux0:/app/PSPEMUCFW/661.PBP`
    + If you encounter the above error, use VitaShell to delete the `ux0:app/PSPEMUCFW/flash0/` folder, then try again
    + If the flash0 folder was not present, or you still encounter this error, manually download [EBOOT.PBP](http://de01.psp.update.playstation.org/update/psp/image/eu/2014_1212_6be8878f475ac5b1a499b95ab2f7d301/EBOOT.PBP), rename it to `661.PBP`, then transfer it to `ux0:app/PSPEMUCFW/` using VitaShell
    + Rename the `EBOOT.PBP` to `661.PBP` *before* transferring it, otherwise you might overwrite another file with the same name in `ux0:app/PSPEMUCFW/`!
    + The Adrenaline application will close automatically when the download is complete
1. Re-launch the Adrenaline application
1. Press <Btn btn="cross" /> to install PSP 6.61 the firmware
1. Press <Btn btn="cross" /> to boot the PSP home menu
    + The PSP home menu is also known as the [XrossMediaBar](https://wikipedia.org/wiki/XrossMediaBar) ("XMB")
1. Perform the PSP Initial Setup
1. To close the PSP Emulator, hold the <Btn btn="PS" /> button to open the menu, then select `Settings` -> `Exit PspEmu Application`

#### Section IV - Modifying Plugin Config

1. Launch the VitaShell application
1. Navigate to `tai/`
    + If `ux0:tai` doesn't exist or does not contain a `config.txt`, press <Btn btn="cancel" /> again and then navigate to `ur0:tai`
1. Press <Btn btn="confirm" /> on `config.txt` to open it in the editor
1. Highlight the `*KERNEL` line with the cursor
1. Press <Btn btn="triangle" /> to open the menu, then select "Insert empty line"
1. Highlight the new blank line
1. Press <Btn btn="confirm" /> to edit the line
1. Enter the following text:
    + `ux0:app/PSPEMUCFW/sce_module/adrenaline_kernel.skprx`
    + Enter this even if you found `tai/` under `ur0:tai`
1. Press <Btn btn="cancel" /> to close the line editor
1. Press <Btn btn="cancel" /> to close the text editor
1. When prompted, press <Btn btn="confirm" /> to save your modifications
1. Close the VitaShell application
1. Reboot your device
    + If your device does not have Ensō, you will need to manually launch and exit h-encore to enable homebrew
    + This is required to load the new kernel plugin added to `ux0:tai/config.txt`

Adrenaline and the PSP Homebrew Browser have been successfully installed.
