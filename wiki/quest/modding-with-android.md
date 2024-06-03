---
prev: false
next: false
description: Learn how to mod Beat Saber on your Quest using an Android device!
---

# Quest Modding with Android

:::warning
Installing MBF and modding your game will disable Official Multiplayer as well as viewing and uploading scores on the
base game leaderboards.
If you would like to play modded multiplayer, you need the `Beat Together` and `MultiQuestensions` mods, which enables
cross-play between PC
and modded Quests and allows for custom songs to be played. The mod can be found in the
[Beat Saber Modding Group](https://discord.gg/beatsabermods) in `#quest-mods` or on the
[Questboard](https://questmodding.com) site.

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://scoresaber.com/quest) mod. [This link](https://scoresaber.com/quest) will take you to the
ScoreSaber page to set it up.
ScoreSaber does not replace the base game leaderboards, it only adds leaderboards for custom songs.

**Note:** Check the updates channel in the [ScoreSaber Discord](https://discord.gg/scoresaber) to see if the mod is available
for the current game version.
:::

## Requirements

- An Android Phone or Android Tablet.
  - iPhones or iPads are **NOT** supported
- A **paid** Version of Beat Saber on the Oculus Quest Store
- A Cable to connect your Quest to your Phone (If your phone charges over USB C the charger that was included with your
  Quest should work)
- An up-to-date browser. It's recommended that you update/install the latest version of [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
  :::warning
  Firefox will NOT work with MBF as it does not support accessing devices via USB. You will need a Chromium browser.
  :::

## How to Enable Developer Mode on the Oculus Quest

There are two methods, the first one requires a credit card. If you do not have one you can follow the
[I have no Credit Card](#i-have-no-credit-card) steps instead.

### Verify with a Credit Card

Head to the [Oculus dashboard](https://dashboard.oculus.com/) and sign in with your Facebook Account.

After you successfully logged in and verified you can create your new Organization.

![DevModeDashboard](/.assets/images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)

After you created it, you can enable Developer mode in the Oculus app on your smartphone.

#### Enable Developer mode in the Oculus App

![EnableDevMode](/.assets/images/beginners-guide/EnableDevMode.png)

You can now skip to [Installing Mods with ModsBeforeFriday](#installing-mods-with-modsbeforefriday)

### I have no Credit Card

[Original Source](https://www.reddit.com/r/sidequest/comments/jaxy4u/cant_verify_oculus_developer_account/?utm_source=amp&utm_medium=&utm_content=post_body).

So please note that you have to create a second account (Oculus developer account) and then add your Facebook profile to
the organization created.
It is a bit harder.

:::tip
If you have a friend who has a organization you can ask them to add you so you do not have to make a new account.
If so, tell your friend to follow the steps in [Add yourself to the organization](#add-yourself-to-the-organization)
using your Facebook account instead.
:::

#### Create a New Developer Account

1. Go to the [sign up page for Oculus developers](https://developer.oculus.com/sign-up/) and click
   `Create an Unmerged Oculus Developer Account`.
2. Fill in all required information.
3. Verify with the email you got sent and log in again with the account you created.
4. Go to the [verify page](https://developer.oculus.com/manage/verify/) and set up Two Factor Authentication.

![2fa](/.assets/images/beginners-guide/2fa.png)

#### Create New Organization

After you did that head to the [Oculus Dashboard](https://dashboard.oculus.com/) and create a organization with _almost_
any name you want.

![DevModeDashboard](/.assets/images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)

#### Add Yourself to the Organization

After you created your Organization you have to add your Facebook profile to your Organization by Selecting your Organization
in the drop down and then clicking on Members.
There you add a new Member with the Role Admin and put in the Username of your Facebook profile. After that, click add
and the user should be added.

![DevModeCreateOrg](/.assets/images/beginners-guide/addmember.png)

#### Enable Developer Mode in the Oculus App

You should now be able to enable the developer mode in the Oculus app on your smartphone.

![EnableDevMode](/.assets/images/beginners-guide/EnableDevMode.png)

You can now continue to [Installing Mods with ModsBeforeFriday](#installing-mods-with-modsbeforefriday)

## Installing Mods with ModsBeforeFriday

1. Plug your Quest into your phone using your cable.
2. Open the [ModsBeforeFriday website](https://lauriethefish.github.io/ModsBeforeFriday/) on your phone
   and click the `Connect to Device` button. Your screen should look like this:
   ![MBFAndroidDevicesList](/.assets/images/beginners-guide/mbf-android-quest-found.png)
   ::: tip
   You will be notified at this stage if your browser is incompatible with ModsBeforeFriday.
   :::
3. Tap your device and click the `Connect` button. Wait a few seconds for the next page to load.

### No Compatible Devices

If no devices show up in the list, then you're experiencing an issue where the Quest doesn't know
whether to consider itself as the host for the USB connection.

This can be fixed by swiping down from the top of your screen and tapping the following message:
![MBFUsbTray](/.assets/images/beginners-guide/mbf-android-usb-tray.png)

You will then be met by a screen a bit like what's below:

- If `USB controlled by` is already set to `Connected device` as in the picture,
  tap `This device`, then tap `Connected Device` again.
- If `Connected Device` is `This device`, just tap `Connected device` to update the preference.

:::tip
If you're told that the setting could not be changed, try using your cable the other way around.
(Quest end in your phone, phone end in your Quest.)
:::
![MBFUsbSettings](/.assets/images/beginners-guide/mbf-android-preferences-changed.png)

### Patching

4. At the next page, tap `Mod the app` to install mods/setup your game for custom songs. (See screenshot of page below)
   ::: warning
   Make sure you read all of the advice that MBF provides you about the risks of using mods.
   :::

![MBFReadyToPatch](/.assets/images/beginners-guide/mbf-android-ready-to-mod.png)

5. Assuming everything worked, you're all done!

### Installing additional mods

In the MBF home page, you can install additional mods with only one-click: Tap the `Install` button.

![MBFHomeAndroid](/.assets/images/beginners-guide/mbf-android-modding-complete.png)
