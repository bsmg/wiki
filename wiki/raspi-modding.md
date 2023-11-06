---
prev: false
next: false
---

# Quest Modding with a Raspberry Pi

## Preface

- This guide is for both Quest 1 and Quest 2.

:::warning Quest 3 Modding Information
QAVS does not support Quest 3 at this time.  
Quest 3 modding is only possible using [QuestPatcher](./quest-modding.md#questpatcher).
:::

- Nobody has yet been banned for modding.

::: danger DISCLAIMER
By choosing to use mods, you understand that:

- You may experience problems that don't exist in the vanilla game. 99.9% of bugs, crashes, and lag are due to mods.
- Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens,
  as modders are volunteers with real lives.
- Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods,
  but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa -
modders and game developers are two separate groups. Just don't be a jerk ok.
:::

:::warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives?
We at BSMG **strongly** advise against using any video tutorials for modding. Often, we find that they are either
outdated or contain incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods).
:::

## Preparations

### What you need to get started

- A Raspberry Pi setup with Raspberry Pi OS (formerly Raspbian) installed
- A usb c to a cable
- An internet connection
- A phone if you don't have a monitor / keyboard

**Note:** Other Distros may work, but this guide is only tested with Raspberry Pi OS.

### Setting up your Raspberry Pi

1. Make sure the raspberry pi is connected to the internet. This can either be done via ethernet or wifi.
2. Make sure you got the ip and login information for the pi.
   The default login is `pi` and the default password is `raspberry`.
   If you don't know the ip, you can find it in your routers dashboard.
   If you're running Raspberry Pi OS, you can try to use the hostname `raspberrypi` to connect to it.

### Installing Termius

Termius is a SSH client for iOS. It's going to be used to connect to the Raspberry Pi.
**Note:** if you have a monitor and keyboard, you can skip this step.

1. Download [Termius](https://apps.apple.com/de/app/termius-terminal-ssh-client/id549039908) from the App Store.
2. Open the app. It may ask you to log in, which shouldn't be necessary.
3. Go to the `Hosts` tab and click on the `+` in the bottom left corner.
4. Enter the ip of your Raspberry Pi, the username and the password. Then click on `Save`.
5. Click on the newly created host and then on `Connect`.
   If everything went well, you should now be connected to your Raspberry Pi.

### Installing required packages

In order to download and transfer apks to your quest, you need to install some packages on your RaspberyPi.

1. Update the package list by running `sudo apt update`.
2. Run the following commands to install all necessary packages:

```bash
sudo apt install android-tools-adb
sudo apt install wget
```

**Note:** If it asks you to confirm the installation, type `y` and press enter.

3. To verify that everything is working, run `adb version`. If it prints out a version number, everything is working.

## Setting up a developer account

In order to install APKs on your quest, you need to set up a developer account.
This is free and easy to do. Just follow the steps below.

1. Go to [https://dashboard.oculus.com/](https://dashboard.oculus.com/) and log in with your Oculus account.
2. Click on `Create New Organization` and fill out the form. You can use your real name or a fake one, it doesn't matter.
3. Enable the developer mode on your Quest by following the steps below.

![iOSHowTo](/.assets/images/beginners-guide/EnableDevModeIOS.png)

## Installing

### Connecting the Quest to the Raspberry Pi

1. Connect your Quest to your Raspberry Pi using a USB-C to USB-A cable.
2. Check inside the headset if it asks you to allow the connection. If it does, click on `Allow`.
3. Run `adb devices` on your Raspberry Pi. If it prints out a device id, everything is working.

### Downloading and Installing QAVS

QAVS (Quest App Version Switcher) is a tool which can downgrade and mod BeatSaber.
We are going to use it in this tutorial since it's the easiest way to downgrade.

In order to download and install QAVS, run the following commands:

1. Download QAVS from the Official Release Page:

```bash
wget https://github.com/ComputerElite/QuestAppVersionSwitcher/releases/latest/download/com.ComputerElite.questappversionswitcher-Signed.apk
```

2. Make sure the file was successfully downloaded by running `ls`.
   It should print out `com.ComputerElite.questappversionswitcher-Signed.apk`.
3. Install the APK by running the following command:

```bash
adb install com.ComputerElite.questappversionswitcher-Signed.apk
```

### Downgrading and Modding BeatSaber

1. Make sure you got BeatSaber installed on your Quest. If you don't, install it from the Oculus Store.
2. Open QAVS on your Quest. It may ask you to start modding beat saber. If it does, click on `Start`.
3. It may ask you to downgrade, if it does, you need to log in with your Meta account in the tools tab.
4. Follow the Instructions given by QAVS and you should be good to go.

## Troubleshooting

### I can't connect to my Raspberry Pi

- Make sure you're connected to the same network as your Raspberry Pi.
- Make sure you're using the correct ip.
- Make sure you're using the correct username and password.

### I can't connect to my Quest

- Make sure you're using a USB-C to USB-A cable.
- Make sure you're using the correct cable.
- Try running `adb kill-server` and then `adb devices` again.

### My pi crashes when connecting the quest

- Make sure the power supply is strong enough. The Raspberry Pi needs at least 2.5A to run properly.
- Try using a different cable.

### Other issues

If you have any other issues, feel free to ask in the [BSMG Discord](https://discord.gg/beatsabermods).
