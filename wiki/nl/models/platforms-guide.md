---
sidebar: auto
prev: ./avatars-guide.md
next: ./notes-guide.md
description: Emma's gids voor het maken van custom platformen!
---

# De Custom Platforms gids
_Emma's gids voor het maken van custom platformen_

## Project
Open het huidige [Custom Platforms Project](https://github.com/affederaffe/CustomPlatformsUnityProject/releases/) met [Unity 2018.1.6f1](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe).

## Eerste stappen
![Custom Platform Script](~@images/models/platforms/CustomPlatformScript.png)

Maak een `Empty GameObject` door met re rechtermuisknop op het Hierarchy venster te klikken en `Create Empty` te selecteren. Zorg ervoor dat de positie in de Inspector wordt ingesteld op de oorsprong (0,0,0). Zoek in de inspecteur naar het `Custom Platform` script en pas het toe op dit Gameobject. Alles binnen dit object zal worden geëxporteerd wanneer de knop op het `Custom Platform` script wordt ingedrukt. In het script zijn er ook opties voor het exporteren. Hiermee schakel je delen van het originele platform uit (Voor wanneer je iets gedeeltelijk wilt vervangen).

## Modellen toevoegen
![Objects](~@images/models/platforms/Objects.png)

Sleep alle modellen die je wilt in je Platform naar het GameObject dat in de tweede stap wordt gemaakt en plaats ze waar je wilt. Voor de materialen van de modellen zorg je ervoor dat je Beat Saber compatibele shaders gebruikt of degene die je kunt vinden in het Project, genaamd `_dark_replace` en `_glow_replace`. Dit zijn custom materialen die werken zoals de Beat Saber materialen, of te wel, react to the tube lights and mist.

### Track Rings
Het `Track Rings` script maakt track ringen zoals ze eruit zien in het spel. Om dit te bereiken moet het script een prefab nemen. Op dit moment heb ik niet kunnen uitvinden hoe ik een prefab moet gebruiken, dus heb ik een gameobject gebruikt, dat is onderdeel van de platformhiërarchie, die ik later heb verplaatst naar `y = -1000`. Om het voorbeeld goed te tonen, verplaats je dit gameObject naar (0,0,00) en pas je je instellingen aan en voordat je het importeert naar een locatie buiten het scherm.

Het inschakelen van het rotation effect, zorgt ervoor dat de ringen draaien door het opgegeven evenement, afhankelijk van de variabelen die gegeven zijn. (Ik heb hier nog niet mee gespeeld dus je zal moeten experimenten).

Het inschakelen van het step effect verandert de afstand tussen de ringen wanneer het opgegeven evenement tussen 2 variabelen wisselt.

![Track Rings Script](~@images/models/platforms/TrackRingsScript.png)

### Tube Light
![Tube Light](~@images/models/platforms/TubeLightScript.png)

Dit script maakt knipperende verlichting mogelijk. Als je dit op een leeg gameObject plaatst verandert de achtergrond en voegt het een beetje kleur toe aan die ruimte volgens de IDs van de verlichting. Als er ook een mesh renderer op staat, zal het de kleur van de mesh aanpassen volgens de IDs van de verlichting. Als je dit gebruikt is er een color adding nodig, dus ik verander de grootte van het script naar 0.

### Song Events
![Song Event Handler](~@images/models/platforms/SongEventHandler.png)

De event manager is het meest nuttige script. Hiermee kun je een actie activeren op elk beat saber event (zelfs op ongebruikte). Voor het toevoegen van een event druk je op de `+` knop onder `On Trigger ()`. Sleep het object dat je wilt manipuleren in het vak dat zojuist gemaakt is. Klik op het uitklapmenu aan de rechter kant en kies wat dat object moet doen, door eerst te selecteren welk onderdeel en dan welke actie. Zorg ervoor dat je slechts 1 event Handler per gameObject gebruikt, omdat er maar 1 werkt per gameObject.

### Spectogram
![Spectogram](~@images/models/platforms/Spectogram.png)

Het spectrogram script werkt zoals het track rings script en vereist ook een prefab of gameObject. Dit zal groter en kleiner worden volgens het geluid van het spel en de aangeboden variabelen. (Heb hier ook nog niet mee gespeeld).

## Exporteren

![Opslaan](~@images/models/platforms/Save.png)

Exporteer het platform doormiddel van het script dat je eerder aan het gameObject hebt toegevoegd op de locatie van jouw keuze. Bij voorkeur de map van het spel `Beat Saber/CustomPlatforms`. ::: tip TIP **Wanneer je nieuwe platforms werken**, [kan je ze naar ModelSaber uploaden](https://modelsaber.com) als je ze wil delen met de hele wereld. :::

![Kat](~@images/models/platforms/Cat.png)
