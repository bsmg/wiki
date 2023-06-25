---
prev: false
next: false
---

# Ausnahmen

Kurze Erklärung zu Ausnahmefehlern, die üblicherweise beim Modden des Spiels auftreten.  
Nummerierte Erklärungen bedeuten, dass es sich um eines der aufgeführten Probleme handeln könnte.

## ArgumentException

Der Pfad ist eine Zeichenkette mit der Länge Null, enthält nur Leerzeichen oder enthält ein oder mehrere ungültige Zeichen, wie durch `InvalidPathChars` definiert.

## ArgumentNullException

Pfad ist null.

## DirectoryNotFoundException

Der angegebene Pfad ist ungültig.

> Beispiel: Es befindet sich auf einem nicht zugeordneten Laufwerk.

## IOException

1. Die angegebene Datei ist in Gebrauch.
2. Es gibt ein "open handle" auf die Datei, und das Betriebssystem ist Windows XP oder früher. Dieser "open handle" kann durch Aufzählung von Verzeichnissen und Dateien entstehen.

## NotSupportedException

Pfad ist in einem ungültigen Format.

## PathTooLongException

Der angegebene Pfad, Dateiname oder beides überschreitet die vom System definierte Maximallänge.

## UnauthorizedAccessException

1. Der Aufrufer hat nicht die erforderliche Berechtigung.  
   Dies könnte bedeuten, dass ein Programm auch den Zugriff des Benutzers auf die Datei blockiert, wie z.B. `Anti-Viren und Programme, die verdächtige Programme/Prozesse/Aktivitäten blockieren` Andere Ursachen wären fehlende Rechte aka **fehlende Admin-Rechte und dergleichen.** d.h. Ihr Benutzer oder Pc hat nicht genügend Rechte, um auf Dateien und Daten zuzugreifen/schreiben.
2. Die Datei ist eine ausführbare Datei, die verwendet wird.
3. Pfad ist ein Verzeichnis.
4. Der Pfad hat eine schreibgeschützte Datei angegeben.
