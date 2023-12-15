---
sidebar: auto
---

# Quest Modding mit Android

:::warning Wenn du BMBF installierst und dein Spiel modifizierst, wird der offizielle Mehrspielermodus sowie die Anzeige und das Hochladen von Spielständen in den Bestenlisten des Basisspiels deaktiviert. If you would like to play modded multiplayer, you need the `Beat Together` and `MultiQuestensions` mods, which enables cross-play between PC and modded Quests and allows for custom songs to be played. Die Mod kann im [Beat Saber Modding Group](discord.gg/beatsabermods) Discord unter `#quest-mods` oder auf der [Questboard](https://questmodding.com) Seite gefunden werden.

Um Ranglisten für Custom Songs zu erhalten und um Performance-Punkte (PP) für Ranked Songs zu bekommen, benötigst du die [ScoreSaber](https://new.scoresaber.com/quest) Mod. [Dieser Link](https://new.scoresaber.com/quest) führt dich zur ScoreSaber-Seite, um das Programm einzurichten. ScoreSaber ersetzt nicht die Bestenlisten des Basisspiels, sondern fügt nur Bestenlisten für Custom Songs hinzu.

**Hinweis:** Überprüfe den Update-Kanal im [ScoreSaber Discord](https://discord.gg/WpuDMwU), um zu sehen, ob die Mod für die aktuelle Spielversion verfügbar ist. :::

::: tip HINWEIS Die empfohlene Art, BMBF zu installieren, ist mit [SideQuest auf einem PC](/quest-modding.md#installing-bmbf-with-sidequest). Diese Methode sollte nur verwendet werden, wenn du keinen Zugriff auf einen PC hast. :::

* [Voraussetzungen](#requirements)
* [Entwicklermodus auf deiner Quest aktivieren](#how-to-enable-developer-mode-on-the-oculus-quest)
* [Telefon einrichten](#setup-your-phone)
* [BMBF auf deinem Telefon installieren](#installing-bmbf-with-your-phone)
* [Beat Saber einrichten](#setup-beat-saber)

## Voraussetzungen

* Ein Android Phone oder Android Tablet
  * iPhones oder iPads werden **NICHT** unterstützt
* Eine **bezahlte** Version von Beat Saber im Oculus Quest Store
* Ein Kabel um deine Quest mit deinem Telefon zu verbinden (wenn dein Telefon über USB C geladen wird, sollte das Ladegerät, das mit deiner Quest mitgeliefert wurde, funktionieren)

## Wie man den Entwicklermodus auf der Oculus Quest aktiviert
Es gibt zwei Methoden, die erste erfordert eine Kreditkarte. Wenn du keine hast, kannst du [Ich habe keine Kreditkarten](#i-have-no-credit-card) Schritte folgen.

### Mit Kreditkarte verifizieren
Gehe zum [Oculus Dashboard](https://dashboard.oculus.com/) und melde dich mit deinem Facebook-Konto an.

Nachdem du dich erfolgreich angemeldet und verifiziert hast, kannst du eine neue Organisation erstellen.

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

Nachdem du diese erstellt hast, kannst du den Entwicklermodus in der Oculus-App auf deinem Smartphone aktivieren.

#### Aktivieren des Entwicklermodus in der Oculus App

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

Du kannst nun zu [Telefon einrichten](#setup-your-phone) wechseln

### Ich habe keine Kreditkarte
[Originalquelle](https://www.reddit.com/r/sidequest/comments/jaxy4u/cant_verify_oculus_developer_account/?utm_source=amp&utm_medium=&utm_content=post_body).

Bitte beachte, dass du ein zweites Konto (Oculus-Entwicklerkonto) erstellst und dann dein Facebook-Profil zu der erstellten Organisation hinzufügen musst. Das ist etwas schwieriger.

:::tip Wenn du einen Freund hast, der eine Organisation hat, kannst du ihn bitten dichhinzuzufügen, damit du kein neues Konto erstellen musst. Wenn ja, sag deinem Freund, dass er stattdessen die Schritte unter [Sich selbst zur Organisation hinzufügen](#add-yourself-to-the-organization) mit deinem Facebook Konto ausführen soll. :::

#### Erstelle ein neues Developer Konto

1. Rufe die [Anmeldeseite für Oculus-Entwickler](https://developer.oculus.com/sign-up/) auf und klicke auf `Erstelle ein unverbundenes Oculus Entwicklerkonto`.
2. Fülle die erforderlichen Informationen aus.
3. Überprüfe die E-Mail, die du erhalten hast, und melde dich erneut mit dem erstellten Konto an.
4. Rufe die [Überprüfungsseite](https://developer.oculus.com/manage/verify/) auf und richte die Zwei-Faktor Authentifizierung ein.

![2fa](~@images/beginners-guide/2fa.png)

#### Neue Organisation erstellen
Gehe danach zum [Oculus Dashboard](https://dashboard.oculus.com/) und erstelle eine Organisation mit *fast* jedem beliebigen Namen, den du möchtest.

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

#### Füge dich zur Organisation hinzu
Nachdem du deine Organisation erstellt hast, musst du dein Facebook Profil zu deiner Organisation hinzufügen, indem du deine Organisation auswählst. Klicke dann im drop-down auf Mitglieder. Dort fügst du ein neues Mitglied mit der Rolle Admin hinzu und gibst den Benutzernamen deines Facebook Profils ein. Klicke danach hinzufügen und der Benutzer sollte hinzugefügt werden.

![DevModeCreateOrg](~@images/beginners-guide/addmember.png)

#### Entwicklermodus in der Oculus App aktivieren
Du solltest nun in der Lage sein, den Entwicklermodus in der Oculus App auf deinem Smartphone zu aktivieren.

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

Du kannst nun mit [Handy einrichten](#handy-einrichten) weiter machen

## Handy einrichten

1. Lade die [Sidequest App aus dem Google Play Store](https://play.google.com/store/apps/details?id=side.quest.mobile) herunter
2. Aktiviere den Entwicklermodus auf deinen Handy
    1. Geh in die Android Einstellungen
    2. Scrolle zu "Über Telefon" und öffne es
    3. Tippe auf "Software Informationen"
    4. Tippe auf das Feld "Build number", bis der Entwicklermodus aktiviert ist. Dies sollte etwa 7 Tippe erfordern.
3. USB-Debugging auf Deinem Telefon aktivieren
    1. Zurück zu Einstellungen
    2. Tippe auf "Entwickleroptionen"
    3. Aktiviere USB debugging

### BMBF mit deinem Handy installieren
:::warning
Bevor du das Spiel moddest, starte Beat Saber einmal, spiele ein Level und scheitere sofort!
:::

Öffne Sidequest auf deinem Handy und verbinde deine Quest mit einem USB Kabel. Du solltest ein USB-Debugging Pop-Up in Deiner Quest und auf Deinem Telefon erhalten. Wählen auf beiden Geräten "Zulassen" und wenn Du möchtest, wähle "Immer zulassen".

Falls SideQuest deine Quest erkennt, solltest du einen grünen Punkt neben dem SideQuest Logo auf dem unteren Bildschirmrand sehen.

Installiere dann BMBF, indem du das Suchsymbol oben bei SideQuest tippst und nach `BMBF` suchsts. Du solltest eine App mit einem Einhorn als Symbol sehen. Klicke es an und klicke `INSTALL TO HEADSET`.

Danach solltest du BMBF auf deiner Quest installiert haben und bereit sein, um Beat Saber zu modden.

## Beat Saber einrichten
Nach der erfolgreichen Installation von BMBF auf deiner Quest solltest du diese in deiner Quest-Bibliothek unter Unbekannten Quellen finden können.

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

Öffne es und erlaube den Dateizugriff nach dem Start, wenn du dazu aufgefordert wirst. Folge nun sorgfältig den Anweisungen auf dem Bildschirm. Nachdem du fertig bist, solltest du [BeastSaber](https://bsaber.com) sehen.

Wenn du während des Installationsvorgangs das Popup-Fenster "App wiederherstellen" erhältst, klicke einfach auf "Schließen". Diese Warnung richtet sich an raubkopierte Versionen des Spiels, so dass es wahrscheinlich keine Konsequenzen hat, wenn du sie ignorierest, wenn Du eine legitime Kopie besitzt.

Nun können Sie mit dem [Core Mods](/quest-modding.md#core-mods) Schritt des Installationsprozesses fortfahren, als ob Sie mit Ihrem PC moden würden.
