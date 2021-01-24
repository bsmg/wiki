# Vanliga Frågor
## Jag fick precis Beat Saber, hur kommer jag igång?
Kolla in vår [nybörjarguide](/beginners-guide.md)!

## Hur får jag fler låtar?
> [BeatSaver](https://beatsaver.com) är huvudarkivet för låtar gjorda av gemenskapen. Många andra verktyg och webbplatser förbättrar upplevelsen av att ladda ner anpassade låtar, men på denna plats är dem lagrade.

Om du laddar ner banor manuellt från BeatSaver, extrahera dem till en mapp och placera filerna i `Beat Saber/Beat Saber_Data/CustomLevels`. Detta är den directory som spelet läser nedladdade banor ifrån.

### BeastSaber
[Beast Saber](https://www.bsaber.com) är en recensionssida som syftar till att kurera alla låtar på BeatSaver. Du kan också ladda ner spellistor, följa mappare, hitta låtar med hjälp av avancerade sorteringsmetoder och mycket mer.

### Verktyg för låthantering
Följande är program som kan användas för att hjälpa dig att ladda ner banor, med några andra medföljande funktioner.
* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view), ett nedladdningsprogram av Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) är en app som hanterar spellistor och beatmaps, av Alaanor.

## Hur installerar jag spellistor?
**För PC-användare:**  
Du behöver installera moddet `PlaylistLoaderLite`. Sen kan du antingen
* Använda verktyget `Install Playlist` som finns i ModAssistants Options-flik.
* Placera spellistefilen i `Beat Saber/Playlists`, välja den i BeatList, och sedan trycka på Download all.

Du bör nu se spellistan bredvid Custom Levels albumet i spelet. Om det saknas banor från spellistan måste du ladda ner dem manuellt, antingen genom BeatList eller direkt från Beatsaver eller Bsaber.

**För uppdragsanvändare:**  
Du kan använda [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) för att hantera spellistor i ditt Quest. Notera att en nedladdad bana endast kan visas en gång i spelet på grund av en begränsning hos BMBF.

::::warning VARNING för Quest-användare Omladdning av mappen Custom Songs återställer alla spellistors organisering. :::

## Hur skapar jag mina egna banor?
Se [mappning](/mapping/)!

## Hur laddar jag in plugins som inte finns i ModAssistant?
Se [denna sektion](/pc-modding.md#manual-installation) i nybörjarguiden.

## Har multiplayer crossplay?
Officiellt är multiplayer begränsad till att spela med andra människor i den butiksversion (Oculus eller Steam) du köpt. Dessutom inaktiveras den officiella multiplayern när man modifierar spelet på Quest.

Moddet BeatTogether är den nuvarande lösningen för cross-platform mellan de olika moddade spelversionerna. Gå med i deras [Discord-server](https://discord.com/invite/gezGrFG4tz) och se kanalen `#install-instructions` för mer information.

## Mitt spel uppdaterades och nu fungerar inget av mina mods!
Varje gång spelet uppdateras är det möjligt *(och mycket troligt)* att dina befintliga mods kommer att sluta fungera och behöver uppdateras. Spelets developers insåg detta, så när spelet uppdateras och du kör det för första gången, kommer allt i mappen `Plugins` flyttas till en ny mapp som heter `Old 1. x.x Plugins`. **Lämna dessa plugins där!**

För att få tillbaka mods **kör helt enkelt installationsprogrammet igen.**  
Samlingen BeatMods innehåller endast mods som har bekräftats att fungera i den senaste versionen av spelet!

Om något här har förvirrat dig, besök då [Beginners Guide](/beginners-guide.md).

## Hur fungerar poängsystemet i Beat Saber? Hur fungerar den globala rankningen?
Vi har sektioner på [grepp och tricks](/grips-and-tricks.md) tillägnad poäng- och rankningssystem, kolla in dem!

## Mina menyer är tomma och jag har inget att klicka på!
Om huvudfönstret i ditt spel är tomt är det sannolikt att din sparfil blev korrupt.

För att fixa det, navigera till: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Ta bort eller döp om Beat Saber-mappen till något annat. När du går in i spelet igen, återskapas sparfilen och huvudmenyn bör nu laddas in.
