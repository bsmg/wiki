# Créer des mods

## Injection de mods

Beat Saber _**ne supporte pas**_ nativement les mods.

Ainsi, la plupart des mods dans l'installateur de mod se basent sur [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) pour injecter des extensions dans le jeu, en plus de fournir des outils utiles pour les moddeurs.

Pour ceux qui préfèrent [BepInEx](https://github.com/BepInEx/BepInEx) plutôt que ces options, Bepis a créé un loader pour les plugins BSIPA, disponible [ici](https://github.com/BepInEx/BepInEx.BSIPA.Loader). Cependant, pour développer des extensions Beat Saber avec l'API du plugin BepInEx, un guide générique existe sur [le site de leur documentation](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), autrement vous devrez vous débrouiller tout seul.

## Mise en place du projet

Si vous êtes intéressé pour créer un mod Beat Saber, mais n'avez pas de modèle ou de modèle Visual Studio existant, [suivez le guide d'introduction pour démarrer votre projet](./intro.md).

### Prêt ?

Utilisez les [liens ci-dessous](#autres-liens) pour de la documentation relative à Unity et autres outils liés. Si vous avez la moindre question, le meilleur endroit pour la poser est dans le canal `#pc-mod-dev` (en anglais) du [Discord BSMG](https://discord.gg/beatsabermods).

## Arguments de lancement

Des arguments de lancement utile qui vous aideront à faire des mods / déboguer facilement.

<!-- markdownlint-disable MD013 -->

| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                                  | Active la fenêtre de sortie des logs d'IPA. Cela affichera la console de débogage que les mods utilisent.                                                                                                 |
| `fpfc`                                                                                       | "First Person Flying Controller"<br /><br />Cela vous permet d'utiliser WASD et la souris pour naviguer dans le menu en jeu. C'est beaucoup plus facile de tester avec, pas besoin de mettre son casque ! |
| `-vrmode oculus`                                                                             | Si vous lancez Beat Saber à travers Steam, cela vous permet de jouer le jeu dans un casque Oculus.                                                                                                        |

<!-- markdownlint-enable MD013 -->

## Autres liens

- [BeatMods](https://beatmods.com)
- [Lignes directrices pour l'approbation sur BeatMods](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
- [API Unity Scripting](https://docs.unity3d.com/ScriptReference/index.html)
- [dnSpy](https://github.com/0xd4d/dnSpy)
- [Harmony](https://github.com/pardeike/Harmony)
- [Beat Saber IPA](https://bsmg.github.io/BeatSaber-IPA-Reloaded/)
