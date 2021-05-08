# Het maken van mods

## Mods injecteren
Beat Saber _**heeft geen**_ mod ondersteuning ingebouwd.

In plaats daarvan hangen de meeste mods in het mod installatieprogramma af van [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) om de mods te injecteren in het spel, zowel als het bieden van handige tools voor ons modders.

Voor diegenen onder jullie die de voorkeur geven aan [BepInEx](https://github.com/BepInEx/BepInEx) boven een van deze opties, Bepis heeft een lader gemaakt voor BSIPA plugins, die [hier](https://github.com/BepInEx/BepInEx.BSIPA.Loader) beschikbaar is. Wat het ontwikkelen van Beat Saber plugins met de BepInEx plugin API betreft, een basis handleiding bestaat op hun [documentatie-site](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), maar anders dan dat moet je het in je eentje doen.

## Het klaar zetten van je project
Als je geïnteresseerd bent in het maken van een Beat Saber mod, maar geen template of Visual Studio template hebt ingesteld, [volg dan de Intro gids om je project helemaal klaar te zetten](./intro.md).

### Klaar om te gaan?
Bekijk de [links hieronder](#other-links) voor documentatie dat te maken heeft met Unity en andere gerelateerde tools. Als je vragen hebt, is de beste plek om het te vragen in het `#pc-mod-dev` kanaal in de [BSMG Discord](https://discord.gg/beatsabermods)

## Start argumenten
Handige start argumenten die het modden en debuggen makkelijker maken.

<!-- markdownlint-disable MD013 -->
| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Omschrijving                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                                  | Schakelt het output log-venster voor IPA in. Dit toont het debug console wat gebruikt word door mods.                                                                                                                                     |
| `fpfc`                                                                                       | "First Person Flying Controller" <br /><br /> Dit zorgt ervoor dat je met je muis en de WASD toetsen in het spel en de menu's kan navigeren. Dit maakt het testen veel makkelijker, omdat je je bril niet hoeft op te zetten! |
| `-vrmode oculus`                                                                             | Als je Beat Saber in Steam hebt gekocht, zorgt dit ervoor dat je het ook kan spelen met een Oculus bril.                                                                                                                                  |
<!-- markdownlint-enable MD013 -->

## Andere links

* [BeatMods](https://beatmods.com)
* [BeatMods goedkeuringsrichtlijnen](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [Beat Saber IPA](https://bsmg.github.io/BeatSaber-IPA-Reloaded/)
