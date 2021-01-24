---
sidebar: auto
---

# Eccezioni
Spiegazione rapida sugli errori di eccezione che solitamente si verificano durante il modding del gioco.  
Spiegazioni numerate indicano che potrebbe trattarsi di uno dei problemi elencati.

## ArgumentException
Path is a zero-length string, contains only white space, or contains one or more invalid characters as defined by `InvalidPathChars`.

## ArgumentNullException
Path is null.

## DirectoryNotFoundException
The specified path is invalid.
> Example: It is on an unmapped drive.

## IOException
1. Il file specificato è in uso.
2. There is an open handle on the file, and the operating system is Windows XP or earlier. This open handle can result from enumerating directories and files.

## NotSupportedException
Il percorso è in un formato non valido.

## PathTooLongException
Il percorso specificato, il nome del file o entrambi hanno superato la lunghezza massima definita dal sistema.

## UnauthorizedAccessException
1. The caller does not have the required permission.  
   This could mean that a program is also blocking the user from accessing the file, such as `Anti Viruses,and programs that would block suspicous programs/processes/activity` Other causes would be not having rights aka **lacking admin rights and the likes.** i.e your user or pc has insufficient rights to access/write files and data in anyway.
2. Il file è un file eseguibile in uso.
3. Il percorso è una directory.
4. Il percorso ha specificato un file di sola lettura.

