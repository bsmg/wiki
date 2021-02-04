---
sidebar: auto
---

# PC moddimine
# Eessõna

::: danger HOIATUS Otsustades mode kasutada, mõistate et:
- Võite kogeda tõrkeid, mis modifitseerimata mängus ei ilmne. 99.9% programmivigadest, -sulgumistest ja läägist on põhjustatud modide poolt.
- Modid on altid mänguvärskenduste tõttu katki minema ja see on normaalne - olge kannatlikud ja lugupidavad, kui see juhtub, sest moddijad on vabatahtlikud inimesed omaenda eludega.
- Beat Games ei proovi tahtlikult mode lõhkuda. Nad tahavad töötada oma koodibaasi kallal ja mõnikord see takistab modide tööd, kuid nende eesmärk pole mode lõhkuda.

Ärge rünnake mängu arendajaid modidega seotud probleemide pärast ja vastupidi - moddijad ja mängu arendajad on kaks eraldi gruppi. Lihtsalt ärge olge jobud, okei? :::

Beat Saber toetab lisalaule iseenesest, nii et kui see on kõik, mida sa soovid saavutada, pole sul rohkem mode vaja! Siiski on mõistlik installida `SongCore` mod, kuna see mod laiendab baasmängu funktsionaalsust, kiirendades laadimisaegu ja võimaldades toimimist teistele modidele nagu mängusisene laulude allalaadija, edetabelid lisalaulude jaoks, playlistid jne.

::: warning Need juhised on PC moddimise jaoks Windows operatsioonisüsteemil.  
Kui kasutate Questi, võite vajada hoopis [Questi moddimise lehte](/et/quest-modding.md).  
Kui kasutate Linuxit, minge [Linuxi lehele](/et/modding/linux.md) või [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) lehele. :::

Kui satute probleemide otsa, palun suunduge [tugilehele](./support) ja proovige ise viga tuvastada enne Discord serveris abi küsimist. Tõenäoliselt on sellel lehel vastus te küsimusele!

:::warning Ma vaatasin mingit Elite Eric'u videot, aga jäin jänni/see ei töötanud. Mis värk on? Meie BSMGs soovitame **tungivalt** vältida Elite Eric'u juhiste kasutamist. Olles üle vaadanud palju tema loomingust, järeldasime, et selles sisaldub hulk puudulikku, ekslikku või lausa otseselt valet informatsiooni. Katsed temaga ühendust võtta, et parandada neid vigu, on kahjuks saanud vastuseks vaid vaikust ja uusi (samuti vigaseid) juhisvideoid.

Selle asemel peaksite järgima käesolevas vikis kirjalikke juhendeid või otsima abi [BSMG Discordis](https://discord.gg/beatsabermods). :::

## Installerid
### Mod Assistant
> **SEE ON PRAEGUNE SOOVITATAV MOD INSTALLER.**

__**Käivitage mäng vähemalt üks kord**** enne, kui proovite mängu moddida! See kehtib ka pärast mängu taasinstallimist.

Lihtne Beat Saber'i modide installer; sarnane mod managerile, kuid lisafunktsioonidega, nagu näiteks modide eemaldamine ja versioonide võrdlemine! Laadige see alla [Assistant'i GitHubist](https://github.com/Assistant/ModAssistant/releases/latest).

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Kuidas saada rohkem laule
### Mängusisene allalaadija
Plugin `BeatSaver Downloader` võimaldab mängu sees laadida alla mappe, kasutades `MODS` menüüs nuppu kirjaga `MORE SONGS`. See võtab mappe otse [BeatSaverist](https://beatsaver.com).

### BeatSaver
[BeatSaver](https://beatsaver.com) on kogukonna poolt tehtud lisalaulude põhihoidla. Paljud muud vahendid ja veebisaidid täiustavad ja täiendavad lisalaulude allalaadimise protsessi, aga see sait on tõe allikas. Et installida saidilt allalaetud laule, unzippige need kausta ja asetage see kaust asukohta `Beat Saber/Beat Saber_Data/CustomLevels`.  Võite kasutada ka mängusisest allalaadimispluginat BeatList või Mod Assistant'i OneClick™ Install funktsiooni.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) on veebisait, mille eesmärk on hõlbustada fantastiliste mappide leidmise protsessi. See teeb seda, kategoriseerides beatsaveris olevaid tuhandeid laule, ning laseb kasutajail sorteerida laule žanri ja paljude muude omaduste ja märksõnade järgi. Sel on ka terve sotsiaalne funktsionaalsus, kus mängijad saavad jätta mappidele arvustusi ja kommentaare. Üks enimkasutatud võimalusi on "Curator Recommended" sektsioon - tiim kuraatoreid mängib läbi enamuse igapäevaselt üleslaetavatest lauludest ja soovitab neist silmajäävamaid, lastes teil [neid mängus automaatselt alla laadida](https://bsaber.com/beatsync/).

### Laulude haldamise tarkvara
* [BeatList](https://github.com/Alaanor/beatlist) on Alaanor'i tehtud programm playlistide ja beatmappide haldamiseks.

### Playlistid
Asetage playlisti fail kausta `Beat Saber/Playlists` ja seejärel kasutage [BeatList'i](https://github.com/Alaanor/beatlist) või [Mod Assistant'it](https://github.com/Assistant/ModAssistant) mappide allalaadimiseks. (Märkus: varem oli võimalik modidega laadida alla playlistide sisu mängus sees olles, kuid hetkel pole see võimalik.)

## Installkaust
_Kuhu on Beat Saber installitud?_

### Vaikimisi asukoht
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Muud asukohad
**Kui olete liigutanud oma installkausta muule kettale, võib see olla alljärgnevas asukohas.** Asendage kettatäht `F` selle ketta tähega, millele teil Beat Saber installitud on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Kuidas desinstallida mode
Eemaldage modi dll fail `Plugins` kaustast või klõpsake `Uninstall` nupul Mod Assistant'is.

## Käsitsi installimine
Mod installer on soovitatav meetod modide installimiseks. Vt [ülalasuv](#installers) lõik. Kui olete mängu patchinud ja soovite lihtsalt installida Pluginaid, mis pole installeris saadaval, siis minge otse edasi 4. sammule.

**Käivitage mäng vähemalt ühe korra** enne, kui proovite seda moddida! See kehtib ka pärast mängu taasinstallimist.
### Installige BSIPA
1. Laadige alla [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Minge oma [installkausta](#install-folder) ja extractige BSIPA sisu sinna. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Tehke IPA.exe peal topeltklõps, et mängu patchida. Nüüd laeb mäng käivitumisel kõik modid `Plugins` kaustas. Kui tekivad errorid, siis tõenäoliselt te ei järginud sammu 2 õigesti. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Installige modid
4. Laadige alla mod(id), mida soovite installida, olgu GitHubist, #pc-mods kanalist või muudest allikatest. **Kindlasti laadige alla ka kõik modi(de) poolt nõutavad modid/pluginad (dependencies).** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Mõndade modidega kaasnevad juhised installimiseks, mõndadega aga mitte. Enamasti saate lihtsalt zipfaili sisu asetada oma Beat Saberi installkausta ja failid peaksid ise sattuma õigetesse kaustadesse.


## Mis edasi?
* [Gripid ja trikid](./grips-and-tricks.md)
* [Beatmappide tegemine](/mapping/)
* [Kohandatud saberid](/models/custom-sabers.md)
* [Kohandatud avatarid](/models/custom-avatars.md)
* [Kohandatud platformid](/models/custom-platforms.md)
* [Mitmikmängu seadistamine](https://bs.assistant.moe/Multiplayer/)
* [Modide tegemine](/modding/)

## Tekkis küsimusi?
Külastage tugikanaleid [BSMG Discordis](https://discord.gg/beatsabermods)!
