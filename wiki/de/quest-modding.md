---
sidebar: auto
---

# Quest Modding

## Vorwort

* Diese Anleitung ist sowohl für die Quest 1 als auch Quest 2.
* Niemand wurde bisher wegen Moddings gebannt.

::: danger DISCLAIMEr Solltest Du Mods verwenden, sollte dir bewusst sein:

* Dass du möglicherweise Probleme bekommst, die im normalen Spiel nicht existieren. 99,9% aller Fehler, Abstürzen und Verzögerungen entstehen aufgrund von Mods.
* Mods werden durch Updates oft unbrauchbar und das ist normal - Bitte sei geduldig und respektvoll wenn dies passiert. Modder sind Freiwillige mit einem richtigen Leben.
* Beat Games versucht nicht mit Absicht, Mods kaputt zu machen. Sie versuchen an der Code-Grundlage zu arbeiten, welches Mods manchmal unbrauchbar macht. Dies geschieht aber nicht mit Absicht.

Bitte greife die Entwickler im Bezug mit Problemen bei Mods nicht an. Modder und Entwickler sind zwei verschiedene Gruppen. Sei kein Trottel. :::

## Installation
Derzeit ist BMBF auf SideQuest angewiesen. Die einzige Möglichkeit, Custom Songs und Mods zu installieren, ist, sich ebenfalls SideQuest auf einem Rechner zu installieren.

Wenn du keinen Zugang zu einem PC hast, kannst du ein [Android Handy](#installing-bmbf-with-an-android-phone) verwenden.

* [BMBF apk](https://bmbf.dev/stable) :::warning Wenn du BMBF installierst und du das Spiel modifizierst, wird der offizielle Mehrspielermodus sowie das Anzeigen und Hochladen von Spielständen in den Basis-Spiel-Ranglisten deaktiviert. If you would like to play modded multiplayer, you need the mod, `Beat Together`, which allows for cross-play between pc and quest and allows for custom songs to be used if all parties own said song. Den Mod findest du in der Beat Saber Modding Group in `#quest-mods` oder auf der [Questboard](https://questmodding.com) Seite.

Um Ranglisten für Custom Songs zu erhalten und um Performance-Punkte (PP) aus gerankten Songs zu erhalten, benötigst du den [ScoreSaber](https://new.scoresaber.com/quest) Mod. [Dieser Link](https://new.scoresaber.com/quest) bringt dich auf die ScoreSaber Seite, um es einzurichten. Scoresaber ersetzt nicht die Bestenlisten des Basis Games, sondern fügt nur Bestenlisten für Custom Songs hinzu. **Hinweis:** Scoresaber wurde noch NICHT für Beat Saber 1.13.2 aktualisiert. :::

### BMBF mit SideQuest installieren
Solltest Du dies noch nicht bereits getan haben, lade dir hier [SideQuest](https://sidequestvr.com/#/setup-howto) herunter

Öffne SideQuest und verbinde die Quest mit deinem Computer.

:::Tipp Wenn du Beat Saber bereits modifiziert hast oder Scores hast die du sichern willst, [sichere zuerst deine Speicherdaten!](#backup-save-data-using-sidequest) :::

Wenn du ein modifiziertes Spiel hast, musst du es auch deinstallieren, indem du auf`UNINSTALL APP` drückst. Du kannst deinen Spielstand später im gleichen Menü wiederherstellen, nachdem du es modifiziert hast.

Wähle die unten gezeigte Schaltfläche `APK aus Ordner installieren` und suche die neueste BMBF APK, die du heruntergeladen hast, und klicken sie an, oder ziehe einfach die BMBF apk in die SideQuest App. Bei beiden Methoden wird BMBF auf deiner Quest installiert.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Stelle nach erfolgreicher Installation sicher, dass Du die neueste Version von Beat Saber installiert und unmodifiziert ist.

:::Warnung Bevor du moddest, starte Beat Saber einmal, spiele ein Level und scheitere sofort! :::

Nachdem du Beat Saber einmal gestartet hast, öffne BMBF aus unbekannten Quellen, wie das untenstehende Bild zeigt. ![UnknownSourced](~@images/beginners-guide/quest_home-menu.jpg)

Du solltest jeden Schritt so befolgen, wie er beschrieben ist. Danach solltest Du dir [bsaber.com](https://www.bsaber.com) ansehen. Hier kannst Du alle verfügbaren Custom Songs herunterladen. Du kannst auch auf das Globus-Symbol oben rechts klicken und gehe dann auf Beatsaver, um ebenfalls Lieder herunterzuladen.

Wenn Du während des Installationsprozesses irgendwann das `App zurücksetzen` Popup siehst, klicke einfach auf `Schließen`. Diese Warnung richtet sich eher an raubkopierte Versionen des Spiels. Wenn du es also nur moddest, wird es wahrscheinlich keine Konsequenzen haben, wenn du sie ignorierest.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

Fahren mit dem Schritt [Core Mods](#core-mods) des Installationsvorgangs fort.

### BMBF mit einem Android Telefon installieren
Dies ist **NICHT** der empfohlene Weg zur Installation von BMBF und sollte nur verwendet werden, wenn Du keinen Zugang zu einem PC hast.

* [Anforderungen](#requirements)
* [Telefon einrichten](#setup-your-phone)
* [BMBF mit deinem Telefon installieren](#installing-bmbf-with-your-phone)
* [Beat Saber einrichten](#setup-beat-saber)

#### Anforderungen

* Ein Android-Telefon oder Android-Tablet (iPhones oder iPads werden nicht unterstützt)
* Eine **bezahlte** Version von Beat Saber im Oculus Quest Store
* Ein Kabel um deine Quest mit deinem Telefon zu verbinden (wenn dein Telefon über USB C geladen wird, sollte das Ladegerät, das mit Ihrem Quest mitgeliefert wurde, funktionieren).

#### Telefon einrichten

1. Lade die [bugjaeger-App aus dem Google Play Store](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug&hl=gsw&gl=US) herunter
2. Lade die neueste [BMBF APK von bmbf.dev/stable](https://bmbf.dev/stable) herunter.
3. Folge [dieser schriftlichen Anleitung](https://github.com/ComputerElite/wiki/wiki/Enable-Developer-Mode-for-OQ) zum Aktivieren des Entwicklermodus auf Deiner Quest zu aktivieren.
4. Entwicklermodus auf Deinem Telefon aktivieren
    1. Gehe in deine Android Einstellungen
    2. Scrolle zu "Über Telefon" und öffne es
    3. Tippe auf "Software Informationen"
    4. Tippe auf das Feld "Build number", bis der Entwicklermodus aktiviert ist. Dies sollte etwa 7 Antippen erfordern.
5. USB-Debugging auf Deinem Telefon aktivieren
    1. Zurück zu Einstellungen
    2. Tippe auf "Entwickleroptionen"
    3. USB-Debugging aktivieren

#### BMBF mit Deinem Telefon installieren
:::Warnung Vor dem Modding Beat Saber einmal starten, ein Level starten und sofort scheitern! :::

Open bugjaeger on your Phone and connect your Quest. Du solltest ein USB-Debugging Pop-Up in Deiner Quest und auf Deinem Telefon erhalten. Wählen auf beiden Geräten "Zulassen" und wenn Du möchtest, wähle "Immer zulassen". Sobald Bugjaeger Deine Quest aufnimmt, installiere die BMBF APK indem Du folgendes tust:

![installAPKusingPhone.png](~@images/beginners-guide/InstallAPK.png)

Nachdem Du ok gedrückt hast, erlaube den Dateizugriff und wähle die Download-APK-Datei, die mit `com.weloveoculus.BMBF.apk` bezeichnet sein sollte. Die APK-Datei sollte nun auf Deiner Quest installiert werden.

#### Beat Saber einrichten
Nach der erfolgreichen Installation von BMBF auf deiner Quest solltest du diese in deiner Quest-Bibliothek unter Unbekannten Quellen finden können.

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

Open it and allow file access after starting it if prompted. Now follow the on-screen instructions carefully. After you finished you should see [BeastSaber](https://bsaber.com).

If at any point during the install process, you get the Restore App popup just click Close. This warning is directed to pirated versions of the game so there will likely be no consequences for ignoring it if you have a legitimate copy.

Now you can continue to the [Core Mods](#core-mods) step of the installation process.

## Manage Save Data

### Backup Save Data using SideQuest

Open SideQuest and connect your Quest to your PC. Go to `My Apps` located in the top bar of the window and find Beat Saber.

Navigate to `sdcard/Android/data/com.beatgames.beatsaber/files` using the SideQuest file explorer.

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they contain your scores and other settings!

### Restoring Save Data using SideQuest

To restore your data, open SideQuest and connect your Quest to your PC. Go to `My Apps` located in the top bar of the window and find Beat Saber. Using the SideQuest file explorer take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest) steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the `sdcard/Android/data/com.beatgames.beatsaber/files` folder.

Go back to the menu and press the circular arrows located beside your latest backup. Your scores and settings should now be restored.

## Mods installieren

### Core Mods
Before installing any additional mods look in the top right of the BMBF web interface, you should see a red button that says, `Sync to Beat Saber`. Click this and let it finish syncing. Then go to your `mods` tab in BMBF. Make sure that you have the 5 core mods:

* Codegen
* Goodbye bug
* PinkCore
* QuestUI
* Custom Types

:::danger All other mods will not work if these core mods are not listed and enabled.

If one of the core mods does not enable, delete that mod and click `Sync to Beat Saber` again to redownload it. Double check to see if it has been downloaded and enabled. If it still doesn't work, or mods are appear to be enabled, but not working in-game see [Core Mods don't work](#core-mods-don-t-work) for troubleshooting steps. :::

### In deiner Quest
:::warning Not all mods are available on QuestBoard!  
If a mod is not seen in here, you should follow the [Using Your PC](#using-your-pc) method instead. :::

Open BMBF in your Quest and go to the `Browser` tab, there you should see a globe icon similar to what's shown below. Click it, then click the `QuestBoard` button.

![globequestboard](~@images/beginners-guide/globequestboard.png)

You should be greeted with the [QuestBoard](https://www.questmodding.com/) website below. Next, select the `DOWNLOAD MODS` tab.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Scroll down with your thumbsticks. You can now select any mod from the list, seen below, and download it by hitting the download button next to it. Some downloads may redirect you to a website or GitHub page. If so, follow the instructions onscreen, or select the latest `.zip` in the Releases list, respectively.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### Using your PC
You can find and download other Quest mods from the [BSMG Discord](https://discord.com/invite/beatsabermods) in the `#quest-mods` channel.

:::warning Make sure your Quest and PC are on the same network and that you are using http and not https! :::

Open BMBF in your Quest and go to the `Tools` tab, there you should see a web address and a version number similar to what's shown below.

![ip](~@images/beginners-guide/ip.png)

On your PC, open your browser and type the address into the search bar.

You should be greeted with this screen below.

If this doesn't work [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Now just drag any Quest compatible mods into the upload box and sync. If the mod was originally made for an older version, then it won't automatically enable. To enable an old mod, go to the `Mods` tab and enable it from there.

## Songs installieren
::: tip Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before good mapping practices were established. Try downloading songs released between late 2019 and now to get the best custom levels experience. :::

### Inside your Quest
There are 2 sources to getting custom maps inside your Quest using the browser window.

* If you are looking for curated maps and playlists visit [BeastSaber](https://bsaber.com/)
* If you don't like the UI of BeastSaber you could also try [BeatSaver](https://beatsaver.com/)

Both have a OneClick™ button that easily installs that song onto your Quest. You can switch between these websites using the globe icon in the top right of the browser window.

An easy way to download different kinds of songs is to use `Syncsaber` you can access it by going into BMBF on your quest and clicking the tab called `Syncsaber`. Here you can download songs with a click of a button, you can chose from different "settings". For example you can download the top 20 songs in [Beatsaver's](https://beatsaver.com/) "hot" section or the 50 hardest ranked songs.

Another method is using the `Bookmark` feature on [Beastsaber](https://bsaber.com/). After creating an account you can click a little bookmark icon on a song and if you later delete all your songs from the Quest you can redownload the ones that are bookmarked with OneClick™.

### Using your PC
If you are unable to install songs inside your Quest, you can install maps using your computer similar to installing mods.

1. Visit [BeastSaber](https://bsaber.com/) or [BeatSaver](https://beatsaver.com/) on your computer
2. Download the zip
3. Follow the [Installing mods using your PC](#using-your-pc) steps up to the upload files screen.
4. Drag and drop the map zip in and it should be installed!

If the web interface doesn't load [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

:::tip You can also download playlists in the same way. You can find various playlists on [Beastsaber](https://bsaber.com/category/playlists/) or various community discords. You can also make your own using [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager) or [Playlist Editor Pro](https://beatsaberquest.com/playlisteditor-pro/).

If you want to test a map you have created see the [Testing on a Quest](/mapping/#testing-on-a-quest) Section in the Mapping Wiki section for steps on packing it up for testing! :::

## Modelle installieren
Join the [Qosmetics Community](https://discord.gg/qosmetics) to change how your menu title, sabers, bloqs or walls look in-game!

## Useful Links

* [Qosmetics Community](https://discord.gg/qosmetics) - Server dedicated to making and using sabers, bloqs, and walls for Quest.
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guides to create your own custom sabers, bloqs, and walls for Quest.
* [Questboard website](https://questmodding.com) - A place to get Beat Saber related news and info along with the latest mods releases!
* [Quesboard discord server](https://discord.gg/P7sUKVnP) - A quest community to hangout and talk about Beat Saber related stuff, you can also get a role to get notified when a new mod gets released!
* [Fixing Out of Sync Audio](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - In-game leaderboards for custom songs

## Problembehandlung
:::warning I watched this video by Elite Eric, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using any tutorials by Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::

### Adding mods from beatmods.com or models from modelsaber.com does not work
The reason adding mods from [BeatMods](https://beatmods.com/) or models from [ModelSaber](https://modelsaber.com/) doesn't work is because those mods and sabers are for PC Only.

Get Quest compatible Mods from [QuestBoard](https://www.questmodding.com/) or `#quest-mods` in the Beat Saber Modding Group Discord, with Quest compatible sabers, bloqs, and walls in the [Qosmetics Community](https://discord.gg/qosmetics). Once you have your mod or model zip use the [BMBF Web Interface](#using-your-pc) to install it.

### Sideloading BMBF failed
When sideloading BMBF you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF
signatures do not match the previously installed version; ignoring!`

You will need to uninstall the BMBF version on your Quest. You can do this from SideQuest's `My Apps` menu.

### Core mods don't work

If you are having problems with core mods, please verify that you are not trying to use any outdated mods. Any mod made for a previous game version is considered outdated. Once you have removed them:

1. Go to `Tools`
2. Click `exit BMBF`
3. Open BMBF again
4. Go to `Tools` again
5. Click `Quick fix`
6. Go to the `Browser` section of the BMBF app.
7. Click the small globe icon in the top right-hand corner
8. Click `QuestBoard`
9. Click `Download Mods`
10. Scroll down and click `Download All Core Mods`
11. Click `Sync to Beat Saber`

---

### BMBF web interface not loading
If your BMBF Web Interface is not loading, be sure that you're typing the IP from the tools tab into your browser on your computer that's on the same network. Make sure that:

1. Your IP is not `127.0.0.1`, if that shows up try rebooting your headset and/or router.
2. BMBF is open in the headset
3. There is `http://` at the beginning of the link, not `https://`
4. You have `:50000` at the end of your link
5. Your PC and Quest are on the same wifi network
6. Your IP is hasn't changed as it changes from time to time

If none of these work, restart your Quest and go through the list again.

---

### BMBF not loading configuration after a few minutes
This is likely due to using BMBF on a game version it was not built for. Such as using BMBF for Beat Saber version `1.13.0` when the version of the game installed on the headset is `1.12.2`.  
If the game version matches what the BMBF release page says its built for, try restarting your headset. If it still does not work use the [BMBF Web Interface](#using-your-pc) and click `Quick Fix` in the Tools tab.

### Beat Saber is black when I launch it
Open the library on your Quest. Click the three dots next to Beat Saber and then click `Permissions`. In the menu that pops up, enable storage permissions and try launching the game again.

---

### My Sabers and Mods wont enable/work
This is most likely due to having an outdated BMBF Client, grab the latest [BMBF Release](https://bmbf.dev/stable). If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.

* If your mod is supposed to be compatible with your version of BMBF, then make sure there is no folder separating the contents of the .zip file.
* If your level doesn't load then try installing mapping extensions from #quest-mods. It may also require the mod Noodle Extensions which isn't on Quest yet.
* If your BMBF is on the latest version and mods wont be enabled in game, uninstall Beat Saber with the uninstall BS button in the BMBF Tools tab then reinstall and remod.
* In very very very rare cases, BMBF does not have file permissions to copy mods into the right location. Check in SideQuest to make sure BMBF has file permissions.

---

### Beat Saber is crashing
If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the issue is fixed before asking for help in a support channel.

### I only see a white screen when i open BMBF
If you only see a white screen when you open BMBF from unknown sources, restart your quest and then it should be fixed

### My Beat Saber gets 3 dots when I launch
If your Beat Saber is getting 3 dots when launching make sure that:

1. You launched and played one song before modding the game
2. You're not using a pirated version of the game
3. Make sure you're using the latest version of BMBF
