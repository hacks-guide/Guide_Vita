---
description: "Guide on installing the YAMT plugin for SD2Vita."
sidebar: false
---

# YAMT (SD2Vita)

### Required Reading

YAMT (Yet Another Mount Tool) is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of a microSD card as a storage device via an SD2Vita adapter. The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device.

By using the YAMT kernel plugin, the USB drive or microSD card you use will be mounted to `ux0:` just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).

::: tip
If you're using a USB drive or psvsd adapter, or if this method doesn't work for you, follow the [StorageMgr](storagemgr) guide.
:::

::: tip
YAMT is only compatible with firmware versions 3.60 and 3.65 on HENkaku Ensō.
:::

### What You Need

* A storage device compatible with your system
    + This can be a microSD card to use in an SD2Vita or psvsd adapter, or a USB device for a PS TV console
* The latest release of [VitaDeploy](https://github.com/SKGleba/VitaDeploy/releases/latest)

### Instructions

#### Section I - Formatting the microSD

::: warning
If you previously installed StorageMgr or another storage plugin, please remove it from your `ux0:tai/` or `ur0:tai/` folder before continuing.
:::

1. Insert your SD2Vita with the microSD card into your PS Vita or PS TV device
1. Launch the VitaDeploy application
1. Press <Btn btn="confirm" /> on Miscellaneous
1. Press <Btn btn="confirm" /> on Format a storage device
1. Ensure `Target` is set to "SD2Vita" and `Filesystem` is set to "TexFAT"
1. Press <Btn btn="confirm" /> on "Format target storage"
    + If this fails, ensure the adapter is inserted properly and is undamaged - then reboot and try again
    + If it still fails, follow the [StorageMgr](storagemgr) guide
1. Navigate back to the Vita Deploy menu and press <Btn btn="confirm" /> on "Reboot"

#### Section II - Installing yamt-vita

::: tip
If you did the `3.65 Quick Install` of VitaDeploy, you already have YAMT installed and can skip this section.
:::

1. On your device, open VitaDeploy
1. Press <Btn btn="confirm" /> on App Downloader
1. Select <Btn btn="confirm" /> YAMT Installer
1. Press <Btn btn="confirm" /> on Download the selected apps
1. Press <Btn btn="confirm" /> on `YAMT.vpk` and confirm with <Btn btn="confirm" /> again to install
1. Once done Close out of the VitaDeploy application
1. Launch the newly installed YAMT Installer application
1. Press <Btn btn="cross" /> on `-> Install the lite version`
    + Once finished, your device will reboot

#### Section III - Transferring Data

::: tip
This section will copy the data from your old Sony memory card (or internal storage if you don't have a Sony memory card) to your new storage device.
It is recommended to not skip this section, so that the switch from the old main storage to the SD2Vita is as seamless as possible and all your apps carry over.
:::

::: tip
If you are coming from the [Using Henlo](using-henlo) guide, you may need to install VitaShell using VitaDeploy.
:::

1. Open the Settings application
1. Navigate to `Devices` -> `Storage Devices`
1. Enable "Use YAMT" to enable the YAMT driver
1. Set `ux0:` to "Default"
1. Set `uma0:` to "SD2Vita"
1. Hold the power button and select "Power Off", then power on your device
1. Open the VitaShell application
1. Navigate to the `ux0:` partition
    + This is currently your official memory card or internal storage
1. Press down on the D-Pad to highlight a folder or file
1. Press <Btn btn="triangle" /> to bring up the menu
1. Press <Btn btn="confirm" /> on "Mark all" to select all folders and files in the `ux0:` partition
1. Press <Btn btn="triangle" /> again to bring up the menu
1. Press <Btn btn="confirm" /> on "Copy"
1. Press <Btn btn="confirm" /> again when prompted
1. Navigate out of the `ux0:` partition and enter the `uma0:` partition
    + This is your unofficial storage device's memory
1. Press <Btn btn="triangle" /> to bring up the menu
1. Press <Btn btn="confirm" /> on paste and wait for it to finish

#### Section IV - Mounting SD2VITA

1. Open the Settings application
1. Navigate to `Devices` -> `Storage Devices`
1. Enable "Use YAMT" to enable the YAMT driver
1. Set `ux0:` to "SD2Vita"
1. Set `uma0:` to "Default"    
1. Hold the power button and select "Power Off", then power on your device



___

If you want to reclaim the space on your memory card (to use for storing PSP games for instance), you can delete the contents of `uma0:` (the new memory card mount point) and / or `imc0:` (if you have a PS Vita 2000, PS TV or are using a 1000 with no memory card).

If you decide to do this, you *shouldn't* delete these folders:

+ `uma0:app/SKGD3PL0Y`
+ `uma0:appmeta/SKGD3PL0Y`
+ `uma0:license/app/SKGD3PL0Y`
+ `uma0:user/00/savedata/SKGD3PL0Y`

This is because you should keep VitaDeploy installed on the memory card so you can still have tools available in case your SD2VITA fails.
