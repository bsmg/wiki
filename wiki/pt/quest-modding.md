---
sidebar: auto
---

# Quest Modding

## Prefácio

* Esse guia é para ambos Quest 1 e Quest 2.
* Ninguém ainda foi banido por modding.

::: danger AVISO Ao escolher usar mods, você entende que:

* Você deve experienciar problemas que não existem com o game vanilla. 99.9% dos bugs, crashes, e lag são pelos mods.
* Os mods estão sujeitos a falhas por causa de atualizações e isso é normal - sê paciente e respeitoso quando isso acontecer, porque os modders são voluntários com vidas reais.
* Os Beat games não estão propositadamente a tentar acabar com os mods. Eles querem trabalhar no código fonte e às vezes isso quebra os mods, mas não estão tentando matar os mods.

Não ataque os devs por problemas relacionados a mods, e vice versa - modders e devs são dois grupos separados. Só não seja um idiota ok. :::

## Instalação
Atualmente a única maneira recomendada de instalar músicas customs e mods é pelo BMBF sideloaded com o SideQuest em seu PC.

Se você não tem acesso a um PC você pode usar um [Celular Android](#installing-bmbf-with-an-android-phone).

* [BMBF apk](https://bmbf.dev/stable) :::warning Instalar o BMBF e instalar mods ao seu jogo desativará o Multiplayer oficial, assim como ver e enviar scores para os placares base do jogo. If you would like to play modded multiplayer, you need the mod, `Beat Together`, which allows for cross-play between pc and quest and allows for custom songs to be used if all parties own said song. O mod pode ser encontrado no Beat Saber Modding Group em `#quest-mods` ou no site [Questboard](https://questmodding.com).

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the [ScoreSaber](https://new.scoresaber.com/quest) mod. [This link](https://new.scoresaber.com/quest) take you to the ScoreSaber page to set it up. Scoresaber does not replace the base game leaderboards, it only adds leaderboards for custom songs. **Note:** Scoresaber has NOT yet been updated for Beat saber 1.13.2. :::

### Instalando o BMBF com o SideQuest
Se você ainda não fez, baixe e configure o [SideQuest](https://sidequestvr.com/#/setup-howto)

Abra o SideQuest e conecte seu Quest em seu PC.

:::tip Se você modificou anteriormente o Beat Saber ou tem pontuações que você quer fazer o backup, [faça backup dos seus dados salvos primeiro!](#backup-save-data-using-sidequest) :::

Se você tem um jogo com mods, você também precisa desinstalá-lo pressionando o botão `UNNINSTALL APP`. Você pode restaurar seu save do mesmo menu, depois de instalar os mods.

Selecione o `APK da pasta` botão mostrado abaixo e encontre o último aplicativo BMBF que você baixou e clique nele, ou simplesmente arraste o apk BMBF para o SideQuest. Qualquer outro método irá instalar o BMBF em seu Quest.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Uma vez que são instalados com sucesso, tenha certeza de ter a versão mais recente do Beat Saber instalado e sem mods.

:::warning Before modding, run Beat Saber once, play a level and immediately fail! :::

After running Beat Saber once, open BMBF from unknown sources as the picture below shows. ![UnknownSourced](~@images/beginners-guide/quest_home-menu.jpg)

Siga cada passo exatamente como te disseram. Então, você deve ver [bsaber.com](https://www.bsaber.com). Aqui é onde você pode baixar qualquer custom song disponivel. You can also click on the globe icon in the top right and go to beatsaver to download songs too.

Se em algum momento durante o processo de instalação, você ver um pop-up com `Restore App` escrito, apenas clique em `Close`. Este aviso é mais direcionado para versões pirateadas do jogo, então se você está apenas instalando mods, provavelmente não terá consequências ao ignorá-lo.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

Continue no passo [Core Mods](#core-mods) do processo de instalação.

### Instalando BMBF com um celular Android
Esta **NÃO** é a forma recomendada de instalar o BMBF e só deve ser usada se você não tiver acesso a um PC.

* [Requisitos](#requirements)
* [Configurando o seu Celular](#setup-your-phone)
* [Instalando BMBF com seu celular Android](#installing-bmbf-with-your-phone)
* [Configurando o Beat Saber](#setup-beat-saber)

#### Requisitos

* An Android Phone or Android Tablet (IPhones or IPads are not supported)
* A **paid** Version of Beat Saber on the Oculus Quest Store
* A Cable to connect your Quest to your Phone (If your phone charges over USB C the charger that was included with your Quest should work)

#### Setup your Phone

1. Download the [bugjaeger app from the Google Play store](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug&hl=gsw&gl=US)
2. Download the newest [BMBF APK from bmbf.dev/stable](https://bmbf.dev/stable)
3. Follow [this written guide](https://github.com/ComputerElite/wiki/wiki/Enable-Developer-Mode-for-OQ) to Enable Developer Mode on your Quest.
4. Enable Developer mode on your Phone
    1. Go into your Android settings
    2. Scroll to "About phone" and open it
    3. Tap "Software information"
    4. Tap the "Build number" field until it says Developer mode enabled. This should take about 7 taps.
5. Enable USB debugging on your Phone
    1. Go back to settings
    2. Tap "Developer options"
    3. Activate USB debugging

#### Installing BMBF with your Phone
:::warning Before modding, run Beat Saber once, play a level and immediately fail! :::

Open bugjaeger on your Phone and connect your Quest. You should get a USB debugging pop-up in your Quest and on your phone. Select allow on both devices and if you prefer, select always allow. Once bugjaeger picks your Quest up, install the BMBF APK by doing following:

![installAPKusingPhone.png](~@images/beginners-guide/InstallAPK.png)

After you pressed ok, allow file access and select the download APK file which should be labeled `com.weloveoculus.BMBF.apk`. Agora o apk deve instalar em seu Quest.

#### Setup Beat Saber
After successfully installing BMBF onto your Quest you should be able to find it in your Quests library under unknown sources.

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

Open it and allow file access after starting it if prompted. Now follow the on-screen instructions carefully. After you finished you should see [BeastSaber](https://bsaber.com).

If at any point during the install process, you get the Restore App popup just click Close. This warning is directed to pirated versions of the game so there will likely be no consequences for ignoring it if you have a legitimate copy.

Now you can continue to the [Core Mods](#core-mods) step of the installation process.

## Gerenciar Dados Salvos

### Fazer backup de seus dados salvos usando o SideQuest

Abra o SideQuest e conecte seu Quest em seu PC. Vá para `My Apps` localizado na barra superior da janela e encontre o Beat Saber.

Navegue até `sdcard/Android/data/com.beatgames.beatsaber/arquivos` usando o explorador de arquivo do SideQuest.

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they contain your scores and other settings!

### Restaurando seus dados salvos usando o SideQuest

To restore your data, open SideQuest and connect your Quest to your PC. Go to `My Apps` located in the top bar of the window and find Beat Saber. Using the SideQuest file explorer take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest) steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the `sdcard/Android/data/com.beatgames.beatsaber/files` folder.

Go back to the menu and press the circular arrows located beside your latest backup. Your scores and settings should now be restored.

## Instalando mods

### Core Mods
Antes de instalar qualquer modificação adicional no canto superior direito da interface web do BMBF, você deve ver um botão vermelho que diz: `Sync to Beat Saber`. Clique aqui e deixe terminar a sincronização. Então vá para a guia de `mods` no BMBF. Certifique-se de que você tem os 5 core mods:

* Codegen
* Goodbye bug
* PinkCore
* QuestUI
* Custom Types

:::danger All other mods will not work if these core mods are not listed and enabled.

If one of the core mods does not enable, delete that mod and click `Sync to Beat Saber` again to redownload it. Double check to see if it has been downloaded and enabled. If it still doesn't work, or mods are appear to be enabled, but not working in-game see [Core Mods don't work](#core-mods-don-t-work) for troubleshooting steps. :::

### Dentro de seu Quest
:::warning Nem todos os mods estão disponíveis no QuestBoard!  
Se um mod não estiver aqui, você deve seguir o método [Usando Seu PC](#using-your-pc) no lugar. :::

Abra o BMBF em seu Quest e vá para a aba `Tools`, lá você deve ver um endereço web e um número de versão semelhante ao que é mostrado abaixo. Clique nele e clique no botão `QuestBoard`.

![globequestboard](~@images/beginners-guide/globequestboard.png)

Você deve ser cumprimentado com o site [QuestBoard](https://www.questmodding.com/) abaixo. Em seguida, selecione a aba `DOWNLOAD MODS`.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Role para baixo com seus thumbsticks. Agora você pode selecionar qualquer mod da lista, visto abaixo e baixá-lo pressionando o botão de download ao lado dele. Alguns downloads podem redirecionar você para um site ou página do GitHub. Se for o caso, siga as instruções na tela, ou selecione a versão do `.zip` mais nova na lista de Releases, respectivamente.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### Usando seu PC
Você pode encontrar e baixar outros mods de Quest no [Discord do BSMG](https://discord.com/invite/beatsabermods) no canal de `#quest-mods`.

:::warning Certifique-se de que seu Quest e PC estão na mesma rede e que você está usando http e não https! :::

Abra o BMBF em seu Quest e vá para a aba `Tools`, lá você deve ver um endereço web e um número de versão semelhante ao que é mostrado abaixo.

![ip](~@images/beginners-guide/ip.png)

Em seu PC, abra seu navegador e digite o endereço em sua barra de pesquisa.

Você deve ser cumprimentado com essa tela abaixo.

Se isso não funcionar [clique aqui](#bmbf-web-interface-not-loading) para alguns passos de solução de problemas.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Agora arraste todos os mods compatíveis com o Quest para a caixa de envio e sincronize. Se o mod foi feito originalmente para uma versão mais antiga, então ele não vai ser automaticamente ativado. Para habilitar um mod antigo, vá para a aba `Mods` e habilite-o a partir daí.

## Instalando músicas
::: tip A maioria dos mapas "Top Todos", "Rating", "Downloads" ou "Plays" foram criados antes das boas práticas de mapeamento serem estabelecidas. Experimente baixar músicas liberadas no final de 2019 e agora obtenha a melhor experiência de custom levels. :::

### Inside your Quest
Existem 2 fontes para obter mapas custom dentro de seu Quest usando a janela do navegador.

* Se você estiver procurando por mapas curated e playlists visite o [BeastSaber](https://bsaber.com/)
* Se você não gosta da UI do BeastSaber, você também pode tentar o [BeatSaver](https://beatsaver.com/)

Ambos têm um botão 1click que facilmente instala músicas em seu Quest. Você pode alternar entre estes sites usando o ícone global no canto superior direito da janela do navegador.

An easy way to download different kinds of songs is to use `Syncsaber` you can access it by going into BMBF on your quest and clicking the tab called `Syncsaber`. Here you can download songs with a click of a button, you can chose from different "settings". For example you can download the top 20 songs in [Beatsaver's](https://beatsaver.com/) "hot" section or the 50 hardest ranked songs.

Another method is using the `Bookmark` feature on [Beastsaber](https://bsaber.com/). After creating an account you can click a little bookmark icon on a song and if you later delete all your songs from the Quest you can redownload the ones that are bookmarked with OneClick™.

### Usando seu PC
Se você não conseguir instalar músicas dentro de seu Quest, você pode instalar mapas usando seu computador similarmente a instalar mods.

1. Visite o [BeastSaber](https://bsaber.com/) ou o [BeatSaver](https://beatsaver.com/) no seu computador
2. Baixe o zip
3. Siga os pasos do [Instalando mods](#using-your-pc) em cima da tela de envio de arquivos.
4. Arraste e solte o arquivo zip do mapa aqui e ele deve ser instalado!

Se a interface web não funcionar [clique aqui](#bmbf-web-interface-not-loading) para alguns passos de solução de problemas.

:::tip Você também pode baixar as playlists da mesma maneira. You can find various playlists on [Beastsaber](https://bsaber.com/category/playlists/) or various community discords. You can also make your own using [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager) or [Playlist Editor Pro](https://beatsaberquest.com/playlisteditor-pro/).

Se você deseja testar um mapa que criou veja na seção [Testando no Quest](/mapping/#testing-on-a-quest) na Wiki de Mapping para etapas para preparar-lo para ser testado! :::

## Instalando modelos
Junte-se à [Comunidade do Qosmetics](https://discord.gg/qosmetics) para mudar seu titulo do menu, sabres, blocos ou como suas paredes são no jogo!

## Links Úteis

* [Qosmetics Community](https://discord.gg/qosmetics) - Servidor dedicado à criação e uso de sabres, blocos e paredes para o Quest.
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guias para criar seus próprios custom sabers, blocos, e paredes para Quest.
* [Questboard website](https://questmodding.com) - A place to get Beat Saber related news and info along with the latest mods releases!
* [Quesboard discord server](https://discord.gg/P7sUKVnP) - A quest community to hangout and talk about Beat Saber related stuff, you can also get a role to get notified when a new mod gets released!
* [Corrigindo o Áudio Fora de Sincronia](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - Placares in-game para músicas custom

## Solução de problemas
:::warning Eu assisti este vídeo pelo Elite Eric, mas fiquei preso e não funcionou. Por que isso? Nós do BSMG **fortemente** sugerimos não usar qualquer tutorial do Elite Eric. Após revisar grande parte do conteúdo dele, ele contêm uma grande quantidade de informações incompletas, erróneas, ou diretamente informações incorretas. Tentativas de chegar nele para corrigir esses erros, infelizmente foram recebidos com silêncio e novos tutoriais (também incorretos).

Em vez disso, você deve seguir os guias escritos aqui na wiki ou procurar ajuda no [Discord do BSMG](https://discord.gg/beatsabermods). :::

### Adicionar mods do beatmods.com ou modelos do modelsaber.com não funciona
A razão pela qual adicionar mods do [BeatMods](https://beatmods.com/) ou modelos do [ModelSaber](https://modelsaber.com/) não funciona, é porque esses mods e sabres são somente para PC.

Obtenha Mods compatíveis com o Quest no [Questboard](https://www.questmodding.com/) ou `#quest-mods` no Discord do Beat Saber Modding Group, com sabres compativeis com o Quest, blocos, e paredes na [Comunidade do Qosmetics](https://discord.gg/qosmetics). Depois de ter seu mod zip use a [Interface Web do BMBF](#using-your-pc) para instalá-lo.

### Fazer o sideload do BMBF falhou
Quando estiver fazendo sideload do BMBF você pode ver o erro `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

Você precisará desinstalar a versão do BMBF de seu Quest. Você pode fazer isso no menu `My Apps` no SideQuest.

### Core mods não funcionam

If you are having problems with core mods, please verify that you are not trying to use any outdated mods. Any mod made for a previous game version is considered outdated. Once you have removed them:

1. Vá para `Tools`
2. Clique em `exit BMBF`
3. Abra o BMBF novamente
4. Vá para `Tools` novamente
5. Clique em `Quick fix`
6. Vá para a seção `Browser` do aplicativo BMBF.
7. Clique no ícone do pequeno globo no canto superior direito
8. Clique em `QuestBoard`
9. Clique em `Downloads Mods`
10. Role para baixo e clique em `Download All Core Mods`
11. Clique em `Sync to Beat Saber`

---

### A interface web do BMBF não está carregando
Se a sua Interface Web BMBF não estiver carregando, certifique-se de que você está digitando o IP da guia ferramentas no seu navegador no seu computador que está na mesma rede. Certifique-se de que:

1. Seu IP não é `127.0.0.1`, se isso aparecer tente reiniciar seu headset e/ou roteador.
2. BMBF está aberto em seu headset
3. Há `http://` no início do link, e não `https://`
4. Você tem `:50000` no final do seu link
5. Seu PC e Quest estão na mesma rede wifi
6. Seu IP ainda é o mesmo que pode mudar de vez em quando

Se nada disso funcionar, reinicie seu Quest e siga a lista novamente.

---

### BMBF não carregando as configurações depois de alguns minutos
Isso provavelmente deve ser por usar o BMBF em uma versão do jogo no qual ele não foi feito para. Tal como usar BMBF para o Beat Saber versão `1.13.0` quando a versão do jogo instalado no headset for `1.12.2`.  
Se a versão do jogo corresponde ao que a página de lançamentos do BMBF diz, tente reiniciar o seu headset. Se ela ainda não funciona, use a [Interface Web do BMBF](#using-your-pc) e clique em `Quick Fix` na aba Tools.

### Beat Saber está preto quando abro
Abra a biblioteca em seu Quest. Clique nos três pontos ao lado do Beat Saber e, em seguida, clique em `Permissões`. No menu que aparece, habilite as permissões de armazenamento e tente iniciar o jogo novamente.

---

### Meus sabres e mods não ativam/funcionam
Isso é muito provável que você tenha um cliente BMBF desatualizado, pegue a última versão do [BMBF](https://bmbf.dev/stable). Se a versão do BMBF do seu Beat Saber não estiver ali, por favor espere um pouco para que os unicórnios atualizem o BMBF.

* Se o seu mod é suposto ser compativel com a sua versão do BMBF, em seguida, verifique se não há nenhuma pasta que separe o conteúdo do arquivo .zip.
* Se seu level não carregar, tente instalar o mapping extensions do #quest-mods. Eles também podem precisar do mod Noodle Extensions no qual não está no Quest ainda.
* Se o seu BMBF estiver na versão mais recente e os mods não forem ativados no jogo, desinstale o Beat Saber com o botão de uninstall BS na aba Tools do BMBF então reinstale e instale os mods novamente.
* Em casos muito muito raros, o BMBF não tem permissão de copiar mods no local certo. Verifique no SideQuest para certificar-se que o BMBF tenha permissões de arquivo.

---

### Beat Saber is crashing
If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the issue is fixed before asking for help in a support channel.

### I only see a white screen when i open BMBF
If you only see a white screen when you open BMBF from unknown sources, restart your quest and then it should be fixed

### Meu Beat Saber tem 3 pontos quando eu abro
Se o seu Beat Saber está recebendo 3 pontos ao iniciar, certifique-se de que:

1. Você abriu e jogou uma música antes de modificar o jogo
2. Você não está usando uma versão pirata do jogo
3. Certifique-se de estar usando a versão mais recente do BMBF
