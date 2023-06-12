---
prev: false
next: false
---

# Erreurs

Explications rapides des erreurs qui surviennent généralement quand on modde notre jeu. Les explications portant des numéros signifient que l'une d'elles peut être la cause.

## ArgumentException

Le chemin est une chaîne de caractère vide (taille 0), ne contient que des espaces ou contient un ou des caractères invalides définis par `InvalidPathChars`.

## ArgumentNullException

Le chemin est `null`.

## DirectoryNotFoundException

Le chemin indique est invalide.

> Exemple : ce n'est pas un disque existant.

## IOException

1. Le fichier spécifié est utilisé.
2. Il y a un _handle_ ouvert sur le fichier, et le système d'exploitation est Windows XP ou antérieur. Ce _handl_ ouvert peut résulter en l'énumération des répertoires et fichiers.

## NotSupportedException

Le chemin a un format invalide.

## PathTooLongException

Le chemin spécifié, le nom du fichier ou les deux cumulés excèdent la taille maximum définie par le système.

## UnauthorizedAccessException

1. L'appelant n'a pas l'autorisation nécessaire. Cela peut signifier qu'un programme bloque aussi l'utilisateur d'accéder au fichier, tel qu'un antivirus ou des programmes qui peuvent bloquer d'autres programmes et processus suspects. D'autres causes peuvent être de ne pas avoir les bons droits, soit **pas des droits d'admin et similaire**. Cela signifie que l'utilisateur ou le PC a des permissions insuffisantes pour accéder ou écrire les fichiers et données.
2. Le fichier est un exécutable en cours d'utilisation.
3. Le chemin est un répertoire.
4. Le chemin spécifié est un fichier en lecture seule.
