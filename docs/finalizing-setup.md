---
title: "Finalizing Setup"
---

### Required Reading

We will now setup the following applications:

+  **[Vita Homebrew Browser](https://github.com/devnoname120/vhbb/releases/)** *(allows for installation of homebrew applications from [VitaDB](https://vitadb.rinnegatamante.it/)*
+  **[iTLS Installer](https://github.com/SKGleba/iTLS-Enso/releases/latest/)** *(adds TLSv1.2 support in older firmwares for online connection)*

In order to install the necessary applications on your device, we use the VitaDeploy application to download the latest version of each app.

### What You Need

* The VitaDeploy application installed on your device
  + If you don't have VitaDeploy installed, follow [Installing VitaDeploy](installing-vitadeploy)

### Instructions

#### Section I - Installing homebrew applications

1. Launch the VitaDeploy application
1. Tap "App downloader"
    + If you don't see a green menu with this option, make sure you've [enabled unsafe homebrew](installing-h-encore#section-iv---configuring-henkaku)
1. Select the following applications:
    + Vita Homebrew Browser
    + iTLS Installer
1. Tap "Download the selected apps"
1. Wait for the app to finish downloading
    + When finished, you should be presented with a list of two `.vpk` files
1. Press <Btn btn="triangle" /> to open the side menu
1. Press <Btn btn="confirm" /> on "Mark all"
1. Press <Btn btn="triangle" /> to open the side menu again
1. Press <Btn btn="confirm" /> on "More"
1. Press <Btn btn="confirm" /> on "Install all"
1. Press <Btn btn="confirm" /> to confirm the install
1. Press <Btn btn="confirm" /> to confirm the install again when prompted

::: warning
Vita Homebrew Browser may take several minutes to load when launched for the first time.
:::

#### Section II - Installing iTLS

1. Open the iTLS-Enso application
1. Press <Btn btn="cross" /> on "Install the full iTLS package"
    + If not on HENkaku Ensō, select "Install the iTLS compat module (web-browser)" instead
1. Wait for your device to reboot

#### Section III - Blocking Updates

1. Launch the Settings application
1. Navigate to `System` -> `Auto-Start Settings`
1. Uncheck the `Download Update File for System Software`
1. Close the Settings application

#### Section IV - PSN Access

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable PSN spoofing"
1. Check "Enable Version Spoofing"
1. Navigate to "Spoofed Version"
1. Enter "3.74" into the box
    + Should a new firmware version be released in the future, you must change the spoofed version to match in order to access PSN
1. Close the Settings application

::: tip
You can browse for new homebrew applications on [VitaDB](https://vitadb.rinnegatamante.it/) or in [Better Homebrew Browser](https://github.com/Ibrahim778/BetterHomebrewBrowser/releases/).
:::

::: danger
It is *not* recommended to make modifications to your Custom Firmware installation by installing homebrew applications intended for advanced users (such as "Enso EX"). Doing so without fully understanding the system can lead to a BRICK!
:::

::: tip
For information on replacing your Sony memory card with alternative storage (such as a microSD card or USB drive), check out the [YAMT](yamt) page.
:::

::: tip
For information on installing CFW to the built-in PSP emulator, check out the [Adrenaline](adrenaline) page.
:::
