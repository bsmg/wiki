---
sidebar: auto
prev: ./intermediate-mapping.md
next: false
---
# Extended Mapping
_A quick summary of Extended Mapping_

::: danger
This is a stub page. Content to come soon!
:::

## Mapping Extensions
Bored with the standard stuff in game? Wanna make cool things with walls? This is the section to learn how!

### Set-Up
Every editor is unique in both their setup and support for Mapping Extensions (ME).
Editors known to support ME along with instructions on how to setup are as follows:

* **Mediocre Map Assistant 2**
   * [Setup with Beat Saber Installed on your PC](#me-setup-for-mma2-with-beat-saber-installed)
   * [Setup without Beat Saber Installed on your PC](#me-setup-for-mma2-without-beat-saber-installed) (E.g. Quest Users)
* [BeatMapper](https://beatmapper.app/docs/mods#mapping-extensions)
* **ChroMapper** Instructions Coming Soon!

#### ME setup for MMA2 with Beat Saber Installed

::: warning NOTE
This section assumes you are using the `CustomWIPLevels` folder in a Beat Saber install.   
Follow the [without Beat Saber Installed](#me-setup-for-mma2-without-beat-saber-installed) instructions if you store your maps in a different location.
:::

1. Start Beat Saber and then close out after the game finishes loading. This is to ensure the game is ready for mods to be installed.
2. Open [ModAssistant](https://github.com/Assistant/ModAssistant/releases/latest)
3. Make sure the version selected in the dropdown is compatible with the Beat Saber version installed on your computer.
4. Check the checkbox for MappingExtensions. (You can select additional mods to install as well.)
5. Click Install and Update and make sure there are no errors.
6. Open Beat Saber again to initialize the mods you have installed then quit the game.

To check if it worked navigate to your Beat Saber install and make sure that a MappingExtensions.dll file is present.
Not sure where Beat Saber is installed? See [FAQ: Install Folder](https://bsmg.wiki/faq/install-folder.html).

7. You are now ready to do [map setup!](#map-setup-in-mediocre-map-assistant-2)

#### ME setup for MMA2 without Beat Saber Installed

Here you will need to “trick” Mediocre Map Assistant 2 that your folder is a Beat Saber install.

Option 1:
1. Download this zip for pre-formatted folders and Mapping Extensions Plugin [here](https://drive.google.com/file/d/18MVVZu9jGNY7trf8UuA-4DUZmNdMPsDM/view?usp=sharing).
2. Extract the zip to a location of your choice.
3. Enter the path to the CustomLevels and CustomWIPLevels folder when Mediocre Mapper asks for the location. 
> The path can also be modified in the Settings Bar when you open the program.  
The settings are located near the bottom of the bar.
4. You are now ready to do [map setup!](#map-setup-in-mediocre-map-assistant-2)

Option 2:
1. Create a folder named `Beat Saber` in the location you want to store your maps.
2. In that folder, create two folders, `Beat Saber_Data` and `Plugins`.
3. In `Beat Saber_Data` create a `CustomWIPLevels` and `CustomLevels` folder.
4. Enter the path to the CustomLevels and CustomWIPLevels folder when Mediocre Mapper asks for the location. 
> The path can also be modified in the Settings Bar when you open the program.  
The settings are located near the bottom of the bar.
5. If you have maps already, go ahead and move your maps to `CustomWIPLevels` you just created.
6. Go to the `Plugins` folder you made, and drop the latest `MappingExtensions.dll` inside which can be found on [BeatMods](https://beatmods.com/).
7. You are now ready to do [map setup!](#map-setup-in-mediocre-map-assistant-2)

#### Map Setup in Mediocre Map Assistant 2

1. [Open Mediocre Map Assistant 2](https://github.com/Assistant/MediocreMapAssistant2/releases/latest)
2. In the Settings bar on the right, 3 new tick box options should be available under the Beta section:
   - **6 Lane Mode** - Extends the number of lanes available to map blocks to to 6 from 4. Also enables placement of walls outside of the lanes.
   - **Precision Placement** - Allows blocks, walls, and bombs to be placed at a finer resolution than the current grid.
   - **Prevision Rotation** - Allows blocks to be angled at any angle instead of the default 45-degree increments.
3. Enable the desired features by clicking the checkboxes. For example, wall mapping needs 6 Lane and Precision Placement.
4. Select the level you want to map in and click on the ExtraFields tab to the right of the difficulty select.
5. Click the Requirements tab and then type in `Mapping Extensions`. 
:::warning
The text you enter in the requirements has to be exact or else the features will not enable in editor.
:::
6. Click the Add button to add it to the requirements.
7. Click Save song infos in the bottom left corner.
8. Click Edit Level and you are good to go!

### Multi-Lane Mapping
### Precision Placement
### Precision Rotation
### Wall Mapping
### Bomb Mapping
### Extended Characteristics

## Credits
Content in this section was authored by [The Good Boi](/mapping/mapping-credits.html#the-good-boi), [Bloodcloak](/mapping/mapping-credits.html#bloodcloak), and [Spooky Ghost](/mapping/mapping-credits.html#spooky-ghost).