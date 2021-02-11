---
sidebar: auto
---

# Suporte
## Tabela de conteúdos
0. [Notas importantes](#0-important-notes)
1. [Problemas de instalação](#1-installer-issues)
2. [Problemas no Jogo](#2-game-issues-post-modding)
3. [Perguntas comuns](#3-common-questions)
4. [Resolução de problemas](#4-troubleshooting)
5. [Se todos os outros falharem](#5-if-all-else-fails)
6. [Ainda tens problemas](#6-still-having-issues)

## 0. Atualizações
Após uma atualização, o canal no Discord do BSMG `#server-announcements` deverá ter instruções mais atualizadas sobre o estado dos mods. As seguintes são instruções mais pormenorizadas do procedimento mais comum.

#### Uma atualização desativou os meus mods
**Executa o jogo uma vez** na nova atualização. Em seguida, reinstala seus mods utilizando um instalador linkado no [guia de iniciantes](/beginners-guide), preferencialmente o Mod Assistant.

## 1. Sem mods?

#### 1.1 Nenhum mod aparece em uma nova cópia do jogo
Primeiro, certifique-se de que o seguinte está certo:
* **Você executou o jogo uma vez antes de instalar os mods**. BSIPA remove todos os mods na primeira execução de uma nova atualização para impedir que mods antigos quebrados carreguem em uma nova versão. Reinstale o mods novamente se esse for o caso.
* Steam/Oculus está iniciando o Beat Saber na **mesma instalação** em que os mods estão. *por exemplo, mods estão no disco D mas a Steam está iniciando a partir do disco C.* Defina o local de instalação correto na sua escolha do instalador.
* Se você instalou os mods manualmente, tenha certeza de ter incluído todos os arquivos de download e colocá-los nas pastas corretas, bem como suas dependências.

#### 1.2 Eu tinha mods instalados em uma versão mais antiga, mas nada carrega depois de uma atualização

Se os detalhes da seção 1.1 acima estiverem corretos, tente as soluções abaixo, em ordem decrescente.

**Solução 1**
- Atualize o BSIPA para a versão mais recente (no ModAssistant ou manualmente)
- Para sua pasta do Beat Saber
- Execute o `IPA.exe`

**Solução 2.**
-  [Verifique os arquivo de seu jogo](#verify-game-files-for-steam) (somente na Steam, usuários Oculus olhem a Solução 4)
- Atualize o BSIPA para a versão mais recente
- Para sua pasta do Beat Saber
- Execute o `IPA.exe`

**Solução 3.**
- Para sua pasta do Beat Saber
- Faça um backup da pasta `UserData` (opcional)
- Exclua a pasta UserData

::: warning Isto irá redefinir todas as configurações de plugins! :::

**Solução 4.**
- Realize uma [Instalação Limpa](#clean-installation)

#### 1.2 O ModAssistant da não parece estar instalando nenhum plugin
Os instaladores baixam mods em `Beat Saber/IPA/Pending`, o BSIPA move esses arquivos para a pasta raiz quando você iniciar o jogo. Se a pasta de Plugins do seu jogo ainda estiver vazia depois disso, execute o `IPA.exe` novamente e certifique-se de que nada está impedindo que ele seja executado, por exemplo, `Antivírus, permissões de admin, etc.`

## 2. Problemas no jogo após instalar mods
### O jogo não inicia

#### 2.1 GetThreadContext Failed Error
Se uma janela aparece dizendo `GetThreadContext Failed` e/ou você ouve um som de erro no Windows, você pode ter um software no seu PC que quebra os mods do Beat Saber. Muitos softwares anti-cheat de terceiros, como ESEA e FaceIt impedem o BSIPA ao aplicar mods ao Beat Saber, mesmo quando ele não estiverem rodando. Alguns softwares antivírus também apresentam comportamento semelhante.

Para resolver este problema:
1. Desinstalar o anti-cheat software.
2. Reinicie o seu PC.
3. Verifique se quaisquer remanescentes do software ainda existem nas pastas `AppData`.
4. Execute o jogo. Se os problemas persistirem, tente o seguinte: `Nota Adicional: O problema pode continuar a persistir devido à falta de permissões ou exceções, qualquer programa que possa bloquear o bsipa, ou programas marcados como suspeitos podem fazer com que o problema persista` Steam: [Verifique os arquivos do jogo na Steam](#verify-game-files-for-steam) Oculus: Executar uma [Instalação Limpa](#clean-installation)

Isto deve resolver o problema.

#### 2.2 Congelado na inicialização
Se o jogo estiver congelado na tela de Health and Safety, ou você ver um avatar T-posing sem controle do jogo, [verifique seus arquivos](#verify-game-files-for-steam) se você tiver o jogo no Steam, ou reinstale o jogo na Oculus Home. Consulte o [Instalação Limpa](#clean-installation) Parece que isto acontece quando atualiza o Beat Saber e tem os mods instalados anteriormente, mas não para usuários com instalações limpas do jogo.

### Problemas de Framerate
#### 2.3 O jogo laga de forma insuportável após instalar mods
Se o jogo fica lagando tanto que você mal consegue clicar no botão `Continue` na tela de Health& Safety, então verifique os arquivos do jogo se você tiver o jogo no Steam, ou reinstale o jogo na Oculus Home. Faça o mesmo se não iniciar e não mostrar mensagens de erro ao tentar iniciar o jogo.

Se isso não resolveu o problema, verifique a seção [2.4 Melhorando framerate](#framerate-issues)

#### 2.4 - Melhorando o Framerate
Se a [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) não melhorou seus fps, então seu PC pode estar simplesmente tendo dificuldade para acompanhar o estresse causado pelos mods. Aqui estão algumas coisas que você pode fazer para melhorar a taxa de quadros, em nenhuma ordem em particular:

* Verifique se o NVIDIA GEFORCE EXPERIENCE definiu a escala de renderização para o Beat Saber além do padrão 1.0. Ele pode ter definido para um número maior, podem ser 1.4 ou 1.8, o que aumenta significativamente a carga da GPU.
* Use um custom avatar menos complexo.
* O custom saber **Plasma Katanas** tem toneladas de custom events e são conhecidos por introduzir o lag se você errar alguma nota.
* O CameraPlus pode ser muito pesado, especialmente se você tem múltiplas câmeras e aumenta o FOV.
* Diminua a Render Scale, Anti-Aliasing, mirror, fog, etc nas configurações do jogo base.
* Para jogadores do Oculus CV1 ou Rift: considere usar 2 sensores em vez de 3+.
* Reduza sua quantidade total de mods e músicas.
* Realize uma [Instalação Limpa](#clean-installation) dos arquivos do jogo.
* Taxa de frames baixas também pode ser causada por algo dar errado dentro da pasta de dados da sua aplicação, para corrigir isso consulte [Excluir a pasta Beat Saber dentro de seu App Data](#deleting-your-save-in-appdata)
* Desative contadores do CountersPlus como score counter e swing speed como podem ser muito pesados.
* O mod HTTPStatus pode causar lag spikes. Teste sem esse mod para ver se os lag spikes vão embora.

VR é muito intenso em CPU, especialmente se você adicionar mods. Se você está com dificuldades para executar o jogo com os mods que você quer, considere atualizar seu hardware. Note que o Beat Saber não utiliza a GPU muito pois visualmente é um jogo simples.

## 3. Perguntas comuns
#### 3.1 Menu em branco, Sem botões
Se a janela principal do teu jogo estiver em branco, o seu save provavelmente se corrompeu. Para corrigir esse problema, consulte [Excluir Pasta Beat Saber Dentro do App Data](#deleting-your-save-in-appdata)

::: warning Isto irá excluir suas estatísticas e scores locais. :::

#### 3.2 Como eu uso `x` mod?
Se você estiver usando o Mod Assistant, clique no mod e aperte o botão "Mod Info". http://beatmods.com tem um botão "More Info" em cada mod também.

#### 3.3 Problemas de Vibração
Gameplay Modifiers Plus adicionam uma opção para ativar/desativar a vibração do controle. Se desativou e então o mod foi removido, você precisará modificar o arquivo de configuração no qual ele grava manualmente. Abra `%appdata%/../locallow/hyperbolic magnetism/beat saber` e mude `controllerRumbleEnabled` para `true`.

Se isso não é a causa de seus problemas com vibrações e as coisas seguintes ocorrem com suas vibrações:
* vibrações são minúsculas
* não há vibração ao atingir vários blocos
* há um pequeno atraso ao tocar os sabres juntos
* você está usando controles oculus touch

Então há uma boa chance de que Beat Saber esteja sobrecarregando a controladora USB de sua placa-mãe. Oculus devora a banda de sua controladora USB e a maioria das placas-mães vêm com uma controladora muito barata. O Beat Saber usa ela mais do que qualquer outro jogo, e é por isso que outros jogos e menus podem estar bem. Não há uma solução definitiva para isso, por isso tente o seguinte:
* Troque os sensores e cabos USB do headset e coloque em diferentes portas
* Desconecte dispositivos USB desnecessários
* Compre um hub PCI-E USB
* Use `-vrmode oculus` se você estiver usando o SteamVR para ignorá-lo e usar o oculus SDK no lugar

### Custom Avatars
#### 3.4 Custom Avatars (não) Aparecendo no jogo
Aperte o botão **Home** no seu teclado com o jogo em foco para alternar o foco de seu headset.

#### 3.5 Meus Avatares estão quebrados
Certifique-se de que seu plugin custom avatars esteja instalado corretamente e atualizado, tenha certeza de que suas dependências também estão. Você pode ter um avatar corrompido/quebrado, ter um avatar quebrado pode quebrar todos os seus outros avatares, da mesma forma que com músicas e sabres.

### Custom Songs

#### 3.6 Minhas Músicas não estão aqui
Verifique se suas músicas estão na sua pasta `CustomLevels`, localizada em `Beat Saber/Beat Saber_Data/`. Este é o diretório do qual o jogo lê nativamente custom songs.

**Não** coloque músicas na pasta `Beat Saber/CustomSongs`. Este local é antiga pois o formato para custom songs mudou. Se você tem mapas no formato antigo (`.json` e `.ogg` em vez de `.dat` e `.egg`), deixe-as na antiga pasta `Beat Saber/CustomSongs`. Elas serão convertidas automaticamente pelo mod SongCore para o novo formato.

Como alternativa, você pode convertê-las manualmente usando o [Song Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Botão Play Acinzentado
Clique no botão de interrogação azul brilhante (?) no canto superior direito. Isso deve dizer quais mods são necessários para jogar a música, que estão faltando. Se ainda não estiver funcionando, tente reinstalar o plugin necessário. Ou realize uma [Instalação Limpa](#clean-installation).

#### 3.8 Detalhes dos mapas estão sendo carregados infinitamente
Se isso só acontecer em mapas específicos, os arquivos da música estão provavelmente quebrados. Se isso acontecer com todos os seus mapas, exclua a sua pasta `Plugins` e reinstale eles novamente.

### Camera Plus
#### 3.9 Câmera Plus não está funcionando/Após passar a tela de Health
Certifique-se de que a configuração dentro do jogo para "Smooth Camera" esteja desativada nas suas configurações dentro do jogo. Se isso não funcionar, tente reinstalá-lo juntamente com as dependências associadas.

#### 3.10 Minha visão no desktop só ocupa uma pequena seção da tela
Sua tela do CameraPlus não está preenchendo a tela. Arraste o canto para encaixar na tela, ou clique com o botão direito na janela e clique em "Fit to Canvas".

### BeatSaver Downloader
#### 3.11 Botão More Songs do BeatSaver Downloader
**O botão More Songs está localizado no menu principal à esquerda sob o texto Mods.** Se o botão More Songs estiver acinzentado, então certifique-se de que todas as suas músicas carregaram primeiro como visto na barra de progresso de arco-íris no menu principal. Se seu botão Mods não estiver lá, então certifique-se de que seus plugins e dependências estão funcionando e instalados corretamente, consulte as seção [Sem Mods?](#_1-no-mods)

#### 3.12 Nada aparecendo no menu More Songs
As causas prováveis para o Beat Saver Downloader não estar funcionando são:
1. Certifique-se de que todas as suas músicas tenham carregado antes, caso contrário, o botão More Songs estará acinzentado.
2. Seu antivírus ou firewall está bloqueando o acesso ao BeatSaver.
3. Você atingiu o limite de download do Beat Saver e terá de esperar antes de tentar novamente.

## 4. Solução de problemas diversas
### Entendendo os Logs
Se você estiver na Steam, você pode ir para
> Beat Saber > Propriedades > Definir Opções de Iniciamento > Adicione `--verbose` para o campo de texto que aparecer

Se você estiver na Oculus então você terá que clicar com o botão direito do mouse no Beat Saber.exe e criar um atalho. Edite o Target para adicionar "--verbose" no final. por exemplo, `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

Depois de adicionar a verbose ao seu jogo, esperamos que ele exiba quaisquer erros em relação aos seus avatares, sabres e músicas
* Isso não fará mostrar 100% do tempo para avatares e sabres, e você pode ter que remover todos os seus avatares/sabres e experimentá-los um a um para ver qual quebra o jogo.

Estas mensagens também são escritas em `Beat Saber/Logs`.

Uma lista de exceções comuns pode ser encontrado [aqui](./exceptions.md).

### Verifique os Arquivos do Jogo na Steam
Para verificar a integridade dos arquivos do jogo, siga estas etapas:
1. Certifique-se de que o steamvr está fechado, pois ele não permite que você verifique seus jogos.
2. Vá para sua biblioteca Steam e encontre o Beat Saber
3. Clique com o botão direito do mouse sobre o Beat Saber e clique em Propriedades
4. Vá para a aba "Arquivos Locais" em propriedades
5. Selecione a opção "Verificar Integridade dos Arquivos do Jogo".
6. Deixe que ele termine de verificar e baixar quaisquer arquivos que estejam faltando.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI the steps are still the same.

### Instalação Limpa
1. (Opcional) Faça o backup de seu custom content baixado, fazendo uma cópia das seguintes pastas:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **exclua a pasta INTEIRA do Beat Saber.** Isso é diferente de desinstalar o jogo na Steam, já que esses métodos não removerão arquivos que não vieram com o jogo.
> Steam:     ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Reinstale o jogo através da loja Steam ou Oculus
4. **Antes de instalar mods, inicie o jogo uma vez**
5. Execute o Mod Assistant, instale seus mods e inicie o jogo.

(Opcional) Se você quiser ir mais longe, consulte [Excluir a pasta Beatsaber dentro de seu App Data](#deleting-your-save-in-appdata)

### Excluindo Seu Save no AppData
Isto irá excluir seus scores e dados locais, mas não suas estatisticas em sua custom leaderboard/ScoreSaber. Você pode encontrar a pasta em
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copie e cole tudo de dentro da barra acima e cole na sua barra de endereço no gerenciador de arquivos e apague-a.

Você também pode chegar a essa pasta exibindo itens ocultos e navegando até seu
> Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning Excluir a pasta Appdata também irá excluir seus scores e estatísticas locais. :::

#### Medidas desesperadas
::: warning Desativar seu antivírus envolve riscos de segurança, certifique-se de saber o que você está fazendo (por exemplo, não baixe ou abra arquivos suspeitos enquanto estiver desligado) e não se esqueça de reativá-lo assim que você concluir essas etapas. :::
* Verifique se o usuário atual **é um administrador**
* Desligue seu antivírus **** (pelo menos uma por enquanto)
* Certifique-se de que você tem permissão para criar pastas e editar arquivos dentro do disco/seu pc, (pelo que ouvi uma atualização do windows recentemente causou problemas às pessoas)
* Certifique-se de que seus drivers estão atualizados
* Verifique se o problema não está no seu headset ou sistema operacional, ou no seu hardware/software
* Verifique sua conexão de internet e se nada está bloqueando algo relacionado ao beatsaber modding e steam etc.

## 5. Ainda tendo problemas
Se esta página não cobrir as bases, sinta-se livre para fazer uma pergunta no discord! Para aumentar a chance de você ter suas perguntas respondidas, considere o seguinte:
* Use os chats corretos, por favor, `#pc-help` para suporte a mods de pc e `#quest-help` para suporte a mods de quest. Use  `#pc-3d-modeling` e `#quest-3d-modeling` para perguntas sobre **fazer seus próprios avatares, plataformas, notas, ou sabres**, e `#mapping-discussion` para perguntas sobre **fazer mapas.**
* Seja educado e respeitoso
* Descreva detalhadamente o seu problema. "It didn't work" é quase tão descritivo quanto dizer ao seu médico que você não se sente bem. O que não está funcionando, e o que você tentou? Há alguma mensagem que apareça na tela? Toda a sua tela se tornou um roxo brilhante?

::: tip NOTA Aqueles com o cargo `Support` são voluntários que podem optar por ajudar em seu tempo livre. O cargo support é o reconhecimento do conhecimento e do esforço que puseram em frente, mas não significa necessariamente que eles estarão por perto para ajudar só porque estão online. :::

Obrigado!

> Obrigado ao Saber-Chan pelo seu trabalho duro nesta página.
