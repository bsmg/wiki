---
sidebar: auto
prev: ./avatars-guide.md
next: ./notes-guide.md
description: Guia de Emma para criar Custom Platforms!
---

# Guia de Custom Platforms
_Guia de Emma para criar Custom Platforms_

## Projeto
Abra o atual [Custom Platforms Project](https://github.com/affederaffe/CustomPlatformsUnityProject/releases/) com a [Unity 2018.1.6f1](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe).

## Primeiros passos
![Custom Platform Script](~@images/models/platforms/CustomPlatformScript.png)

Crie um `Empty GameObject` clicando com o botão direito na janela de Hierarchy e selecionando `Create Empty`. Certifique-se de definir sua posição no Inspector para a origem (0,0,0). Procure no inspector pelo script de </code>Custom Platform` e aplique-o a este GameObject. Tudo dentro deste Objeto será exportado quando o botão no script de <code>Custom Platform` for pressionado. No script existem também opções de Exporting. Eles desabilitam partes da plataforma original (Para quando você deseja substituir algo parcialmente).

## Adicionando modelos
![Objects](~@images/models/platforms/Objects.png)

Arraste todos os modelos que você deseja em sua Plataforma para o GameObject criado na segunda etapa e posicione-os ao seu gosto. Para os materiais dos modelos, certifique-se de usar shaders compatíveis com o Beat Saber ou os que você pode encontrar no Projeto chamado `_dark_replace` e `_glow_replace`. Estes são materiais personalizados que atuam como os materiais no Beat Saber, ou seja, reagem às luzes de tube e mist.

### Track Rings
O script `Track Rings` faz track rings como são vistos no jogo. Para conseguir isso, o script precisa de um prefab. Atualmente não consegui descobrir como usar um prefab com isso, então eu usei um gameObject, que faz parte da platform hierarchy, que mais tarde eu me movi para `y = -1000`. Para o ring-preview aparecer corretamente, mova esse gameObject para (0,0,0) e ajuste suas configurações e antes de importar mova ele para algum lugar fora da tela.

Ativando o rotating effect, faz com que os rings gire de acordo com o evento especificado, dependendo das variáveis que ele é dado. (Eu ainda não testei eles, então experimente).

Ativando o step effect altera o espaçamento dos rings quando o evento especificado é chamado entre 2 variáveis.

![Track Rings Script](~@images/models/platforms/TrackRingsScript.png)

### Tube Light
![Tube Light](~@images/models/platforms/TubeLightScript.png)

Este script ativar blinking lights. Colocar isso em um gameObject vazio altera o fundo e adiciona um pouco de cor ao espaço, de acordo com o light ID's. Quando há também um mesh renderer nele, ele vai mudar a cor das meshes de acordo com o light ID's. Quando usar isso, adicionar cores não é necessário, então mude o tamanho no script para 0.

### Song Events
![Song Event Handler](~@images/models/platforms/SongEventHandler.png)

O event manager é o script mais útil. Com ele, você pode acionar uma ação em qualquer evento de beat saber (mesmo os não utilizados). Para adicionar um evento, pressione o botão `+` abaixo do botão `On Trigger ()`. Arraste o objeto que você deseja manipular para a box que foi criada. Pressione o menu dropdown à direita e escolha o que esse objeto deve fazer, selecionando primeiro qual componente, em seguida qual ação. Certifique-se de usar apenas um event Handler por gameObject, pois somente 1 funcionará por gameObject.

### Spectogram
![Spectogram](~@images/models/platforms/Spectogram.png)

O script spectrogram funciona como o script de track rings e também requer um prefab ou gameObject. Isto será esticado e encolhido de acordo com o som do jogo e as variáveis fornecidas. (Também não testei isso).

## Exporting

![Saving](~@images/models/platforms/Save.png)

Exporte a plataforma através do script que você adicionou anteriormente ao gameObject para a localização de sua escolha. Preferencialmente, o diretório do jogo `Beat Saber/CustomPlatforms`. ::: dica **Uma vez que você tem seus novos sabres funcionando**, [envie-os para o ModelSaber](https://modelsaber.com) se quiser compartilhá-los com o mundo. :::

![Cat](~@images/models/platforms/Cat.png)
