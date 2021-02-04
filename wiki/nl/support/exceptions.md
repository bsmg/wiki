---
sidebar: auto
---

# Foutmeldingen
Snelle uitleg over exception foutmeldingen die gewoonlijk optreden terwijl het spel wordt gemod.  
Als het een genummerd exception is, betekent dat dat het een van de volgende exceptions kan zijn.

## ArgumentException.
Pad is een nul-lengtestring, bevat alleen een spatie of bevat een of meer ongeldige tekens zoals gedefinieerd door `InvalidPathChars`.

## ArgumentNullException.
Pad is leeg.

## DirectoryNotFoundException.
Het gegeven pad is ongeldig.
> Voorbeeld: Het staat op een lege schijf.

## IOException.
1. Het opgegeven bestand is in gebruik.
2. Er is een open handle op het bestand, en het besturingssysteem is Windows XP of eerder. Deze open handle kan het resultaat zijn van het opsommen van levels en bestanden.

## NotSupportedException.
Pad heeft een ongeldig formaat.

## PathTooLongException.
Het opgegeven pad, bestandsnaam of beide overschrijden de door het systeem gedefinieerde maximale lengte.

## UnauthorizedAccessException.
1. De beller heeft niet de vereiste toestemming.  
   Dit kan betekenen dat een programma de gebruiker blokkeert om toegang te krijgen tot het bestand, zoals `Anti Virussen, en programma's die verdachte programma's/processes/activiteit
blokkeren`, een andere mogelijkheid is het niet hebben van rechten zoals **beheerdersrechten en dergelijke.** d.w.z. je gebruiker of pc heeft onvoldoende rechten om bestanden/gegevens te wijzigen.
2. Het bestand is een uitvoerbaar bestand dat in gebruik is.
3. Pad is een directory.
4. Opgegeven pad is een "alleen-lezen" bestand.

