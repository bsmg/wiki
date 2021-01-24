# Skapa Mods
## Injicera Mods
Beat Saber har _**inte**_ inbyggt stöd för mods.

Istället förlitar sig de flesta mods inom modinstalleraren på [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) för att injicera plugins i spelet och för några användbara verktyg för oss moddare.

För er som föredrar [BepInEx](https://github.com/BepInEx/BepInEx) över något av dessa alternativ har Bepis skapat ett inladdningsprogram för BSIPA-plugin, som du hittar [här](https://github.com/BepInEx/BepInEx.BSIPA.Loader). När det gäller att utveckla Beat Saber plugins med BepInEx plugin-API så finns en generisk guide på deras [dokumentationssida](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), men utöver det är du mest på egen hand.

## Projektsetup
Om du är intresserad av att skapa ett Beat Saber-mod, men inte har en mall eller Visual Studio-mall inställd, [följ Introguiden för att få ditt projekt konfigurerat](./intro.md).

### Redo att börja?
Kolla in [länkarna nedan](#other-links) för dokumentation som rör Unity och relaterade verktyg. Om du har några frågor är `#pc-mod-dev` -kanalen i [BSMGs Discordserver](https://discord.gg/beatsabermods) det bästa stället att fråga på

## Launch args
Hjälpsamma startargument som kommer att göra moddning/felsökning enklare.

| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Beskrivning                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                                  | Aktiverar utdataloggfönstret för IPA. Detta visar den debug-konsol som mods använder.                                                                                                                                        |
| `fpfc`                                                                                       | "First Person Flying Controller"<br /><br />Detta låter dig använda WASD och musen för att navigera runt i menyn i spelet. Detta gör testning mycket enklare eftersom du inte behöver sätta på dig ditt headset! |
| `-vrmode oculus`                                                                             | Om du kör Beat Saber genom Steam kan du spela spelet på ett Oculus headset.                                                                                                                                                  |

## Andra länkar
* [BeatMods](https://beatmods.com)
* [Riktlinjer för BeatMods godkännande](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [Beat Saber IPA](https://github.com/nike4613/BeatSaber-IPA-Reloaded)
