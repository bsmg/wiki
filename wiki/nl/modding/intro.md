# Introductie voor modden
_Leer hoe je jouw eigen PC mods kunt maken._

## Aan de slag
::: warning WAARSCHUWING Deze handleiding is voor het maken van mods voor de **PC** versie van Beat Saber!

Zorg ervoor dat je spel is gemod voordat je probeert een mod te maken.  
Zie de instructies voor [ het modden van Beat Saber op de PC.](/pc-modding.md)

Deze handleiding gaat er van uit dat je een basis begrip hebt van C# en Unity.  
Het kan moeilijk zijn om te begrijpen wat hier wordt behandeld als je deze basis niet hebt. :::

Beat Saber is gemaakt in Unity 2019.3 met behulp van C# met .NET framework 4.6  
Je moet de laatste versie downloaden van [Visual Studio Community](https://visualstudio.microsoft.com/).

## Modding tools instellen
We zullen de BeatSaberModdingTools extensie gebruiken in deze tutorial, omdat het wordt geleverd met modding templates en handige functies.  
BeatSaberModdingTools wordt onderhouden door Zingabopp. Als je de programma's handig vindt, kun je overwegen om ze te ondersteunen.

Je kunt het downloaden op hun [GitHub](https://github.com/Zingabopp/BeatSaberTemplates/releases/latest).  
Je moet `BeatSaberModdingTools.vsix` downloaden. (Vouw de Assets dropdown uit als je het niet kunt vinden)

Eenmaal gedownload, open je de `.vsix` en het zal zichzelf installeren als een Visual Studio Plugin.  
Als je problemen hebt, raadpleeg dan de [README](https://github.com/Zingabopp/BeatSaberModdingTools#readme) en [WIKI](https://github.com/Zingabopp/BeatSaberModdingTools/wiki) van het project.

## Template-instellingen
Maak eerst een nieuw project aan met behulp van het sjabloon.  
We gaan gebruik maken van het `BSIPA4 Plugin (Core)` sjabloon, en we gaan de mod `BSPlugin1` noemen. Je kan de naam veranderen naar hoe je je mod wilt noemen.

![Selecteren van de modding template](~@images/modding/modding-template-select.png "Selecteren van de modding template")  
![Modding template naam](~@images/modding/modding-template-name.png "Modding template naam")

Vervolgens moet je jouw Beat Saber Directory instellen in Visual Studio. Volg de instructies [op de README van het sjabloon](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use)of bekijk de onderstaande schermafbeelding.

![Instellen van de Beat Saber directory](~@images/modding/setup-bs-directory.png "Instellen van de Beat Saber directory")

**Probeer nu het project te maken**, het zou automatisch de verwijzingen voor je moeten vinden en het bouwwerk zou moeten slagen.

Als je bouwwerk niet slaagt, controleer dan of je geen ontbrekende referenties hebt.

::: tip BeatSaberModdingTools zal automatisch referenties hanteren. Als je referenties niet gevonden kunnen worden, [controleer dan de instructies nog een keer](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use).

Als je handmatig referenties wilt toevoegen, klik dan met de rechtermuisknop op `References` in de projectmap, en daarna `Beat Saber Reference Manager...`. Selecteer jouw referenties en klik vervolgens op "Apply".

Meer informatie over de reference manager kan je [hier](https://github.com/Zingabopp/BeatSaberModdingTools/wiki/Adding-References) vinden. :::

## De code inspecteren
5 bestanden moeten automatisch geopend worden met het slabloon.

| Bestandsnaam             | Over                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `manifest.json`          | Informatie over je mod voor BSIPA.                                                           |
| `Plugin.cs`              | Het hoofdbestand dat wordt geladen voor jouw mod.                                            |
| `AssemblyInfo.cs`        | Bestandgegevens voor jouw mod. Dit wordt vooral beheerd door Modding Tools.                  |
| `PluginConfig.cs`        | Een sjabloon voor het inschakelen van configuratie voor jouw mod. Dit is standaard uitgezet. |
| `BSPlugin1Controller.cs` | Een algemeen MonoBehaviour voor jouw mod.                                                    |

### Bewerk de manifest van jouw mod
Vul het `manifest.json` bestand in met jouw gegevens.  
De `name` en `id` plekken worden gebruikt om jouw mod te identificeren. De ID moet overeenkomen met het ID wat gebruikt word voor het uploaden van jouw mod naar BeatMods.

::: warning WAARSCHUWING Verwijder **niet** de afhankelijkheid van BSIPA. Vanaf BSIPA v4.1 is dit vereist voor het laden van jouw mod. :::

## Compileren
Bouw jouw plugin met `Build -> Build Solution` of <kbd>CTRL + SHIFT + B</kbd>  
Jow gecompileerde DLL moet automatisch worden gekopieerd naar de `Plugins` map in jouw Beat Saber map! Dit zal worden gedaan voor zowel debug als release builds.

::: tip OPMERKING Als je klaar bent om je mod uit te geven, Selecteer dan de optie `Release` om een Release build van je mod te maken.

In de release-modus wordt een `.zip-` bestand gegenereerd dat klaar staat om naar BeatMods te uploaden. :::

## Het testen van jouw mod in het spel
Om te testen of je mod is geladen in het spel, moet je Beat Saber starten met de BSIPA Console ingeschakeld. Voeg `--verbose` toe als een startargument en voer het spel uit.  
Voor meer informatie over startargumenten, zie [hier](./#launch-args).

Wanneer je het spel opent, zou je moeten zien dat BSIPA jouw mod laad doormiddel van het console venster.

![Screenshot van het test console](~@images/modding/testing-console.png "Screenshot van het test console")

## Volgende stappen
Hier zijn enkele nuttige hulpmiddelen om jou verder te helpen met het maken van mods.

* Als je hulp nodig hebt bij het maken van mods, kun je vragen stellen in het `#pc-mod-dev` kanaal in de [BSMG Discord Discord](https://discord.gg/beatsabermods).
* Als je code wilt decompileren, bekijk dan [dnSpy](https://github.com/dnSpy/dnSpy/releases)
* Zie de BSIPA Documentatie voor meer informatie over het [configuratiesysteem](https://bsmg.github.io/BeatSaber-IPA-Reloaded/tags/4.1.3/articles/start-dev.html#configuring-your-plugin).
* Als je de code van het spel moet patchen voor je mod, moet je [Harmony](https://github.com/pardeike/Harmony#readme) gebruiken. De `0Harmony.dll` is al geïnstalleerd voor gemodde spellen.
* Voor ervaren ontwikkelaars, ben je misschien geïnteresseerd in het leren over Zenject, het Dependency Injection system dat veel gebruikt wordt door Beat Saber. [SiraUtil](https://github.com/Auros/SiraUtil#readme) is een bibliotheek waarmee je dit systeem gemakkelijk kan gebruiken.
