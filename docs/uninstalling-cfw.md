# Uninstalling CFW

### Required Reading

This guide will completely uninstall the Henkaku Ensō custom firmware (CFW) from your PlayStation Vita (TV), and revert it back to "stock". Please proceed with caution. VPK or PKG files installed with homebrew will not run on stock firmware. All plugins will be uninstalled. If you wish to keep plugins for whatever reason, skip Section I - Prep Work.

::: danger
You will COMPLETELY uninstall the Henkaku Ensō custom firmware from your device, along with any and all plugins. To reinstall, go through the process detailed in the guide again. If anything goes wrong, there is no recovery. You take sole responsibility in what happens to your device.
:::

### What You Need

* A Henkaku Ensō console on system firmware 3.65 or 3.60
    + If you only have h-encore installed (and aren't running Ensō for whatever reason), reboot your console to remove CFW.
* An Internet connection
    + Make sure that Flight Mode is disabled and Wi-Fi is enabled.

### Instructions

#### Section I - Prep Work

::: danger
This will delete all plugins from your system. If you wish to keep plugins for whatever reason, skip Section I - Prep Work.
:::

1. Open the VitaShell application.
1. Navigate to the "ur0:" directory.
    + If you have installed plugins or have a folder named "tai" in the "ux0:" directory, go there instead.
1. Navigate to the folder named "tai". This folder hosts all plugins and configurations for plugins.
1. Click the <Btn btn="square" /> button to highlight it.
1. Navigate to the folder named "tai_old".
1. Click the <Btn btn="square" /> button to highlight it.
1. Click the <Btn btn="triangle" /> button to open the side menu, and navigate to "Delete". Click the "Yes" option.
1. Check the "ux0:" (or "ur0:" directory) for the "tai" or "tai_old" folders. If they are there, delete those as well.
1. Your plugin folders have now been deleted.
1. Exit out of the VitaShell application.

#### Section II - Updating

1. Open the Settings application.
1. Navigate to "HENkaku Settings".
1. Disable the "Enable Version Spoofing" setting if it is on. 
1. Reboot your device and hold down the <Btn btn="l" /> button to disable plugins while booting
1. Once the console has been rebooted, open the Settings application.
1. Navigate to "System".
1. Click on "System Information", and verify that the System Software does not say 3.74 or 変革.
1. Navigate out of the "System" menu and open "System Update". 
1. Select "Update using Wi-Fi".
1. There should be a message onscreen saying "A new version of the system software is avaliable."
1. Click "Next".
1. Click "Yes" to the onscreen prompt to confirm the closing of all other running applications.
1. Scroll to the bottom of the Software License Agreement and click "Accept".
1. Click the "Update" button to update the system software and remove Henkaku Ensō.
    + If you are unsure about updating, click "Do Not Accept" on the Software License Agreement.
1. The Vita will now download and install the system software update, and CFW will be removed from your system.
    + This process will take some time. Once the Vita fully downloads the update, the installation process cannot be cancelled. 

1. Your device will then install firmware version 3.74, and Henkaku Ensō will be wiped from your system. Once finished, it will reboot into stock mode. User-installed titles will still show up on the screen, however they will not be accessible. Delete the bubbles or format your device if this is a problem.
1. h-encore will still be in your LiveArea. If you would like, delete it to fully remove CFW access from your system.
