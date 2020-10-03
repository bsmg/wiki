---
sidebar: auto
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
If you have feedback on how we can improve the mapping resources fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform)!  
You can also visit `#mapping-discussion` on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) to get involved!
:::

* [Mapping Term Glossary](/mapping/glossary.md)

## Mapping Quick Start

1. Download the necessary tools for mapping: an [audio editor](https://www.audacityteam.org/) and a [map editor](/mapping/#map-editing-resources).
2. [Set up your audio file](/mapping/#audio-editing-resources), find and confirm the BPM, and export in OGG format.
3. Set up your song in your mapping editor (steps vary by editor but here's the [user guide](/mapping/mediocre-map-assistant.html) for MMA2).
4. Get mapping! Review [basic mapping practices](/mapping/basic-mapping.html) before you start. [Playtest](/mapping/#playtesting) your own work early and often while mapping.
5. Get lighting! Review [basic lighting information](/mapping/#lighting-practices). Simple manual lighting is easier than you think!
6. Get your map [playtested](/mapping/#playtesting)! Third-party playtesting via the [BSMG Discord](https://discord.gg/beatsabermods) is highly recommended to get constructive feedback and to get past your own “map blindness."
7. Once your song has been mapped, lighted, and playtested you’re ready to [release](/mapping/#publishing-songs) your song to the world on Beat Saver.

### Video Tutorials
Text guides aren't your thing? Checkout these video series!  
**Remember:** The text guides on this wiki are more up to date as it is easier and quicker to change.

#### Recommended
* [Fruhead's Beginners Guide to Mapping](https://www.youtube.com/playlist?list=PL5F3WJ0s0nscdpqiWlOpM_4tJcF-CnWbm) - a comprehensive series on making your first map.
* [Cyrix's Patterns to Avoid as a New Mapper](https://www.youtube.com/watch?v=mgGaqZ20Scw) - covers the most common issues discussed in [Basic Mapping](/mapping/basic-mapping.md).
* [TranquillizeMe's Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc) - covers various lighting techniques and general lighting tips.

#### Legacy Videos
::: warning
These series use older editors in their tutorials (Mediocre Mapper and EditSaber). The UI and some processes have changed in the latest recommended editor, [MMA2](/mapping/mediocre-map-assistant.md) but, the rest of the content is great!
:::
* [BennyDaBeast's Mapping Tutorials](https://bsaber.com/benny-custom-mapping/) 
* [Freeek's Mapping and Editor Tutorials](https://www.youtube.com/playlist?list=PLYeZR6d3zDPgDgWogOwMteL-5SQWAE14b)

## Audio Editing Resources
Before mapping, you need to get your audio file ready so that it works with your map editor. This section will walk you through how to set up and edit your audio file using a free program called [Audacity](https://www.audacityteam.org/).

### [**Basic Audio Setup**](/mapping/basic-audio.md) 
Can't make a map without audio. Learn how to setup your audio for easy mapping!
### [**Advanced Audio Editing**](/mapping/advanced-audio.md)
A deeper dive in adjusting audio files such as making shorter versions or working with variable BPM.

## Map Editing Resources

### Community Editors
::: warning
Community editors often have more features and don't require a VR headset, but they can be buggy, so use with caution.
:::
Keyboard shortcuts for these editors are available inside their respective in-editor menus with a cross-reference between all of them [available here](/mapping/editor-keybinds.md).

#### Mediocre Map Assistant 2
MMA2 is the most feature rich 3D editor and is used by the majority of the mapping community.

* [Mediocre Map Assistant 2 Download](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest)
* [Mediocre Map Assistant User Guide](/mapping/mediocre-map-assistant.md)

#### BeatMapper.app
A 3D editor that runs in the browser, allowing anyone with a web browser to map. It works best for standard mapping without any extensions, but new features are being added.
* [BeatMapper Website](https://beatmapper.app/)
* [BeatMapper User Manual](https://beatmapper.app/docs/manual/getting-started)

#### ChroMapper - *Coming Soon*
A 3D editor that has stellar support for lighting, Chroma RGB, and shares similar assets with Beat Saber, allowing for a more accurate preview. ChroMapper is currently in closed beta with no planned public release date.

::: tip Interested in making your own editor or converter?
You may find the [Map Format Page](./map-format.md) and the [SongCore Readme](https://github.com/Kylemc1413/SongCore/blob/master/README.md) helpful!
:::

### Official Editor 
The official editor is developed and supported by Beat Games and pre-installed with the Steam VR or Oculus PC versions of Beat Saber. It makes playtesting convenient with one-click access to your work-in-progress in-game. The official editor is 2D and requires good visualization skills to translate well to a 3D play space, which can be challenging for new mappers. The vast majority of mappers use a [Community Editor](https://bsmg.wiki/mapping#community-editors).  

* To access, launch the editor from within Beat Saber in your HMD or use fpfc launch parameters to open directly from your PC
* Check out Megalon's [Official Editor Tutorial Video](https://www.youtube.com/watch?v=5Ex6sOEVgrM) for an overview of standard mapping!

Keep in mind the following features that official does not have compared to the [Community Editors](https://bsmg.wiki/mapping#community-editors) available.

- Uncommon Precision such as 1/3 and associated multiples.
- Autosave and Recovery
- Flexible mass select, copy, and paste
- Edit in place (Change the direction of notes without needing to delete)
- Chroma RGB Support
- Actual audio offset for syncing. (The parameter in official offsets/delays not only the song but also hitsounds)
- Error Checker
- Contributor Fields
- Mapping Extensions Support

#### Migrating from Official Editor to a Community Editor
Although it is recommended to start setup again following the [Quick Start](#mapping-quick-start) guides with a [Community Editor](https://bsmg.wiki/mapping#community-editors). It is possible to transfer your work in the Official Editor over.
1. Install a [Community Editor](https://bsmg.wiki/mapping#community-editors)
2. Locate your map files in your game's `CustomLevels` folder.
    * Steam Example Location: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels`
    * Oculus Example Location: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomLevels`
3. Move it to the folder your editor is looking in. This is commonly the `CustomWIPLevels` in the `Beat Saber_Data` folder.
    * Steam: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomWIPLevels`
    * Oculus: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`
4. Convert your audio file to the `.ogg` format from `.wav` if you have not done so.
    1. Download and Install [Audacity](https://www.audacityteam.org/) 
    2. Open the `.wav` file in Audacity
    2. Click the `File menu -> Export -> Export as OGG.`
    3. Name your file `song.ogg` and click <kbd>Save</kbd>.
    4. Place the `song.ogg` file into the map folder.
        * You no longer need the `.wav` song file in this folder
5. Open the map in the community editor and change the song file name to `song.ogg` and click the save button.

You are now ready to continue editing your map!

### Additional Mapping Tools
* [BeatMapperTools](https://mappers.beatmappertools.com/) by **Darkuni**  
A utility for users of Mediocre Mapper and Mediocre Map Assistant 2 to easily convert, test, and package their maps
* [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit**  
A suite of tools for mappers **using new format .dat files** that includes:
  * **Schema Fixer:** Easily fix maps made in Mediocre Mapper Mk4.1 and Mk5 for upload to BeatSaver
  * **Tempo Changer:** Change the BPM of an entire map and shift block placements accordingly
  * **Offset Remover:** Removes editor offset and snaps notes/obstacles/events to common precisions to try and mitigate floating point error
  * **Note Sorter:** Sorts unordered notes/obstacles/events in the map file to fix stack spawning  
* [BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit**  
A convenient way to checkout how your map might look in game without the game. 
  * IOS and Safari are currently not supported
* [Cinder](https://github.com/zhaey/cinder#readme) by **zhaey**  
Python program that converts stepmania `.sm` files to Beat Saber `.dat` files for timing notes.
* [noodleLister](https://github.com/bloodcloak/noodleLister#readme) by **Bloodcloak**  
Easily compile a game playlist from a txt file containing BeatSaver map keys.
* [BeatMerge](https://github.com/ZelonGames/BeatMerge#readme) by **DarkGrisen**  
Ever thought that it is a lot of annoying work to make big maps with other people or to perfectly cut the audio files so you can merge them manually later? This tool allows you to merge two or more maps into one single super long map. 
* [BPM Saber](https://bsaber.com/bpmsaber/) by **Elliotttate**  
A utility for finding the BPM of a song by upload or tapping.
* [osu! Editor Timing Tutorial](https://www.youtube.com/watch?v=nIX0koHzW8c&t) by **Fayhe**  
Video guide on using the timing feature of osu!'s editor to find map bpm.
* [Parity Checker](https://galaxymaster2.github.io/bs-parity/) by **GalaxyMaster**  
An error checker tool that focuses on finding issues with parity in a map.

#### Legacy Tools
* [BPM Saber](https://github.com/zevdg/bpm-saber#readme), by **Zevdg**  
**Only works on old format .json files. For new format .dat maps use the Tempo Changer in +1 Rabbit's Mapping Tools.** Change the BPM of an entire map and shift block placements accordingly

### Useful Mods
Here are some mods that might make your mapping workflow a little easier.

* [FPFC](/mapping/basic-lighting.md#in-game-with-fpfc) (First Person Flying Control) Mod Suite  
Allows you to control the game with your keyboard and mouse without a headset connected. See the section in [Basic Lighting](/mapping/basic-lighting.md#in-game-with-fpfc) for links to the mods and how to set it up.
* [PracticePlugin](https://github.com/Kylemc1413/PracticePlugin) by **Kyle1413**  
Plugin for Beat Saber to control playback speed, seek through songs and set up looping sections. Install the latest version from [ModAssistant](https://github.com/Assistant/ModAssistant#readme)!
* [ReLoader](https://github.com/Kylemc1413/ReLoader) by **Kyle1413**  
Allows you to hot reload beatmaps in practice mode without needing to return to the menu to refresh. Really convenient for wall mapping.

## Mapping Practices
> "You have to know the rules before you can break them."  
      ~ Uninstaller
      
There is no holy bible of mapping but this section of the wiki includes a lot of tribal knowledge from the community on best practices at all levels of mapping. Our advice is to follow these rules until you're comfortable with your skills and then get creative, experiment, and innovate!

### [**Basic Mapping**](/mapping/basic-mapping.md) 
All new mappers need to read this, **no exceptions!**
### [**Intermediate Mapping**](/mapping/intermediate-mapping.md) 
A more in-depth look at many mapping topics **(This page is still a work in progress!)**
### [**Extended Mapping**](/mapping/extended-mapping.md) 
Mapping Extensions, Extra Characteristics, and 360&deg;/90&deg; mapping

### Mapper Roles
To apply for the **Mapper** role on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) you must have released three solid/playable maps (collaborations are acceptable) and complete the [Mapper Role Submission Form](https://forms.gle/mj66J3UopTykFJjXA). Your application and maps may take a decent amount of time to be reviewed and approved.

### Modding & Ranking
Maps that meet specific [Ranking Criteria](https://scoresaber.com/criteria) and go through an intensive review process called “modding” have the potential to become ranked, awarding players Performance Points (PP) toward global leaderboards. More information and an in-depth FAQ is available on the [ScoreSaber Discord](https://discord.gg/WpuDMwU)

* Prior to requesting ranking, mappers should thoroughly review the ranking criteria and [metadata standards](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) and have their map modded by a knowledgeable source. 
:::tip Want an even more detailed look? 
Review the [Ranking Team Handbook](https://docs.google.com/document/d/18sT1CEVc-Do_kpAs567BdeJqWSzT9xazp20biA9Th0o/edit?usp=sharing) for some of the more ambiguous ranking considerations.
:::
* Once your map has been modded and revised, it’s ready to be submitted via the ScoreSaber Discord for review by the ranking team (which involves additional rounds of strict modding and revision).
* If a ranking team member deems the map acceptable it will be added to the ranking request queue to be voted on by the full ranking team.

## Lighting Practices
A map is not finished until some form of lighting is included. Lighting can range from very basic to incredibly detailed using additional mods to enable more features.

### [**Basic Lighting**](/mapping/basic-lighting.md) 
Learn the various aspects to lighting your map manually
### [**Intermediate Lighting**](/mapping/intermediate-lighting.md) 
Take your lighting skills a bit further into strobing, ring spins, and contrast practices 
### [**Advanced Lighting**](/mapping/advanced-lighting.md)
Advanced and nuanced techniques, lighting for custom platforms, and Chroma RGB **(This page is still a work in progress!)**

### Additional Resources 
Older guides linked here as we migrate their content over to the wiki pages.

* [Beginner's Guide to Lighting](https://docs.google.com/document/d/1wpZgBeOD1-UbJpXf-b6gX5ICNYygCd6UK6LOPm-t5QM/edit) by Puds
* [Lighting Environment Guide](https://bsaber.com/creating-lighting-environment-guide/) by ManDynasty
* [Using Flash & Fade Lighting Events](https://bsaber.com/creating-lighting-how-flash-fade-notes-actually-work-in-game/) by ManDynasty
* [Side Laser Speed Reference](https://docs.google.com/spreadsheets/d/1tIERmSyFI4ssjDkE-oJjBBvUZUJ7eoVhCQyM3_BsJwE/edit?usp=sharing) by LittleAsi

### Automated Lights
Not ready to make your own lighting? Here are some programs to do it for you. Keep in mind, creating simple manual lighting is not difficult and will always be better at expressing the atmosphere of the song than using these programs.

* [Lolighter](https://github.com/Loloppe/Lolighter#readme) by **Loloppe#6435** - Standalone program for automated lighting and has other features to modify your map.
* **Lightmap** - It is integrated into Mediocre Map Assistant 2 and can be accessed in the error checker menu. 

## Playtesting
Testing your work is a **critical** part of mapping. Testing as you work helps you adjust for major playability issues and get a feel for your map. [Third-party or “outside”](#community-third-party-testing) playtesting is when someone other than yourself tests your pre-release map and provides constructive feedback and is helpful in highlighting issues to which you may be "map blind."

::: warning
You **DO NOT** need to upload your map to Beat Saver in order for you or anyone else to test.
::: 

* If your map is using the 1.0 song format (your files are .json and .ogg) you must convert your map using one of several available tools like [Songe Converter](https://github.com/lolPants/songe-converter) by lolPants or [BeatMapper Tools](https://mappers.beatmappertools.com/) by Darkuni. **Update your editor to MMA2 or BeatMapper**. See [Community Editors](/mapping#community-editors) for links.
* If your map is using the 2.0 song format (your files are .dat and .ogg/.egg) you’re ready to test.

### Testing on a PC
Follow these steps to test any of your maps made with a community editor using PC-based VR.

1. If your WIP song folder isn’t already in `Beat Saber_Data\CustomWIPLevels` then place a copy there.
2. Access your map in-game via the CustomWIPLevels category in the bottom song pack menu. Use practice mode to play (the small button next to the yellow play button).  

**Made changes to your map while the game is open?**  
Click on the game window. Then while you are on the Main Menu or Song Select Menu press <kbd>Ctrl + r</kbd> on your keyboard. Your changes will be loaded without needing to restart the game!

:::tip NOTE
* You will need to have the **SongCore** mod installed in order to see the CustomWIPLevels category and use the <kbd>Ctrl + r</kbd> shortcut.
* Having duplicate map files in `CustomLevels` and `CustomWIPLevels` can cause problems.
* Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be loaded by the game! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way to ensure your map loads in-game.
:::  

### Testing on a Quest
Follow these steps to test any of your maps made with a community editor using an Oculus Quest. You must have [SideQuest](https://sidequestvr.com) and [BMBF](https://github.com/kihecido/BMBF/releases/latest) installed.

1. Zip up the song as normal, only zipping the files and not the folder itself. [How to Video](https://streamable.com/u20ci)  
    * If you are using [MMA2](#mediocre-map-assistant-2) there is a `Package To Zip` Button you can use in the song info screen to do this for you.
2. Establish a connection to your Quest from your PC. This can be done in two ways, [wired](#connect-wired-usb) and [wirelessly](#connect-wirelessly).

#### Connect Wirelessly
1. Open BMBF on the Oculus Quest. BMBF must be running for the connection to succeed.
2. Inside BMBF go to the `Tools` tab. There you should see a web address and a version number similar to what is shown below.  
![ip](~@images/mapping/ip.png)
3. Open a modern web browser on your PC and type the address into the search bar. You should be greeted with this screen below.  
![BMBF Web](~@images/mapping/bmbfweb.png)
4. You are now connected! Continue on to the [Upload Test File to Quest](#upload-test-file-to-quest) steps below.

#### Connect Wired USB
1. Connect your Oculus Quest to the PC via USB and keep SideQuest open 
2. Open BMBF on the Oculus Quest. BMBF must be running for the connection to succeed
3. Look at the top of SideQuest, which will give you the IP to get into BMBF. You can also access your IP through the Tools tab of BMBF.
4. Type into any web browser: "192.168.X.XXX:50000" with X being replaced with the IP displayed in SideQuest, or the Tools tab  
![](~@images/mapping/quest_ip.png)  
For example, from the picture you would enter `192.168.0.19:50000` into a web browser of choice (Chrome, Firefox, etc.).
5. You are now connected! Continue on to the [Upload Test File to Quest](#upload-test-file-to-quest) steps below.

#### Upload Test File to Quest
1. Drag and drop the files into BMBF's upload page (indicated by /main/upload at the end of the link)
2. Once uploaded, click Sync to Beat Saber at the top right corner of the page
![](~@images/mapping/bmbf_browser.png)
3. Access your map in-game via the Custom Songs playlist in the bottom song pack menu. Use practice mode to play (the small button next to the play button).

:::tip NOTE
* If after deleting an old copy of a map and reuploading it with a new version on a quest still results with the old version being played, rename the zip file before uploading it through BMBF.
* BMBF may have issues importing your map if your song file or cover image name contains `-` or spaces. You may need to rename these files and update the song info accordingly for a successful upload.
* Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be loaded by BMBF! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way to ensure your map loads in-game.
* If your song audio file was automatically converted to `.egg`, you may run into issues when uploading onto BMBF. Try renaming the `.egg` back to `.ogg`. 
:::

### Community / Third Party Testing
The `#testplays` channel in the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) makes it easy to have your work checked by knowledgeable mappers. Playtesters will provide constructive feedback on how to improve your map in either video or text format in a DM or in the `#mapping-discussion` channel.

Interested in helping out? See [How to Testplay](./how-to-testplay.md) to get started!

1. Create a compressed .zip file of the individual song files [How to Video](https://streamable.com/u20ci).
2. Upload your map to `#testplays` using the following format:  
  * **Map:** The name and artist of your map  
  * **Length:** The length of the song  
  * **BPM:** The BPM of the song  
  * **Difficulty:** Which difficulties are included and the notes per second of each difficulty  
  * **NPS:** The notes per second of each difficulty available  
  * **Feedback:** Any requests for feedback (specific difficulties to be tested, things to look for etc.)  
  * **Status:** What state is the map in? (i.e., First draft complete, no lights; 1:45 mapped; release candidate w/ lighting; etc.)
3. Testers will usually look at your map within 1-7 days and will use a number of reaction emojis (listed in `#testplays` pinned posts) to track testing status.

:::warning Remember: If you make changes after posting or getting feedback
* React with a 🛑 `:octagonal_sign:` to indicate stop testing this version   
== or ==
* Delete the testplay posting! 
:::

You can copy and paste the following template into Discord:
```
**Map:**
**Length:**
**BPM:**
**Difficulty:**
**NPS:**
**Feedback:**
**Status:**
```
## Publishing Songs
Once your song has been mapped, lighted, and playtested and it’s a finished product you’re ready to release it to the world!

### BeatSaver
[BeatSaver](https://beatsaver.com/) is the public repository for all custom Beat Saber maps. Songs must be in the 2.0 song format (files are .dat and .ogg/.egg/.wav) to be uploaded.

#### How to Release a Map

::: danger
* Please **DO NOT** upload an incomplete WIP map to BeatSaver!  
  * Uploading to BeatSaver equates to "Putting it on the store shelf" and should **only** be your final version.  
  * See the [Playtesting](/mapping/#playtesting) section for instructions on testing your map.
* **DO NOT** upload maps created by auto-generation software such as Deepsaber or Beat Sage. Please use their sharing channel on Discord to share generated maps!
:::

1. [Create an account](https://beatsaver.com/auth/register) on BeatSaver.  
    - If you did not receive a verification email, fill out this [contact form](https://beatsaver.com/contact).  
    **Note** you must provide a valid username *and* the email used to sign up in the form to complete the verification!
2. Click the <kbd>Upload</kbd> link in the top-right.
3. Add your BeatSaver map name and map description. Only the map name is searchable so be sure to include song name, song artist, and other terms that might make it easier to find your map.
    - Use "tags" like (Chroma), (OneSaber), or (Mapping Extensions) if your map uses some special modifications or characteristics you want to highlight.
    - Putting a link to a playthough video in the map description can help you get more downloads as it is easier to share your map to others and lets people know what to expect. 
4. Add your .zip file and click the <kbd>Upload</kbd> button.”

::: tip NOTE
Map files currently cannot be updated on BeatSaver. If you need to upload a new version of your map you will need to delete the old one and re-post.
:::

### BeatSaver Troubleshooting
Here are solutions for some common errors when uploading a Beatmap.  
Encountered something not listed here? Drop into `#mapping-discussion` for assistance.

:::warning Remember: 
* You should have your map [playtested](#playtesting) before uploading!  
* **DO NOT** upload maps created by auto-generation software such as Deepsaber or Beat Sage. Please use their sharing channel on Discord to share generated maps!
:::
___

**Something went wrong! Try again later.**   
  This is the default error message, causes include:  
  * An upload that is close to or over the actual file size limit of 14.3 MB. The 15 MB listed is not accurate at this time. Reduce the audio export quality slightly to make space.  
  * Unsupported characters are present in a file. Make sure your metadata and bookmarks don't contain special characters such as, Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), Chinese (汉语/漢語), Arabic (اَلْعَرَبِيَّةُ‎), and accented characters (Ä/é/õ/Æ/ø/ß/Œ/Ð/ƒ).  
    * [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit** may be useful in finding the specific problem.
  * Expired web session. If you refresh the page, you should be logged out. Login and try to upload again.
___
**Field `._customData._customEnviroment` cannot be blank.**    
  * Your files are not compliant the map schema. See [Schema Change](#beatsaver-data-schema-change-october-27-2019) for solutions.  
___
**Beatmap zip contains an illegal file!**  
  * Usually caused by extra/unsupported files, such as gifs, in the zip.  
___
**Beatmap already exists!**  
  * The exact map files were uploaded previously. You must change something small in your map (i.e., remove a light block, save the map, replace the light block, and save again) to be able to upload.  
___
**Beatmap does not contain an Info.dat file!**  
  * Usually caused by having the files in a subfolder. You need to zip the files instead of the folder. [How to Video](https://streamable.com/u20ci) Or use the handy export button in your editor instead. **NOTE: MMA2's export button does not include contributor images in the zip.**  
___
**One or more beatmap difficulty files cannot be found!**  
  * You might have forgotten to include all of your difficultiy files are in the zip.  
  * A difficulty's `"_beatmapFilename"` in the `Info.dat` might be using a different file name than what is present in the folder.  
  * A deleted difficulty is still being referenced in your `Info.dat` file. Check to make sure you do not have unintended difficulties in the `"_difficultyBeatmaps"` cluster of each present characteristc.  
___
  **Error in `MapDifficulty.dat`. Root should NOT have additional property: `_time`.**  
  `_time` is the common error for this type of message. However, the same solution applies if a different property is flagged.  
  * Your files are not compliant the map schema. See [Schema Change](#beatsaver-data-schema-change-october-27-2019) for solutions.  
___
**Beatmap could not be parsed!**  
  * This could be caused by extreme server load. Try again later or ask in `#mapping-discussion`.  
___
**Field `._customData._contributors[]._iconPath` contains an invalid filename.**  
* Utilizing the contributors field requires all aspects to be included. Make sure all 3 aspects (Role, Name, iconPath) are filled and there is a unique square image for each iconPath entry in your zip. 
___

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

## [Credits](/mapping/mapping-credits.html)
Over *thirty* different mapping guides and tutorials have been combined into this wiki so that it can be maintained by the community as a whole. Many many **MANY** thanks to the mappers who blazed this trail and contributed content. Checkout the whole list [here!](/mapping/mapping-credits.html)
