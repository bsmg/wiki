---
sidebar: auto
---
# Quest Modding with Android

:::warning
Installing QAVS and modding your game will disable Official Multiplayer as well as viewing and uploading scores
on the base game leaderboards.
If you would like to play modded multiplayer, you need the mod `BeatTogether`, which allows
for cross-play between PC and Quest and for custom songs to be used. You'll have to download this mod when you've
modded your game

To get leaderboards and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://new.scoresaber.com/quest) or [BeatLeader](https://www.beatleader.xyz/) mod.
These do not replace the base game leaderboards, they only add leaderboards for custom songs.

**Note:** Check the updates channel in the [ScoreSaber Discord](https://discord.gg/WpuDMwU) or
[BeatLeader Discord](https://discord.gg/2RG5YVqtG6) to see if the mod is available
for the current game version.
:::

* [Requirements](#requirements)
* [Enable Developer mode on your Quest](#how-to-enable-developer-mode-on-the-oculus-quest)
* [Setup your Phone](#setup-your-phone)
* [Installing BMBF with your Phone](#installing-bmbf-with-your-phone)
* [Setup Beat Saber](#setup-beat-saber)

## Requirements

* An Android Phone or Android Tablet
  * iPhones or iPads are **NOT** supported
* A **paid** Version of Beat Saber on the Oculus Quest Store
* A Cable to connect your Quest to your Phone (If your phone charges over USB C the charger that was included with your
Quest should work)

## How to Enable Developer Mode on the Oculus Quest
There are two methods, the first one requires a credit card. If you do not have one you can follow the
[I have no Credit Card](#i-have-no-credit-card) steps instead.

### Verify with a Credit Card
Head to the [Oculus dashboard](https://dashboard.oculus.com/) and sign in with your Facebook Account.

After you successfully logged in and verified you can create your new Organization.

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

#### Enable Developer mode in the Oculus App

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

You can now skip to [Setup your Phone](#setup-your-phone)

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

![2fa](~@images/beginners-guide/2fa.png)

#### Create New Organization
After you did that head to the [Oculus Dashboard](https://dashboard.oculus.com/) and create a organization with *almost*
any name you want.

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

#### Add Yourself to the Organization
After you created your Organization you have to add your Facebook profile to your Organization by Selecting your Organization
in the drop down and then clicking on Members.
There you add a new Member with the Role Admin and put in the Username of your Facebook profile. After that, click add
and the user should be added.

![DevModeCreateOrg](~@images/beginners-guide/addmember.png)

#### Enable Developer Mode in the Oculus App
You should now be able to enable the developer mode in the Oculus app on your smartphone.

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

You can now continue to [Setup your Phone](#setup-your-phone)

## Setup your Phone

1. Download the [SideQuest app from the Google Play store](https://play.google.com/store/apps/details?id=side.quest.mobile)
2. Enable Developer mode on your Phone
    1. Go into your Android settings
    2. Scroll to "About phone" and open it
    3. Tap "Software information"
    4. Tap the "Build number" field until it says Developer mode enabled. This should take about 7 taps.
3. Enable USB debugging on your Phone
    1. Go back to settings
    2. Tap "Developer options"
    3. Activate USB debugging

### Installing QAVS with your Phone

Open Sidequest on your Phone connect and your Quest with your phone via the USB Cord.
You should get a USB debugging pop-up in your Quest and on your phone. Select allow on both devices and if you prefer,
select always allow.

Now if SideQuest picked your Quest up you should see the SideQuest logo with a green dot next to it at the bottom of
your Screen.

Then install BMBF by clicking the search icon at the top of SideQuest and search for `QuestAppVersionSwitcher`.
You should see an app with an unicorn as symbol. Tap on that and click `INSTALL TO HEADSET`.

Afterwards you should have QAVS installed on your Quest and are ready to mod Beat Saber.

Now you can continue with the [QAVS Setup](/quest-modding.md#qavs-setup) step of the installation process as if you were
modding with your PC.
