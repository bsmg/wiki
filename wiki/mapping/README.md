---
sidebar: auto
---
# Mapping

::: tip NOTE  
There is an active project underway to expand this section of the BSMG wiki.  
Visit `#mapping-discussion` on the BSMG Discord to get involved!
:::

**Many thanks to contributors from across the mapping community who have made this expanded wiki possible!**
* [Mapping Term Glossary](/mapping/glossary.md)

## Mapping Quick Start
Go from thinking about mapping to releasing your first map by following this checklist.
::: tip NOTE
Additional links from this checklist to essential information are coming *very* soon. Check back often as we continue to build this out!
:::

1. Download the necessary tools for mapping: an [audio editor](https://www.audacityteam.org/) and a [map editor](/mapping/#map-editing-resources).
2. [Set up your audio file](/mapping/#audio-editing-resources) including finding and confirming the BPM and exporting to OGG format. 
3. Set up your first song in your mapping editor (steps vary by which editor you choose).
4. Get mapping! Review [Basic Mapping practices](/mapping/#tutorials-and-references) before you start. [Playtest](/mapping/#playtesting) your own work early and often while mapping.
5. Get lighting! Review [Basic Lighting information](/mapping/#lighting-practices). Simple manual lighting is easier than you think!
6. Get your map [playtested](/mapping/#playtesting)! Third-party playtesting via the BSMG Discord is highly recommended to get constructive feedback and to get past your own “map blindness.”
7. Once your song has been mapped, lighted, and playtested you’re ready to [release](/mapping/#publishing-songs) your song to the world on Beat Saver.

## Tutorials and References
### Video Guides
* [BennyDaBeast's Mapping Tutorials](https://bsaber.com/benny-custom-mapping/) **highly recommended**
::: warning
Benny uses a slightly older version of Mediocre Mapper in these tutorials. The UI and some processes have changed in the most recent MM/MMA version but the rest of the content is great!
:::
* [Freeek's Mapping and Editor Tutorials](https://www.youtube.com/playlist?list=PLYeZR6d3zDPgDgWogOwMteL-5SQWAE14b)
::: warning
Freeek uses a very old editor called EditSaber in these tutorials. Many UI elements and processes have changed in newer editors but the rest of the content is great!
:::
* [Megalon's Official Editor Tutorial](https://www.youtube.com/watch?v=5Ex6sOEVgrM)

### Written Guides
* [Best Practices Guide](https://bit.ly/2LjbURw), by Awfulnaut **please for the love of all things good read this!**
* [Mapping Quickstart Guide](https://bsaber.com/mapping-quickstart-guide-ogg-bpm-offset-and-timing/), by SilentCaay
* [OST Analysis Spreadsheet](https://docs.google.com/spreadsheets/d/13wyoviJAplYOrsMocOA7YNXJxVRHd74G7z4U2jhCZa4/edit#gid=0)
* [Error Checking with MediocreMapper](https://docs.google.com/document/d/1IYIMQVHK75ZG1JV2VKCTagA_ty-tnzzR7yaFPHTiswg), by Helen Carnate

## Audio Editing Resources
Before you can start mapping you need to choose a song, find some basic information about it, and set it up using an audio editor. The most commonly used editor is the free [Audacity](https://www.audacityteam.org/) utility. The rest of this audio section will reference how to use this tool to set up and edit your audio file.

* [Basic Audio Setup](/mapping/basic-audio.md)
* [Advanced Audio Editing](/mapping/advanced-audio.md)

## Map Editing Resources
There are both official and community-developed editors available and preference is highly personal and frequently shifting as new official and community-developed tools come and go.

### Community Editors
Community editors are often a source of innovation with a lot of beneficial quality of life features for mappers, and can be used by mappers without VR. However, they may also be incomplete, unstable, or unpredictable at times so use with caution.

::: tip INFO
Interested in making your own editor or converter? You may find the [SongCore readme page](https://github.com/Kylemc1413/SongCore/blob/master/README.md) and [this Pastebin](https://pastebin.com/cTPGrxWY) helpful!
:::

#### Mediocre Map Assistant
A fork of a fork of a fork... the most feature rich 3D editor used by the majority of the mapping community, now stripped of memes and all the fun stuff. RIP Bongo cat. Uses the new 2.0 song format and updated BeatSaver data schema. [Mediocre Map Assistant 2 Download](https://github.com/Assistant/MediocreMapAssistant2/releases/latest)
* Check out the (almost finished) [Mediocre Map Assistant User Guide](/mapping/mediocre-mapper) for info on installation, initial setup, song setup, basic controls, error checking, and more.

#### BeatMapper.app
A new web-based 3D beat saber editor using the new 2.0 song format. Runs in the browser so it's platform agnostic. [BeatMapper Website](https://beatmapper.app/)

### Official Editor 
The official editor is developed and supported by Beat Games and pre-installed with the Steam VR or Oculus PC versions of the game. It makes playtesting very convenient with one-click access to your work-in-progress in-game. The official editor is 2D and requires good visualization skills to translate well to a 3D play space, which can be challenging for new mappers. The vast majority of mappers use a [Community Editor](https://bsmg.wiki/mapping#community-editors).

* To access, launch the editor from within Beat Saber in your HMD or use fpfc launch parameters to open directly from your PC
* Megalon's [Official Editor Tutorial Video](https://www.youtube.com/watch?v=5Ex6sOEVgrM)

### Additional Mapping Resources
* [BeatMapperTools](https://mappers.beatmappertools.com/) by **Darkuni**
A utility for users of Mediocre Mapper and Mediocre Map Assistant 2 to easily convert, test, and package their maps.
* [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit**
A suite of tools for mappers that includes:
  * Schema Fixer: Easily fix maps made in Mediocre Mapper Mk4.1 and Mk5 for upload to Beatsaver
  * Tempo Changer: For those who need to change the BPM of their entire map that will correctly shift block placements 
  * Offset Remover: Removes editor offset and snaps notes/obstacles/events to common precisions to try and mitigate floating point error
  * Note Sorter: Sorts unordered notes/obstacles/events in the map file to fix stack spawning  
  **Works on new format .dat files**
* [BPM Saber](https://github.com/zevdg/bpm-saber), by **Zevdg**
A utility for mappers who need to change the BPM of their entire map that will correctly shift block placements. **Only works on old format .json files**
* [BPM Saber](https://bsaber.com/bpmsaber/), by **Elliotttate**
A utility for finding the BPM of a song
* Fayhe's [osu! Editor Timing Tutorial](https://www.youtube.com/watch?v=nIX0koHzW8c&t)

## Mapping Practices
> "You have to know the rules before you can break them."  
      ~ Uninstaller
      
There is no holy bible of mapping but this section of the wiki includes a lot of tribal knowledge from the community on best practices at all levels of mapping. Our advice is to follow these rules until you're comfortable with your skills and then get creative, experiment, and innovate!

***These pages are still in the works... links to come soon!***
* Basic Mapping
* Intermediate Mapping
* Extended Mapping (not recommended for rookie mappers)

### Mapper Roles
To apply for the **Mapper** role on the Beat Saber Modding Group discord you must have released three solid/playable maps (collaborations are acceptable) and complete the [Mapper Role Submission Form](https://docs.google.com/forms/d/e/1FAIpQLSdtl2bmP4T5GwAMEUIGFt5xSb2KMCAkfPuVrcOMgCSmZMw3cg/viewform). Your application and maps will eventually be reviewed, but the wait for approval could be long due to limited staff.

### Modding & Ranking
Maps that meet specific [Ranking Criteria](https://docs.google.com/document/d/1mtVihRO1LomyptXayoDNDTQYgX_TQPp6ZYDmtwR2jMI/edit) and go through an intensive review process called “modding” have the potential to become ranked, awarding players Performance Points (PP) toward global leaderboards. More information and an in-depth FAQ is available on the [ScoreSaber Discord](https://discord.gg/WpuDMwU)

* Prior to requesting ranking, mappers should thoroughly review the ranking criteria and [metadata standards](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) and have their map modded by a knowledgeable source. *Want an even more detailed look? Review the [Ranking Team Handbook](https://docs.google.com/document/d/18sT1CEVc-Do_kpAs567BdeJqWSzT9xazp20biA9Th0o/edit?usp=sharing) for some of the more ambiguous ranking considerations.*
* Once your map has been modded and revised, it’s ready to be submitted via the ScoreSaber Discord for review by the ranking team (which involves additional rounds of strict modding and revision).
* If a ranking team member deems the map acceptable it will be added to the ranking request queue to be voted on by the full ranking team. 

## Lighting Practices
A map is not considered complete without some form of lighting included. Lighting can range from very basic to incredibly detailed using additional mods to enable more features.

* [Beginner's Guide to Lighting](https://docs.google.com/document/d/1wpZgBeOD1-UbJpXf-b6gX5ICNYygCd6UK6LOPm-t5QM/edit) by Puds
* [Lighting Environment Guide](https://bsaber.com/creating-lighting-environment-guide/) by ManDynasty
* [Using Flash & Fade Lighting Events](https://bsaber.com/creating-lighting-how-flash-fade-notes-actually-work-in-game/) by ManDynasty
* [Side Laser Speed Reference](https://docs.google.com/spreadsheets/d/1tIERmSyFI4ssjDkE-oJjBBvUZUJ7eoVhCQyM3_BsJwE/edit?usp=sharing) by LittleAsi

**Lightmap**
A tool to automatically generate lighting events for a custom song by Freeek and Recrudesce!

::: warning
The github release and video is for the old .json map format. Lightmap has been integrated into Mediocre Mapper Mk4 and up as well as Mediocre Map Assistant 2 which can be accessed in the error checker menu.
:::  

Get it here: https://github.com/recrudesce/lightmap/releases
Explanation video and examples: https://www.youtube.com/watch?v=ImO9cFW5vyQ&t

## Playtesting
Testing your work is a critical part of mapping. Playing your own maps as you work helps you adjust for major playability issues and get a feel for your map. Third-party or “outside” playtesting is when someone other than yourself tests your pre-release map and provides constructive feedback and is helpful in highlighting issues to which you may be "map blind."

::: warning
You **do not** need to upload your map to Beat Saver in order for you or anyone else to test.
:::

* If your map is using the 1.0 song format (your files are .json and .ogg) you must convert your map using one of several available tools like [Songe Converter](https://github.com/lolPants/songe-converter) by lolPants or [BeatMapper Tools](https://mappers.beatmappertools.com/) by Darkuni. **Update your editor to MMA2 or BeatMapper** See [Community Editors](/mapping#community-editors) for links
* If your map is using the 2.0 song format (your files are .dat and .ogg/.egg) you’re ready to test.

### Testing on a PC
Follow these steps to test any of your maps made with a community editor using PC-based VR.

1. If your WIP song folder isn’t already in Beat Saber_Data\CustomWIPLevels then place a copy there.
2. Access your map in-game via the CustomWIPLevels category in the bottom song pack menu. Use practice mode to play (the small button next to the yellow play button).

::: tip NOTE
You will need to have at least the core mods installed in order to see the CustomWIPLevels category. :::  

### Testing on a Quest
Follow these steps to test any of your maps made with a community editor using an Oculus Quest. You must have [SideQuest](https://sidequestvr.com) and [BMBF](https://github.com/kihecido/BMBF/releases/latest) installed.

1. Create a compressed .zip file of the individual song files (not the song folder).
2. Drag and drop the .zip file onto the BMBF upload window.
3. Click <kbd>Sync to Beat Saber</kbd>.
4. Access your map in-game via the CustomWIPLevels category in the bottom song pack menu. Use practice mode to play (the small button next to the yellow play button).

### Community / Third Party Testing
The #testplays channel in the Beat Saber Modding Group discord makes it easy to have your work checked by knowledgeable mappers. Playtesters will provide constructive feedback on how to improve your map in either video or text format in the #mapping-discussion channel.

1. Create a compressed .zip file of the individual song files (not the song folder).
2. Upload your map to #testplays using the following format:
**Map:** The name and artist of your map
**Length:** The length of the song
**BPM:** The BPM of the song
**Difficulty:** Which difficulties are included
**Feedback:** Any requests for feedback (specific difficulties to be tested, things to look for etc.)
**Status:** What state is the map in? (i.e., First draft complete, no lights; 1:45 mapped; release candidate w/ lighting; etc.)
3. Testers will usually look at your map within 1-7 days and will use a number of reaction emojis (listed in #testplays pinned posts) to track testing status.

You can use the following code to copy and paste into Discord:
```
**Map:**
**Length:**
**BPM:**
**Difficulty:**
**Feedback:**
**Status:**
```
## Publishing Songs
One your song has been mapped, lighted, and playtested and it’s a finished product you’re ready to release it to the world on [BeatSaver](https://beatsaver.com).

::: danger
Please **do not** upload an incomplete WIP map to BeatSaver; Uploading to BeatSaver equates to "Putting it on the store shelf" and should only be your final version.  
Anyone who plays your WIP without Practice Mode will create a new leaderboard for that map.  
See the [Playtesting](/mapping/#playtesting) section for instructions.
:::

### BeatSaver
[BeatSaver](https://beatsaver.com/) is the public repository for all custom Beat Saber maps. Songs must be in the 2.0 song format (files are .dat and .ogg/.egg/.wav) to be compatible.

#### How to Release a Map

1. [Create an account](https://beatsaver.com/auth/register) on BeatSaver.
2. Click the *Upload* link in the top-right nav bar.
3. Add your BeatSaver map name and map description. Only the map name is searchable so be sure to include song name, song artist, and other terms that might make it easier to find your map.
::: tip
Use "tags" like (Chroma), (OneSaber), or (Mapping Extensions) if your map uses some special modifications or characteristics you want to highlight.
:::
4. Add your .zip file and click the <kbd>Upload</kbd> button.”

::: warning
Map files cannot currently be updated on BeatSaver. If you need to upload a new version of your map you will need to delete the old one and re-post.
:::

#### BeatSaver Data Schema Change - October 27, 2019
BeatSaver now enforces a schema in order for your maps to be uploaded, of which public MediocreMapper is not compliant with. The most breaking change happened in the difficulty data files, where MM-specific fields were moved inside a `_customData` object.

**Resolution #1**
Switch to the [Mediocre Map Assistant 2](https://github.com/Assistant/MediocreMapAssistant2/releases/latest) editor. Open each difficulty file and save it to correct the schema. Use MMA2 going forward.

**Resolution #2**
Use the [Schema Updater Utility](https://skystudioapps.com/mapping-tools/#schema-fixer) by **+1 Rabbit** to fix your files before uploading.

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
[BeastSaber](http://www.bsaber.com) is a song review and curation site with a social side for member profiles, forums, news, and tutorials. All songs published on BeatSaver are mirrored to BeastSaber within 10-15 minutes.
