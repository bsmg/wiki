---
prev: false
next: false
---

# Quest Modding

## Vorwort

- Diese Anleitung ist sowohl für die Quest 1 als auch Quest 2.
- Niemand wurde bisher wegen Moddings gebannt.

::: danger WARNUNG
Solltest Du Mods verwenden, sollte dir bewusst sein:

- Dass du möglicherweise Probleme bekommst, die im normalen Spiel nicht existieren. 99,9% aller Fehler, Abstürzen und Verzögerungen entstehen aufgrund von Mods.
- Mods werden durch Updates oft unbrauchbar und das ist normal - Bitte sei geduldig und respektvoll wenn dies passiert. Modder sind Freiwillige mit einem richtigen Leben.
- Beat Games versucht nicht mit Absicht, Mods kaputt zu machen. Sie versuchen an der Code-Grundlage zu arbeiten, welches Mods manchmal unbrauchbar macht. Dies geschieht aber nicht mit Absicht.

Bitte greife die Entwickler im Bezug mit Problemen bei Mods nicht an. Modder und Entwickler sind zwei verschiedene Gruppen. Sei kein Trottel.
:::

## Installation

Derzeit ist BMBF auf SideQuest angewiesen. Die einzige Möglichkeit, Custom Songs und Mods zu installieren, ist, sich ebenfalls SideQuest auf einem Rechner zu installieren.

Wenn du keinen Zugang zu einem PC hast, kannst du ein [Android Handy](#bmbf-mit-einem-android-telefon-installieren) verwenden.

- [BMBF Apk](https://bmbf.dev/stable)
  :::warning WARNUNG
  Wenn du BMBF installierst und du das Spiel modifizierst, wird der offizielle Multiplayer sowie das Anzeigen und Hochladen von Spielständen in den Basis-Spiel-Ranglisten deaktiviert. Wenn du den modifizierten Multiplayer spielen möchtest, benötigst du den Mod `Beat Together`, die Cross-Play zwischen Pc und Quest erlaubt und die Verwendung von Custom Songs, wenn beide Parteien den Song besitzen. Den Mod findest du in der Beat Saber Modding Group in `#quest-mods` oder auf der [Questboard](https://questmodding.com) Seite.

Um Ranglisten für Custom Songs zu erhalten und um Performance-Punkte (PP) aus gerankten Songs zu erhalten, benötigst du den [ScoreSaber](https://scoresaber.com/quest) Mod. [Dieser Link](https://scoresaber.com/quest) bringt dich auf die ScoreSaber Seite, um es einzurichten. ScoreSaber ersetzt nicht die Bestenlisten des Basis Games, sondern fügt nur Bestenlisten für Custom Songs hinzu.

**Hinweis:** Überprüfe den Aktualisierungskanal im [ScoreSaber Discord](https://discord.gg/WpuDMwU) , um zu sehen, ob die Mod für die aktuelle Spielversion verfügbar ist.
:::

### BMBF mit SideQuest installieren

Solltest du dies nicht bereits getan haben, lade dir hier [SideQuest](https://sidequestvr.com/#/setup-howto) herunter und richte es ein

Öffne SideQuest und verbinde deine Quest mit deinem Computer.

:::tip TIPP
Wenn du Beat Saber bereits modifiziert hast oder Scores hast die du sichern willst, [Sichere zuerst deine Speicherdaten!](#Sichern-von-Speicherdaten-mit-Sidequest)
:::

Wenn du ein modifiziertes Spiel hast, musst du es auch deinstallieren, indem du auf `UNINSTALL APP` drückst. Du kannst deinen Spielstand später im gleichen Menü wiederherstellen, nachdem du es modifiziert hast.

Wähle die unten gezeigte Schaltfläche `Apk aus Ordner installieren` und suche die neueste BMBF Apk, die du heruntergeladen hast, und klicke sie an, oder ziehe einfach die BMBF Apk in die SideQuest App. Bei beiden Methoden wird BMBF auf deiner Quest installiert.

![InstallAPK](/.assets/images/beginners-guide/apkfromfolder.png)

Stelle nach erfolgreicher Installation sicher, dass du die neueste Version von Beat Saber installiert und unmodifiziert ist.

:::warning WARNUNG
Starte vor dem Modding Beat Saber einmal, starte ein Level und scheitere sofort!
:::

Nachdem du Beat Saber einmal gestartet hast, öffne BMBF aus unbekannten Quellen, wie das untenstehende Bild zeigt. ![UnknownSources](/.assets/images/beginners-guide/quest_home-menu.jpg)

Du solltest jeden Schritt so befolgen, wie er beschrieben ist. Danach solltest du dir [bsaber.com](https://www.bsaber.com) ansehen. Hier kannst du alle verfügbaren Custom Songs herunterladen. Du kannst auch auf das Globus-Symbol oben rechts klicken und dann auf BeatSaver gehen, um ebenfalls Lieder herunterzuladen.

Wenn du während des Installationsprozesses irgendwann das `App zurücksetzen` Popup siehst, klicke einfach auf `Schließen`. Diese Warnung richtet sich eher an raubkopierte Versionen des Spiels. Wenn du es also nur moddest, wird es wahrscheinlich keine Konsequenzen haben, wenn du sie ignorierest.

![RestoreApp](/.assets/images/beginners-guide/restoreapp.png)

Nun kannst du mit dem Schritt [Kern Mods](#kern-mods) des Installationsvorgangs fortfahren.

### BMBF mit einem Android Telefon installieren

Dies ist **NICHT** der empfohlene Weg zur Installation von BMBF und sollte nur verwendet werden, wenn du keinen Zugang zu einem PC hast.

- [Anforderungen](#anforderungen)
- [Telefon einrichten](#telefon-einrichten)
- [BMBF mit deinem Telefon installieren](#bmbf-mit-deinem-telefon-installieren)
- [Beat Saber einrichten](#beat-saber-einrichten)

#### Anforderungen

- Ein Android-Telefon oder Android-Tablet (iPhones oder iPads werden nicht unterstützt)
- Eine **bezahlte** Version von Beat Saber im Oculus Quest Store
- Ein Kabel um deine Quest mit deinem Telefon zu verbinden (wenn dein Telefon über USB C geladen wird, sollte das Ladegerät, das mit deiner Quest mitgeliefert wurde, funktionieren).

#### Telefon einrichten

1. Lade die [bugjaeger-App aus dem Google Play Store](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug&hl=gsw&gl=US) herunter
2. Lade die neueste [BMBF APK von bmbf.dev/stable](https://bmbf.dev/stable) herunter.
3. Folge [dieser schriftlichen Anleitung](https://github.com/ComputerElite/wiki/wiki/Enable-Developer-Mode-for-OQ) zum Aktivieren des Entwicklermodus auf Deiner Quest zu aktivieren.
4. Entwicklermodus auf Deinem Telefon aktivieren
   1. Gehe in deine Android Einstellungen
   2. Scrolle zu "Über Telefon" und öffne es
   3. Tippe auf "Software Informationen"
   4. Tippe auf das Feld "Build number", bis der Entwicklermodus aktiviert ist. Dies sollte etwa 7 Tippe erfordern.
5. USB-Debugging auf Deinem Telefon aktivieren
   1. Zurück zu Einstellungen
   2. Tippe auf "Entwickleroptionen"
   3. USB-Debugging aktivieren

#### BMBF mit Deinem Telefon installieren

:::warning WARNUNG
Starte vor dem Modding Beat Saber einmal, starte ein Level und scheitere sofort!
:::

Öffne Bugjaeger auf deinem Telefon verbinden deine Quest. Du solltest ein USB-Debugging Pop-Up in deiner Quest und auf deinem Telefon erhalten. Wählen auf beiden Geräten "Zulassen" und wenn du möchtest, wähle "Immer zulassen". Sobald Bugjaeger deine Quest annimmt, installiere die BMBF APK indem du folgendes tust:

![installAPKusingPhone.png](/.assets/images/beginners-guide/InstallAPK.png)

Nachdem du ok gedrückt hast, erlaube den Dateizugriff und wähle die Download-APK-Datei, die mit `com.weloveoculus.BMBF.apk` bezeichnet sein sollte. Die APK-Datei sollte nun auf deiner Quest installiert werden.

#### Beat Saber einrichten

Nach der erfolgreichen Installation von BMBF auf deiner Quest solltest du diese in deiner Quest-Bibliothek unter Unbekannten Quellen finden können.

![UnknownMenu](/.assets/images/beginners-guide/quest_home-menu.jpg)

Öffne es und erlaube den Dateizugriff nach dem Start, wenn du dazu aufgefordert wirst. Folge nun sorgfältig den Anweisungen auf dem Bildschirm. Nachdem du fertig bist, solltest du [BeastSaber](https://bsaber.com) sehen.

Wenn du während des Installationsvorgangs das Popup-Fenster "App wiederherstellen" erhältst, klicke einfach auf "Schließen". Diese Warnung richtet sich an raubkopierte Versionen des Spiels, so dass es wahrscheinlich keine Konsequenzen hat, wenn du sie ignorierest, wenn du eine legitime Kopie besitzt.

Nun kannst du mit dem Schritt [Kern Mods](#kern-mods) des Installationsvorgangs fortfahren.

## Speicherdaten verwalten

### Sichere Speicherdaten mit SideQuest

Öffne SideQuest und verbinde deine Quest mit deinem Computer. Gehe zu `Meine Apps` in der oberen Leiste des Fensters und finde Beat Saber.

Navigiere zu `sdcard/Android/data/com.beatgames.beatsaber/files` mit Hilfe des SideQuest Datei-Explorers.

Speichere die Dateien: `AvatarData.dat`, `PlayerData.dat` und `settings.cfg` in einem Ordner auf Deinem PC. Verliere diese nicht, da sie deine Spielstände und andere Einstellungen enthalten!

### Sichere Speicherdaten mit SideQuest

Um deine Daten wiederherzustellen, öffne SideQuest und verbinde deine Quest mit dem PC. Gehe zu `Meine Apps` in der oberen Leiste des Fensters und suche Beat Saber. Finde mit dem SideQuest Datei-Explorer die 3 Dateien, die du aus den [Daten mit SideQuest wiederherstellen](#sichere-speicherdaten-mit-sidequest) Schritte `AvatarData.dat`, `PlayerData.dat` und `settings.cfg` und lege sie im Ordner `sdcard/Android/data/com.beatgames.beatsaber/files` ab.

Gehe danach zurück zum Menü und drücke auf die kreisförmigen Pfeile, die sich neben dem letzten Backup befinden. Deine Punkte und Einstellungen sollten nun wiederhergestellt werden.

## Mods installieren

### Kern-Mods

Bevor du weitere Mods installierst, solltest du in der BMBF-Weboberfläche oben rechts einen roten Button sehen, auf dem steht: `Sync to Beat Saber`. Klicke darauf und lass die Synchronisierung abschließen. Gehe dann zu deinem `Mods` Tab in BMBF. Stelle sicher, dass du die 5 Kern-Mods hast:

- Codegen
- Goodbye Bug
- PinkCore
- QuestUI
- Custom Types

:::danger WARNUNG
Alle anderen Mods funktionieren nicht, wenn diese Core-Mods nicht gelistet und aktiviert sind.

Wenn eine der Kern-Mods nicht aktiviert ist, lösche diese Mod und klicke erneut auf `Sync to Beat Saber`, um sie erneut herunterzuladen. Überprüfe mehrmals, ob alle Kern-Mods heruntergeladen und aktiviert wurden. Wenn es immer noch nicht funktioniert oder Mods aktiviert zu sein scheinen, aber im Spiel nicht funktionieren, findest du unter [Kern-Mods funktionieren nicht](#kern-mods-funktionieren-nicht) für Schritte zur Fehlersuche.
:::

### In deiner Quest

:::warning WARNUNG
Nich alle Mods sind auf QuestBoard verfügbar  
Wenn dort eine Mod nicht zu finden ist, solltest du die [Von deinem PC](#von-deinem-pc) Methode benutzen.
:::

Öffne BMBF auf deiner Quest und gehe zum `Browser` Tab. Dort solltest du ein Globus-Symbol sehen ähnlich zu dem unten gezeigten. Klicke es und dann klicke den `QuestBoard` Knopf.

![globequestboard](/.assets/images/beginners-guide/globequestboard.png)

Du solltest mit der folgenden [QuestBoard](https://www.questmodding.com/)-Website begrüßt werden. Öffne dann den `DOWNLOAD MODS` Tab.

![questboardhome](/.assets/images/beginners-guide/questboardhome.png)

Scrolle mit deinem Thumbstick herunter. Du kannst nun irgendwelche Mods von der Liste herunterladen, indem du auf den Download Button drückst. Manche Downloads könnten dich zu einer Webseite oder einer GitHub Seite weiterleiten. Wenn es so ist, dann folge den Anweisungen oder klicke auf die neuste `.zip` in der Release Liste.

![questboardmods](/.assets/images/beginners-guide/questboardmods.png)

### Von deinem PC

Du kannst andere Quest-Mods im [BSMG-Discord](https://discord.com/invite/beatsabermods) finden und im `#quest-mods` Kanal herunterladen.

:::warning WARNUNG
Stelle sicher, dass deine Quest und dein PC im gleichen Netzwerk sind und dass du http und nicht https verwendest!
:::

Öffne BMBF auf deiner Quest und gehe dort zu dem `Tools` Tab. Dort solltest du eine Webadresse und Versionsnummer sehen, die ähnlich zu der unten gezeigten ist.

![ip](/.assets/images/beginners-guide/ip.png)

Öffne deinen Browser auf deinem PC und schreibe die Webadresse in die Suchleiste.

Dort solltest du folgenden Bildschirm sehen.

Wenn dies nicht funktioniert, [klicke hier](#das-bmbf-web-interface-ladt-nicht) für einige Schritte zur Fehlerbehebung.

![bmbfweb](/.assets/images/beginners-guide/bmbfweb.png)

Ziehe jetzt eine Quest-kompatible Mod in das Upload Feld und synchronisiere diese. Wenn die Mod für eine ältere Version gemacht ist, wird sie nicht automatisch aktiviert. Um eine alte Mod zu aktivieren, gehe zum `Mods` Tab und aktivierst sie dort.

## Songs installieren

::: tip TIPP
Die meisten Maps in den Sortierfiltern "Top All", "Rating", "Downloads" oder "Plays" wurden erstellt, bevor gute Mapping-Praktiken etabliert wurden. Versuche Songs herunterzuladen, die zwischen Ende 2019 und jetzt veröffentlicht wurden, um die besten benutzerdefinierten Levels zu erleben.
:::

### In deiner Quest

Es gibt zwei Quellen um eigene Songs in deiner Quest über das Browser Fenster zu bekommen.

- Wenn du nach kuratierten Songs und Playlists suchst besuche [BeastSaber](https://bsaber.com/)
- Wenn du die Benutzeroberfläche von BeastSaber nicht magst kannst du [BeatSaver](https://beatsaver.com/) ausprobieren

Beide haben einen OneClick Knopf welchen den Song einfach auf deine Quest installiert. Du kannst zwischen diesen Webseiten wechseln, indem du oben rechts in dem Browser Fenster auf das Globus Icon klickst.

Eine einfache Möglichkeit, verschiedene Arten von Song herunterzuladen, ist die Verwendung von `Syncsaber`. Du kannst darauf zugreifen, indem du auf deiner Suche in BMBF und auf die Registerkarte mit dem Namen `Syncsaber` klickst. Hier kannst du Songs mit einem Klick herunterladen. Du kannst aus verschiedenen "Einstellungen" auswählen. Zum Beispiel kannst du die Top 20 Songs im [Beatsaver's](https://beatsaver.com/) "Hot" Bereich herunterladen oder die 50 am besten bewerteten Songs.

Eine andere Methode ist die Verwendung der `Bookmark`-Funktion auf [Beastsaber](https://bsaber.com/). Nachdem du ein Konto erstellt hast, kannst du auf ein kleines Lesezeichen-Symbol auf einen Song klicken. Wenn du später alle deine Songs aus der Quest löschst, kannst du die Songs, die mit einem Lesezeichen versehen sind, mit OneClick™ erneut herunterladen.

### Von deinem PC

Wenn du keine Songs auf deiner Quest installieren kannst, kannst du sie über deinen Computer installieren, was ähnlich ist wie das installieren von Mods.

1. Öffne [BeastSaber](https://bsaber.com/) oder [BeatSaver](https://beatsaver.com/) auf deinem Computer
2. Lade die Zip herunter
3. Folge den [Installation von Mods mit Ihrem PC](#von-deinem-pc) Schritte bis zum Upload Datei Bildschirm.
4. Ziehe die Song Zip in das Upload Feld und er sollte installiert werden!

Wenn dies nicht funktioniert, [klicke hier](#problembehandlung) für einige Schritte zur Fehlerbehebung.

:::tip TIPP
Du kannst Playlists auch auf die gleiche Weise herunterladen. Du kannst verschiedene Playlists auf [BeatSaver](https://beatsaver.com/playlists) oder verschiedenen Community Discords finden. Du kannst auch deine eigenen erstellen, indem du den [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager) oder [QuestSongManager](https://github.com/exelix11/QuestSongManager/) verwendest.

Wenn du eine von deinen erstellte Map testen möchtest, findest du im Abschnitt [Testen auf einer Quest](/de/mapping/#testen-auf-einer-quest) im Mapping Wiki Abschnitt für Schritte zum Verpacken für das Testen!
:::

## Modelle installieren

Trete der [Qosmetics Community](https://discord.gg/qosmetics) bei um zu ändern wie dein Menütitel, deine Saber, Blöcke oder Walls im Spiel aussehen!

## Nützliche Links

- [Qosmetics Community](https://discord.gg/qosmetics) - Ein Server spezialisiert auf das Machen und Nutzen von Sabern, Noten und Wänden für die Quest.
- [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Anleitungen zum Erstellen von eigenen Sabern, Noten und Wänden für die Quest.
- [Questboard website](https://questmodding.com) - Ein Ort um die neuesten Informationen und Nachrichten zum Thema Beat Saber und die neuesten Mod Versionen!
- [Questboard Discord Server](https://discord.gg/P7sUKVnP) - Eine Quest-Community zum chillen und reden über Beat Saber und ähnliches. Du kannst auch eine Rolle bekommen um benachrichtigt zu werden, wenn eine neue Mod veröffentlicht wird!
- [Beheben von Audiosynchronisationsfehlern](https://bsaber.com/quest-out-of-sync/)
- [ScoreSaber](https://scoresaber.com/quest) - Ranglisten für eigene Songs im Spiel

## Problembehandlung

:::warning Ich habe das Video von Elite Eric angeschaut, aber ich hänge fest/Es hat nicht funktioniert. Wie kommts?
BSMG rät **stark** davon ab, jegliche Beat Saber Tutorials von Elite Eric zu verweden. Nach Überprüfung seiner Videos haben wir festgestellt, dass sie viele unvollständige, fehlerhafte oder geradezu falsche Informationen enthalten. Versuche, auf ihn zuzugehen um diese Fehler zu korrigieren, wurden leider mit Schweigen und neuen (auch falschen) Tutorials erfüllt.

Stattdessen solltest du den Anleitungen auf dem Wiki folgen, überprüfte Tutorials von oben verlinkten BSMG-Mitgliedern anschauen oder im [BSMG Discord](https://discord.gg/beatsabermods) nach Hilfe fragen.
:::

### Das Hinzufügen von Mods von beatmods.com oder Modellen von modelsaber.com funktioniert nicht

Der Grund, warum das Hinzufügen von Mods von [BeatMods](https://beatmods.com/) oder Modellen von [ModelSaber](https://modelsaber.com/) nicht funktioniert liegt darin, dass diese Mods und Saber nur für den PC geeignet sind.

Du kannst dir Quest kompatible Mods von [Questboard](https://www.questmodding.com/) oder `#quest-mods` aus dem Beat Saber Modding Group Discord holen und Quest kompatible Saber, Noten und Walls in der [Qosmetics Community](https://discord.gg/qosmetics). Sobald du deine Mod oder deine Modell ZIP hast, benutze das [BMBF Web Interface](#von-deinem-pc) um sie zu installieren.

### Sideloading von BMBF ist fehlgeschlagen

Wenn du während des Sideloadings von BMBF den Fehler `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!` bekommst,

dann musst du die aktuelle BMBF-Version auf deiner Quest deinstallieren. Du kannst dies von dem Menü `My Apps` in Sidequest machen.

### Kern-Mods funktionieren nicht

Wenn du Probleme mit den Kern-Mods hast, stelle bitte sicher, dass du keine veralteten Mods verwenden möchtest. Jede Mod, die für eine frühere Spielversion erstellt wurde, gilt als veraltet. Sobald du diese entfernt hast:

1. Gehe zu `Tools`
2. Klicke auf `Exit BMBF`
3. Öffne BMBG erneut
4. Gehe nochmal zu `Tools`
5. Klicke auf `Quick Fix`
6. Gehe zum `Browser` Abschnitt der BMBF App.
7. Klicke auf das kleine Globus-Symbol in der oberen rechten Ecke
8. Klicke auf `QuestBoard`
9. Klicke auf `Download Mods`
10. Scrolle nach unten und klicke auf `Download All Core Mods`
11. Klicke dann auf `Sync to Beat Saber`

---

### Das BMBF Web Interface lädt nicht

Wenn dein BMBF Web-Interface nicht lädt, stelle sicher, dass du die IP von dem Tools Tab von BMBF in dem Browser auf deinen PC eingibst und deine Quest und dein Computer in dem selben Netzwerk sind. Stelle sicher, dass:

1. Deine IP nicht `127.0.0.1` ist. Wenn dies angezeigt wird, starte deine Quest und/oder Router neu.
2. BMBF im Headset geöffnet ist
3. Das `http://` am Anfang des Links steht, nicht `https://`
4. Du hast `:50000` am Ende des Links
5. Dein PC und deine Quest befinden sich im selben WLAN Netzwerk
6. Deine IP ist immer noch die gleiche, da sie sich von Zeit zu Zeit ändern kann

Wenn nichst davon funktioniert, starte deine Quest neu und gehe wieder durch die Liste.

---

### BMBF lädt die Konfiguration nicht nach ein paar Minuten

Wahrscheinlich wird eine BMBF Version verwendet, die nicht für diese Spielversion entwickelt wurde. Beispielsweise, wenn man eine BMBF Version verwendet, welche für Beat Saber `1.13.0` entwickelt wurde, die installierte Version auf dem Headset jedoch `1.12.2` ist.  
Falls die Spiel-Version dem entspricht was auf der BMBF Release Seite steht wofür es entwickelt wurde, starte bitte dein Headset neu. Falls es immer noch nicht funktionieren sollte, benutze das [BMBF Web Interface](#von-deinem-pc) und klicke auf `Quick Fix` unter dem Tab Tools.

### Beat Saber ist schwarz, wenn ich es starte

Öffne die Bibliothek auf deiner Quest. Klicke dort auf die drei Punkte neben Beat Saber und klicke auf `Berechtigungen`. Aktiviere dann in dem Menü dass sich öffnet die Speicher Berechtigung und versuche das Spiel erneut zu starten.

---

### Meine Mods und Saber funktionieren/aktivieren sich nicht

Dies ist vermutlich auf einen veralteten BMBF Client zurückzuführen . Nimm die neuste Version von den [BMBF Veröffentlichungen](https://bmbf.dev/stable). Wenn die BMBF Version für deine Beat Saber Version noch nicht da ist, dann warte bitte bis die Unicorns BMBF aktualisieren.

- Wenn deine Mod mit deiner Version kompatibel ist, dann stelle sicher, dass es keinen Order gibt der den Inhalt der Zip separiert.
- Wenn ein Level nicht lädt, versuche die Mapping Extensions von #quest-mods zu installieren. Es kann auch die Mod Noodle Extensions benötigen, die noch nicht auf Quest verfügbar ist.
- Wenn BMBF auf der neuesten Version ist und Mods im Spiel nicht aktiviert werden, deinstalliere Beat Saber mit der Schaltfläche "BS Deinstallieren" im Abschnitt Tools, installiere das Spiel neu und führe Mods erneut aus.
- In sehr sehr seltenen Fällen hat BMBF keine Dateirechte, um Mods an den richtigen Ort zu kopieren. Überprüfe in SideQuest ob BMBF über alle Dateirechte verfügt.

---

### Beat Saber stürzt ab

Sollte dein Spiel abstürzen, wenn du etwas machst, deaktiviere die Mods nacheinander und starte das Spiel jedes Mal, um zu sehen, ob das Problem behoben ist, bevor du in einem Support-Kanal um Hilfe bittest.

### Ich sehe nur einen weißen Bildschirm, wenn ich BMBF öffne

Wenn du beim Öffnen des BMBF aus unbekannten Quellen nur einen weißen Bildschirm siehst, starte deine Quest neu. Das Problem sollte dann behoben sein

### Mein Spiel zeigt mir den Ladebildschirm in Dauerschleife

Wenn Beat Saber beim Starten 3 Punkte hat(Ladebildschirm), stelle sicher, dass:

1. Du hast einen Song gestartet und gespielt, bevor du das Spiel modifiziert hast
2. Du verwendest keine raubkopierte Version des Spiels
3. Stelle sicher, dass du die neueste Version von BMBF verwendest
