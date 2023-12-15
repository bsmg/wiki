---
sidebar: auto
---

# Supporto

## Tabella dei Contenuti

0. [Aggiornamenti](#_0-updates)
1. [Nessuna mod?](#_1-no-mods)
2. [Problemi di Gioco Dopo il Modding](#_2-game-issues-post-modding)
3. [Domande Comuni](#_3-common-questions)
4. [Risoluzione di Problemi Vari](#_4-miscellaneous-troubleshooting)
5. [Riscontri Ancora Problemi](#_5-still-having-issues)

## 0. Aggiornamenti
After an update, the BSMG discord [#modding-announcements](https://discord.com/channels/441805394323439646/612468002243477505) channel should have the most up to date information on the status of mods. Seguono altre istruzioni dettagliate della procedura più comune.

### L'aggiornamento ha corrotto le mie mod
**Esegui il gioco una volta** al nuovo aggiornamento. Poi, reinstalla le tue mod usando un installatore collegato nella [guida per principianti](/beginners-guide), come Mod Assistant.

## 1. Nessuna mod?

### Domande Varie

#### 1.1 Nessuna mod compare su una nuova copia del gioco
Prima, assicurati che quanto segue sia corretto:

* **Hai eseguito il gioco una volta prima di installare le mod**. BSIPA rimuove tutte le mod alla prima esecuzione di un nuovo aggiornamento per prevenire che le vecchie mod corrotte carichino su una nuova versione. Reinstalla le mod se questo è il caso.
* Steam/Oculus sta lanciando Beat Saber dalla **stessa installazione** in cui si trovano le mod. *es. le mod sono sull'unità D ma Steam si sta avviando dall'unità C.* Imposta la posizione d'installazione corretta nell'installatore di tua scelta.
* Se hai installato le mod manualmente, assicurati di aver incluso tutti i file dal download e inseriscile nelle cartelle corrette, nonché nelle proprie dipendenze.

#### 1.2 Avevo installato delle mod su una vecchia versione, ma dopo un aggiornamento non carica nulla
Se i dettagli nella suddetta sezione 1.1 sono corretti, prova le seguenti soluzioni, in ordine decrescente.

##### Soluzione 1

* Aggiorna BSIPA all'ultima versione (su Mod Assistant o manualmente)
* Vai alla tua cartella di Beat Saber
* Esegui `IPA.exe`

##### Soluzione 2 (Solo Steam)

* [Verifica i tuoi file di gioco](#verify-game-files-for-steam)
* Aggiorna BSIPA all'ultima versione
* Vai alla tua cartella di Beat Saber
* Esegui `IPA.exe`

##### Soluzione 3

* Vai alla tua cartella di Beat Saber
* Crea un backup della cartella `UserData` (facoltativo)
* Elimina UserData

::: attenzione
Questo ripristinerà le impostazioni di tutte le mod!
:::

##### Soluzione 4

* Esegui un'[Installazione Pulita](#clean-installation)

#### 1.2 Mod Assistant non sembra installare alcuna mod
L'installatore scarica le mod in `Beat Saber/IPA/Pending`, BSIPA sposta questi file alla cartella di root quando avvii il gioco. Se la cartella Plugins del tuo gioco è ancora vuota in seguito, esegui nuovamente `IPA.exe` e assicurati che nulla ne stia impedendo l'esecuzione, es. `Antivirus, permessi d'amministratore, etc.`

## 2. Problemi di Gioco Dopo il Modding

### Il Gioco Non Si Avvia

#### 2.1 Errore GetThreadContext Fallito
Se una finestra appare dicendo `GetThreadContext Fallito` e/o senti un suono d'errore di Windows, potresti avere dei software sul tuo PC che corrompe le mod di Beat Saber. Molti software antitruffa di terze parti come ESEA e FaceIt interrompono BSIPA dall'applicare mod a Beat Saber, anche quando non è in esecuzione. Alcuni software di antivirus esibiscono anch'essi un comportamento simile.

Per risolvere questo problema:

1. Disinstalla il software di anticheat.
2. Riavvia il tuo PC.
3. Controlla se c'è ancora qualche residuo del software nelle tue cartelle di `AppData`.
4. Esegui il gioco. Se i problemi persistono, allora prova quanto segue: `Nota Aggiuntiva: Il problema può continuare a persistere a causa della mancanza di permessi o eccezioni, qualsiasi programma che può bloccare BSIPA, o programmi contrassegnati come sospetti possono far persistere questo problema` Steam: [Verifica i File di Gioco di Steam](#verify-game-files-for-steam) Oculus: Esegui un'[Installazione Pulita](#clean-installation)

Questo dovrebbe risolvere il problema.

#### 2.2 Congelato all'Avvio
Se il gioco è congelato alla schermata Salute e Sicurezza, o si vede un avatar in posa a T senza controllo del gioco, [verifica i tuoi file](#verify-game-files-for-steam) se hai il gioco su Steam, o reinstalla il gioco su Oculus Home. Fai riferimento all'[Installazione Pulita](#clean-installation)

Questo sembra succedere aggiornando Beat Saber, avendo precedentemente installato delle mod.

### Problemi di Framerate

#### 2.3 Il gioco va a tratti in modo insopportabile dopo aver installato le mod
Se il gioco lagga così tanto da poter a malapena cliccare il pulsante `Continua` sulla schermata Salute e Sicurezza, verifica i file se hai il gioco su Steam o reinstalla il gioco su Oculus Home. Fa lo stesso se non si avvia affatto e non mostra alcun messaggio d'errore provando ad avviare il gioco.

If that didn't solve the issue, then check section [2.4 Improving framerate](#_2-4-improving-framerate)

#### 2.4 Migliorare il Framerate
Se [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) non ha migliorato i tuoi fps, il tuo PC potrebbe semplicemente star facendo fatica a tenersi al passo con lo stress causato dalle mod. Ecco alcune cose che puoi fare per migliorare il framerate, in nessun ordine particolare:

* Verifica se NVIDIA GEFORCE EXPERIENCE ha impostato la scala di rendering per Beat Saber oltre il predefinito di 1.0. Potrebbe averlo impostato a un numero maggiore a 1,4 o 1,8, il che aumenta significativamente il carico della GPU.
* Usa un avatar personalizzato meno complesso.
* La sciabola personalizzata **Plasma Katanas** contiene tonnellate di eventi personalizzati, noti per introdurre lag se perdi.
* Camera2 e CameraPlus possono esser molto pesanti, specialmente se hai molte telecamere o aumenti il FOV.
* Disattiva la Scala di Rendering, l'Anti-Aliasing, specchio, nebbia, etc. nelle impostazioni di base del gioco.
* Per i giocatori con Oculus Rift (CV1): considera di usare 2 sensori invece che oltre 3.
* Riduci il conteggio totale delle tue mod e canzoni.
* Esegui un'[Installazione Pulita](#clean-installation) dei file di gioco.
* Il basso framerate può anche esser causato da qualcosa che va storto nella cartella dei dati della tua applicazione, fai riferimento all'[Eliminazione della Cartella di BeatSaber Nel Tuo AppData](#deleting-your-save-in-appdata)
* Disabilita i contatori di Counters+ come contatori di punteggio e la velocità d'oscillazione, poiché possono esser pesanti.
* HTTPStatus and DataPuller can cause lag spikes. Prova senza questa mod a vedere se i picchi di lag spariscono.

Il VR usa molto intensivamente la CPU, specialmente se aggiungi le mod. Se non riesci a eseguire il gioco con le mod che vuoi, considera di aggiornare il tuo hardware. Nota che Beat Saber non utilizza molto la GPU, essendo un gioco visivamente abbastanza semplice.

## 3. Domande Comuni

### Varie

#### 3.1 Menu Vuoto, Nessun Pulsante
Se la tua finestra principale di gioco è vuota, il tuo file di salvataggio potrebbe essersi corrotto. Per risolverlo, fai riferimento all'[Eliminazione della Cartella di BeatSaber Nel Tuo AppData](#deleting-your-save-in-appdata)

::: attenzione
Questo eliminerà tutti i tuoi punteggi e statistiche locali.
:::

#### 3.2 Come posso usare la mod `x`?
Se stai usando Mod Assistant, clicca la mod e premi il pulsante "Info Mod". [BeatMods](http://beatmods.com) include anche un pulsante "Altre Info" per ogni mod.

#### 3.3 Problemi di Vibrazione
Gameplay Modifiers Plus aveva un interruttore per abilitare/disabilitare la vibrazione del controller. Se lo hai disabilitato e poi hai rimosso la mod, dovrai modificare il file dei dati di salvataggio che scrive manualmente. Apri `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` e imposta `controllersRumbleEnabled` a `true`.

Se questa non è la causa dei tuoi problemi di vibrazione e quanto segue è vero relativamente le tue sensazioni tattili:

* le tattili sono minuscole
* non c'è alcuna vibrazione colpendo più blocchi
* c'è un lieve ritardo facendo toccare le sciabole
* stai usando i controller touch di Oculus

Poi c'è una buona probabilità che Beat Saber stia sovraccaricando il controller USB della tua scheda madre. Oculus divora la larghezza di banda del tuo controller USB e gran parte delle schede madri hanno un controller molto economico. Beat Saber le spinge molto più di qualsiasi altro gioco, ecco perché gli altri giochi e menu potrebbero andare bene. Non esiste una soluzione chiara, quindi prova quanto segue:

* Mischia il sensore e i cavi USB HMD su diverse porte
* Scollega i dispositivi USB non necessari
* Acquista un hub PCI-E USB
* Usa `-vrmode oculus` se stai usando SteamVR per bypassarlo e usa invece la SDK di Oculus

### Avatar Personalizzati

#### 3.4 Avatar Personalizzati (Non) Mostrati In Gioco
Clicca il pulsante **Home** sulla tua tastiera con il gioco a fuoco per attivare la visibilità nell'auricolare.

#### 3.5 I Miei Avatar Sono Corrotti
Assicurati che la tua mod degli avatar personalizzati sia propriamente installata e aggiornata, assicurati che anche le tue dipendenze lo siano. Potresti avere un avatar corrotto/rotto, il che potrebbe rompere tutti i tuoi avatar allo stesso modo, con canzoni e sciabole.

### Canzoni Personalizzate

#### 3.6 Le Mie Canzoni Sono Mancanti
Assicurati che le tue canzoni siano nella tua cartella `CustomLevels`, situata in `Beat Saber/Beat Saber_Data/`. È da qui che il gioco legge nativamente le canzoni personalizzate.

**Non** posizionare canzoni nella vecchia cartella `Beat Saber/CustomSongs`. Questa posizione è obsoleta, poiché il formato per le canzoni personalizzate è cambiato. Se hai mappe nel vecchio formato (file `.json` e `.ogg` invece di `.dat` e `.egg`), lasciali nella vecchia cartella `Beat Saber/CustomSongs`. Dovrai riscaricarli da BeatSaver.

Altrimenti, puoi convertirli manualmente usando [Song Converter](https://github.com/lolPants/songe-converter), tuttavia, non riceverai alcun aiuto con questo metodo e dovrai compilare da solo il programma.

#### 3.7 Pulsante di Gioco Ingrigito
Clicca il pulsante del punto interrogativo blu lucido (?) in alto a destra. This should tell you what mods are required to play the song, which you are missing and should install. Se ancora non funziona, prova a reinstallare la mod necessaria. Altrimenti, prova un'[Installazione Pulita](#clean-installation).

#### 3.8 I dettagli della mappa caricano all'infinito
Se questo si verifica solo su certe mappe, potresti mancare delle mod necessarie o quei file di canzoni sono corrotti. Se si verifica su tutte le tue mappe, elimina la tua cartella dei `Plugins` e reinstallali.

### Camera2

#### 3.9 My desktop view only takes up a small section of the screen
Your Camera2 display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### Downloader di BeatSaver

#### 3.10 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. Prima, assicurati che tutte le tue canzoni siano state caricate, altrimenti il pulsante Altre Canzoni sarà ingrigito.
2. Il tuo antivirus o firewall sta bloccando l'accesso a BeatSaver.
3. Hai superato il limite di utilizzo di BeatSaber e dovrai attendere prima di riprovare.

### Codici d'Errore del Multigiocatore
Here is a list of known error codes, what they mean, and what you can do to fix them.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->
| Code&nbsp; | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFR-1      | Unknown Error Occurred. Try restarting the game.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CFR-2      | The multiplayer connection was canceled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-3      | Server is not reachable. There may be an issue with your internet connection or with Beat Saber's relay servers. Double check you are not offline and your firewall allows Beat Saber to connect to the internet. <details><summary>**Background Information**</summary>Beat Saber Multiplayer is peer-to-peer where you connect directly with each player in the lobby. When this is not possible Beat Saber starts a "relay" server to send the data. This error means both of these methods failed.</details> &nbsp; This can also be caused by using emojis or special characters in your username. |
| CFR-4      | The server already exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-5      | Server does not exist. The lobby you were connecting to might have closed as you were joining.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-6      | The server is full. Choose a different lobby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CFR-7      | You are on a version of the game that is not supported by the servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-8      | Lobby password is incorrect. Double check you are entering the right password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-9      | The matchmaking servers Beat Games run, which keeps track of open public and private lobbies, is offline. Try again later.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-10     | Your session key from Steam or Oculus is not valid. If you are playing on Quest and have modded your game, check out this [FAQ answer](/faq/README.md#does-multiplayer-have-crossplay) to work around this. Otherwise you are on a pirated copy of the game which is not supported.                                                                                                                                                                                                                                                                                                 |
| CFR-11     | Your internet connection is offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
<!-- markdownlint-enable MD013 -->

## 4. Risoluzione di Problemi Vari

### Comprendere i Registri
If you're on Steam you can go to
> Beat Saber > Proprietà > Generali > Aggiungi `--verbose` al campo delle opzioni d'avvio

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* Questo potrebbe non mostrare il 100% delle volte gli avatar e le sciabole e potresti dover rimuovere tutti i tuoi avatar/sciabole e provarli a uno a uno, per scoprire quale corrompe il gioco.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Verifica i File di Gioco Per Steam
To verify integrity of game files follow these steps:

1. Assicurati che SteamVR sia chiuso poiché, altrimenti, non ti permetterebbe di verificare i tuoi giochi.
2. Vai alla tua libreria di Steam e trova Beat Saber
3. Clicca con il destro su Beat Saber e clicca su Proprietà
4. Vai alla scheda dei "File Locali" nelle proprietà
5. Seleziona l'opzione "Verifica Integrità dei File di Gioco.
6. Fagli concludere la verifica e il download di qualsiasi file mancante e dovresti aver risolto.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Installazione Pulita

1. (Facoltativo) Esegui il backup dei tuoi contenuti personalizzati scaricati creando una copia delle seguenti cartelle:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Elimina l'INTERA Cartella di Beat Saber.** Questo è diverso dalla disinstallazione del gioco su Steam, poiché questi metodi non rimuoveranno i file che non erano parte del gioco.

> Steam: ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Reinstalla il gioco tramite il negozio di Steam o di Oculus
4. **Prima di moddare, avvia il gioco una volta**
5. Esegui Mod Assistant, installa le tue mod e avvia il gioco.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Eliminare il Tuo Salvataggio in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Utenti > "USER" > AppData > LocalLow > Hyperbolic Magnetism > beat saber

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting this folder in Appdata will also delete your local scores and statistics.
:::

#### Desperate Measures
::: warning
Disabling your anti-virus involves security risks, be sure to know what you're doing
(i.e don't download or open suspicious files while it's turned off)
and don't forget to re-enable it as soon as you finished these steps.
:::

* Assicurati che il tuo utente corrente **sia un amministratore**
* **Disattiva** il tuo antivirus (almeno per ora)
* Assicurati di avere i permessi per creare cartelle e modificare file nell'unità disco/nel tuo pc (da ciò che ho sentito, un aggiornamento di Windows ha recentemente causato problemi alle persone)
* Assicurati che i tuoi driver siano aggiornati
* Controlla che il problema non si trovi nel tuo auricolare o sistema operativo o hardware/software
* Controlla la tua connessione a internet e che nulla stia bloccando qualsiasi cosa sia correlata al modding di BeatSaber e Steam, etc.

## 5. Riscontri Ancora Problemi
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Sei pregato di usare i canali corretti, `#pc-help` per il supporto mod per pc e `#quest-help` per il supporto mod per Quest. Usa `#pc-3d-modeling` e `#quest-3d-modeling` per le domande sulla **creazione di avatar, piattaforme, note o sciabole proprie**, e `#mapping-discussion` per le domande sulla **creazione di mappe.**
* Sii educato e rispettoso
* Descrivi il tuo problema in dettaglio. "Non ha funzionato" è tanto descrittivo quanto dire al tuo medico che non ti senti bene. Cosa non funziona e cosa hai provato? Ci sono dei messaggi che compaiono su schermo? Il tuo intero schermo è diventato viola luminoso?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Credit to Saber-Chan for their hard work on this page.
