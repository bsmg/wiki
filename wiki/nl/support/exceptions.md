---
sidebar: auto
---

# Foutmeldingen
Een snelle uitleg over foutmeldingen die gewoonlijk optreden terwijl het spel wordt gemod.  
Als het een genummerde foutmelding is, betekent dat dat het een van de volgende exceptions kan zijn.

## ArgumentException.
Pad is een nul-lengtestring, bevat alleen een spatie of bevat een of meer ongeldige tekens zoals gedefinieerd door `InvalidPathChars`.

## ArgumentNullException.
Pad is leeg (of niet ingevuld).

## DirectoryNotFoundException.
Het opgegeven pad is ongeldig.
> Voorbeeld: Het verwijst naar een lege/onbestaande schijf.

## IOException.

1. Het opgegeven bestand is in gebruik.
2. Er is een open handle op het bestand, en het besturingssysteem is Windows XP of eerder. Deze open handle kan het resultaat zijn van het opsommen van levels en bestanden.

## NotSupportedException.
Pad heeft een ongeldig formaat.

## PathTooLongException.
Het opgegeven pad, bestandsnaam of de combinatie van overschrijden de door het systeem gedefinieerde maximale lengte.

## UnauthorizedAccessException.

1. De uitvoerder heeft niet de vereiste toestemming.  
   Dit kan betekenen dat een programma de gebruiker blokkeert om toegang te krijgen tot het bestand, zoals `Anti-virussen, en programma's die verdachte programma's/processes/activiteit
blokkeren`, een andere mogelijkheid is het niet hebben van rechten zoals **beheerdersrechten en dergelijke.** d.w.z. je gebruiker of pc heeft onvoldoende rechten om bestanden/gegevens te wijzigen.
2. Het bestand is een uitvoerbaar bestand dat in gebruik is.
3. Pad is een map.
4. Opgegeven pad is een "alleen-lezen" bestand.
