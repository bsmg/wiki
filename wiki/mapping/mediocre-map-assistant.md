---
sidebar: auto
---
# Mediocre Map Assistant User Guide
_Essential information to get up and running using Mediocre Map Assistant_

::: warning NOTE
This guide currently supports both Mediocre Mapper Mk5 (the final public release by Squeaksies) and the new MM fork, [Mediocre Map Assistant](https://github.com/Assistant/MediocreMapAssistant2/releases/latest) by Assistant. All future public development will occur on MMA.
:::

## Editor Setup
### Installation
1. Download MMA2.zip from [GitHub](https://github.com/Assistant/MediocreMapAssistant2/releases/latest) 
2. Unzip the file and place the extracted folder wherever you like on your hard drive.
3. Double click `mediocremapassistant2.exe` to run.

### First Time Setup
The first time you run MM you will need to direct it to the location of two folders: `CustomLevels` and `CustomWIPLevels`. You have several options available to you:

**If you have VR and Beat Saber:**
* Give MM the path to the two appropriate folders
* Steam Example: `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels`
* Oculus Example: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`

**If you do not have VR or Beat Saber OR have VR but don’t have Beat Saber:**
* Make two folders called `CustomLevels` and `CustomWIPLevels`
* Example: `C:\Users\Helen\Documents\CustomWIPLevels`

![Screenshot of Mediocre Mapper path entry](https://i.imgur.com/MqhSM0p.jpg)
All of your working map files will go into a song name folder within this CustomWIPLevels folder.

### Editor Settings
Once you've set up your paths, these core settings are all available from the MM song selection page when you first open the program.
![Song Selection screen in Mediocre Map Assistant](https://i.imgur.com/GTH8rH5.jpg)

#### Map Selection
The map selection pane has four tabs, each with songs listed alphabetically.
* **WIP Songs:** This tab contains all of the map folders saved in your `CustomWIPLevels` folder. New maps are created here and are accessible in-game under "Custom WIP Levels."
* **Custom Songs:** This tab contains all the downloaded custom songs saved in your `CustomLevels` folder. Maps are accessible in-game under "Custom Levels."
* **Multi-Mapper:** This tab contains any maps being collboratively worked on via the *Mediocre Mapper Server.*
* **Temp Loader:** This tab allows you to temporarily "quick preview" zip files online (i.e., from #testplays, BeatSaver, or BeastSaber) without downloading and extracting them.

There are several functions available to you on this screen:
* The <kbd>Refresh Song List</kbd> button refreshes the songs listed.
* The <kbd>Edit</kbd> button next to a map opens it in MM. 
* The <kbd>Delete</kbd> button next to a map perma-deletes it. **Note:** Once deleted this way maps are gone forever and unrecoverable.
* The <kbd>Star</kbd> button next to a map favorites it, bumping it to the top of the list.

#### Map Creation
Below the map selection pane you can create a new empty song folder in `CustomWIPLevels` by entering the desired name of your folder (typically Song Name or Artist - Song Name) then clicking <kbd>Create Level</kbd>.

#### Settings
The settings pane includes global settings for autosaving, zip packaging, folder paths, and more.
* **Autosave Settings:** Autosave is enabled by default at an interval of 300 seconds (5 minutes). This is generally fine for most users unless you are doing a light-heavy map. Autosave while playing the song in the editor is also enabled by default.
* **Mapping & Lighting Settings:** 
   - No lighting is off by default, meaning that any lighting events placed on the lighting track will play. Check to prevent lights from playing while mapping.
   - You have the option to provide MM with an alternate folder to save your packaged songs. By default the packaged song will be found in the same folder where the uncompressed map lives.
* **Beta Settings:** If you have the Mapping Extensions mod installed you will have additional checkboxes enabled for "extended" mapping features like precision placement, precision rotation, and six-lane. New mappers are encouraged to skip this until they're more comfortable with the basics.
* **Legacy Settings:** If you have the Chroma mod installed you can check this box to enable the Chroma lighting toolbar but it has been unsupported for some time.
* **Other Settings:** Click the <kbd>Clear Settings</kbd> button to revert to default settings. You may also enter new paths for either of your song folders. If for some reason nothing works you can click the <kbd>Everything Inexplicably Broken?</kbd> button to delete your MM config file.

>Double check to make sure that the paths you entered at setup are showing up under the "Songs" and "WIP Songs" fields. Add them if they are missing.
{.is-warning}

## Song Setup
Once you've finished one-time editor setup you're ready to create your first map. 

### Song Creation
There are four files (minimum) you need to create a map:

**Mapper-Provided**
* Your song file in .ogg format (review setup instructions).
* Your cover file in .jpg or .png. 

**Editor-Created**
* Info.dat file which contains all of the core data for your map as a whole. Created the first time you open the map.
* [difficulty].dat file which contains all of the data specific to each difficulty.

You have two options to create your song folder:
1. Enter your desired folder name in the 'Create New Level' pane and click <kbd>Create Level</kbd>. Your new folder will automatically appear in your map list.
![Using "Create A New Level" to make a song folder](https://i.imgur.com/HlV7DVd.jpg)
2. Navigate to your `CustomWIPLevels` folder and make a folder with your desired folder name. You will need to click <kbd>Refresh Song List</kbd> to see your folder.

Click <kbd>Edit</kbd> to enter your song information and metadata.
### Song Info Settings
The `Song Info` page is the first screen you see every time you edit a map.
![Mediocre Map Assistant song setup screen](https://i.imgur.com/CiopwiZ.jpg?1)
#### Whole Map Settings
On the left side of the `Song Info` page is information that applies to your whole map. See [Beat Saber Metadata Criteria](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) for standards on presenting complex song names and multiple artists.
* **Song Name:** The primary name of the song
* **Song SubName:** Any following tags like (Short Ver.), (SDVX Mix), etc.
* **Song Artist:** The person or group who authored the song
* **Mapper:** This is YOU! It's recommended you list your name the same as your BeatSaver user name
* **BPM:** The tempo of the song. It's *critical* to get this right before you start. See [Basic Audio Setup](#) for guidance
* **Audio File Name:** The name of the song file (including the extension) you have placed in `CustomWIPLevels > [Song Folder]`. Recommended to just name it *song.ogg* to avoid the pitfalls of special characters
* **Preview Start Time:** Position in the song file, in seconds, of the start of the in-game menu song preview. Defaults to 12s
* **Preview Duration:** Duration, in seconds, of the in-game menu song preview. Defaults to 10s
* **Cover Image Name:** The name of the image file (including the extension) you have placed in `CustomWIPLevels > [Song Folder]`. Must be perfectly square and at least 256 px but no more than 512 px
* **Environment Name:** A dropdown menu of the default environments or platforms available. See [Basic Lighting Practices](#) for an overview of these environments
* **Custom Platform:** The copy/pasted name of a custom platform from [ModelSaber](https://modelsaber.com/Platforms/). This feature is glitchy and it's recommended that you JSON edit any custom platform information

The <kbd>Open Song Folder</kbd> button will open your song folder in Windows Explorer. This will help you confirm that you have your files in the right spot.
The <kbd>Package Song to Zip</kbd> button will remove your autosaves folder and zip the files for BeatSaver.
The <kbd>Save Song Info</kbd> button commits all of your metadata to the info.dat file
#### Difficulty Settings
On the right side of the `Song Info` page is the area where you create individual difficulties and edit data that only applies to a single diffculty level. To create your first difficulty:

1. Click the **<kbd>Add Difficulty</kbd>** button. The default difficulty is easy
2. In the **Difficulty** dropdown select which difficulty you want to make (easy, normal, hard, expert, or expertplus)
3. In the **Characteristic** dropdown you can select Standard, No Arrows, or Single Saber.
4. **Difficulty Label** is optional and allows you to give your difficulties custom names in-game, *This feature may not reliably work on all VR models*
5. The **Start Offset (ms)** field is where you entered an offset value, in milliseconds, if needed based on the way you [setup your audio file](#)
6. The **Note Jump Speed** field is where you change the speed at which the notes move down the track. Click into the field for a pop-up of helpful information. See [Basic Mapping Practices](#) for guidance on setting an appropriate NJS for your difficulty.
7. The **Spawn Distance Modifier** field allows you to adjust how far down the track your blocks appear. Changing this value will adjust the "jump distance" guidance pop-up

> You **must** click <kbd>Apply Modifications</kbd> if you make a change to difficulty settings, otherwise it will not be saved. In MMA2 this appears to automatically happen when you enter a song file for editing.
{.is-warning}

Click <kbd>Edit Level</kbd> when you're ready to start mapping!

#### Other Settings
* **Contributors Tab:** This left side tab is an optional spot to give credit to mappers, lighters, playtesters or other contributors to your map. Enter the contributor role, their name, and the file name of a square "profile image" which you place in your song folder
* **Extra Fields:** This right side tab allows you to include in-game viewable warnings (i.e, Seizure Alert), information, suggestions (i.e. Use Chroma), and requirements (i.e., Mapping Extensions)
* **Autosaves:** This right side tab allows you to easily restore an autosaved version of your map if you've crashed or need to revert work

### Mapping Settings
Mapping settings can be accessed by clicking the hamburger menu in the top right while editing the map. It can also be toggled using the <kbd>ESC</kbd> key. These settings persist throughout your mapping session but will be reset the next time you open the editor. The `Mapping Settings` pane also includes a comprehensive list of keybindings.
![Mapping Setting screen in Mediocre Map Assistant](https://i.imgur.com/h1DoGjU.jpg?1)

* **<kbd>Move WaveForm to Other Side</kbd>**: This button will shift the wave form from the left of the mapping track to the left of the lighting track. Useful during the lighting process.
* **Playback Speed:** Will slow down the map and song in the editor. Decimal values representing pecentage (i.e., 1.0 = 100% speed). This feature is helpful when timing particularly gnarly sections of a map.
* **Editor Scale:** Adjusts the spacing of the beat markers on the map to help with visibility. Increase the number to spread notes or lighting events out more for easier placement.
* **Note Sound:** Allows you to select from several in-editor hit sounds to help with timing. Select `None` to turn off hit sounds in the editor. *This does not impact hit sounds in-game*
* **Music Volume:** Adjusts the volume of the song in the editor only. 100% by default.
* **Hit Volume:** Adjusts the volume of the hit sounds in the editor only. 100% by default
* **Metronome Volume:** Adjusts the volume of an in-editor metronome. 0% (off) by default
* **Enable WaveForm:** Toggles the wave form visualizer on and off. The wave form is incredibly helpful for timing but it very resource intensive on your CPU
* **Move Every Object (in beats):** Allows you enter a decimal value in beats, positive or negative, to shift ALL objects that number of beats up or down the track. Helps you fix hot starts if you didn't correctly set up your audio file
* **<kbd>Apply Move:</kbd>** This button will commit the note movement specified above
* **<kbd>Make/Delete Bookmark</kbd>**: This button will add a bookmark at the current cursor placement if one doesn't exist (add a name and hit enter to save) or will delete an existing bookmark
* **<kbd>Set Preview Start at Cursor</kbd>**: This button allows you to quickly reset the beginning of your in-game music preview at the cursor location
## Basic Controls
> This is a stub section in progress. DM helencarnate#2079 if you'd like to contribute.
{.is-info}
## Error Checker
> This is a stub section in progress. DM helencarnate#2079 if you'd like to contribute.
{.is-info}

The **Error Checker** functionality is one of the top quality of life features found in MMA. Access the error checker by clicking <kbd>SHIFT+TAB</kbd> to check for vision blocks, double directionals, stacked notes, and view map stats.
### Finding & Interpreting Errors
This section walks you through basic usage of the error checker's primary functions: **Check for Double Directionals, Check for Vision Blocks**, and **Check for Stacked Notes**
#### Navigating the Error Checker
![Error Checker main panel](https://i.imgur.com/ZKmFjQH.png)

1. **Minimum Time:** The minimum amount of time in beats that will be checked. Leave it alone.
2. **Maximum Time:** The maximum amount of time in beats that will be checked. You’ll need to adjust this based on both the BPM and NJS (Note Jump Speed) of your song/level. ***1.5 beats is the minimum recommended for new mappers***
3. **Double-Directional Checker:** Highlights any instances of a block of the same color pointing in the same direction within the number of beats specified in *Maximum Time*.
4. **Vision Block Checker:** Highlights any instances of blocks or walls obscuring or hiding a block within the number of beats specified in *Maximum Time*.
5. **Stacked Block Checker:** Highlights any instances where multiple blocks are stacked on top of each other.
6. **Clear Errors:** Clears highlighting from all error blocks. They’re still errors, just not marked. 
7. **Previous/Next:** Jumps you backwards or forwards through your map to each highlighted error.
8. **Stat Panel:** A wondrous box of delicious statistical information that can help you ensure that your map is leveled appropriately and follows row placement best practices.
9. **Lightmap Integration:** Not part of error checking, and not covered in this guide, but this is how you can add fast (but terrible) lights.

#### Highlighted Errors
Once you click “Check for [error of your choice]” pay attention to the bottom center of your screen. Red text will pop up that tells you how many errors were found within the specified number of beats:
![122 errors found... don't do this. This is bad.](https://i.imgur.com/X1ZoKYa.png)

* Only one error can be highlighted at a time. 
* Clicking one error button immediately after the other will wipe out the error highlights and replace them with the next type. 
* Use the previous and next buttons to jump from error to error to resolve them. 

**For Double-Directionals:** The highlighted block is the second instance of a same color-same direction, so look back in time to see the first block in the sequence. You can change either the first instance or the second instance to correct the error. Once you’ve made your change you can click “Check for Double Directionals” again to see if the issue is resolved. You can change the max time value to suit the speed of your song. 1.5 beats is a good baseline for new mappers but the faster the song the more beats you may need for a reasonable reset (if that is your intention).
>Diagonals count as double directionals with BOTH cardinal directions that follow. For example:
>![Red note up right](https://i.imgur.com/u2XHSJ5.png) is a DD with both ![Red note up](https://i.imgur.com/c5SuWVv.png) and ![Red note right](https://i.imgur.com/ONpMhdc.png)
{.is-info}

Example | Explanation
- | -
![Double directional example](https://i.imgur.com/Km2W2it.png) | In this example, max time is set to 0.75 beats.<br />There is a set of down notes 1/2 beat apart and then a set of diagonal notes 1/2 beat after that. The first set of blocks isn't flagged but the next two are because they are double directionals within 3/4 (0.75) of a beat after the first set.

>Keep clicking the “Check for Double Directionals” button… sometimes fixing one error can create a new error out of your line of sight. Check early and often!
{.is-warning}

**For Vision Blocks:** The highlighted block is being obscured by the blocks immediately in front of it within the specified distance. This guide won’t get into details on vision blocks but mappers should be very selective when placing any blocks in the center two positions as those are at eye-height for the player in-game and are not-so-affectionately referred to as “facenotes.” Blocks in other positions can be vision blocks as well but the two center positions are the most likely culprits. Depending on your BPM, 1-2 beats is fine.
### Stats Panel
## Song Packaging
> This is a stub section in progress. DM helencarnate#2079 if you'd like to contribute.
{.is-info}
