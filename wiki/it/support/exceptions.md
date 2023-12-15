---
sidebar: auto
---

# Eccezioni
Spiegazione rapida sugli errori di eccezione che solitamente si verificano durante il modding del gioco.  
Spiegazioni numerate indicano che potrebbe trattarsi di uno dei problemi elencati.

## ArgumentException
Il percorso è una stringa vuota, contiene solo spazi bianchi, o uno o più caratteri non validi come definito da `InvalidPathChars`.

## ArgumentNullException
Il percorso è nullo.

## DirectoryNotFoundException
Il percorso specificato non è valido.
> Esempio: È su un'unità non mappata.

## IOException

1. Il file specificato è in uso.
2. C'è un handle aperta sul file e il sistema operativo è Windows XP o precedente. Questa handle aperta può risultare dall'enumerazione di cartelle e file.

## NotSupportedException
Il percorso è in un formato non valido.

## PathTooLongException
Il percorso specificato, il nome del file o entrambi hanno superato la lunghezza massima definita dal sistema.

## UnauthorizedAccessException

1. Il chiamante non ha l'autorizzazione richiesta.  
   Questo potrebbe significare che un programma sta anche bloccando l'utente dall'accedere al file, come `Antivirus e programmi che bloccherebbero programmi/processi/attività sospetti` Altre cause sarebbero non avere diritti ovvero **mancare dei diritti amministratore e simili.** es. il tuo utente o pc ha diritti insufficienti di accesso/scrittura dei file e dati in alcun modo.
2. Il file è un file eseguibile in uso.
3. Il percorso è una directory.
4. Il percorso ha specificato un file di sola lettura.
