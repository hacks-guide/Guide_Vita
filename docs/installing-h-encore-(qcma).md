# Installing h-encore (QCMA method)

### Required Reading

The h-encore exploit for the PS Vita (TV) allows for the installation of homebrew applications to the LiveArea Screen. It is compatible with the firmware versions 3.65 to 3.74.

This method should be used if the finalhe method of hacking your Vita does not work, or if your Mac or Linux computer is unable to run finalhe.

### What You Need

* A USB cable that will connect to a computer.
* The latest release of [QCMA](https://codestation.github.io/qcma/)
    - Download the correct file for your operating system--Windows, Mac, and Linux versions are offered.
 * A PSN account connected to your Vita
  
### Instructions

#### QCMA Setup

1. Install the latest release of QCMA to your computer.
1. Run the application to make sure it is functioning properly.
1. Close QCMA.

#### Downloading Backups
1. Go to [Sekoree's QCMA Backups](https://vita.sekoree.dev/).
1. Follow the process of getting your account ID (AID) as shown in the website.
1. Log into your Sony Account.
1. Once text saying `redirect` is shown on your screen, copy the URL of the page and paste it into the box in the QCMA Backups tab.
1. Then click the `Validate AID` button.
1. You can now choose what apps you'd like to get
    + Hencore² and VitaDeploy are required
    + VitaShell is recommended but optional
1. Click `Confirm Selection` to proceed
3. Click the `Get Homebrews` button, and save the `.zip` file onto your computer. Unzip the files so they are ready to be moved.

#### QCMA Transfer
1. Move your downloaded files to the QCMA default directory for applications (which should be something similar to `\Users\<YourUsernameHere>\Documents\PS Vita\APP\`).
    + For macOS users the default location should be either `"Home"/PSVita/APP/` or `<YourUsername>/PSVita/APP/`
    + For Linux users the default location should be `/home/<YourUsername>/PSVita/APP/` 
    + If you are unsure just check the `Applications / Backups` location in QCMA's settings
3. Launch QCMA on your computer (If nothing is shown on-screen, that is normal).
4. Launch the Content Manager application on your device.
5. Connect your Vita to USB and plug it into the computer.
6. Tap "Copy Content" on Content Manager.
7. Tap "PC".
8. Tap "PC -> PS Vita System" or "PC -> PS TV System" on your device.
9. Tap "Applications".
10. Tap "PS Vita".
11. Select "h-encore²".
12. Select "VitaDeploy".
13. Tap "Copy".
14. Tap "OK".
    + The h-encore² exploit and VitaDeploy application will be copied to your device.
    + This process will take some time.
15. Once the process is over, close the Content Manager application on your device.
16. Close QCMA on your computer.

#### Section III - Opening h-encore

1. Launch the h-encore² application while holding down the <Btn btn="r" /> button
    + If prompted about trophies, select "Yes" while continuing to hold down the <Btn btn="r" /> button
1. If the exploit was successful, you will now see the h-encore bootstrap menu
    + If the exploit gets stuck, reboot your device and try again
    + If you can't reboot normally, hold the power button down for over 30 seconds to force a reboot
1. Press <Btn btn="confirm" /> to exit the application

#### Section IV - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
    + If HENkaku Settings is missing, select the "Reset taiHEN config.txt" in the h-encore bootstrap menu, then try again
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

::: tip
You can change your <Btn btn="circle" /> button behavior now. If you do, change it for the guide too: <BtnToggler />
:::
