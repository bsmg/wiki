---
sidebar: automatisch
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
2. There is an open handle on the file, and the operating system is Windows XP or earlier. This open handle can result from enumerating directories and files.

## NotSupportedException.
Pad heeft een ongeldig formaat.

## PathTooLongException.
Het opgegeven pad, bestandsnaam of beide overschrijden de door het systeem gedefinieerde maximale lengte.

## UnauthorizedAccessException.
1. The caller does not have the required permission.  
   This could mean that a program is also blocking the user from accessing the file, such as `Anti Viruses,and programs that would block suspicous programs/processes/activity` Other causes would be not having rights aka **lacking admin rights and the likes.** i.e your user or pc has insufficient rights to access/write files and data in anyway.
2. Het bestand is een uitvoerbaar bestand dat in gebruik is.
3. Path is a directory.
4. Opgegeven pad is een "alleen-lezen" bestand.

