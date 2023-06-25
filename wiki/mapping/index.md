---
prev: false
next: false
tags:
  - bsmg
  - beat saber
  - wiki
  - mapping
  - make levels
  - how are beat maps make?
  - custom levels
  - make custom maps
  - custom charts
description: |
  Too many anime maps? Not enough anime maps?  
  Take matters into your own hands and learn to map here!
---

# Mapping

Too many anime maps? Not enough anime maps?  
Take matters into your own hands and learn to map here!

::: tip INFO  
If you have feedback on how we can improve the mapping resources fill out this
[form](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform)!

You can also visit `#mapping-discussion` on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods)
to get involved!
:::

- [Mapping Term Glossary](./glossary.md)

## Mapping Quick Start

> The wiki is your building blocks, the community is your inspiration, and you are the creativity.

Great mappers are not made in a day. It takes dedication with no one really able to hold your hand. The best we can do
is provide you the tools with this wiki and clarify any questions you have to succeed in your mapping career!

1. Download the necessary tools for mapping: an [audio editor](https://www.audacityteam.org/) and a [map editor](#map-editing-resources).
2. [Set up your audio file](#audio-editing-resources), find and confirm the BPM, and export in OGG format.
3. Set up your song in your [mapping editor](#map-editing-resources) (steps vary by editor).
4. Get mapping! Review [basic mapping practices](./basic-mapping.md) before you start.
   [Playtest](#playtesting) your own work early and often while mapping.
5. Get lighting! Review [basic lighting information](#lighting-practices). Simple manual lighting is easier than you think!
6. Get your map [playtested](#playtesting)! Third-party playtesting via the [BSMG Discord](https://discord.gg/beatsabermods)
   is highly recommended to get constructive feedback and to get past your own "map blindness."
7. Once your song has been mapped, lighted, and playtested you're ready to [release](#publishing-songs)
   your song to the world on BeatSaver.

### Video Tutorials

Text guides aren't your thing? Checkout these video series!  
:::tip Remember:
The text guides on this wiki are always more up to date as it is easier and quicker to change.
:::

#### Recommended

- [Helen Carnate's Mapping Tutorial](https://www.youtube.com/watch?v=6O3sXmh-kAA) -
  A 17 minute guide to get started mapping using Mediocre Map Assistant 2!
- [Fruhead's Beginners Guide to Mapping](https://www.youtube.com/playlist?list=PL5F3WJ0s0nscdpqiWlOpM_4tJcF-CnWbm) -
  A comprehensive lecture series on making your first map using Mediocre Map Assistant 2.
- [ChroMapper Editor Guide](https://youtube.com/playlist?list=PLS0PknCDCujE3Tf1pkbkA_uUijkV6v52y) -
  A series of videos on how to use the core features of the ChroMapper Editor.
- [Cyrix's Patterns to Avoid as a New Mapper](https://www.youtube.com/watch?v=mgGaqZ20Scw) -
  Covers the most common issues discussed in [Basic Mapping](./basic-mapping.md).
- [TranquillizeMe's Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc) -
  Covers various lighting techniques and general lighting tips.

:::warning Tutorials on this page have been vetted by BSMG.
Other video tutorials may or may not contain accurate or up-to-date information,
and should be followed at your own risk.

If you would like to see if your tutorial can be listed here, please [contact us](https://bsmg.dev/contact).
:::

#### Legacy Videos

::: warning
These series use older editors in their tutorials (Mediocre Mapper and EditSaber).
The UI and some processes have changed in the latest recommended editor, [MMA2](./mediocre-map-assistant.md)
but the rest of the content is great!
:::

- [BennyDaBeast's Mapping Tutorials](https://bsaber.com/benny-custom-mapping/)
- [Freeek's Mapping and Editor Tutorials](https://www.youtube.com/playlist?list=PLYeZR6d3zDPgDgWogOwMteL-5SQWAE14b)

## Audio Editing Resources

Before mapping, you need to get your audio file ready so that it works with your map editor. This section will walk you
through how to set up and edit your audio file using a free program called [Audacity](https://www.audacityteam.org/).

### [**Basic Audio Setup**](./basic-audio.md)

Can't make a map without audio. Learn how to setup your audio for easy mapping!

### [**Advanced Audio Editing**](./advanced-audio.md)

A deeper dive in adjusting audio files such as making shorter versions or working with variable BPM.

## Map Editing Resources

### Community Editors

::: warning
Community editors often have more features and don't require a VR headset, but they can be buggy, so use with caution.
:::
Keyboard shortcuts for these editors are available inside their respective in-editor menus with a cross-reference between
all of them [available here](./editor-keybinds.md).

#### ChroMapper

**Now in open beta!** A 3D editor that has stellar support for lighting, Chroma, Noodle Extensions, 360/90 mapping, and
shares similar assets with Beat Saber, allowing for a
more accurate preview. By FAR the most feature-rich editor available to the community.

Joining the [ChroMapper Discord](https://discord.gg/wFjZt4z) is encouraged to access plugins, scripts, and application
support (mapping support is available in BSMG).

- [ChroMapper Launcher Download](https://cm.topc.at/dl)
- [ChroMapper First Time Setup Guide](https://chromapper.atlassian.net/wiki/spaces/UG/pages/917506/First-time+setup)
- [ChroMapper Wiki](https://chromapper.atlassian.net/wiki/spaces/UG/overview)

#### Mediocre Map Assistant 2

MMA2 was used by the majority of the mapping community until the ChroMapper open beta.

- [Mediocre Map Assistant 2 Download](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest)
- [Mediocre Map Assistant 2 User Guide](./mediocre-map-assistant.md)

#### Beatmapper.app

A 3D editor that runs in the browser, allowing anyone with a web browser to map. It works best for standard mapping without
any extensions, but new features are being added.

- [Beatmapper Website](https://beatmapper.app/)
- [Beatmapper User Manual](https://beatmapper.app/docs/manual/getting-started)

::: tip Interested in making your own editor or converter?
You may find the [Map Format Page](./map-format.md) and the
[SongCore Readme](https://github.com/Kylemc1413/SongCore/blob/master/README.md) helpful!
:::

### Official Editor

The official editor is developed and supported by Beat Games and pre-installed with the Steam VR or Oculus PC versions
of Beat Saber.

- [Official Editor Documentation](https://beatsaber.com/documentation.html)

#### Migrating from Official Editor to a Community Editor

:::warning NOTE
These instructions are for the old 2D editor that was retired since Beat Saber version 1.8.0
:::

Although it is recommended to start setup again following the [Quick Start](#mapping-quick-start) guides with a
[Community Editor](#community-editors), it is possible to transfer your work in the Official Editor over.

1. Install a [Community Editor](#community-editors)
2. Locate your map files in your game's `CustomLevels` folder.
   - Steam Example Location: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels`
   - Oculus Example Location: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomLevels`
3. Move it to the folder your editor is looking in. This is commonly the `CustomWIPLevels` in the `Beat Saber_Data` folder.
   - Steam: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomWIPLevels`
   - Oculus: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`
4. Convert your audio file to the `.ogg` format from `.wav` if you have not done so.
   1. Download and Install [Audacity](https://www.audacityteam.org/)
   2. Open the `.wav` file in Audacity
   3. Click the `File menu -> Export -> Export as OGG.`
   4. Name your file `song.ogg` and click <kbd>Save</kbd>.
   5. Place the `song.ogg` file into the map folder.
      - You no longer need the `.wav` song file in this folder
5. Open the map in the community editor and change the song file name to `song.ogg` and click the save button.

You are now ready to continue editing your map!

### Data Loss Prevention and Cloud Storage

Updating your game may remove all Custom Level data, one way you can prevent complete data loss is with [Symbolic Links!](https://en.wikipedia.org/wiki/Symbolic_link)
This allows you to store your maps in a different place on your computer, such as a folder synchronized to the cloud,
and mirror them in the game directory. The link created will not delete your maps if it is removed due to
updating or uninstalling the game however, recursive deletion will remove your maps.

Using a cloud storage folder is useful if you jump between multiple computers or extra security for your files in case
of storage disk corruption.

The following instructions are for Windows 10 and 11.

1. Move the current levels folder over to your new location. (`Ctrl + x` the folder instead of `Ctrl + c`)
   - If this is a cloud location make sure to set the folder to be available offline!
2. Open command prompt
3. Run this command adjusting the parameters to match your situation.  
   `mklink /j "Path to Beat Saber Install folder" "Path to New Location"` \* Heres an example command:  
   `mklink /j "C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels" "C:\Users\cmb\CloudStorage\CustomLevels"`

If it's on a network drive, replace `/j` with `/D`. Note that you will need to open command prompt as administrator for
this to succeed.

### Additional Mapping Tools

- [BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit**  
  A convenient way to see how your map might look in game without the game.
- [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit**  
  A suite of tools for mappers that includes:
  - **Schema Fixer:** Easily fix maps made in Mediocre Mapper Mk4.1 and Mk5 for upload to BeatSaver.
  - **Tempo Changer:** Change the BPM of an entire map and shift block placements accordingly.
  - **Offset Remover:** Removes editor offset and snaps notes/obstacles/events to common precisions
    to try and mitigate floating point error.
  - **Note Sorter:** Sorts unordered notes/obstacles/events in the map file to fix stack spawning.
  - **Copy Timing:** Moves notes in one difficulty based on another within a certain window.
    Useful to apply small timing changes across all difficulties for specific sounds.
  - **Copy Lighting:** Copies all of the lights, with the option to include/exclude custom events
    from one difficulty to all other difficulties.
  - **Map Diff:** Compare between two versions of a map. Useful for testplayers and Ranking Team
    members to see if any changes were made.
- [Parity Checker](https://galaxymaster2.github.io/bs-parity/) by **GalaxyMaster**  
  An error checker tool that focuses on finding issues with parity in a map.
- [Map Check](https://kivalevan.github.io/BeatSaber-MapCheck/) by **Kival Evan**  
  An error checker tool that is much more versatile than the one built into MMA2.
- [noodleLister](https://github.com/bloodcloak/noodleLister#readme) by **Bloodcloak**  
  Easily compile a game playlist from a txt file containing BeatSaver map keys.

#### Legacy Tools

These tools may no longer be supported, compatible with the latest software, or relevant with current practices, but could
still fulfill a niche use case.

- [BeatMerge](https://github.com/ZelonGames/BeatMerge#readme) by **DarkGrisen**  
  Ever thought that it is a lot of annoying work to make big maps with other people or to perfectly cut the audio files
  so you can merge them manually later? This tool allows you to merge two or more maps into one single super long map.
- [Cinder](https://github.com/zhaey/cinder#readme) by **zhaey**  
  Python program that converts stepmania `.sm` files to Beat Saber `.dat` files for timing notes.
- [BeatMapper Tools](https://beatmappertools.com/) by **Darkuni**  
  A utility for users of Mediocre Mapper and Mediocre Map Assistant 2 to easily convert, test, and package their maps.
- [osu! Editor Timing Tutorial](https://www.youtube.com/watch?v=nIX0koHzW8c&t) by **Fayhe**  
  Video guide on using the timing feature of osu!'s editor to find map bpm.

### Useful Mods

Here are some mods that might make your mapping workflow a little easier.

- [SiraUtil](./basic-lighting.md#in-game-with-fpfc) by **auros**  
  With the First Person Flying Controller (FPFC) launch parameter, this allows you to control the game while a map is playing
  with your keyboard and mouse without using a headset. See the section in [Basic Lighting](./basic-lighting.md#in-game-with-fpfc)
  for links to the mods and how to set it up.
- [PracticePlugin](https://github.com/denpadokei/PracticePlugin) by **denpadokei**  
  Mod for Beat Saber to control playback speed, seek through songs and set up looping sections. Install the latest
  version from [Mod Assistant](https://github.com/Assistant/ModAssistant#readme)!
- [ReLoader](https://github.com/Kylemc1413/ReLoader) by **Kyle1413**  
  Allows you to hot reload beatmaps in practice mode without needing to return to the menu to refresh.
  Really convenient for wall mapping.

## Mapping Practices

> "You have to know the rules before you can break them."  
> \- Uninstaller

There is no holy bible of mapping but this section of the wiki includes a lot of tribal knowledge from the community on
best practices at all levels of mapping. Our advice is to follow these rules until you're comfortable with your skills
and then get creative, experiment, and innovate!

### [**Basic Mapping**](./basic-mapping.md)

All new mappers need to read this, **no exceptions!**

### [**Intermediate Mapping**](./intermediate-mapping.md)

A more in-depth look at many mapping topics

### [**Downmapping**](./downmapping.md)

A comprehensive guide to making lower difficulties.

### [**Extended Mapping**](./extended-mapping.md)

Mapping Extensions, Extra Characteristics, and 360&deg;/90&deg; mapping

### Mapper Roles

To apply for the **Mapper** role on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) you must have
released three solid/playable maps (collaborations are acceptable) and complete the
[Mapper Role Submission Form](https://forms.gle/mj66J3UopTykFJjXA). Your application and maps may take a decent amount of
time to be reviewed and approved.

### Curation

Mappers can submit high quality maps, free of [objective issues](https://bsaber.com/getting-started/curation/#donts) to
the #curation-request channel on the [BeastSaber Discord](https://discord.gg/VJZHUbt). Maps selected for curation are
given extra visibility on the site and included in the Curator Recommended feed.

### Modding & Ranking

Maps that meet specific [Ranking Criteria](https://scoresaber.com/criteria) and go through an intensive review process called
"modding" have the potential to become ranked, awarding players Performance Points (PP) toward global leaderboards. More
information and an in-depth FAQ is available on the [ScoreSaber Discord](https://discord.gg/WpuDMwU)

- Prior to requesting ranking, mappers should thoroughly review the ranking criteria and
  [metadata standards](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit)
  and have their map modded by a knowledgeable source.

:::tip Want an even more detailed look?
Review the [Ranking Criteria](https://scoresaber.com/criteria) for some of the more ambiguous ranking considerations.
:::

- Once your map has been modded and revised, it's ready to be presented to a ranking team member or recruit to review.
- If the ranking team member deems the map acceptable it will be added to the ranking request queue to be voted
  on by the full ranking team.

### Mapping Anxiety

If you're finding it difficult to muster up the courage to upload your map, or are finding it emotionally taxing coping
with a lack of downloads or a lot of dislikes, you're not alone. Many mappers have experienced these feelings. You can read
more about it on the [Coping with Mapping Anxiety](./mapping-anxiety.md) page.

## Lighting Practices

A map is not finished until some form of lighting is included.
Lighting can range from very basic to incredibly detailed using additional mods to enable more features.

### [**Basic Lighting**](./basic-lighting.md)

Learn the various aspects to lighting your map manually

### [**Intermediate Lighting**](./intermediate-lighting.md)

Master more environments and get into strobing, ring spins and contrast practices

### [**Advanced Lighting**](./advanced-lighting.md)

Advanced and nuanced techniques

### [**Extended Lighting**](./extended-lighting.md)

Lighting for custom platforms and Chroma RGB

### Automated Lights

Not ready to make your own lighting? Here are some programs to do it for you. Keep in mind, creating simple manual lighting
is not difficult and will always be better at expressing the atmosphere of the song than using these programs.

- [Lolighter](https://github.com/Loloppe/Lolighter#readme) by **Loloppe#6435** - Standalone program for automated lighting
  and has other features to modify your map.
- [LiteMapper](https://litemapper.net/) by **ItsOrius** - A website that automatically generates lights based on pacing,
  emphasis, and note placement. For more information on the algorithm check out the [Readme](https://github.com/ItsOrius/LiteMapper#readme).
- **Lightmap** - It is integrated into Mediocre Map Assistant 2 and can be accessed in the error checker menu.

## Playtesting

Testing your work is a **critical** part of mapping. Testing as you work helps you adjust for major playability issues and
get a feel for your map. [Third-party or "outside"](#community-third-party-testing) playtesting is when someone other than
yourself tests your pre-release map and provides constructive feedback and is helpful in highlighting issues to which you
may be "map blind."

::: danger
You **DO NOT** need to upload your map to BeatSaver in order for you or anyone else to test.
:::

- If your map is using the 1.0 map format (your files are `.json` and `.ogg`) you must convert your map by
  **updating your editor**, opening and saving the map. See [Community Editors](#community-editors) for links to modern
  editors.
- If your map is using the 2.0 or 3.0 map format (your files are .dat and `.ogg`/`.egg`) you're ready to test.

### Testing on a PC

Follow these steps to test any of your maps made with a community editor using PC-based VR.

1. If your WIP song folder isn't already in `Beat Saber_Data\CustomWIPLevels` then place a copy there.
2. Access your map in-game via the CustomWIPLevels category in the song pack menu. Use practice mode to play
   (the button next to the play button).

**Made changes to your map while the game is open?**  
Click on the game window. Then while you are on the Main Menu or Song Select Menu press <kbd>Ctrl + r</kbd> on your keyboard.
Your changes will be loaded without needing to restart the game!

:::tip NOTE

- You will need to have the **SongCore** mod installed in order to see the CustomWIPLevels category and use the
  <kbd>Ctrl + r</kbd> shortcut.
- Having duplicate map files in `CustomLevels` and `CustomWIPLevels` can cause problems.
- Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be
  loaded by the game! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way
  to ensure your map loads in-game.
  :::

### Testing on a Quest

Follow these steps to test any of your maps made with a community editor using an Oculus Quest. You must have
[SideQuest](https://sidequestvr.com) and [BMBF](https://bmbf.dev/stable) installed.

1. Locate your WIP song folder on your PC.
2. Establish a connection to your Quest from your PC with a USB cable.
3. Open SideQuest on your PC and click the folder icon on the top right.
   ![SideQuest Files](/.assets/images/beginners-guide/sqfiles.png)
4. Navigate to `sdcard/ModData/com.beatgames.beatsaber/Mods/SongLoader/CustomWIPLevels`. If this folder does not exist,
   you can create it yourself.
5. Upload your WIP song folder from your PC to that folder on your Quest with SideQuest.
   - **NOTE:** You need to upload the actual song folder, not a zip file!
6. Your map will now show up on the CustomWIPLevels song pack inside your game. Keep in mind that you will only be able to
   play your map using the practice mode, and not with the regular Play button!

:::tip NOTE
Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be
loaded by the game! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way
to ensure your map loads in-game.
:::

### Community / Third Party Testing

The `#testplays` channel in the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) makes it easy to have
your work checked by knowledgeable mappers. Playtesters will provide constructive feedback on how to improve your map in
either video or text format in a DM or in the `#mapping-discussion` channel.

:::warning Some things to note...

- Maps with less than 1 minute done will not get much feedback or be tested.
  Consider asking in `#mapping-discussion` to see if someone will take a look instead.
- Challenge/Super High difficulty maps may take longer to get feedback since there are
  not many playtesters at this skill level.
- Please keep to serious posts where you are looking to improve your mapping skills.
  Meme or Shitpost maps do not belong as they end up wasting the testplayers time.
- Make sure you have run your map through a checker program such as those built-in to your editor or external tools like
  Parity Checker or Map Check in [Additional Mapping Tools](#additional-mapping-tools)
  :::

1. Create a compressed .zip file of the individual song files.
   - If you are using [CM](#chromapper), you can press the `Create Zip` button in the Song info Settings to create a
     compressed `.zip` of your map.  
     ![Create Zip button](/.assets/images/mapping/cm-create-zip.jpg)
   - If you are using [MMA2](./mediocre-map-assistant.md), you can press the `Package Song to Zip` button in the Song Info
     Settings to create a compressed `.zip` of your map.  
     ![Package Song to Zip button](/.assets/images/mapping/mma2-package-zip.jpg)
   - If you are using [Beatmapper.app](#beatmapper-app), follow their [downloading instructions](https://beatmapper.app/docs/manual/publishing#downloading-your-map).
   - You can manually create the zip by following this [How to Video](https://streamable.com/u20ci) if you are not using
     a web based editor.
2. Upload your map to `#testplays` using the following format:

- **Map:** The name and artist of your map
- **Length:** The length of the song
- **BPM:** The BPM of the song
- **Difficulty:** Which difficulties are included
- **NPS:** The notes per second of each difficulty available
- **Feedback:** Any requests for feedback (specific difficulties to be tested, things to look for etc.)
- **Status:** What state is the map in?
  (i.e., First draft complete, no lights; 1:45 mapped; release candidate w/ lighting; etc.)

3. Testers will usually look at your map within 1-7 days and will use a number of reaction emojis
   (listed in `#testplays` pinned posts) to track testing status.

:::warning Remember: If you make changes after posting or getting feedback
React with a 🛑 `:octagonal_sign:` to indicate stop testing this version
:::

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

Do you like the idea of playing new songs before they are ever released on BeatSaver? Do you want to help shape the
mapping community? Consider becoming a testplayer! Check out the [How to Testplay](./how-to-testplay.md) guide to get started!

## Publishing Songs

Once your song has been mapped, lighted, and playtested and it's a finished product you're ready to release it to the world!

### BeatSaver

[BeatSaver](https://beatsaver.com/) is the public repository for all custom Beat Saber maps.

#### How to Release a Map

::: danger

- Please **DO NOT** upload an incomplete WIP map to BeatSaver!
  - Uploading to BeatSaver equates to "Putting it on the store shelf" and should **only** be your final version.
  - See the [Playtesting](#playtesting) section for instructions on testing your map.
    :::

1. [Create an account](https://beatsaver.com/register) on BeatSaver with a username/password or by logging in via Discord.
2. Click the <kbd>+</kbd> icon in the top-right and click <kbd>`Upload Map`</kbd>.
3. Add your BeatSaver map name and map description. Both the title and description are searchable so be sure to include song
   name, song artist, and other terms that might make it easier to find your map.
   - Use "tags" like (Chroma), (OneSaber), or (Mapping Extensions) if your map uses some special modifications or
     characteristics you want to highlight.
   - Putting a link to a playthrough video in the map description can help you get more downloads as it is easier
     to share your map to others and lets people know what to expect.
4. Add your `.zip` file and identify whether your map was human-made or AI-assisted.
   - AI maps intentionally uploaded as human-made will be deleted.
5. Maps are initially uploaded to your unpublished tab. You must explicitly publish them to make them available to the public.

::: tip NOTE
Map files can now be updated on BeatSaver!
If you need to upload a new version of your map you must first recall the map to your unpublished tab before you can
upload a new version. This will retain your map key and statistics but will reset all leaderboards.
:::

### BeatSaver Troubleshooting

Here are solutions for some common errors when uploading a Beatmap.  
Encountered something not listed here? Drop into `#mapping-discussion` for assistance.

:::danger Remember:

- You should have your map [playtested](#playtesting) before uploading!
  - WIP maps will be removed!
- You do not need upload maps created by auto-generation software such as Deepsaber or Beat Sage to install them in your
  game. If you are on PC, you can unzip the files into your `CustomLevels` folder. If you are on Quest, follow the
  [Testing on a Quest](#testing-on-a-quest) steps to install the map.
  :::

---

#### Map already uploaded

- The exact map files were uploaded previously. You must change something small in your map
  (i.e., remove a light block, save the map, replace the light block, and save again) to be able to upload.

---

#### `` _difficultyBeatmapSets[]._difficultyBeatmaps[].`Difficulty.dat`._version ``: Must not be null

- You are using an old, outdated editor that is not compliant with the current data schema.
  See [Community Editors](#community-editors) for the current options.

---

#### `` _difficultyBeatmapSets[]._difficultyBeatmaps[]`Difficulty.dat`._notes[]_time ``: Must be between 0 and x

- Your map contains notes outside of the playable map (usually from a copy and paste error).
  Remove them and reattempt your upload.

---

#### Internal Server Error

This is the default error message, causes include:

- An upload that is close to or over the actual file size limit of 15 MB.
  Reduce the audio export quality slightly to make space.
- Unsupported characters are present in a file. Make sure your metadata and bookmarks don't contain special characters
  such as, Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), Chinese (汉语/漢語),
  Arabic (اَلْعَرَبِيَّةُ‎), and accented characters (Ä/é/õ/Æ/ø/ß/Œ/Ð/ƒ).
  - [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit**
    may be useful in finding the specific problem.
- Expired web session. If you refresh the page, you should be logged out. Login and try to upload again.

---

#### Could not verify user []

- This error is related to recaptcha. Please reload the page.

---

#### Beatmap zip contains an illegal file! OLD

- Usually caused by extra/unsupported files, such as gifs, in the zip.

---

#### Beatmap does not contain an Info.dat file! OLD

- Usually caused by having the files in a subfolder. You need to zip the files instead of the folder.
  [How to Video](https://streamable.com/u20ci) Or use the handy export button in your editor instead.
  **NOTE: MMA2's export button does not include contributor images in the zip.**

---

#### One or more beatmap difficulty files cannot be found! OLD

- You might have forgotten to include all of your difficulty files are in the zip.
- A difficulty's `"_beatmapFilename"` in the `Info.dat` might be using a different
  file name than what is present in the folder.
- A deleted difficulty is still being referenced in your `Info.dat` file.
  Check to make sure you do not have unintended difficulties in the `"_difficultyBeatmaps"` cluster of each present characteristic.

---

#### Error in `MapDifficulty.dat`. Root should NOT have additional property: `_time`. OLD

`_time` is the common error for this type of message. However, the same solution applies if a different property is flagged.

- Your files are not compliant the map schema. See [Schema Change](#beatsaver-data-schema-change-october-27-2019) for solutions.

---

#### Beatmap could not be parsed! OLD

- This could be caused by extreme server load. Try again later or ask in `#mapping-discussion`.

---

#### Field `._customData._contributors[]._iconPath` contains an invalid filename. OLD

- Utilizing the contributors field requires all aspects to be included. Make sure all 3 aspects (Role, Name, iconPath)
  are filled and there is a unique square image for each iconPath entry in your zip.

---

### BeastSaber

[BeastSaber](http://www.bsaber.com) is a song review and curation site with social features including reviewing and commenting
on songs.
All songs published on BeatSaver are mirrored to BeastSaber within 10-15 minutes. Additionally, maps
deleted from BeatSaver may take up to a day to be removed from BeastSaber.

## [Credits](./mapping-credits.md)

Over _thirty_ different mapping guides and tutorials have been combined into this wiki so that it can be maintained by
the community as a whole. Many many **MANY** thanks to the mappers who blazed this trail and contributed content. Check
out the whole list [here!](./mapping-credits.md)
