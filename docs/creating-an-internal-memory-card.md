---
title: Creating an internal memory card
sidebar: false
---

On first generation PS Vitas, you must have a memory card to install homebrew. This is because they don't have an internal storage partition, unlike the second generation models.

Fortunately, it's possible to use VitaDeploy to re-partition the internal storage, allowing for homebrew installation without a memory card. VitaDeploy can be installed onto the system by following <router-link to="using-henlo">Using HENlo</router-link>, replacing the system app "NEAR".

This partition will only be 1GB in size. We recommend you use this to then install <router-link to="yamt">YAMT</router-link> for use with an SD2Vita card. This is preferrable, as microSD cards are much cheaper than official Vita memory cards.

## What you need

- A homebrewed device with VitaDeploy installed

## Instructions

### Section I - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

### Section II - Repartitioning

1. Launch the VitaDeploy application
1. Press <Btn btn="confirm" /> on "Miscellaneous"
1. Press <Btn btn="confirm" /> on "Create an internal memory card"
1. Read the disclaimer, and press <Btn btn="confirm" /> to continue
    - If the application crashes, open it and try again
1. Press <Btn btn="confirm" /> on "Default 2xxx storage configuration"
1. Once repartitioned, your device will reboot

### Section III - Reformatting

1. If you have a memory card inserted, remove it
1. Open the Settings application
1. Navigate to `Format` -> `Format Memory Card`
1. Press <Btn btn="confirm" /> on "Format"
1. When prompted, select "Yes" to confirm
1. Once formatted, select "OK" to reboot

You should now have a 1GB internal partition on your device. You can verify this by opening the Settings application and navigating to `System` -> `System Information`.

To install VitaDeploy to this new partition, follow <router-link to="using-henlo">Using HENlo</router-link> and install the application as normal.
