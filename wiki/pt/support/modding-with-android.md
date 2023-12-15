---
sidebar: auto
---

# Modding de Quest com Android

BMBF apk:::warning Instalar o BMBF e instalar mods ao seu jogo desativará o Multiplayer oficial, assim como ver e enviar scores para os placares base do jogo. If you would like to play modded multiplayer, you need the `Beat Together` and `MultiQuestensions` mods, which enables cross-play between PC and modded Quests and allows for custom songs to be played. O mod pode ser encontrado no [Beat Saber Modding Group](discord.gg/beatsabermods) em `#quest-mods` ou no site [Questboard](https://questmodding.com).

Para obter rankings em custom songs e ser capaz de obter Pontos de Performance (PP) de músicas ranqueadas você precisa do mod [ScoreSaber](https://new.scoresaber.com/quest). [Este link](https://new.scoresaber.com/quest) vai te levar à página de ScoreSaber para configurá-lo. O ScoreSaber não substitui o ranking base do jogo, apenas adiciona rankings para custom songs.

**Nota:** Confira o chat de atualizações do [Discord do ScoreSaber](https://discord.gg/WpuDMwU) para ver se o mod está disponível para a versão atual do jogo. :::

::: tip NOTA A maneira recomendada de instalar BMBF é com o [SideQuest em um PC](/quest-modding.md#installing-bmbf-with-sidequest). Este método só deve ser usado se você não tiver acesso a um PC. :::

* [Requisitos](#requirements)
* [Ative o modo de desenvolvedor em seu Quest](#how-to-enable-developer-mode-on-the-oculus-quest)
* [Configurando o seu Celular](#setup-your-phone)
* [Instalando o BMBF com seu celular](#installing-bmbf-with-your-phone)
* [Configurando o Beat Saber](#setup-beat-saber)

## Requisitos

* Um Celular Android ou Tablet Android
  * iPhones ou iPads **NÃO** são suportados
* Uma versão **paga** do Beat Saber na Loja do Oculus Quest
* Um Cabo para conectar seu Quest ao seu Telefone (Se seu telefone carregar por cabo USB C, o carregador que foi incluído em seu Quest deve funcionar)

## Como ativar o Modo de Desenvolvedor no Oculus Quest
Existem dois métodos, o primeiro requer um cartão de crédito. Se você não tem um, você pode seguir os passos do [Eu não tenho um Cartão de Crédito](#i-have-no-credit-card) invés disso.

### Verificando com um Cartão de Crédito
Vá até a [Dashboard Oculus](https://dashboard.oculus.com/) e faça login com sua Conta do Facebook.

Depois de entrar com sucesso e verificar, você pode criar sua nova Organização.

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

Após de criada, você pode habilitar o modo de desenvolvedor no aplicativo Oculus no seu smartphone.

#### Ativar o Modo de Desenvolvedor no App Oculus

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

Agora você pode pular para [Configurando seu Celular](#setup-your-phone)

### Eu não tenho Cartão de Crédito
[Fonte Original](https://www.reddit.com/r/sidequest/comments/jaxy4u/cant_verify_oculus_developer_account/?utm_source=amp&utm_medium=&utm_content=post_body).

Então observe que você tem que criar uma segunda conta (Conta de desenvolvedor Oculus) e então adicionar seu perfil do Facebook a a organização criada. Isso é um pouco mais dificil.

:::tip Se você tem um amigo que tem uma organização, você pode pedir para ser adicionado, assim você não precisa fazer uma nova conta. Se for o caso, diga a seu amigo para seguir as etapas em [Se adicione na organização](#add-yourself-to-the-organization) usando sua conta do Facebook no lugar. :::

#### Criando uma Nova Conta de Desenvolvedor

1. Vá para a [página de cadastro para desenvolvedores Oculus](https://developer.oculus.com/sign-up/) e clique em `Criar uma conta de desenvolvedor Oculus separada`.
2. Preencha todas as informações necessárias.
3. Verifique com o e-mail que você enviou e faça login novamente com a conta que você criou.
4. Vá para a [página de verificação](https://developer.oculus.com/manage/verify/) e configure a Autenticação de Dois Fatores.

![2fa](~@images/beginners-guide/2fa.png)

#### Crie uma Nova Organização
Depois de fazer isso, vá para o [Dashboard Oculus](https://dashboard.oculus.com/) e crie uma organização com *quase* qualquer nome que quiser.

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

#### Adicione você mesmo à Organização
Depois de criar a sua Organização você precisa adicionar o seu perfil do Facebook à sua Organização, selecionando a sua Organização no menu suspenso e depois clicando nos Membros. Lá você pode adicionar um novo membro com o cargo de administrador e colocar o nome de usuário do seu perfil do Facebook. Depois disso, clique em adicionar e o usuário deve ser adicionado.

![DevModeCreateOrg](~@images/beginners-guide/addmember.png)

#### Ativar o Modo de Desenvolvedor no App Oculus
Agora você deve ser capaz de ativar o modo de desenvolvedor no aplicativo Oculus em seu smartphone.

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

Agora você pode continuar em [Configurando seu Celular](#setup-your-phone)

## Configurando o seu Celular

1. Baixe o [aplicativo SideQuest na loja da Google Play](https://play.google.com/store/apps/details?id=side.quest.mobile)
2. Ative o modo de Desenvolvedor em seu Celular
    1. Vá para as configurações do Android
    2. Vá até "Sobre o telefone" e abra-o
    3. Clique em "Informações do Software"
    4. Toque no campo "Número de build" até dizer que o modo desenvolvedor está habilitado. Isto deve levar cerca de 7 toques.
3. Ativar a depuração USB no seu Celular
    1. Volte às configurações
    2. Toque em "Opções de Desenvolvedor"
    3. Ative a depuração USB

### Instalando o BMBF com seu Celular
:::warning
Antes de instalar os mods, abra o Beat Saber uma vez, jogue um level e falhe imediatamente!
:::

Abra a Sidequest no seu Celular e conecte seu Quest com o seu celular via cabo USB. Você deve receber um pop-up de depuração USB em seu Quest e no seu celular. Selecione permitir em ambos os dispositivos e, se preferir, selecione sempre permitir.

Agora se o SideQuest detectou seu Quest, você deverá ver o logotipo do SideQuest com um ponto verde ao lado dele na parte inferior da sua tela.

E então instale o BMBF clicando no ícone de pesquisa no topo do SideQuest e procure por `BMBF`. Você deve ver um aplicativo com um unicórnio como símbolo. Toque nisso e clique em `INSTALL TO HEADSET`.

Depois disso você deverá ter o BMBF instalado em seu Quest e está pronto para instalar mods no Beat Saber.

## Configurando o Beat Saber
Depois de instalar com sucesso o BMBF em seu quest, você poderá encontrá-la na sua biblioteca dentro do unknown sources.

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

Abra-o e permita o acesso de arquivos depois de iniciá-lo se solicitado. Agora siga as instruções na tela cuidadosamente. Depois de terminar, você deverá ver o [BeastSaber](https://bsaber.com).

Se em algum momento durante o processo de instalação, você ver um pop-up com Restore App escrito, apenas clique em Close. Este aviso é direcionado para versões pirateadas do jogo, então provavelmente não haverá consequências se você tiver uma cópia legítima.

Agora você pode continuar com o passo [Core Mods](/quest-modding.md#core-mods) do processo de instalação, como se você estivesse modificando com o seu PC.
