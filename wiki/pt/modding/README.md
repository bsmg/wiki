# Criando Mods

## Injetando Mods
Beat Saber _**não**_ tem suporte nativo a mods.

Em vez disso, a maioria dos mods dentro do instalador dependem do [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) para injetar plugins no jogo, Além de fornecer algumas ferramentas úteis para nós modders.

Para aqueles que preferem o [BepInEx](https://github.com/BepInEx/BepInEx) em vez de qualquer uma dessas opções, O Bepis criou um carregador para plugins BSIPA, disponível [aqui](https://github.com/BepInEx/BepInEx.BSIPA.Loader). Quanto ao desenvolvimento de plugins do Beat Saber com a API do plugin BepInEx, um guia genérico existe em seu [site de documentação](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), mas além disso você está meio por conta própria.

## Configurando o projeto
Se você está interessado em criar um mod para o Beat Saber, mas não tem um template ou template do Visual Studio configurado, [siga o Guia de Introdução para configurar seu projeto.](./intro.md).

### Pronto para começar?
Confira os [links abaixo](#other-links) para obter documentação relacionada à Unity e outras ferramentas relacionadas. Se você tiver alguma dúvida, o melhor lugar para fazer é no canal `#pc-mod-dev` no [Discord do BSMG](https://discord.gg/beatsabermods)

## Argumentos de Inicio
Argumentos úteis de inicialização que facilitarão a criação de mods / debugging.

<!-- markdownlint-disable MD013 -->
| Argumento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descrição                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--verbose`                                                                                   | Habilita a janela de output log para o IPA. Isto irá mostrar o debug console que os mods usam.                                                                                                               |
| `fpfc`                                                                                        | "First Person Flying Controller"<br /><br />Isso permite que você use o WASD e o mouse para navegar pelo menu do jogo. Isso facilita muito testing, porque você não precisa colocar seu headset! |
| `-vrmode oculus`                                                                              | Se você estiver usando Beat Saber através da Steam, isso permite que você jogue o jogo em um headset Oculus.                                                                                                 |
<!-- markdownlint-enable MD013 -->

## Outros links

* [BeatMods](https://beatmods.com)
* [BeatMods Approval Guidelines](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [Beat Saber IPA](https://github.com/nike4613/BeatSaber-IPA-Reloaded)
