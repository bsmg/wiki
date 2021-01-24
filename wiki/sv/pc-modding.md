---
sidebar: auto
---

# PC Moddning
# Förord

::: danger VARNING När du väljer att använda mods, förstår du att:
- Du kan uppleva problem som inte finns i omoddade spelet. 99,9% av buggar, kraschar och lagg beror på mods.
- Mods brukar gå sönder av uppdateringar och det är normalt - ha tålamod och var respektfull när detta händer. Moddare är volontärer med riktiga liv.
- Beat Games försöker inte avsiktligt att ta sönder mods. De arbetar med kodbasen och ibland tar detta sönder mods, men de är inte ute efter att döda mods.

Attackera inte spelutvecklare för frågor som rör mods, och vice versa - moddare och spelutvecklare är två separata grupper. Bara var inte en idiot, ok? :::

Beat Saber stöder inbyggt nedladdade banor, så om det är allt du letar efter behöver du inte fler mods! Det är dock en klok idé att installera `SongCore`. Detta mod expanderar på basspelsfunktionen genom att förbättra laddningstider och ge funktionalitet för andra mods som in-gamenedladdare, anpassade topplistor, spellistor etc.

::: warning Den här guiden är för PC-moddning i Windows.  
Om du har en Quest, se [Quest Modding page](/quest-modding.md).  
Om du använder Linux, kolla in [Linux-sidan](/modding/linux.md) eller [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

Om du stöter på problem någon gång, gå till [supportsidan](./support) och se om du kan identifiera vad som gick fel innan du frågar på Discordservern. Chansen är att ditt svar finns på den sidan!

:::warning Jag såg den här videon av Elite Eric, men jag fastnade/det fungerade inte. Varför? Vi på BSMG rekommenderar **starkt** att du inte använder någon video av Elite Eric. Efter att ha granskat hans material fann vi att det innehåller en stor mängd ofullständig eller felaktig information. Försök att nå ut till honom för att rätta till dessa fel har tyvärr mötts med tystnad och nya (och felaktiga) videor.

Istället bör du följa de skrivna guiderna här på vår wiki eller söka hjälp i [BSMGs Discordserver](https://discord.gg/beatsabermods). :::

## Installerare
### ModAssistant
> **DETTA ÄR DEN NUVARANDE REKOMMENDERADE MODINSTALLERAREN.**

__**Kör spelet minst en gång**** innan du försöker modifiera spelet! Detta gäller för ominstallation av ditt spel också.

En enkel Beat Saber modinstallerare likt mod manager, men med ytterligare funktioner som borttagning av mod och versionskontroll! Get it on [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Hur man får fler banor
### Nedladdare i spelet
Pluginet `BeatSaver Downloader` låter dig ladda ner banor i spelet med hjälp av `MORE SONGS` -knappen på `MODS`-menyskärmen. Detta laddar ner banor direkt från [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) är huvudarkivet för banor gjorda av gemenskapen. Många andra verktyg och webbplatser förbättrar upplevelsen av att ladda ner banor, men denna sida är sanningskällan. För att installera banor hämtade från webbplatsen, packa upp dem i en mapp och placera dem i `Beat Saber/Beat Saber_Data/CustomLevels`.  Du kan även använda nedladdnings plug-innet i spelet, Beatlist eller Mod Assistants "OneClick™" installerings funktion.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) är en webbplats som försöker förenkla nedladdning av fantastiska banor. Beast Saber gör detta genom att kategorisera tusentals banor från beatsaver och låter dig sortera efter låtgenrer och många andra attributtaggar. Den har också en fullständig social funktion där spelare kan granska banor och lägga kommentarer under dem. En av de mest använda funktionerna är "Curator Recommended"-funktionen där ett team spelar igenom de flesta banor som släpps varje dag och rekommenderar de som sticker ut, och låter dig [automatiskt ladda ner dessa i spelet](https://bsaber.com/beatsync/).

### Verktyg för låthantering
* [BeatList](https://github.com/Alaanor/beatlist) är en app som hanterar spellistor och beatmaps, av Alaanor.

### Spellistor
Placera spellistefilen i `Beat Saber/Playlists`. Använd sedan [BeatList](https://github.com/Alaanor/beatlist) eller [Mod Assistant](https://github.com/Assistant/ModAssistant) för att ladda ner banorna. (OBS: äldre mods tillät nedladdning av spellistornas innehåll i spelet, men detta är för närvarande inte möjligt.)

## Installationsmapp
_Var är Beat Saber installerat?_

### Standardplats
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Andra platser
**Om du har flyttat din installationsmapp till en annan enhet kan det vara på platsen nedan.** Ersätt enhetsbokstaven `F` med den enhet ditt spel är installerat på.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Hur man avinstallerar mods
Ta antingen bort moddets .dll från `Plugins` -mappen, eller klicka på `Uninstall` -knappen i ModAssistant.

## Manuell installation
Ett modinstallerare är det rekommenderade sättet att installera mods. Se avsnittet [ovanför](#installers). Om du har lagat spelet och bara behöver installera plugins som inte är tillgängliga i installationsprogrammet, hoppa över till steg 4.

**Kör spelet minst en gång** innan du försöker modifiera spelet! Detta gäller för ominstallation av ditt spel också.
### Installera BSIPA
1. Ladda ner [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigera till din [installerings mapp.](#install-folder) och extrahera innehållet av BSIPA till den. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Dubbelklicka på IPA.exe för att patcha spelet. Alla mods i mappen `Plugins` kommer nu att laddas när spelet startas. Om det finns fel följde du förmodligen inte steg 2 korrekt. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Installera mods
4. Ladda ner det mod/de mods du vill installera, oavsett om det är från GitHub, #pc-mods-kanalen eller andra källor. **Se till att ladda ner alla dependencies som krävs av modden.** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Vissa mods har installationsinstruktioner, andra inte. Generellt kan du bara dra och släppa zip-innehållet i din beat saber installationsmapp, och filerna bör gå in i motsvarande mappar.


## Var man kan gå härifrån
* [Grepp och Trick](./grips-and-tricks.md)
* [Skapa Beatmaps](/mapping/)
* [Anpassade Sablar](/models/custom-sabers.md)
* [Anpassade Avatarer](/models/custom-avatars.md)
* [Anpassade Plattformar](/models/custom-platforms.md)
* [Konfigurera multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Skapa Mods](/modding/)

## Har du frågor?
Besök supportkanalerna i [BSMGs Discordserver](https://discord.gg/beatsabermods)!
