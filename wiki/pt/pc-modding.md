---
sidebar: auto
---

# PC Modding
# Prefácio

::: Aviso de perigo Ao escolher usar mods, tu entendes que:
- Tu podes ter problemas que não existem no jogo vanilla. 99,9% dos bugs, travamentos e lag devem-se aos mods.
- Os mods estão sujeitos a falhas por causa de atualizações e isso é normal - sê paciente e respeitoso quando isso acontecer, porque os modders são voluntários com vidas reais.
- Os Beat games não estão propositadamente a tentar acabar com os mods. Eles querem trabalhar na base de código e, por vezes, isso origina bugs nos mods, mas eles não querem acabar com os mods.

Não ataque os devs por problemas relacionados a mods, e vice versa - modders e devs são dois grupos separados. Não sejas um idiota ok. :::

O Beat Saber suporta originalmente músicas personalizadas, então se isso é tudo o que tu estás à procura, não precisas de mais mods! Entretanto, é uma boa ideia instalar o `SongCore` porque este mod se expande na funcionalidade base do jogo para melhorar o tempo de carregamento e fornecer a funcionalidade para outros mods como o baixador dentro do jogo, classificações personalizadas, listas de reprodução, etc.

::: warning Este guia é para PC-modding no Windows.  
Se você tem um Quest, veja a [página de Modding do Quest](/quest-modding.md).  
Se você estiver no Linux, confira a [página do Linux](/modding/linux.md) ou [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

Se a qualquer momento tiveres problemas, por favor, acessa a [página de suporte](./support) e verifica se consegues identificar o problema antes de perguntar no servidor do Discord. É provavel que a tua resposta esteja nessa página!

:::warning Eu assisti este vídeo pelo Elite Eric, mas fiquei preso e não funcionou. Por que isso? Nós do BSMG **fortemente** sugerimos não usar qualquer tutorial do Elite Eric. Após revisar grande parte do conteúdo dele, ele contêm uma grande quantidade de informações incompletas, erróneas, ou diretamente informações incorretas. Tentativas de chegar nele para corrigir esses erros, infelizmente foram recebidos com silêncio e novos tutoriais (também incorretos).

Em vez disso, você deve seguir os guias escritos aqui na wiki ou procurar ajuda no [Discord do BSMG](https://discord.gg/beatsabermods). :::

## Instaladores
### Mod Assistant
> **ESTE É ATUALMENTE O MOD INSTALLER RECOMENDADO.**

__**Execute o jogo pelo menos uma vez**** antes de tentar instalar mods nele! Isto também se aplica a reinstalar o jogo.

Um simples Beat Saber Mod Installer similar ao gerenciador de mods, mas com recursos adicionais como remoção de mods e verificação de versão! Podes obtê-lo no [GitHub do Assistente](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Como obter mais músicas
### In-game Downloader
O Plugin `BeatSaver Downloader` permite que tu baixes mapas dentro do jogo usando o botão de menu `MAIS MUSICAS` no ecrã de menu `MODS`. Isto instala mapas diretamente do [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) é o repositório principal de músicas personalizadas feitas pela comunidade. Muitas outras ferramentas e sites melhoram a experiência de download de músicas custom, mas este lugar é onde elas estão hospedadas. Para instalar músicas baixadas do site, descompacta-as numa pasta e coloca-a no `Beat Saber/Beat Saber_Data/CustomLevels`.  Também podes usar o plugin de downloader no jogo, BeatList, ou o recurso de Instalar do Assistente de Mod OneClick.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) é um site que tenta ajudar a tornar mais fácil encontrar mapas fantásticos para jogar. Ele faz isso categorizando milhares de músicas do beatsaver e te permite classificar por um gênero de música e muitas outras tags de atributo. Tem também uma característica social completa onde os jogadores podem avaliar músicas e comentar nelas. Uma das características mais usadas é o recurso "Curator Recommended" onde uma equipe joga a maioria das músicas liberadas a cada dia e recomenda as que se destacam, Deixando você [baixar automaticamente elas dentro do jogo](https://bsaber.com/beatsync/).

### Programas de gerenciamento de músicas
* [BeatList](https://github.com/Alaanor/beatlist) é uma aplicação para gerenciar playlists e mapas, criada por Alaanor.

### Playlists
Coloque a playlist em `Beat Saber/Playlists`, em seguida, use o [BeatList](https://github.com/Alaanor/beatlist) ou o [Mod Assistant](https://github.com/Assistant/ModAssistant) para baixar os mapas. (Nota: mods mais antigos permitiam baixar o conteúdo das playlists no jogo, mas isso atualmente não é possível.)

## Pasta de Instalação
_Onde o Beat Saber é instalado?_

### Localização Padrão
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Outras Localizações
**Se moveste a tua pasta de instalação para um disco diferente, pode estar no local abaixo.** Substitui a letra do disco `F` com o disco onde o teu jogo está instalado.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Como desinstalar mods
Remova a dll da pasta `Plugins`, ou clique no botão `Desinstalar` no Mod Assistant.

## Instalação Manual
Um instalador de mods é uma maneira recomendada de instalar mods. Veja a seção [acima](#installers). Se você já instalou mods e precisa instalar outros que não estão disponíveis no instalador, pule para a etapa 4.

****Execute o jogo pelo menos uma vez antes de tentar instalar mods no jogo! Isto também se aplica ao reinstalar o jogo.
### Instale o BSIPA
1. Baixe o [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navegue para a sua [pasta de instalação](#install-folder) e extraia o conteúdo do BSPIA nela. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Clique duas vezes no IPA.exe para instalar os mods no jogo. Todos os mods na pasta `Plugins` agora serão carregados ao iniciar o jogo. Se houver erros, você provavelmente não seguiu corretamente a etapa 2. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Instale os mods
4. Baixe o(os) mod(s) que você deseja instalar, seja do GitHub, do chat #pc-mods ou de outras fontes. **Certifique-se de baixar quaisquer dependências necessárias pelo mod.** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Alguns mods têm instruções de instalação, outros não. Normalmente, você pode apenas arrastar e soltar o conteúdo zip na pasta de instalação do Beat Saber e os arquivos devem ir para as pastas correspondentes.


## Para onde ir daqui
* [Dicas e Truques](./grips-and-tricks.md)
* [Fazendo beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Configurar Multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Criando Mods](/modding/)

## Tens alguma pergunta?
Visita os canais de suporte no [BSMG Discord](https://discord. gg/beatsabermods)!
