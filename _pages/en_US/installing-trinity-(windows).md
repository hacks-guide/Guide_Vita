---
title: Installing Trinity (Windows)
---

{% include toc title="Table of Contents" %}

### Required Reading

The Trinity exploit chain for the PS Vita (TV) allows for the installation of homebrew applications to your home screen. It is compatible with the firmware versions 3.65 to 3.70.

Note that the Trinity exploit chain is not "persistent" (meaning it does not remain installed after a reboot). For the purposes of these instructions, we will be merely using it in order to gain the level of access required to downgrade to firmware version 3.60 in order to install more powerful exploits.

In addition to installing the Trinity exploit, we enable access to "unsafe" homebrew which gives extended permissions to homebrew applications. This idea could be considered analogous to the "administrator" mode on a computer.

This guide will involve using a tool named "FinTrinity" to automatically install the exploit rather than manual installation.

Remember that Trinity is a temporary solution. It's strongly recommended that afterwards you downgrade to a lower firmware version to ensure compatibility with homebrew applications.
{: .notice--warning}

If you have a PS Vita 1000, you must also have an official Sony memory card (of any size) to follow this guide. This restriction does not apply to the PS Vita 2000 or PS TV as those devices have a built-in memory card.
{: .notice--info}

### What You Need

- The latest release of [FinTrinity](https://github.com/bamhm182/FinTrinity/releases/latest)
- The latest release of [qcma](https://github.com/codestation/qcma/releases/latest)
- The latest release of [Python3](https://www.python.org/downloads/)

### Section I - Backing Up

1. Open QCMA Settings on your computer
1. Navigate to the "Other" tab
1. Make sure "Use this version for updates" is set to `FW 0.00 (Always up-to-date)`
1. Launch the Content Manager application on your device
1. Select "Copy Content"
1. Select "PC"
1. Select the method you wish to use to connect to QCMA
1. Select / register your computer if prompted
  + If you encounter a message instructing you to update, reboot your device and try again
  + If you still encounter this message, follow the instructions on [Blocking Updates](blocking-updates) and try again
  + If you *still* encounter this message, enable Flight Mode in the System Settings and try again (this will *not* work on PS TVs)
  + If your device is not detected over USB on Windows, install [QcmaDriver_winusb](https://github.com/soarqin/finalhe/releases/download/v1.3/QcmaDriver_winusb.exe) and try again
1. Select "PS Vita System -> PC" on your device
1. Select "Applications"
1. Select "PSP™/Other"
1. Select the PSP/minis game you downloaded
1. Select "Copy"
1. Select "OK"
  + The demo will be backed up to your computer
  + This process might take some time
1. Close the Content Manager application on your device

### Section II - Installing Trinity

1. Navigate to the folder `/Documents/PS Vita/PGAME` on your computer
1. Open the folder labeled as a 16 character string
  - This is your account ID
1. Open the folder labeled as the game's title ID
  - You can see the icon of the game in the folder at `sce_sys/icon0.png`
  - The folder should contain the folders `game`, `license` and `sce_sys`.
1. Once you've correctly identified the right game, copy it as a backup to somewhere safe on your computer
  - If you have any other games in the folder, back them up to another folder and remove them from the `PGAME` folder
1. Open the `GUI.py` file in the FinTrinity `.zip` file using Python
1. Check that FinTrinity has detected the right game, and select "Confirm"
1. When it's complete, select "Finished"

### Section III - Restoring to System

1. Open QCMA Settings and select "Refresh database"
1. Launch the Content Manager application on your device
1. Select "Copy Content"
1. Select "PC"
1. Select the method you wish to use to connect to QCMA
1. Select / register your computer if prompted
  + If you encounter a message instructing you to update, reboot your device and try again
  + If you still encounter this message, follow the instructions on [Blocking Updates](blocking-updates) and try again
  + If you *still* encounter this message, enable Flight Mode in the System Settings and try again (this will *not* work on PS TVs)
  + If your device is not detected over USB on Windows, install [QcmaDriver_winusb](https://github.com/soarqin/finalhe/releases/download/v1.3/QcmaDriver_winusb.exe) and try again
1. Select "PC -> PS Vita System" on your device
1. Select "Applications"
1. Select "PSP™/Other"
1. Select the PSP/minis game you modified
1. Select "Copy"
1. Select "OK"
  + The demo will be backed up to your computer
  + This process might take some time
1. Close the Content Manager application on your device

The game should now have a different icon and be called `Trinity`.

#### Section IV - Configuring h-encore

1. Enable Wi-Fi on your system if it is not already
1. Reboot your system
1. Launch the Trinity application immediately after reboot
  - It's important that you have nothing running in the background, especially downloads
1. Select "Install HENkaku"
  + This will install the HENkaku exploit and enable homebrew access until the next reboot
  - If the exploit fails, simply re-run Trinity
1. Select "Download VitaShell"
  + This will install the VitaShell homebrew application for managing your device's filesystem
  + VitaShell (and all homebrew applications in general) will remain installed after a reboot, but will give an error on launch if the HENkaku exploit is not active
1. Select "Exit"

#### Section V - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
  + If HENkaku Settings is missing, select the "Reset taiHEN config.txt" in the h-encore bootstrap menu, then try again
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

___

### Continue to [Downgrading Firmware (3.60)](downgrading-firmware-(3.60))
{: .notice--primary}
