---
title: "Using HENlo"
---

### Required Reading

The HENlo exploit chain for the PS Vita (TV) allows for the installation of homebrew applications to the LiveArea Screen. It is compatible with the firmware versions 3.65 to 3.74.

Note that the HENlo chain is not "persistent" (meaning it does not remain installed after a reboot). Fortunately, this is only a temporary restriction until HENkaku Ensō is installed on the next page.

In addition to running HENlo, we will also enable access to "unsafe" homebrew which gives extended permissions to homebrew applications. This idea could be considered analogous to the "administrator" mode on a computer.

The "VitaDeploy" application will also be installed to your home screen. VitaDeploy makes installing apps, plugins, and custom firmwares simple and includes many useful tools and utilites.

### What You Need

* An internet connection on your PS Vita (TV)

### Instructions

#### Section I - Launching HENlo

1. Launch the browser and go to the following URL on your device: `http://deploy.psp2.dev`
    + If you get an error and cannot proceed, [follow this troubleshooting guide](troubleshooting#a-browser-based-exploit-is-not-working)
1. If the exploit was successful, you should be greeted by a screen titled "henlo-bootstrap"

#### Section II - Installing HENkaku and VitaDeploy

1. Press <Btn btn="confirm" /> on "Install henkaku" to enable homebrew
1. Press <Btn btn="confirm" /> on "Install VitaDeploy"
    - If you are on a first generation Vita without a memory card, press <Btn btn="confirm" /> on "Replace NEAR with VitaDeploy" instead (requires a reboot and will reset LiveArea screen layout). After the reboot, launch Henlo again and simply use the exit option. Then use this opportunity to create an internal memory with vitadeploy following this [guide](https://guide.psp2.dev/guides/creating-an-internal-memory-card). You will need to run Henlo again and chose the install VitaDeploy option so that VitaDeploy is correctly installed on your internal memory.
1. Press <Btn btn="confirm" /> on "Exit"

#### Section III - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application

::: tip
You can change your <Btn btn="circle" /> button behavior now. If you do, change it for the guide too: <BtnToggler />
:::
