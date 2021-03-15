---
sidebar: auto
tags:
  - bsmg
  - beat saber
  - wiki
  - mappning
  - göra banor
  - hur är beat maps gjorda?
  - anpassade banor
  - göra egna banor
  - anpassade kartor
description: |
  För många animebanor? Inte tillräckligt med animebanor?
  Ta saken i egna händer och lär dig att göra banor här!
---

# Mappning

För många animebanor? Inte tillräckligt med animebanor?  
Ta saken i egna händer och lär dig att göra banor här!

::: tip INFO  
If you have feedback on how we can improve the mapping resources fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform)!

You can also visit `#mapping-discussion` on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) to get involved! :::

* [Mappningsordlista](./glossary.md)

## Mappning Snabbstart
> Wikin är dina byggstenar, gemenskapen är din inspiration, och du är kreativiteten.

Great mappers are not made in a day. It takes dedication with no one really able to hold your hand. The best we can do is provide you the tools with this wiki and clarify any questions you have to succeed in your mapping career!

1. Ladda ner de nödvändiga verktygen: en [ljudredigerare](https://www.audacityteam.org/) och en [nivåredigerare](#map-editing-resources).
2. [Konfigurera din ljudfil](#audio-editing-resources), hitta och bekräfta rätt BPM, och exportera i OGG-format.
3. Set up your song in your mapping editor (steps vary by editor but here's the [user guide](./mediocre-map-assistant.md) for MMA2).
4. Get mapping! Review [basic mapping practices](./basic-mapping.md) before you start. [Playtest](#playtesting) your own work early and often while mapping.
5. Get lighting! Review [basic lighting information](#lighting-practices). Simple manual lighting is easier than you think!
6. Get your map [playtested](#playtesting)! Third-party playtesting via the [BSMG Discord](https://discord.gg/beatsabermods) is highly recommended to get constructive feedback and to get past your own "map blindness."
7. Once your song has been mapped, lighted, and playtested you’re ready to [release](#publishing-songs) your song to the world on BeatSaver.

### Videohandledning
Text guides aren't your thing? Checkout these video series!  
:::tip Remember: The text guides on this wiki are always more up to date as it is easier and quicker to change. :::

#### Rekommenderat

* [Helen Carnate's Mapping Tutorial](https://www.youtube.com/watch?v=6O3sXmh-kAA) - A 17 minute guide to get started mapping!
* [Fruhead's Beginners Guide to Mapping](https://www.youtube.com/playlist?list=PL5F3WJ0s0nscdpqiWlOpM_4tJcF-CnWbm) - A comprehensive lecture series on making your first map.
* [Cyrix's Patterns to Avoid as a New Mapper](https://www.youtube.com/watch?v=mgGaqZ20Scw) - Covers the most common issues discussed in [Basic Mapping](./basic-mapping.md).
* [TranquillizeMe's Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc) - Covers various lighting techniques and general lighting tips.

:::danger I watched this video by Elite Eric, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using any tutorials by Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Instead, you should follow the written guides here on the wiki, watch the vetted tutorials made by BSMG members linked above, or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::

#### Legacy-videor
::: warning These series use older editors in their tutorials (Mediocre Mapper and EditSaber). The UI and some processes have changed in the latest recommended editor, [MMA2](./mediocre-map-assistant.md) but the rest of the content is great! :::

* [BennyDaBeast's Mappningsvideor](https://bsaber.com/benny-custom-mapping/)
* [Freeek's Mappning- and redigerings-videor](https://www.youtube.com/playlist?list=PLYeZR6d3zDPgDgWogOwMteL-5SQWAE14b)

## Resurser för ljudredigering
Before mapping, you need to get your audio file ready so that it works with your map editor. This section will walk you through how to set up and edit your audio file using a free program called [Audacity](https://www.audacityteam.org/).

### [**Grundläggande ljudkonfiguration**](./basic-audio.md)
Can't make a map without audio. Learn how to setup your audio for easy mapping!

### [**Avancerad ljudredigering**](./advanced-audio.md)
A deeper dive in adjusting audio files such as making shorter versions or working with variable BPM.

## Resurser för redigering av banor

### Nivåredigerare i gemenskapen
::: warning Community editors often have more features and don't require a VR headset, but they can be buggy, so use with caution. ::: Keyboard shortcuts for these editors are available inside their respective in-editor menus with a cross-reference between all of them [available here](./editor-keybinds.md).

#### Mediocre Map Assistant 2
MMA2 is the most feature rich 3D editor and is used by the majority of the mapping community.

* [Nedladdning av Mediocre Map Assistant 2](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest)
* [Mediocre Map Assistant 2 användarhandbok](./mediocre-map-assistant.md)

#### Beatmapper.app
A 3D editor that runs in the browser, allowing anyone with a web browser to map. It works best for standard mapping without any extensions, but new features are being added.

* [Beatmapper Website](https://beatmapper.app/)
* [Beatmapper User Manual](https://beatmapper.app/docs/manual/getting-started)

#### ChroMapper - *Kommer snart*
A 3D editor that has stellar support for lighting, Chroma RGB, and shares similar assets with Beat Saber, allowing for a more accurate preview. ChroMapper is currently in closed beta with no planned public release date.

::: tip Interested in making your own editor or converter? You may find the [Map Format Page](./map-format.md) and the [SongCore Readme](https://github.com/Kylemc1413/SongCore/blob/master/README.md) helpful! :::

### Den officiella redigeraren
The official editor is developed and supported by Beat Games and pre-installed with the Steam VR or Oculus PC versions of Beat Saber. It makes playtesting convenient with one-click access to your work-in-progress in-game. The official editor is 2D and requires good visualization skills to translate well to a 3D play space, which can be challenging for new mappers. The vast majority of mappers use a [Community Editor](#community-editors).

* To access, launch the editor from within Beat Saber in your HMD or use fpfc launch parameters to open directly from your PC
* Check out Megalon's [Official Editor Tutorial Video](https://www.youtube.com/watch?v=5Ex6sOEVgrM) for an overview of standard mapping!

Keep in mind the following features that official does not have compared to the [Community Editors](#community-editors) available.

* Ovanlig precision som 1/5 och tillhörande multiplar.
* Regelbunden autosave och återställning (nivåredigerare skapar autosaves endast vid testning eller sparande)
* Flexibel mass-select, kopiering och inklistring
* Redigera på plats (ändra riktningen på block utan att behöva ta bort dem)
* Stöd för Chroma RGB
* Ljudförskjutning för synkronisering med banor. (Parameterarna i den officiella redigeraren förskjuter/försenar inte bara låten utan även hitsounds)
* Felkontroll
* Medverkandefält
* Stöd för Mapping eller Noodle Extensions

#### Migrera från officiell redigerare till en Community Editor
Although it is recommended to start setup again following the [Quick Start](#mapping-quick-start) guides with a [Community Editor](#community-editors), it is possible to transfer your work in the Official Editor over.

1. Installera en [Community Editor](#community-editors)
2. Leta reda på dina banor i spelets `CustomLevels` -mapp.
    * Steam-exempel på plats: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels`
    * Oculus-exempel på plats: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomLevels`
3. Flytta den till den mapp som din redigerare letar i. Detta är vanligtvis `CustomWIPLevels` i mappen `Beat Saber_Data`.
    * Steam: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomWIPLevels`
    * Oculus: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`
4. Konvertera din ljudfil till formatet `.ogg` från `.wav` om du inte har gjort det.
    1. Ladda ner och installera [Audacity](https://www.audacityteam.org/)
    2. Öppna `.wav` -filen i Audacity
    2. Klicka på `File menu -> Export -> Export as OGG.`
    3. Namnge din fil `song.ogg` och klicka <kbd>Spara</kbd>.
    4. Placera filen `song.ogg` i nivåmappen.
        * Du behöver inte längre din `.wav` -fil i denna mapp
5. Öppna banan i din community editor och ändra namnet på låtfilen till `song.ogg` och klicka på spara.

You are now ready to continue editing your map!

### Ytterligare mappningsverktyg

* [BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit**  
  A convenient way to see how your map might look in game without the game.
  * IOS and Safari are currently not supported
* [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) av **+1 Rabbit**  
  En uppsättning verktyg för mappare som inkluderar:
  * **Schema Fixer:** Åtgärda enkelt banor gjorda i Mediocre Mapper Mk4.1 och Mk5 för uppladdning till BeatSaver.
  * **Tempo Changer:** Ändra BPM för en hel bana och skifta blockplaceringar.
  * **Offset Remover:** Removes editor offset and snaps notes/obstacles/events to common precisions to try and mitigate floating point error.
  * **Note Sorter:** Sorterar oordnade block/hinder/händelser i nivåfilen för att fixa stackspawning.
  * **Copy timing:** Flyttar block i en svårighet baserat på en annan inom ett visst fönster. Användbart för att tillämpa små förändringar i timing över alla svårigheter för specifika ljud.
  * **Copy Lighting:** Copies all of the lights, with the option to include/exclude custom events from one difficulty to all other difficulties.
  * **Map Diff:** Jämför mellan två versioner av en bana. Useful for testplayers and Ranking Team members to see if any changes were made.
* [Parity Checker](https://galaxymaster2.github.io/bs-parity/) by **GalaxyMaster**  
  An error checker tool that focuses on finding issues with parity in a map.
* [Map Check](https://kivalevan.github.io/BeatSaber-MapCheck/) by **Kival Evan**  
  An error checker tool that is much more versatile than the one built into MMA2
* [BeatMapper Tools](https://mappers.beatmappertools.com/) by **Darkuni**  
  A utility for users of Mediocre Mapper and Mediocre Map Assistant 2 to easily convert, test, and package their maps
* [noodleLister](https://github.com/bloodcloak/noodleLister#readme) by **Bloodcloak**  
  Easily compile a game playlist from a txt file containing BeatSaver map keys.
* [BeatMerge](https://github.com/ZelonGames/BeatMerge#readme) by **DarkGrisen**  
  Ever thought that it is a lot of annoying work to make big maps with other people or to perfectly cut the audio files so you can merge them manually later? This tool allows you to merge two or more maps into one single super long map.
* [Cinder](https://github.com/zhaey/cinder#readme) by **zhaey**  
  Python program that converts stepmania `.sm` files to Beat Saber `.dat` files for timing notes.

#### Legacy-verktyg

* [BPM Saber](https://github.com/zevdg/bpm-saber#readme) av **Zevdg**  
  **Fungerar endast på gamla .json-filer. For .dat maps use the Tempo Changer in +1 Rabbit's Mapping Tools.** Change the BPM of an entire map and shift block placements accordingly
* [BPM Saber](https://bsaber.com/bpmsaber/) av **Elliotttate**  
  Ett verktyg för att hitta BPM för en låt genom att ladda upp eller trycka in.
* [osu! Editor Timing Tutorial](https://www.youtube.com/watch?v=nIX0koHzW8c&t) by **Fayhe**  
  Video guide on using the timing feature of osu!'s editor to find map bpm.

### Användbara Mods
Here are some mods that might make your mapping workflow a little easier.

* [SiraUtil](./basic-lighting.md#in-game-with-fpfc) by **auros**  
  With the First Person Flying Controller (FPFC) launch parameter, this allows you to control the game while a map is playing with your keyboard and mouse without using a headset. See the section in [Basic Lighting](./basic-lighting.md#in-game-with-fpfc) for links to the mods and how to set it up.
* [PracticePlugin](https://github.com/Kylemc1413/PracticePlugin) av **Kyle1413**  
  Plugin för Beat Saber för att kontrollera uppspelningshastighet, söka igenom låtar och konfigurera loopande sektioner. Install the latest version from [ModAssistant](https://github.com/Assistant/ModAssistant#readme)!
* [ReLoader](https://github.com/Kylemc1413/ReLoader) av **Kyle1413**  
  Låter dig ladda om beatmaps i practice mode utan att behöva gå tillbaka till menyn för att uppdatera. Väldigt praktiskt för väggbanor.

## Mappningspraxis
> "You have to know the rules before you can break them."  
> \- Uninstaller

There is no holy bible of mapping but this section of the wiki includes a lot of tribal knowledge from the community on best practices at all levels of mapping. Our advice is to follow these rules until you're comfortable with your skills and then get creative, experiment, and innovate!

### [**Grundläggande mappning**](./basic-mapping.md)
All new mappers need to read this, **no exceptions!**

### [**Mer avancerad mappning**](./intermediate-mapping.md)
A more in-depth look at many mapping topics **(This page is still a work in progress!)**

### [**Utökad mappning**](./extended-mapping.md)
Mapping Extensions, Extra Characteristics, and 360&deg;/90&deg; mapping

### Mappningsrollen
To apply for the **Mapper** role on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) you must have released three solid/playable maps (collaborations are acceptable) and complete the [Mapper Role Submission Form](https://forms.gle/mj66J3UopTykFJjXA). Your application and maps may take a decent amount of time to be reviewed and approved.

### Moddning & Rankning
Maps that meet specific [Ranking Criteria](https://scoresaber.com/criteria) and go through an intensive review process called "modding" have the potential to become ranked, awarding players Performance Points (PP) toward global leaderboards. More information and an in-depth FAQ is available on the [ScoreSaber Discord](https://discord.gg/WpuDMwU)

* Prior to requesting ranking, mappers should thoroughly review the ranking criteria and [metadata standards](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) and have their map modded by a knowledgeable source.

:::tip Want an even more detailed look? Review the [Ranking Criteria](https://scoresaber.com/criteria) for some of the more ambiguous ranking considerations. :::

* Once your map has been modded and revised, it’s ready to be presented to a ranking team member or recruit to review.
* If the ranking team member deems the map acceptable it will be added to the ranking request queue to be voted on by the full ranking team.

## Belysningspraxis
A map is not finished until some form of lighting is included. Lighting can range from very basic to incredibly detailed using additional mods to enable more features.

### [**Grundläggande belysning**](./basic-lighting.md)
Learn the various aspects to lighting your map manually

### [**Mer avancerad belysning**](./intermediate-lighting.md)
Take your lighting skills a bit further into strobing, ring spins, and contrast practices

### [**Avancerad belysning**](./advanced-lighting.md)
Advanced and nuanced techniques, lighting for custom platforms, and Chroma RGB **(This page is still a work in progress!)**

### Ytterligare resurser
Older guides linked here as we migrate their content over to the wiki pages.

* [Beginner's Guide to Lighting](https://docs.google.com/document/d/1wpZgBeOD1-UbJpXf-b6gX5ICNYygCd6UK6LOPm-t5QM/edit) by Puds
* [Lighting Environment Guide](https://bsaber.com/creating-lighting-environment-guide/) by ManDynasty
* [Using Flash & Fade Lighting Events](https://bsaber.com/creating-lighting-how-flash-fade-notes-actually-work-in-game/) by ManDynasty
* [Side Laser Speed Reference](https://docs.google.com/spreadsheets/d/1tIERmSyFI4ssjDkE-oJjBBvUZUJ7eoVhCQyM3_BsJwE/edit?usp=sharing) by LittleAsi

### Automatiskt ljus
Not ready to make your own lighting? Here are some programs to do it for you. Keep in mind, creating simple manual lighting is not difficult and will always be better at expressing the atmosphere of the song than using these programs.

* [Lolighter](https://github.com/Loloppe/Lolighter#readme) by **Loloppe#6435** - Standalone program for automated lighting and has other features to modify your map.
* **Lightmap** - It is integrated into Mediocre Map Assistant 2 and can be accessed in the error checker menu.

## Playtesting
Testing your work is a **critical** part of mapping. Testing as you work helps you adjust for major playability issues and get a feel for your map. [Third-party or "outside"](#community-third-party-testing) playtesting is when someone other than yourself tests your pre-release map and provides constructive feedback and is helpful in highlighting issues to which you may be "map blind."

::: danger You **DO NOT** need to upload your map to BeatSaver in order for you or anyone else to test. :::

* If your map is using the 1.0 song format (your files are .json and .ogg) you must convert your map using one of several available tools like [Songe Converter](https://github.com/lolPants/songe-converter) by lolPants or [BeatMapper Tools](https://mappers.beatmappertools.com/) by Darkuni. **Update your editor to MMA2 or Beatmapper**. See [Community Editors](.#community-editors) for links.
* If your map is using the 2.0 song format (your files are .dat and .ogg/.egg) you’re ready to test.

### Testa på en PC
Follow these steps to test any of your maps made with a community editor using PC-based VR.

1. Om din WIP-låtmapp inte redan finns i `Beat Saber_Data\CustomWIPLevels` så placera en kopia där.
2. Access your map in-game via the CustomWIPLevels category in the song pack menu. Use practice mode to play (the button next to the play button).

**Made changes to your map while the game is open?**  
Click on the game window. Then while you are on the Main Menu or Song Select Menu press <kbd>Ctrl + r</kbd> on your keyboard. Your changes will be loaded without needing to restart the game!

::::tip OBS

* You will need to have the **SongCore** mod installed in order to see the CustomWIPLevels category and use the <kbd>Ctrl + r</kbd> shortcut.
* Having duplicate map files in `CustomLevels` and `CustomWIPLevels` can cause problems.
* Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be loaded by the game! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way to ensure your map loads in-game. :::

### Testa på en Quest
Follow these steps to test any of your maps made with a community editor using an Oculus Quest. You must have [SideQuest](https://sidequestvr.com) and [BMBF](https://bmbf.dev/stable) installed.

1. Zippa upp låten som vanligt, zippa filerna och inte själva mappen. [How to Video](https://streamable.com/u20ci)
   * If you are using [MMA2](#mediocre-map-assistant-2) there is a `Package To Zip` button you can use in the song info screen to do this for you.
2. Upprätta en anslutning till din Quest från din dator. Detta kan göras på två sätt, [trådbundet](#connect-wired-usb) eller [trådlöst](#connect-wirelessly).

#### Ansluta trådlöst

1. Öppna BMBF på ditt Oculus Quest. BMBF måste vara igång för att anslutningen ska lyckas.
2. Inuti BMBF gå till fliken `Tools`. Där bör du se en webbadress och ett versionsnummer som liknar vad som visas nedan. <br/>![ip](~@images/mapping/ip.png)
3. Öppna en modern webbläsare på din dator och skriv in adressen i sökfältet. You should be greeted with this screen below.<br/>![BMBF Web](~@images/mapping/bmbfweb.png)
4. Du är nu ansluten! Fortsätt på [Ladda upp testfil till Quest](#upload-test-file-to-quest)-stegen nedan.

#### Ansluta trådbunden USB

1. Anslut din Oculus Quest till datorn via USB och håll SideQuest öppet
2. Öppna BMBF på ditt Oculus Quest. BMBF måste vara igång för att anslutningen ska lyckas
3. Look at the top of SideQuest, which will give you the IP to get into BMBF. You can also access your IP through the Tools tab of BMBF.
4. Type into any web browser: "192.168.X.XXX:50000" with X being replaced with the IP displayed in SideQuest, or the Tools tab<br/>![Quest IP](~@images/mapping/quest_ip.png)  
   For example, from the picture you would enter `192.168.0.19:50000` into a web browser of choice (Chrome, Firefox, etc.).
5. Du är nu ansluten! Fortsätt på [Ladda upp testfil till Quest](#upload-test-file-to-quest)-stegen nedan.

#### Ladda upp testfil till Quest

1. Dra och släpp filerna till BMBFs uppladdningssida (indikeras av /main/upload i slutet av länken)
2. När du har laddat upp filerna klicka på Sync to Beat Saber i det övre högra hörnet av sidan <br/>![BMBF Browser](~@images/mapping/bmbf_browser.png)
3. Access your map in-game via the Custom Songs playlist in the song pack menu. Use practice mode to play (the button next to the play button).

:::tip NOTE

* If after deleting an old copy of a map and reuploading it with a new version on a quest still results with the old version being played, rename the zip file before uploading it through BMBF.
* BMBF may have issues importing your map if your song file or cover image name contains `-` or spaces. You may need to rename these files and update the song info accordingly for a successful upload.
* Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be loaded by BMBF! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way to ensure your map loads in-game.
* If your song audio file was automatically converted to `.egg`, you may run into issues when uploading onto BMBF. Try renaming the `.egg` back to `.ogg`. :::

### Community / Tredjepartstestning
The `#testplays` channel in the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) makes it easy to have your work checked by knowledgeable mappers. Playtesters will provide constructive feedback on how to improve your map in either video or text format in a DM or in the `#mapping-discussion` channel.

:::warning Some things to note...

* Maps with less than 1 minute done will not get much feedback or be tested. Consider asking in `#mapping-discussion` to see if someone will take a look instead.
* Challenge/Super High difficulty maps may take longer to get feedback since there are not many playtesters at this skill level.
* Please keep to serious posts where you are looking to improve your mapping skills. Meme or Shitpost maps do not belong as they end up wasting the testplayers time. :::

1. Create a compressed .zip file of the individual song files.
    * If you are using [MMA2](./mediocre-map-assistant.md), you can press the `Package Song to Zip` button in the Song Info Settings to create a compressed .zip of your map.  
      ![Package Song to Zip button](~@images/mapping/mma2-package-zip.jpg)
    * If you are using [Beatmapper.app](#beatmapper-app), follow their [downloading instructions](https://beatmapper.app/docs/manual/publishing#downloading-your-map).
    * You can manually create the zip by following this [How to Video](https://streamable.com/u20ci) if you are not using a web based editor.
2. Upload your map to `#testplays` using the following format:

* **Map:** The name and artist of your map
* **Length:** The length of the song
* **BPM:** The BPM of the song
* **Difficulty:** Which difficulties are included
* **NPS:** The notes per second of each difficulty available
* **Feedback:** Any requests for feedback (specific difficulties to be tested, things to look for etc.)
* **Status:** What state is the map in? (i.e., First draft complete, no lights; 1:45 mapped; release candidate w/ lighting; etc.)

3. Testers will usually look at your map within 1-7 days and will use a number of reaction emojis (listed in `#testplays` pinned posts) to track testing status.

:::warning Remember: If you make changes after posting or getting feedback React with a 🛑 `:octagonal_sign:` to indicate stop testing this version :::

You can copy and paste the following template into Discord:

```txt
**Map:**
**Length:**
**BPM:**
**Difficulty:**
**NPS:**
**Feedback:**
**Status:**
```

### Help Playtest
Do you like the idea of playing new songs before they are ever released on BeatSaver? Do you want to help shape the mapping community? Consider becoming a testplayer! Check out the [How to Testplay](./how-to-testplay.md) guide to get started!

## Publicera låtar
Once your song has been mapped, lighted, and playtested and it’s a finished product you’re ready to release it to the world!

### BeatSaver
[BeatSaver](https://beatsaver.com/) is the public repository for all custom Beat Saber maps. Songs must be in the 2.0 song format (files are .dat and .ogg/.egg/.wav) to be uploaded.

#### Hur man släpper en bana

::: danger

* Please **DO NOT** upload an incomplete WIP map to BeatSaver!
  * Uploading to BeatSaver equates to "Putting it on the store shelf" and should **only** be your final version.
  * See the [Playtesting](#playtesting) section for instructions on testing your map. :::

1. [Create an account](https://beatsaver.com/auth/register) on BeatSaver.
    * Beatsaver usernames may only have alphanumeric characters and `-`. Usernames with spaces or `_` for example, are not allowed.
    * If you did not receive a verification email, fill out this [contact form](https://beatsaver.com/contact).  
      **Note** you must provide a valid username *and* the email used to sign up in the form to complete the verification!
2. Click the <kbd>Upload</kbd> link in the top-right.
3. Add your BeatSaver map name and map description. Only the map name is searchable so be sure to include song name, song artist, and other terms that might make it easier to find your map.
    * Use "tags" like (Chroma), (OneSaber), or (Mapping Extensions) if your map uses some special modifications or characteristics you want to highlight.
    * Putting a link to a playthrough video in the map description can help you get more downloads as it is easier to share your map to others and lets people know what to expect.
4. Add your .zip file and click the <kbd>Upload</kbd> button.

::: tip NOTE Map files currently cannot be updated on BeatSaver. If you need to upload a new version of your map you will need to delete the old one and re-post. :::

### BeatSaver Troubleshooting
Here are solutions for some common errors when uploading a Beatmap.  
Encountered something not listed here? Drop into `#mapping-discussion` for assistance.

:::danger Remember:

* You should have your map [playtested](#playtesting) before uploading!
* You do not need upload maps created by auto-generation software such as Deepsaber or Beat Sage to install them in your game. If you are on PC, you can unzip the files into your `CustomLevels` folder. If you are on Quest, follow the [Testing on a Quest](#testing-on-a-quest) steps to install the map. :::

---

**Something went wrong! Try again later.** This is the default error message, causes include:

* An upload that is close to or over the actual file size limit of 14.3 MB. The 15 MB listed is not accurate at this time. Reduce the audio export quality slightly to make space.
* Unsupported characters are present in a file. Make sure your metadata and bookmarks don't contain special characters such as, Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), Chinese (汉语/漢語), Arabic (اَلْعَرَبِيَّةُ‎), and accented characters (Ä/é/õ/Æ/ø/ß/Œ/Ð/ƒ).
  * [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit** may be useful in finding the specific problem.
* Expired web session. If you refresh the page, you should be logged out. Login and try to upload again.

---

**Field `._customData._customEnvironment` cannot be blank.**

* Your files are not compliant the map schema. See [Schema Change](#beatsaver-data-schema-change-october-27-2019) for solutions.

---

**Beatmap zip contains an illegal file!**

* Usually caused by extra/unsupported files, such as gifs, in the zip.

---

**Beatmap already exists!**

* The exact map files were uploaded previously. You must change something small in your map (i.e., remove a light block, save the map, replace the light block, and save again) to be able to upload.

---

**Beatmap does not contain an Info.dat file!**

* Usually caused by having the files in a subfolder. You need to zip the files instead of the folder. [How to Video](https://streamable.com/u20ci) Or use the handy export button in your editor instead. **NOTE: MMA2's export button does not include contributor images in the zip.**

---

**One or more beatmap difficulty files cannot be found!**

* You might have forgotten to include all of your difficulty files are in the zip.
* A difficulty's `"_beatmapFilename"` in the `Info.dat` might be using a different file name than what is present in the folder.
* A deleted difficulty is still being referenced in your `Info.dat` file. Check to make sure you do not have unintended difficulties in the `"_difficultyBeatmaps"` cluster of each present characteristic.

---

**Error in `MapDifficulty.dat`. Root should NOT have additional property: `_time`.**

`_time` is the common error for this type of message. However, the same solution applies if a different property is flagged.

* Your files are not compliant the map schema. See [Schema Change](#beatsaver-data-schema-change-october-27-2019) for solutions.

---

**Beatmap could not be parsed!**

* This could be caused by extreme server load. Try again later or ask in `#mapping-discussion`.

---

**Field `._customData._contributors[]._iconPath` contains an invalid filename.**

* Utilizing the contributors field requires all aspects to be included. Make sure all 3 aspects (Role, Name, iconPath) are filled and there is a unique square image for each iconPath entry in your zip.

---

#### BeatSaver Data Schema Change - October 27, 2019
BeatSaver now enforces a schema in order for your maps to be uploaded, of which public MediocreMapper is not compliant with. The most breaking change happened in the difficulty data files, where MM-specific fields were moved inside a `_customData` object.

**Resolution #1:**  
Switch to the [Mediocre Map Assistant 2](#mediocre-map-assistant-2) editor. Open each difficulty file and save it to correct the schema. Use MMA2 going forward.

**Resolution #2:**  
Use the [Schema Updater Utility](https://skystudioapps.com/mapping-tools/#schema-fixer) by **+1 Rabbit** to fix your files before uploading. Then switch to a [supported editor](#community-editors).

**Resolution #3 (The Hard Way):**  
If you wish to fix this yourself, here is a quick template which shows you where everything should go in order for your map to be compliant with BeatSaver's new schema.

Alternatively, since `_customData` is **NOT** a required field, you can go ahead and remove everything that would be placed in there, and upload that result.

```json
{
  "_version": "2.0.0",
  "_notes": [],
  "_obstacles": [],
  "_events": [],
  "_customData": {
    "_bpmChanges": [],
    "_bookmarks": [],
    "_time": 0
  }
}
```

To be compliant with the new schema, please also find and remove or fill in any **blank fields** in your `Info.dat` or difficulty files.

### BeastSaber
[BeastSaber](http://www.bsaber.com) is a song review and curation site with a social side for member profiles, forums, news, and tutorials. All songs published on BeatSaver are mirrored to BeastSaber within 10-15 minutes. Additionally, maps deleted from BeatSaver may take up to a day to be removed from BeastSaber.

### Mapping Anxiety
If you're finding it difficult to muster up the courage to upload your map, or are finding it emotionally taxing coping with a lack of downloads or a lot of dislikes, you're not alone. Many mappers have experienced these feelings. You can read more about it on the [Coping with Mapping Anxiety](./mapping-anxiety.md) page.

## [Credits](./mapping-credits.md)
Over *thirty* different mapping guides and tutorials have been combined into this wiki so that it can be maintained by the community as a whole. Many many **MANY** thanks to the mappers who blazed this trail and contributed content. Check out the whole list [here!](./mapping-credits.md)
