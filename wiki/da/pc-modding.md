---
sidebar: auto
---

# PC Modding
# Forord

::: danger DISCLAIMER Når du vælger at benytte mods, forstår du at:
- Du kan opleve problemer, der ikke findes i vanilla-spillet. 99,9% af bugs, crashes og lag skyldes mods.
- Mods er underlagt af at blive ødelagt af opdateringer, og det er normalt - være tålmodig og respektfuld når dette sker, eftersom modders er frivillige med et liv ved siden af.
- Beat Games forsøger ikke med vilje at ødelægge mods. De forsøger at arbejde med programmeringen, og nogle gange vil dette ødelægge mods, men de forsøger ikke at ødelægge mods.

Angrib ikke udviklerne for problemer relateret til mods eller omvendt - modders og udviklere er to separate grupper. Bare lad være med at være en idiot. :::

Beat Saber understøtter allerede brugerskabte sange, så hvis det er alt du leder efter, behøver du ikke flere mods! Det er en god idé at installere `SongCore` alligevel, da denne mod udvider spillets grundfunktion for at forbedre indlæsningstiden og levere funktionalitet til andre mods såsom download af sange inde i spillet, ranglister til brugerskabte baner, playlister osv.

:::warning ADVARSEL Denne guide er til PC-modding på Windows.  
Hvis du har en Quest, se siden [Quest Modding](/da/quest-modding.md).  
Hvis du er på Linux, så tjek [Linux-siden](/da/modding/linux.md) eller [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

Hvis du løber ind i problemer på noget tidspunkt, så gå til [supportsiden](./support) og se om du kan identificere, hvad der gik galt, før du spørger inde på Discord serveren. Der er gode muligheder for, at svaret er på den side!

:::warning Jeg så denne video af Elite Eric, men jeg sidder fast/det virker ikke. Hvad skyldes det? Vi i BSMG anbefaler **kraftigt** imod at bruge nogen vejledninger af Elite Eric. Efter at have gennemgået meget af hans indhold, er der fundet en stor mængde af ufuldstændige, fejlagtige, eller direkte forkerte oplysninger. Forsøg på at nå ud til ham for at rette disse fejl er desværre blevet mødt med tavshed og nye (også forkerte) vejledninger.

I stedet bør du følge de skriftlige vejledninger her på wikisiden eller søge hjælp i [BSMG Discord](https://discord.gg/beatsabermods). :::

## Installering
### Mod Assistant
> **DETTE ER NUVÆRENDE DET ANBEFALEDE INSTALLATIONSPROGRAM TIL MODS.**

__**Kør spillet mindst én gang**** før du forsøger at modde spillet! Dette gælder også for geninstallering af dit spil.

Det er et simpelt Beat Saber Mod Installationsprogram som ligner mod manager, men med yderligere funktioner såsom mod-fjernelse og kontrol af din version! Få det på [Assistents GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistent](~@images/beginners-guide/modassistant.png)

## Hvordan man får flere sange
### Downloader inde i spillet
Plugin'et `BeatSaver Downloader` giver dig mulighed for at downloade baner inde i spillet ved hjælp af menuknappen `MORE SONGS` på menuskærmen `MODS`. Dette trækker baner direkte fra [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) er hovedarkivet for brugerskabte baner fra fællesskabet. Mange andre værktøjer og websteder forbedrer oplevelsen af at downloade brugerskabte baner, men dette er stedet, hvor de er opbevaret. For at installere sange downloadet fra BeatSaver, udpak zip-filen i en mappe og placer mappen i `Beat Saber/Beat Saber_Data/CustomLevels`.  Du kan også bruge BeatList til at downloade baner inde fra spillet, eller Mod Assistant's OneClick™ Installer funktion.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) er et websted, der forsøger at hjælpe med at gøre det nemmere at finde fantastiske baner. Det gør den ved at kategorisere de tusindvis af sange på beatsaver og lader dig sortere efter en sangs genre og mange andre karaktertræk. Den har også en social funktion, hvor spillerne kan gennemgå sange og kommentere dem. En af de mest anvendte funktioner er "Kuratorer anbefaler" funktionen, hvor et hold gennemspiller de fleste sange udgivet hver dag og anbefaler dem, der skiller sig ud, lader dig [automatisk downloade disse inde i spillet](https://bsaber.com/beatsync/).

### Apps til sanghåndtering
* [BeatList](https://github.com/Alaanor/beatlist) er en app til at administrere playlister og beatmaps, af Alaanor.

### Playlister
Placer playlist-filen i `Beat Saber/Playlists`og brug derefter [BeatList](https://github.com/Alaanor/beatlist) eller [Mod Assistant](https://github.com/Assistant/ModAssistant) for at downloade banerne. (Bemærk: Ældre mods tillod at downloade indholdet af playlister inde i spillet, men dette er i øjeblikket ikke muligt.)

## Installeringsmappe
_Hvor er Beat Saber installeret?_

### Standardplacering
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Andre Placeringer
**Hvis du har flyttet din installationsmappe til et andet drev, kan det være på placeringerne nedenfor.** Erstat drev-bogstavet `F` med det drev, dit spil er installeret på.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Sådan afinstalleres mods
Fjern enten dll fra `Plugins` mappen, eller klik på knappen `Uninstall` i Mod Assistant.

## Manuel installering
Et mod-installationsprogram er den anbefalede måde at installere mods. Se afsnittet [ovenfor](#installering). Hvis du har benyttet installationsprogrammet og bare vil installere Plugins, der ikke er tilgængelige i installationsprogrammet, skal du springe til trin 4.

**Kør spillet mindst én gang** før du forsøger at modde spillet! Dette gælder også for geninstallering af dit spil.
### Installer BSIPA
1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Gå til din [installationsmappe.](#install-folder) og udpak indholdet af BSIPA-zipfilen ind i den mappe. ![Direktions Fjernelse](~@images/beginners-guide/directory-clean.png "Direktions Fjernelse") ![Direktions Ipa](~@images/beginners-guide/directory-ipa.png "Direktions Ipa")
3. Dobbeltklik på IPA.exe for at modde spillet. Alle mods i mappen `Plugins` vil nu blive indlæst, når spillet startes. Hvis der er fejl, har du sandsynligvis ikke fulgt trin 2 korrekt. ![Direktions Modded](~@images/beginners-guide/directory-patched.png "Direktions Modded")

### Installer Mods
4. Download de mod(s) du ønsker at installere, uanset om det er fra GitHub, #pc-mods kanalen, eller andre kilder. **Sørg for at downloade eventuelle afhængigheder, som bruges af mod'en.** ![Direktions Plugins](~@images/beginners-guide/directory-plugins.png "Direktions Plugins")
5. Nogle mods har installationsvejledninger, og nogle har ikke. Generelt kan du bare trække og slippe zip-indholdet ind i din Beat Saber installationsmappe, og filerne bør selv komme ind i de korrekte mapper.


## Hvor kan man gå herfra
* [Greb og Tricks](./grips-and-tricks.md)
* [Lav Beatmaps](/mapping/)
* [Brugerskabte Sabers](/models/custom-sabers.md)
* [Brugerskabte Avatars](/models/custom-avatars.md)
* [Brugerskabte Platforme](/models/custom-platforms.md)
* [Opsætning af Multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Lav Mods](/modding/)

## Har du spørgsmål?
Besøg supportkanalerne i [BSMG Discord](https://discord.gg/beatsabermods)!
