---
sidebar: false
---

# Creating an internal memory card

On first generation PS Vitas, you must have a memory card to install homebrew. This is because they don't have an internal storage partition, unlike the second generation models.

Fortunately, it's possible to use VitaDeploy to re-partition the internal storage, allowing for homebrew installation without a memory card. VitaDeploy can be installed onto the system by replacing the system app "NEAR", and then formatting the system and following [Using HENlo](using-henlo) again.

This partition will only be 1GB in size. We recommend you use this to then install [YAMT](yamt) for use with an SD2Vita card. This is preferrable, as microSD cards are much cheaper than official Vita memory cards.

### What you need

- A device with the "henlo-bootstrap" screen on it, as followed in [Using HENlo](using-henlo)

### Instructions

#### Section I - Installing HENkaku and VitaDeploy

1. Press <Btn btn="cross" /> on "Replace NEAR with VitaDeploy"
1. Press <Btn btn="square" /> and wait for the device to reboot
1. Launch the web browser again
1. On the HENlo page, press `Unlock my Vita`, then press `Unlock`
1. Press <Btn btn="cross" /> on "Install henkaku" to enable homebrew


#### Section II - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

#### Section III - Repartitioning

1. Launch the VitaDeploy application
1. Press <Btn btn="confirm" /> on "Miscellaneous"
1. Press <Btn btn="confirm" /> on "Create an internal memory card"
1. Read the disclaimer, and press <Btn btn="confirm" /> to continue
    - If the application crashes, open it and try again
1. Press <Btn btn="confirm" /> on "Default 2xxx storage configuration"
1. Once repartitioned, your device will reboot

#### Section IV - Reformatting

1. If you have a memory card inserted, remove it
1. Open the Settings application
1. Navigate to `Format` -> `Restore This System`
1. Press <Btn btn="confirm" /> on "Restore"
1. When prompted, select "Yes" to confirm 3 times
1. Select "Format" and "Yes"
1. Once formatted, select "OK" to reboot
1. Do the initial setup

You should now have a 1GB internal partition on your device. You can verify this by opening the Settings application and navigating to `System` -> `System Information`.

Now, you can go back to [Using HENlo](using-henlo) and follow the guide as normal.
