---
sidebar: auto
---
# Quest modding with Android
## Installing BMBF with an Android Phone

* [Requirements](#requirements)
* [Enable Developer mode on your Quest](#how-to-enable-developer-mode-on-the-oculus-quest)
* [Setup your Phone](#setup-your-phone)
* [Installing BMBF with your Phone](#installing-bmbf-with-your-phone)
* [Setup Beat Saber](#setup-beat-saber)

#### Requirements

* An Android Phone or Android Tablet (IPhones or IPads are not supported)
* A **paid** Version of Beat Saber on the Oculus Quest Store
* A Cable to connect your Quest to your Phone (If your phone charges over USB C the charger that was included with your
Quest should work)


#### How to enable developer mode on the Oculus Quest
First head to [the oculus dashboard](https://dashboard.oculus.com/) and sign in with your Facebook Account.
You'll need to provide a credit card to verify.
If you don't have a credit card you can do the steps [here](#i-have-no-credit-card).
After you successfully logged in and verified you can create your new Organization.

![DevModeDashboard](https://github.com/ComputerElite/wiki/blob/main/BM/DevModeDashboard.png)

![DevModeCreateOrg](https://github.com/ComputerElite/wiki/blob/main/BM/DevModeCreateOrg.png)

After you created it, you can enable Developer mode in the oculus app on your smartphone.

##### Enable Developer mode in the oculus app

![EnableDevMode](https://github.com/ComputerElite/wiki/blob/main/BM/EnableDevMode.png)

#### I have no credit card
[Original Source](https://www.reddit.com/r/sidequest/comments/jaxy4u/cant_verify_oculus_developer_account/?utm_source=amp&utm_medium=&utm_content=post_body).

So please note that you have to create a second account (oculus developer account) and then add  your facebook profile to the organization created.
It is a bit harder.

**info:** If you have a friend who has a organization you can ask them to add you to their organization so you don't have to make a new account.
If so tell your friend to check [Add yourself to the organization](#add-yourself-to-the-organization)

##### Create a new developer account
Go to the [sign up page for oculus developers](https://developer.oculus.com/sign-up/) and click "create a unmerged oculus developer account".
Then Fill in all needed information.
Then verify with the email you got sent and log in again with the account you just created.
Then go to the [verify page](https://developer.oculus.com/manage/verify/) and set up Two Facto Authentication. 

![2fa](https://github.com/ComputerElite/wiki/blob/main/BM/2fa.png)

##### Create new organization
After you did that head to the [oculus dashboard](https://dashboard.oculus.com/) and create a organization with (almost) any name you want.

![DevModeDashboard](https://github.com/ComputerElite/wiki/blob/main/BM/DevModeDashboard.png)

![DevModeCreateOrg](https://github.com/ComputerElite/wiki/blob/main/BM/DevModeCreateOrg.png)

##### Add yourself to the organization
After you created your Organization you have to add your Facebook profile to your Organization by Selecting your Organization in the drop down and then clicking on Members.
There you add a new Member with the Role Admin and put in the Username of your Facebook profile. After that you click add and the user should be added.

![DevModeCreateOrg](https://github.com/ComputerElite/wiki/blob/main/BM/addmember.png)

## Enable Developer mode in the oculus app
Then you should be able to enable the developer mode in your Oculus app on your smartphone.

![EnableDevMode](https://github.com/ComputerElite/wiki/blob/main/BM/EnableDevMode.png)


#### Setup your Phone

1. Download the [SideQuest app from the Google Play store](https://play.google.com/store/apps/details?id=side.quest.mobile)
2. Follow [this written guide](https://github.com/ComputerElite/wiki/wiki/Enable-Developer-Mode-for-OQ) to Enable
Developer Mode on your Quest.
3. Enable Developer mode on your Phone
    1. Go into your Android settings
    2. Scroll to "About phone" and open it
    3. Tap "Software information"
    4. Tap the "Build number" field until it says Developer mode enabled. This should take about 7 taps.
4. Enable USB debugging on your Phone
    1. Go back to settings
    2. Tap "Developer options"
    3. Activate USB debugging

#### Installing BMBF with your Phone
:::warning
Before modding, run Beat Saber once, play a level and immediately fail!
:::

Open Sidequest on your Phone connect and your Quest with your phone via the USB Cord.
You should get a USB debugging pop-up in your Quest and on your phone. Select allow on both devices and if you prefer,
select always allow.

Now if SideQuest picked your Quest up you should see the SideQuest logo with a green dot next to it at the bottom of
your Screen.

Then install BMBF by clicking the search icon at the top of SideQuest and search for `BMBF`.
You should see an app with an unicorn as symbol. Tap on that and click `INSTALL TO HEADSET`.

Afterwards you should have BMBF installed on your Quest and are ready to mod Beat Saber.

#### Setup Beat Saber
After successfully installing BMBF onto your Quest you should be able to find it in your Quests library under unknown sources.

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

Open it and allow file access after starting it if prompted. Now follow the on-screen instructions carefully.
After you finished you should see [BeastSaber](https://bsaber.com).

If at any point during the install process, you get the Restore App popup just click Close.
This warning is directed to pirated versions of the game so there will likely be no consequences for ignoring it if you
have a legitimate copy.

Now you can continue with the [Core Mods](/quest-modding.html#core-mods) step of the installation process as if you were modding with your PC.
