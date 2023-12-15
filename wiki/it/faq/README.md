# Domande Frequenti

## Ho appena ottenuto il gioco, come inizio?
Dai un'occhiata alla nostra [guida per principianti](/beginners-guide.md)!

## Come ottengo altre canzoni?
> [BeatSaver](https://beatsaver.com) è la repository principale di canzoni personalizzate fatte dalla community. Molti altri strumenti e siti migliorano l'esperienza di scaricare canzoni personalizzate, ma questo posto è dove sono ospitate.

Se scarichi manualmente le mappa da BeatSaver, estraile in una cartella e posiziona i file in `Beat Saber/Beat Saber_Data/CustomLevels`. Questa è la directory da cui il gioco legge nativamente le mappe personalizzate.

### BeastSaber
[Beast Saber](https://www.bsaber.com) è un sito di recensioni che mira a trattare tutte le canzoni di BeatSaver. Puoi anche seguire playlist, seguire mappatori, trovare canzoni usando i metodi di ordinamento avanzati e altro.

### Strumenti di Gestione della Canzone

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## Come installo le playlist?

### PC
Devi installare la mod [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest).

Poi puoi:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

Dovresti vedere la playlist vicino all'album dei Livelli Personalizzati nel gioco. La mod supporta anche la gestione delle playlist nel gioco.

### Quest
Puoi usare [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) per gestire le playlist sul tuo Quest. Nota che un livello personalizzato può comparire solo una volta nel gioco a causa di una limitazione con BMBF.

:::warning ATTENZIONE agli Utenti di Quest
Ricaricare la vostra Cartella delle Canzoni Personalizzate ripristina tutta l'organizzazione delle playlist.
:::

## Come creo i miei livelli personalizzati?
Vedi [mappatura](/mapping/)!

## Come carico le mod del PC che non sono nel Mod Assistant?
Vedi [questa sezione](/pc-modding.md#manual-installation) nella guida per principianti.

## Il multiplayer ha il gioco incrociato?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

La mod BeatTogether è la soluzione corrente per il gioco multipiattaforma tra versioni del gioco moddate. Unisciti al loro [server di Discord](https://discord.com/invite/gezGrFG4tz) e dai un'occhiata al canale `#installa-instructions` per ulteriori informazioni.

## Il mio gioco si è aggiornato e nessuna delle mie mod sta funzionando
Ogni volta che il gioco si aggiorna è possibile *(e molto probabile)* che le tue mod esistenti smetteranno di funzionare e dovranno esser aggiornate. Per assicurarti che la tua installazione non si corrompa all'esecuzione del gioco su un nuovo aggiornamento per la prima volta, tutto nella cartella `Plugins` è spostato automaticamente in una nuova cartella chiamata `Old 1.xx.x Plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

Per riottenere le mod, semplicemente **riesegui l'installer**  
La repository di BeatMods include solo le mod confermate per funzionare sull'ultima versione del gioco!

Se sei confuso da una qualsiasi di queste cose, visita la [Guida per Principianti](/beginners-guide.md).

## Come funziona il sistema di punteggi in Beat Saber? Come funziona la classifica globale?
Abbiamo sezioni sulla pagina [impugnature e trucchi](/grips-and-tricks.md) dedicate ai sistemi di punteggio e classifica, dagli un'occhiata!

## I miei menu sono vuoti e non posso cliccare nulla
Se la finestra principale nel tuo gioco è vuota, il tuo file di salvataggio potrebbe essersi corrotto.

Per risolvere, naviga a: `%AppData%|..\LocalLow\Hyperbolic Magnetism`

Elimina o rinomina la cartella di Beat Saber in qualcos'altro. Quando rientri nel gioco, ricreerà il file di salvataggio e dovrebbe caricare propriamente il menu principale.
