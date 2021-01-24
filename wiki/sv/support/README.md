---
sidebar: auto
---

# Support
## Innehållsförteckning
0. [Viktiga meddelanden](#0-important-notes)
1. [Problem med installationsprogram](#1-installer-issues)
2. [Problem i spelet](#2-game-issues-post-modding)
3. [Vanliga frågor](#3-common-questions)
4. [Felsökning](#4-troubleshooting)
5. [Om allt annat misslyckas](#5-if-all-else-fails)
6. [Har fortfarande problem](#6-still-having-issues)

## 0. Uppdateringar
Efter en uppdatering bör kanalen `#server-announcements` BSMGs discord ha de mest uppdaterade instruktionerna om status för mods. Följande är mer detaljerade instruktioner för den vanligaste proceduren.

#### Uppdateringen tog sönder mina mods
**Kör spelet en gång** i den nya uppdateringen. Installera sedan om dina mods med hjälp av ett installationsprogram länkat i [nybörjarguiden](/beginners-guide), till exempel Mod Assistant.

## 1. Inga mods?

#### 1.1 Inga mods visas på en ny kopia av spelet
Först, se till att följande stämmer:
* **Du körde spelet en gång innan du installerade mods**. BSIPA tar bort alla mods på den första körningen av en ny uppdatering för att förhindra att trasiga gamla mods laddas in på en ny version. Installera om mods igen om detta är fallet.
* Steam/Oculus lanserar Beat Saber från **samma installation** som mods är i. *t.ex. mods finns på D-disken men Steam startar från C-disken.* Ställ in rätt installationsplats i ditt installationsprogram.
* Om du har installerat mods manuellt, se till att du inkluderade alla filer från nedladdningen och lägg dem i rätt mappar, såväl som deras dependencies.

#### 1.2 Jag hade mods installerade på en äldre version, men inget laddar in efter en uppdatering

Om detaljerna i punkt 1.1 ovan är korrekta prova lösningarna nedan i fallande ordning.

**Lösning 1**
- Uppdatera BSIPA till den senaste versionen (i ModAssistant eller manuellt)
- Navigera till din Beat Saber-mapp
- Kör `IPA.exe`

**Lösning 2.**
-  [Verifiera dina spelfiler](#verify-game-files-for-steam) (Bara för Steam, Oculus användre refererar till Lösning 4)
- Uppdatera BSIPA till den senaste versionen
- Navigera till din Beat Saber-mapp
- Kör `IPA.exe`

**Lösning 3.**
- Navigera till din Beat Saber-mapp
- Gör en backup av mappen `UserData` (valfritt)
- Ta bort UserData

::: warning Detta kommer att återställa alla plugin-inställningar! :::

**Lösning 4.**
- Utför en [Clean Installation](#clean-installation)

#### 1.2 ModAssistant verkar inte installera några plugins
Installatörerna laddar ner mods till `Beat Saber/IPA/Pending`, BSIPA flyttar dessa filer till rotmappen när du startar spelet. Om plugins-mappen för ditt spel fortfarande är tom efteråt, kör `IPA.exe` igen och se till att ingenting hindrar den från att köra, t.ex. `Anti-virus, administratörsbehörigheter etc.`

## 2. Spelproblem Post-Modding
### Spelet startar inte

#### 2.1 GetThreadContext Failed
Om ett fönster dyker upp som säger `GetThreadContext Failed` och/eller du hör ett Windows felljud kan du ha programvara på datorn som gör att Beat Saber-mods inte fungerar. Många tredjeparts anti-cheat programvara som ESEA och FaceIt stör BSIPA från att tillämpa mods till Beat Saber, även när de inte körs. Vissa antivirusprogram uppvisar också liknande beteende.

För att lösa detta problem:
1. Avinstallera anti-cheat programvaran.
2. Starta om din dator.
3. Kontrollera om några rester av programvaran fortfarande finns i `AppData` -mapparna.
4. Kör spelet. Om problem kvarstår, prova följande: `Ytterligare anmärkning: Problemet kan kvarstå på grund av att det saknas behörigheter eller andra undantag. Program som kan blockera BSIPA, eller program markerade misstänkta, kan också få problemet att kvarstå` Steam: [Verify Steam Game Files](#verify-game-files-for-steam) Oculus: Utför en [Clean Installation](#clean-installation)

Detta bör åtgärda problemet.

#### 2.2 Fryst vid start
Om spelet är fryst på skärmen om hälsa och säkerhet, eller om du ser en avatar som T-poserar, utan kontroll över spelet, [verifiera dina filer](#verify-game-files-for-steam) om du har spelet på Steam eller installera om spelet på Oculus Home. Se [Clean installation](#clean-installation) Detta verkar hända när du uppdaterar Beat Saber och har tidigare installerade mods, men händer inte användare med nya installationer av spelet.

### Problem med framerate
#### 2.3 Spelet stammar outhärdligt efter installation av mods
Om spelet laggar så pass dåligt att du knappt kan klicka på `Continue`-knappen på Health & Safety-skärmen, verifiera då dina filer om du har spelet på Steam, eller installera om spelet på Oculus Home. Gör samma sak om det inte startar upp alls och inte visar några felmeddelanden när du försöker starta spelet.

Om det inte löste problemet kan du läsa avsnittet [2.4 Förbättra framerate](#framerate-issues)

#### 2.4 Förbättra framerate
Om [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) inte förbättrade dina fps, så kan datorn helt enkelt kämpa för att hålla jämna steg med den stress som orsakas av mods. Här är några saker du kan göra för att förbättra framerate, i ingen speciell ordning:

* Kontrollera om NVIDIA GEFORCE EXPERIENCE sätter render scale för Beat Saber förbi standarden 1,0. Det kan ha satt det till ett högre antal som 1,4 eller 1,8 vilket avsevärt ökar GPU-belastningen.
* Använd en mindre komplex avatar.
* Den anpassade sabeln **Plasma Katanas** har massor av anpassade händelser och är ökända för att lagga ditt spel om du missar.
* CameraPlus kan vara mycket beskattande, särskilt om du har flera kameror och ökat FOV.
* Vrid ned Render Scale, Anti-Aliasing, mirror, fog, etc. i spelsinställningarna.
* För Oculus CV1- eller Riftspelare: överväg att använda 2 sensorer istället för 3+.
* Minska ditt totala antal mod och banor.
* Utför en [Clean Installation](#clean-installation) av dina spelfiler.
* Låg framerate kan också bero på något som går fel inom din applikationsdata mapp, för att lösa detta hänvisar vi dig till [Radera Beatsaber Mappen i din AppData](#deleting-your-save-in-appdata)
* Inaktivera CountersPlus counters som poängräknare och svinghastighet eftersom de kan vara tunga.
* HTTPStatus-moddet kan orsaka lag spikes. Testa utan detta mod för att se om dina lag spikes försvinner.

VR är mycket CPU-intensivt, särskilt om du lägger till mods. Om du kämpar för att köra spelet med de mods du vill, överväg att uppgradera din hårdvara. Observera att Beat Saber inte utnyttjar GPU så mycket då det är ett ganska enkelt spel grafiskt sätt.

## 3. Vanliga frågor
#### 3.1 Blank meny, inga knappar
Om huvudfönstret i ditt spel är tomt är det sannolikt att din sparfil blev korrupt. För att lösa detta hänvisar vi dig till att [Radera Beatsaber mappen i din AppData](#deleting-your-save-in-appdata)

::: warning Detta kommer att ta bort dina lokala poäng och statistiker. :::

#### 3.2 Hur använder jag moddet `x`?
Om du använder ModAssistant, tryck på moddet och sedan på knappen "Mod Info". http://beatmods.com har en "More Info" knapp på varje mod också.

#### 3.3 Problem med vibration
Gameplay Modifiers Plus lägger till ett alternativ för att aktivera/inaktivera vibrationer i kontrollerna. Om du inaktiverade den och sedan tog bort moddet måste du ändra sparfilen som den skriver till manuellt. Öppna `%appdata%/../locallow/hyperbolic magnetism/beat saber` och sätt `controllerRumbleEnabled` till `true`.

Om detta inte är orsaken till dina vibrationsproblem och följande är sant när det gäller dina haptiker:
* haptikerna är minimala
* det finns ingen vibration när du slår flera block
* det finns en liten fördröjning när man vidrör sablarna tillsammans
* du använder oculus touch-kontroller

Då finns det en god chans att Beat Saber överbelastar moderkortets USB-styrenhet. Oculus slukar dina USB-kontrollers bandbredd och de flesta moderkort har en mycket billig styrenhet. Beat Saber belastar dem mer än något annat spel vilket är varför andra spel och menyer kan fungera. Det finns ingen klar lösning, så prova följande:
* Koppla in och byta runt kablarna till dina sensorer och dina HMB USB-kablar i andra portar
* Koppla från onödiga USB-enheter
* Köp en PCI-E USB-hubb
* Använd `-vrmode oculus` om du använder SteamVR för att kringgå det och använd Oculus SDK istället

### Anpassade Avatarer
#### 3.4 Anpassade avatarer som (inte) visas i spelet
Klicka på knappen **Home** på tangentbordet med spelet i fokus för att växla synlighet i headsetet.

#### 3.5 Mina avatarer är sönder
Se till att ditt avatar-plugin är korrekt installerat och uppdaterat. Se till att dina dependencies också är. Du kan även har en korrupt/trasig avatar. Att ha en söndrig avatar kan ta sönder alla dina andra avatarer likaså banor och sablar.

### Nedladdade banor

#### 3.6 Mina banor saknas
Se till att dina låtar finns i mappen `CustomLevels` som finns i `Beat Saber/Beat Saber_Data/`. Detta är den directory som spelet läser nedladdade banor ifrån.

Placera **inte** banor i mappen `Beat Saber/CustomSongs`. Denna plats är föråldrad då formatet för banor har ändrats. Om du har banor i det gamla formatet (`.json` och `.ogg` istället för `.dat` och `.egg`), lämna dem i den gamla `Beat Saber/CustomSongs`-mappen. De kommer sedan att konverteras automatiskt av SongCore-moddet.

Alternativt kan du manuellt konvertera dem med [Song Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Gråfärgad Play-knapp
Klicka på det blåa frågetecknet (?) i det övre högra hörnet. Detta bör tala om vilka mods som krävs för att spela banan, som du saknar. Om det fortfarande inte fungerar, prova att installera om banans nödvändiga plugins. Utför en [Clean Installation](#clean-installation).

#### 3.8 Detaljerna för en bana laddas oändligt
Om detta bara händer på vissa banor är deras filer förmodligen sönder. Om det händer med alla dina banor ta bort mappen `Plugins` och installera om nya.

### Camera Plus
#### 3.9 Camera Plus fungerar inte/förbi hälsoskärmen
Se till att inställningen i spelet för "Smooth Camera" är avstängd i dina spelinställningar. Om det inte fungerar, försök att installera om det och tillhörande dependencies.

#### 3.10 Min skrivbordsvy tar bara upp en liten del av skärmen
Din CameraPlus-skärm fyller inte upp din canvas. Dra hörnet för att passa in skärmen, eller högerklicka på fönstret och klicka på "Fit to Canvas".

### BeatSaver Downloader
#### 3.11 BeatSaver Downloader More Songs-knapp
**Knappen More Songs finns i huvudmenyn till vänster under texten Mods.** Om knappen för fler låtar är gråtonad så se till att alla dina låtar laddas först, som syns i den regnbågsfärgade indikatorn på huvudmenyn. Om din modsmeny inte finns där så se till att dina plugins och dependencies fungerar och installeras korrekt. Se sektionen [No Mods?](#_1-no-mods)

#### 3.12 Ingenting dyker upp i menyn för More Songs
De troliga orsakerna till att beatsaver downloader inte fungerar är:
1. Se till att alla dina banor har laddats in tidigare, annars kommer More Songs-knappen vara gråtonad.
2. Ditt anti-virus eller din brandvägg blockerar åtkomst till BeatSaver.
3. Du har träffat Beatsavers hastighetsbegränsning och måste vänta innan du försöker igen.

## 4. Diverse felsökning
### Förstå loggar
Om du är på Steam kan du gå till
> Beat Saber > Properties > Set Launch Options > Lägg till `--verbose` i textfältet som visas

Om du är på Oculus då måste du högerklicka på Beat Saber.exe och skapa en genväg. Redigera målet och lägg till "--verbose" till slutet av det. t.ex. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe --verbose`

Efter att du lagt till verbose till ditt spel kommer det förhoppningsvis att visa eventuella fel när det gäller avatarer, sablar och banor
* Detta visas kanske inte 100% av tiden för avatarer och sablar, och du kan behöva ta bort alla dina avatarer/sablar och prova dem en efter en för att se vilken som tar sönder spelet.

Dessa meddelanden är också skrivna till `Beat Saber/Logs`.

En lista över vanliga undantag finns [här](./exceptions.md).

### Verifiera spelfiler för Steam
För att verifiera integriteten av spelfiler följer du dessa steg:
1. Se till att steamvr är stängt eftersom det inte låter dig verifiera dina spel annars.
2. Gå till ditt steambibliotek och hitta Beat Saber
3. Högerklicka på Beat Saber och klicka på Properties
4. Gå till fliken "Local Files" i Properties
5. Välj alternativet "Verify Integrity Of Game Files".
6. Låt verifieringen slutföras och ladda ner saknade filer. Du bör nu vara redo att köra.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI the steps are still the same.

### Clean Installation
1. (Valfritt) Gör en backup av ditt nedladdade innehåll genom att göra en kopia av följande mappar:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Ta bort HELA mappen Beat Saber.** Detta skiljer sig från att avinstallera spelet på Steam, eftersom dessa metoder inte kommer att ta bort filer som inte kom med spelet.
> Steam:     ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Installera om spelet via Steam eller Oculus store
4. **Före moddning, starta spelet en gång**
5. Kör ModAssistant, installera dina mods, och starta upp spelet.

(Valfritt) Om du vill ta det ett steg längre, se: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Ta bort din sparfil i AppData
Detta kommer att ta bort dina poäng och lokala data, men inte din egen leaderboard/ScoreSaber statistik. Du kan hitta mappen i
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Kopiera och klistra in allt från i fältet ovan och klistra in det i adressfältet i utforskaren och ta bort den.

Du kan också komma till denna mapp genom att visa dolda objekt och navigera till din
> Användare > "ANVÄNDARNAMN" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning Radering av Appdatamappen kommer också att radera dina lokala resultat och statistiker. :::

#### Desperata åtgärder
::: warning Att inaktivera ditt anti-virus innebär säkerhetsrisker, se till att veta vad du gör (ladda t.ex inte ner eller öppna misstänkta filer när den är inaktiverat) och glöm inte att återaktivera anti-viruset så snart du avslutat dessa steg. :::
* Se till att din nuvarande användare **är en administratör**
* **Stäng av** ditt anti-virus (tills vidare)
* Se till att du har behörighet att skapa mappar och redigera filer i diskenheten/din dator, (från vad jag hört har en nylig Windows-uppdatering orsakat problem för vissa)
* Se till att dina drivrutiner är uppdaterade
* Kontrollera att problemet inte har med ditt headset eller operativsystem att göra, eller din hårdvara/mjukvara
* Kontrollera din internetuppkoppling och att ingenting blockerar något i samband med beatsaber moddning eller Steam etc.

## 5. Har fortfarande problem
Om denna sida inte täcker 100% är du välkommen att ställa en fråga i diskoteket! För att öka chansen att du får dina frågor besvarade överväg följande:
* Använd rätt kanaler, `#pc-help` för pc mod support och `#quest-help` för quest mod support. Använd  `#pc-3d-modeling` och `#quest-3d-modeling` för frågor om **att skapa egna avatarer, plattformar, block eller sablar**och `#mapping-discussion` för frågor om **att göra banor.**
* Var artig och respektfull
* Beskriv ditt problem i detalj. "Det fungerade inte" är ungefär lika beskrivande som att tala om för din läkare att du inte mår bra. Vad fungerar inte, och vad försökte du? Finns det några meddelanden som kommer upp på skärmen? Blev hela din skärm ljuslila?

::: tip OBS! De med `Support`-rollen är volontärer som kan välja att hjälpa till på fritiden. Supportrollen är ett erkännande av den kunskap och de ansträngningar de har lagt fram, men det betyder inte nödvändigtvis att de kommer att vara aktiva och hjälpa bara för att de är online. :::

Tack!

> Tack till Saber-Chan för deras hårda arbete på denna sida.
