---
title: "Installing HENkaku"
---

### Required Reading

HENkaku is an exploit chain for the PS Vita (TV) which will allow for the installation of homebrew applications to the LiveArea Screen. It is only compatible with the firmware version 3.60.

Note that the HENkaku exploit chain is not "persistent" (meaning it does not remain installed after a reboot). Fortunately, this is only a temporary restriction until HENkaku Ensō is installed on the next page.

In addition to running the HENkaku exploit, we will also enable access to "unsafe" homebrew which gives extended permissions to homebrew applications. This idea could be considered analogous to the "administrator" mode on a computer.

The "VitaDeploy" application will also be installed to your home screen. VitaDeploy makes installing apps, plugins, and custom firmwares simple and includes many useful tools and utilites.

::: tip
If you have a PS Vita 1000, you must also have an official Sony memory card (or [first unlock its internal memory](creating-an-internal-memory-card.html)) to follow this guide. This restriction does not apply to the PS Vita 2000 or PS TV as those devices have preconfigured internal storage.
:::

### What You Need

* An internet connection on your PS Vita (TV)

### Instructions

#### Section I - Launching HENkaku

1. Launch the browser and go to the following URL on your device: `http://henkaku.xyz`
1. Tap "Install"
1. Read the disclaimer, then tap "Install"
    + If you get an error and cannot proceed, [follow this troubleshooting guide](troubleshooting#a-browser-based-exploit-is-not-working)
1. If the exploit was successful, you will now have a bubble on your LiveArea screen named "molecularShell".
    + If the exploit was successful but the molecularShell application is missing, perform the exploit again and press R1 when prompted to re-install molecularShell.

If you have VitaShell installed from a previous homebrew installation, HENkaku won't install molecularShell as it will detect a pre-existing taiHEN config. This will not be an issue.


#### Section II - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

::: tip
You can change your <Btn btn="circle" /> button behavior now. If you do, change it for the guide too: <BtnToggler />
:::
