# Często Zadawane Pytania
## Właśnie dostałem grę, jak zacząć?
Zobacz nasz [poradnik dla początkujących](/beginners-guide.md)!

## Jak uzyskać więcej piosenek?
> [BeatSaver](https://beatsaver.com) jest głównym repozytorium customowych piosenek stworzonych przez społeczność. Wiele innych narzędzi i stron oferuje ulepszone doświadczenie w pobieraniu customowych utworów, ale hostowane one są w tym miejscu.

Jeśli pobierasz mapy ręcznie z BeatSaver, rozpakuj je do folderu i umieść pliki w folderze `Beat Saber_Data/CustomLevels`. To jest katalog, z którego gra natywnie odczytuje customowe mapy.

### BeastSaber
[Beast Saber](https://www.bsaber.com) jest stroną z recenzjami, która pełni rolę kuratora wszystkich piosenek na BeatSaver. Możesz również pobierać playlisty, obserwować mapperów, szukać piosenek używając zaawansowanych metod sortowania i więcej.

### Narzędzia do zarządzania utworami
Poniżej znajdują się programy do użycia na komputerze, aby pomóc Ci m.in. w pobraniu customowych map.
* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) do pobierania map stworzony przez Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) do zarządzania playlistą i beatmapami stworzony przez Alaanor.

## Jak zainstalować playlisty?
**Dla użytkowników PC:**  
Musisz zainstalować moda `PlaylistLoaderLite`. Wtedy będziesz mógł
* Korzystać z narzędzia `Install Playlist` w zakładce Opcje w Mod Assistant.
* Umieścić plik playlisty w `Beat Saber/Playlists`, wybrać ją w BeatList i kliknąć "download all".

Powinieneś teraz widzieć playlistę w grze obok albumu z customowymi mapami. Jeśli brakuje którychś poziomów z playlisty, musisz pobrać je ręcznie za pomocą BeatList lub bezpośrednio z Beatsaver lub Bsaber.

**Dla użytkowników Questa:**  
Możesz korzystać z [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) do zarządzania playlistami na swoich goglach. Zauważ, że customowy poziom może pojawić się dopiero, kiedy będziesz w grze, ze względu na ograniczenie BMBF.

:::warning OSTRZEŻENIE dla użytkowników Questa Odświeżenie folderu Custom Songs resetuje organizację wszystkich playlist. :::

## Jak mogę stworzyć własne poziomy?
Zobacz [mapowanie](/mapping/)!

## Jak załadować wtyczki, których nie ma w Mod Assistant?
Zobacz [tę sekcję](/pc-modding.md#manual-installation) w poradniku dla początkujących.

## Czy tryb wielosobowy obsługuje grę międzyplatformową?
Oficjalnie tryb wieloosobowy ogranicza możliwość do grania jedynie z osobami, które kupiły grę w tym samym sklepie (Oculus/Steam), co Ty. Ponadto, modowanie gry na platformie Quest wyłącza oficjalny tryb wieloosobowy.

Mod BeatTogether jest obecnym rozwiązaniem na rozgrywkę międzyplatformową pomiędzy zmodowanymi wersjami gry. Dołącz do ich [serwera Discord](https://discord.com/invite/gezGrFG4tz) i sprawdź kanał `#install-instructions`, aby uzyskać więcej informacji.

## Po aktualizacji gry żaden z moich modów nie działa!
Po każdej aktualizacji gry możliwe jest *(i bardzo prawdopodobne)*, że zainstalowane wcześniej mody przestaną działać i również będą musiały zostać zaktualizowane. Deweloperzy gry zdali sobie z tego sprawę, więc gdy gra się zaktualizuje i uruchomisz ją po raz pierwszy, wszystko w folderze `Plugins` jest przenoszone do nowego folderu o nazwie `Old 1.xx.x Plugins`. **Pozostaw wtyczki w tym folderze!**

Aby mody zaczęły ponownie działać **uruchom ponownie instalator.**  
Repozytorium BeatMods zawiera tylko te mody, które na pewno działają z najnowszą wersją gry!

Jeśli czegoś jeszcze nie rozumiesz, zobacz [Poradnik dla początkujących](/beginners-guide.md).

## Jak działa system punktacji w Beat Saber? Jak działa globalny ranking?
Na stronie [Chwyty i sztuczki](/grips-and-tricks.md) dostępne są sekcje poświęcone systemom punktacji i rankingu, sprawdź je!

## Moje menu są puste i nie mogę w nic kliknąć!
Jeśli główne okno w grze jest puste, plik zapisu prawdopodobnie się uszkodził.

Aby to naprawić, przejdź do: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Usuń lub zmień nazwę folderu Beat Saber na coś innego. Po ponownym wejściu do gry, odtworzy ona plik zapisu i powinienna prawidłowo załadować menu główne.
