---
sidebar: auto
prev: ./avatars-guide.md
next: ./notes-guide.md
description: Emmas Leitfaden zur Erstellung von Custom Platforms!
---

# Custom Platforms Guide

_Emmas Leitfaden zur Erstellung von Custom Platforms._

## Projekt

Öffne das aktuelle [Custom Platforms Project](https://github.com/affederaffe/CustomPlatformsUnityProject/releases/) mit [Unity 2018.1.6f1](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe).

## Erste Schritte

![Custom Platform Skript](/.assets/images/models/platforms/CustomPlatformScript.png)

Erstelle ein `Leeres Spielobjekt`, indem du mit der rechten Maustaste in das Hierarchiefenster klickst und `"Leeres Objekt erstellen"` auswählst. Stelle sicher, dass seine Position im Inspektor auf den Ursprung (0,0,0) gesetzt wird. Suche im Inspektor nach dem Skript `Custom Platforms` und wende es auf dieses GameObject an. Alles, was sich in diesem Objekt befindet, wird exportiert, wenn die Schaltfläche im `Custom Platforms` Skript gedrückt wird. Im Skript gibt es auch Optionen zum Exportieren. Diese deaktivieren Teile der Originalplattform (Für den Fall, dass du etwas teilweise ersetzen möchtest).

## Modelle hinzufügen

![Objekte](/.assets/images/models/platforms/Objects.png)

Ziehe alle Modelle, die du in deiner Plattform haben möchtest, in das im zweiten Schritt erstellte GameObject und positioniere sie nach Belieben. Stelle für die Materialien der Modelle sicher, dass Beat Saber kompatible Shader verwendest oder die, die du im Projekt findest, `_dark_replace` und `_glow_replace` im Namen haben. Dies sind benutzerdefinierte Materialien, die sich wie die Beat Saber Materialien verhalten, d. h. auf die Röhrenleuchten und den Nebel reagieren.

### Track Rings

Das `Track Rings ` Skript macht Track Rings wie man sie im Spiel sieht. Um dies zu erreichen, nimmt das Skript ein Prefab. Momentan habe ich noch nicht herausgefunden, wie ich eine Prefab darin verwenden kann, also habe ich ein gameObject verwendet, das Teil der Plattformhierarchie ist, das ich später auf `y = -1000` verschoben habe. Damit die Ring-Vorschau korrekt angezeigt wird, verschiebe das gameObject auf (0,0,0), passe deine Einstellungen an und verschiebe es vor dem Importieren an einen Ort außerhalb des Bildschirms.

Die Aktivierung des Rotationseffekts bewirkt, dass sich die Ringe um das angegebene Ereignis drehen, abhängig von den angegebenen Variablen. (Ich habe mit den noch nicht herumgespielt, also experimentiere am besten).

Das Aktivieren des Stufeneffekts ändert die Ringabstände, wenn das angegebene Ereignis zwischen 2 Variablen aufgerufen wird.

![Track Rings Skript](/.assets/images/models/platforms/TrackRingsScript.png)

### Röhren Licht

![Röhren Licht](/.assets/images/models/platforms/TubeLightScript.png)

Dieses Skript aktiviert blinkende Lichter. Wenn du dies auf ein leeres gameObject legst, ändert sich der Hintergrund und fügt dem Bereich ein wenig Farbe hinzu, je nach den Licht-IDs. Wenn ein Mesh-Renderer vorhanden ist, wird er die Farbe des Meshes entsprechend der Licht-IDs ändern. Wenn du dies verwendest, ist kein Hinzufügen von Farben erforderlich, also ändere ich die Größe im Skript auf 0.

### Song Events

![Song Event Handler](/.assets/images/models/platforms/SongEventHandler.png)

Der Event-Manager ist das nützlichste Skript. Mit ihm kannst du bei jedem Beat Saber Event(auch bei unbenutzten) eine Aktion auslösen. Um ein Event hinzuzufügen, drücke die Taste `+` unterhalb von `Auslöser ()`. Ziehe das Objekt, das du manipulieren möchtest, in die soeben erstellte Box. Drücke das Dropdown-Menü auf der rechten Seite und wähle aus, was dieses Objekt tun soll, indem du zuerst die Komponente und dann die Aktion auswählst. Achte darauf, dass du nur 1 Event-Handler pro gameObject verwendest, da nur eins pro gameObject funktionieren wird.

### Spektogramm

![Spektogramm](/.assets/images/models/platforms/Spectrogram.png)

Das Spektrogramm Skript funktioniert wie das Skript "Track Rings" und benötigt ebenfalls ein Prefab oder gameObject. Diese wird entsprechend dem Klang des Spiels und den bereitgestellten Variablen gedehnt und geschrumpft. (Auch damit habe ich noch nicht herumgespielt).

## Exportieren

![Speichern](/.assets/images/models/platforms/Save.png)

Exportiere die Plattform über das Skript, das du zuvor zum gameObject hinzugefügt hast, an einen Ort deiner Wahl. Vorzugsweise das Verzeichnis des Spiels `Beat Saber/CustomPlatforms`.

::: tip HINWEIS
**Wenn du deine neue Plattform zum Laufen gebracht hast**, [lade sie auf ModelSaber hoch](https://modelsaber.com), wenn du sie mit der Welt teilen möchtest.
:::

![Katze](/.assets/images/models/platforms/Cat.png)
