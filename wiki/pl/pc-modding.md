---
sidebar: auto
---

# Modowanie na PC
# Wprowadzenie

::: danger DISCLAIMER Decydując się na korzystanie z modów, rozumiesz że:
- Możesz doświadczyć problemów, które nie występują w podstawowej grze. 99.9% błędów, awarii i lagów jest spowodowane przez mody.
- Mody są podatne na psucie się przez aktualizację gry, co jest normalne. Bądź cierpliwy i okazuj szacunek, gdy tak się dziaje, jako że modderzy są wolontariuszami i każdy z nich ma swoje życie.
- Beat Games nie psuje modów celowo. Pracują nad bazą kodu, co czasami psuje mody, ale nie jest to ich intencjonalne działanie.

Nie atakuj deweloperów gry za problemy związane z modami i vice versa - modderzy i deweloperzy gry to dwie oddzielne grupy. Po prostu nie bądź dupkiem, ok? :::

Beat Saber natively supports custom songs, so if that's all you're looking for, you don't require more mods! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](/modding/linux.md) or [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

If you run into problems at any point, please head to the [support page](./support) and see if you can identify what went wrong before asking in the Discord server. Chances are, your answer is on that page!

:::warning I watched this video by Elite Eric, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using any tutorials by Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::

## Instalatory
### Mod Assistant
> **JEST TO OBECNIE REKOMENDOWANY INSTALATOR MODÓW.**

__**Uruchom grę co najmniej raz**** zanim zaczniesz modować grę! Dotyczy to również ponownej instalacji gry.

Prosty Instalator Modów Beat Sabera, podobny do menedżera modów, ale z dodatkowymi funkcjami, takimi jak usuwanie modów i sprawdzanie wersji! Pobierz z [GitHuba Mod Assistant'a ](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Jak zdobyć więcej piosenek
### Pobieranie w grze
Wtyczka `BeatSaver Downloader` pozwala na pobieranie map w grze, wykorzystując przycisk `MORE SONGS` w menu `MODS`. Poziomy pobierane są bezpośrednio ze strony [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is the source of truth. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`.  You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on beatsaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Aplikacje do zarządzania utworami
* [BeatList](https://github.com/Alaanor/beatlist) is an app to manage playlist and beatmaps, by Alaanor.

### Playlisty
Place the playlist file into `Beat Saber/Playlists`, then use [BeatList](https://github.com/Alaanor/beatlist) or [Mod Assistant](https://github.com/Assistant/ModAssistant) to download the maps. (Note: older mods allowed downloading the contents of playlists in-game, but this is currently not possible.)

## Folder instalacji
_Gdzie jest zainstalowany Beat Saber?_

### Domyślna lokalizacja
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Inne lokalizacje
**Jeśli przeniosłeś folder instalacyjny na inny dysk, może on znajdować się w miejscu jak poniżej.** Zamień literę napędu `F` na dysk, na którym zainstalowana jest gra.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Jak odinstalować mody
Usuń plik dll z folderu `Plugins` lub kliknij przycisk `Uninstall` w aplikacji Mod Assistant.

## Instalacja ręczna
Instalator modów jest zalecanym sposobem instalacji modów. Zobacz sekcję [powyżej](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

****Uruchom grę co najmniej raz zanim zaczniesz modować grę! Dotyczy to również ponownej instalacji gry.
### Zainstaluj BSIPA
1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Double click IPA.exe to patch the game. Any mods in the `Plugins` folder will now be loaded when starting the game. If there are errors, you probably didn't follow step 2 correctly. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Zainstaluj mody
4. Download the mod(s) you wish to install, whether it be from GitHub, the #pc-mods channel, or other sources. **Make sure to download any dependencies required by the mod.** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Some mods have installation instructions, some don't. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.


## Co dalej
* [Grips and Tricks](./grips-and-tricks.md)
* [Making Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Setup Multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Making Mods](/modding/)

## Masz pytania?
Odwiedź kanały wsparcia na [Discordzie BSMG](https://discord.gg/beatsabermods)!
