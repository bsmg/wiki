---
sidebar: auto
next: ./avatars-guide.md
description: MissRaynors Anleitung zum Erstellen von Custom Sabern!
---

# Custom Sabers Anleitung

_MissRaynors Anleitung zum Erstellen von Custom Sabern._

## Einführung

Da die Leute immer noch Probleme mit der Erstellung von Custom Sabern haben denken wir, dass es am besten ist, unsere aktuelle Anleitung zu aktualisieren. Vielen Dank an angeliod0103 für die Erstellung der vorherigen Anleitung. Zusätzliche Beiträge zu dieser Anleitung sind von Bobbie und Mdot.

## Vorbereitung

DAS MUSST DU HABEN:

- Unity 2018.1.6f1 um eine benutzerdefinierte Saber Datei (\*.saber) zu erstellen. [HIER Downloaden](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe)
- Das Custom Saber Unity Projekt. [HIER Downloaden](https://cdn.discordapp.com/attachments/468249466865057802/703747388556181534/Custom_Sabers-4.3.0-UnityProject.zip)
- Eine 3D-Modell-Datei des Sabers Deiner Wahl. Die gängigsten und akzeptablen Dateiformate sind .obj- und .fbx-Dateien. Du kannst dein Saber von 3D Modell Hosting/Showcase Seiten wie Sketchfab oder Turbosquid herunterladen.

Optional:

- 3D-Modellierungssoftware: Blender ist eine gute kostenlose Option. 3dsmax, wenn du eine Lizenz dafür hast (Bildungslizenz ist ausreichend)
- Bildbearbeitungsprogramm: [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) oder [GIMP](https://www.gimp.org/downloads/) funktionieren, wenn du deine eigene Saber Textur erstellen möchtest
- Das Saber Modell in diesem Tutorial. [HIER Downloaden](https://bs.assistant.moe/Sabers/resources/Tutorial_Saber.zip)

## Einrichtung

Entpacke das Custom Saber Unity Projekt an deinem gewünschten Ort.

Wenn du den Unity Hub verwendest, klicke auf Hinzufügen, wähle den Ordner "Custom Saber Unity Project" aus und klicke dann auf den Ordner.

![Hinzufügen eines Custom Saber Projekts](/.assets/images/models/sabers/01.png)

Das Projekt "Custom Saber" sollte in der Liste erscheinen. Stelle sicher, dass die Unity-Version für das Projekt korrekt ist.

![Überprüfe, ob die Version korrekt ist](/.assets/images/models/sabers/02.png)

Öffne das Custom Saber Projekt. Es sollte wie folgt aussehen:

![Überprüfe, ob das Projekt richtig angezeigt wird](/.assets/images/models/sabers/03.png)

Überprüfe ob das Projekt funktioniert, indem du überprüfst, ob der `Saber Exporter` im `Fenster` Tab angezeigt wird.

![Prüfe ob das Projekt einen Saber-Exporter hat](/.assets/images/models/sabers/04.png)

![Überprüfe ob der Saber-Exporter korrekt funktioniert](/.assets/images/models/sabers/05.png)

Die aktuelle Szene sollte ein gameObject namens `TemplateSaber` sein.

![Roter Kreis um das TemplateSaber](/.assets/images/models/sabers/06.png)

Wenn du das Projekt zum ersten Mal öffnest, ist der Einheits-Viewport sehr weit vom Saber entfernt. Um die Vorlage in der Ansicht zu sehen, klicke doppelt auf das `TemplateSaber` gameObject.

Klicke auf die `RightSaber` und `LinksSaber` GameObjects und stelle sicher, dass sie eine `Event Manager` Komponente besitzen.

![Prüfe, ob der EventManager auf dem RightSaber Objekt existiert](/.assets/images/models/sabers/07.png)

Versuche jetzt, das TemplateSaber in deinen `CustomSabers` Ordner via den Saber Exporter zu exportieren.

![Exportiere TemplateSaber](/.assets/images/models/sabers/08.png)

Falls das TemplateSaber erscheint und korrekt im Spiel funktioniert, ist das Setup abgeschlossen. Du kannst jetzt mit dem nächsten Part beginnen.

## Modellierung

Ich werde nicht ins Detail gehen, um ein 3D-Modell zu erstellen. Wenn du noch kein Modell hast und lernen möchtest, wie du eins erstellst, findest du hier verschiedene Anleitungen:

### Blender

<YouTube url='https://www.youtube.com/watch?v=ICBP-7x7Chc' />

### 3DS Max

<YouTube url='https://www.youtube.com/watch?v=DzBTcDY3_Q4' />

Sobald das Saber fertig ist, kannst du ihn exportieren, indem du beim Datei-Export das gewünschte Dateiformat auswählst und die Datei bei Unity importieren.

::: tip HINWEIS
OBJ wird am besten für einfache Saber benutzt. FBX eignet sich am besten für komplexe Saber, die Rigging oder Animationen haben.
:::

![Exportiere die Saber als FBX Datei](/.assets/images/models/sabers/09.png)

::: tip HINWEIS
Du musst nicht beide Saber exportieren, wenn sie die gleiche Form haben. Wenn sie identisch sind, sollte es reichen, eins zu exportieren.
:::
::: tip HINWEIS
Das Zusammenfassen von Meshes, die dieselben Farb-/Leuchtattribute haben, wird auf Dauer sehr hilfreich sein.
:::

## Unity

Um das Modell in Unity zu importieren, ziehe es einfach per Drag & Drop in das Assets-Fenster. Richte das Saber anschließend mit dem TemplateSaber aus. Video Beispiel:

<YouTube url='https://www.youtube.com/watch?v=mphD87zOer4' />

Als nächstes musst du Beat Saber kompatible Materialien zu deinem Saber hinzufügen.

Das Custom-Saber Unity Projekt kommt mit 4 verschiedenen Beat Saber kompatiblen Shadern. Hier sind die wichtigsten Unterschiede zwischen ihnen:

- Lit glow leuchtet und hat Schatten. Du kannst die Richtung ändern, aus der das Licht kommt und wie stark es ist
- Metallic macht das Material etwas dunkler und erlaubt dir eine metallische Reflexion hinzuzufügen
- Unlit Glow ist ähnlich wie lit glow, hat aber keine Lichteffekte.
- "Unlit glow cutout dither" ist dasselbe wie unlit glow aber erlaubt dir einen Transparenzeffekt zu deinem Material hinzuzufügen.

Das Material, das du benutzen willst hängt von den Eigenschaften ab, die du haben willst.

::: warning WARNUNG
Stelle sicher, dass du _EXKLUSIV_ Shader benutzt, die kompatibel mit Beat Saber sind. Falls du einen Shader benutzt der nicht kompatibel ist (z. B. der Unity Standard Shader), wird das Material im Spiel nur als Weiß angezeigt.
:::

::: tip HINWEIS
Weitere Informationen zur Shader-Kompatibilität findest du im Abschnitt "Erweiterte Shader-Eigenschaften" in diesem Handbuch.
:::

Video Beispiel der Anwendung von Materialien:

<YouTube url='https://www.youtube.com/watch?v=zKFCNJoQOWk' />

Du kannst eine Textur zu einem Material hinzufügen, indem du eine Bilddatei in den Texturslot ziehst.

![Füge einem Saber eine Textur hinzu](/.assets/images/models/sabers/10.png)

::: tip HINWEIS
Der `Glow` Schiebregler verändert, wie hell das Saber leuchtet. Zusätzlich, wenn der glow Wert über 0 ist wird das Material von den Custom Farben des Spielers betroffen.
:::

Sobald du alles erledigt hast, kannst du dein Saber exportieren. Öffne den `Saber Exporter `im` Window` Tab und gebe dann den Saber-Namen und -Autor an.

![Exportieren des Sabers und Hinzufügen von Name + Autor](/.assets/images/models/sabers/11.png)

Packe das Saber in den `CustomSabers` Ordner und teste es im Spiel aus. Wenn es gut aussieht, bist du fertig!

::: tip HINWEIS
**Sobald deine neuen Saber funktionieren**, [lade sie bei ModelSaber hoch](https://modelsaber.com/Upload/) wenn du sie mit anderen teilen möchtest.
:::

## Erweitert

Dieser Abschnitt behandelt Dinge, die nicht im Haupt-Tutorial enthalten sind, wie zum Beispiel das Hinzufügen von Events und Trails.

Andere Skripte sind in `Assets/CustomSaber.dll` enthalten. Klicke auf den kleinen Pfeil um ihn zu vergrößern. ![Erweitere CustomSaber.dll](/.assets/images/models/sabers/12.png)

### EventManager

Mit dieser Komponente kannst du eine Aktion einrichten, wenn eine Ereignis-Bedingung erfüllt ist. Dies beinhaltet, wenn du eine Note triffst, eine Note verpasst, wenn du ein Level startest, etc...

Um es zu verwenden, klicke auf die Plus-Schaltfläche, um ein neues Ereignis zu erstellen. Ziehe das gameObject, welches die Aktion ausführt in den Slot und wähle dann die gewünschte Aktion aus.

Wenn du mehr Informationen zu Events haben willst, lies dir die `Events` Sektion im Custom-Avatars Guide **Link benötigt!!!**

![Event hinzufügen](/.assets/images/models/sabers/13.png)

### Jeder 9. Kombofilter

Diese Komponente lässt dich jede 9. Kombo eine Aktion durchführen. Es funktioniert genauso wie der `Event Manager`. Jedoch triggert es nur wenn man eine bestimmte Combo erreicht (X Combo).

### Custom Trails

Mit dieser Komponente kannst du die Standardspur der Saber verändern. Schaue dir für eine ausführliche Anleitung zur Verwendung von Custom Trails [MDot's Custom Trail Guide](https://mdotamaan.github.io/BeatSaber-CustomTrailsGuide/) an.

### Animation

Wenn du möchtest, dass deine Saber eine bestimmte Animation abspielen, musst du eine `Animator` Komponente verwenden, mit der du besser verwalten kannst, welche Animation du erstellst und mit der du steuern kannst, wie die Animation mit Hilfe des Event-Managers funktioniert/auslöst. [Weitere Informationen zur Animator Komponente findest du in den Unity-Dokumenten hier](https://docs.unity3d.com/Manual/class-AnimatorController.html).

### Erweiterte Shader Eigenschaften

Wenn du deine Shader so modifizieren möchtest, dass sie benutzerdefinierte Farben verwenden, ohne das Glühen ändern zu müssen, ist es möglich, sie so zu modifizieren, dass sie dies unterstützen.

Füge diesen Codeschnipsel in den Abschnitt `Eigenschaften` deines Shaders ein. Wenn du eine andere Eigenschaft mit dem Namen `_Color` hast, stelle sicher, dass du diese entfernst!

```hlsl
_Color ("Color", Color) = (1,1,1,1)
[MaterialToggle] _CustomColors("Custom Colors", Float) = 0
```

Jetzt sollten deine Materialien eine nettes `Custom Colors` Kontrollkästchen haben, anstatt die Unterstützung für benutzerdefinierte Farben abhängig vom aktuell eingestellten Glühen.

Ähnlich verhält es sich, wenn du einen non-BeatSaber Shader importieren möchtest, um ihn auf einem Saber zu verwenden und willst, dass er im Spiel korrekt angezeigt wird, musst du den `Alpha` Channel entfernen.

Jeder Shader ist anders. Daher gibt es keinen allgemeingültigen Ansatz für diesen Vorgang. Wenn du dir nicht sicher bist, wie du das machst, kannst du den Prozess in #pc-3d-modeling im [Beat Saber Modding Group](https://discord.gg/beatsabermods) Discord diskutieren.
