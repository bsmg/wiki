# Mods erstellen
## Mods injizieren
Beat Saber _**hat keine**_ Mod Unterstützung eingebaut.

Stattdessen verlassen sich die meisten Mods im Mod-Installer auf [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) um Plugins ins Spiel zu injizieren, sowie die Bereitstellung einiger nützlicher Werkzeuge für uns Modder.

Für diejenigen, die [BepInEx](https://github.com/BepInEx/BepInEx) über einer dieser Optionen bevorzugen, hat Bepis einen Loader für BSIPA-Plugins erstellt, der [hier](https://github.com/BepInEx/BepInEx.BSIPA.Loader) verfügbar ist. Was die Entwicklung von Beat Saber Plugins mit dem BepInEx Plugin API angeht, existiert eine generische Anleitung auf ihrer [Dokumentationsseite](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), aber sonst bist du auf dich allein gestellt.

## Projekt einrichten
Wenn du daran interessiert bist, einen Beat Saber Mod zu erstellen, aber keine Vorlage oder Visual Studio Vorlage eingerichtet hast, [folge dem Intro-Guide um dein Projekt komplett einzurichten](./intro.md).

### Bereit?
Schau dir die [Links darunter](#other-links) für die Dokumentation zu Unity und verwandten Werkzeugen an. Wenn du irgendwelche Fragen hast, ist der beste Platz zum fragen im `#pc-mod-dev` Kanal des [BSMG Discord](https://discord.gg/beatsabermods)

## Startargumente
Hilfreiche Startargumente, die Modding / Debugging einfacher machen.

| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Beschreibung                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--verbose`                                                                                  | Aktiviert das Ausgabeprotokoll-Fenster für IPA. Dies wird die Debug-Konsole anzeigen, die Mods verwenden.                                                                                                                |
| `fpfc`                                                                                       | "First Person Flying Controller"<br /><br />Dies erlaubt es dir, mit WASD und der Maus durch das Menü im Spiel zu navigieren. Das macht das Testen viel einfacher, da du dein Headset nicht aufsetzen musst! |
| `-vrmode oculus`                                                                             | Wenn du Beat Saber durch Steam ausführst, kannst du das Spiel auf einem Oculus Headset spielen.                                                                                                                          |

## Weitere Links
* [BeatMods](https://beatmods.com)
* [BeatMods Freigaberichtlinien](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [Beat Saber IPA](https://github.com/nike4613/BeatSaber-IPA-Reloaded)
