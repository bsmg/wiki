# Domande Frequenti
## Ho appena ottenuto il gioco, come inizio?
Check out our [beginner's guide](/beginners-guide.md)!

## Come ottengo altre canzoni?
> [BeatSaver](https://beatsaver.com) è la repository principale di canzoni personalizzate fatte dalla community. Molti altri strumenti e siti migliorano l'esperienza di scaricare canzoni personalizzate, ma questo posto è dove sono ospitate.

Se scarichi manualmente le mappa da BeatSaver, estraile in una cartella e posiziona i file in `Beat Saber/Beat Saber_Data/CustomLevels`. Questa è la directory da cui il gioco legge nativamente le mappe personalizzate.

### BeastSaber
[Beast Saber](https://www.bsaber.com) è un sito di recensioni che mira a trattare tutte le canzoni di BeatSaver. Puoi anche seguire playlist, seguire mappatori, trovare canzoni usando i metodi di ordinamento avanzati e altro.

### Strumenti di Gestione della Canzone
I seguenti sono i programmi da usare sul desktop per aiutarvi a scaricare canzoni personalizzate, con anche altre funzionalità.
* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) un downloader di mappe di Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) è un'app per gestire le playlist e le beatmap, di Alaanor.

## Come installo le playlist?
**Per utenti PC:**  
Devi installare la mod `PlaylistLoaderLite`. Quindi puoi
* Usare lo strumento `Installa Playlist` nella scheda Opzioni dell'Assistente Mod.
* Posizionare il file in `Beat Saber/Playlist` e selezionarlo in BeatList, poi cliccare scarica tutto.

Ora dovresti vedere la playlist affianco agli album dei Livelli Personalizzati nel gioco. Se ci sono livelli mancanti dal playlist, dovrai scaricarli manualmente usando BeatList o direttamente da Beatsaver o Bsaber.

**For Quest users:**  
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## Come creo i miei livelli personalizzati?
Vedi la [mappatura](/mapping/)!

## Come carico i plugin che non sono nell'Assistente Mod?
Vedi [questa sezione](/pc-modding.md#manual-installation) nella guida per principianti.

## Il multiplayer ha il gioco incrociato?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## Il mio gioco si è aggiornato e nessuna delle mie mod funziona!
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Come funziona il sistema di punteggi in Beat Saber? Come funziona la classifica globale?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## I miei menu sono vuoti e non posso cliccare su niente!
Se la finestra principale nel tuo gioco è vuota, il tuo file di salvataggio potrebbe essere corrotto.

Per correggerlo, naviga a: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Elimina o rinomina la cartella di Beat Saber in qualcos'altro. Quando rientri nel gioco, ricreerai il file di salvataggio e dovresti caricare propriamente il menu principale.
