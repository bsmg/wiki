---
prev: false
next: false
description: Neem een diepe duik in het formaat van een Beat Saber level.
---

<!-- markdownlint-disable MD036 -->

# Level formaat

Er zijn enkele gevallen waar de beschikbare programma's en level editors niet elke functionaliteit bieden die je wilt. Je voelt je misschien ook geïnspireerd om een programma of level editor te maken gewoon voor de lol.

Klein probleempje dus. What _exactly_ goes into a map file? Dit is belangrijk om te begrijpen bij het ontwikkelen van nieuwe programma's, scripts en editors.

Deze pagina helpt je om de interne werking van een volledig Beat Saber level te begrijpen en informatie te verkrijgen over wat elk eigenschap en waarde betekend.

## Schemas

A _schema_ is essentially the set of rules to a specific kind of file. They have a list of rules that you _may_ break, and rules that you _cannot_ break.

Beat Saber bevat zijn eigen schema; het definieert wat het formaat van een Beat Saber level moet zijn en dat is wat we hier gaan uitleggen.

### BeatSaver schema

However, members of the community have gone together and made their own schema, which re-enforces rules set by Beat Saber's own schema, but also standardizes and sets _new_ rules to follow.

This community-made schema is used by BeatSaver, which [you can find here](https://github.com/luludotdev/beatmap-schemas). Bij het uploaden van je level naar BeatSaver, controleert het met deze schemabestanden om te bepalen of het geschikt is om te uploaden. Een belangrijke verandering in dit schema is de opname van `_customData` objecten verspreid over level bestanden, die hier worden uitgelegd.

Je kunt door het BeatSaver Schema lezen om een beter inzicht te krijgen in wat er in een Beat Saber level hoort, en zorg ervoor dat je eigen programma de juiste levels uitvoert die kunnen worden geüpload naar BeatSaver.

## [Info.dat](./infodat-format.md)

`Info.dat` is het belangrijkste bestand voor een Beat Saber level. Het beschrijft de basis metadata van jouw level, het verwijst ook naar de bestanden die gebruikt worden voor de niveaus, omslagfoto en audio.

## [Difficulty File (v3)](./difficulty-format-v3.md)

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events, and other objects for that particular difficulty.

This version was introduced in Beat Saber version 1.20.0.

## [Difficulty File (v2)](./difficulty-format-v2.md)

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events, and other objects for that particular difficulty.

## Credits

The content on this page was authored by [Caeden117](./mapping-credits.md#caeden117) and [Bullet](./mapping-credits.md#bullet) with help from [Kival Evan](./mapping-credits.md#kival-evan), GalaxyMaster and [McEndu](./mapping-credits.md#mcendu).
