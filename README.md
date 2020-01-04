# 📖 BSMG Wiki &nbsp;[![CI Status](https://github.com/beat-saber-modding-group/wiki/workflows/Wiki%20CI/badge.svg)](https://github.com/beat-saber-modding-group/wiki/actions)
## ✏️ Contributing
If you wish to contribute, [submit a pull request](https://github.com/beat-saber-modding-group/wiki/pulls) with your changes. A wiki maintainer will review your changes and merge them in if deemed appropriate.

## 🧪 Development
To run a local copy of the wiki:
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [yarn](https://yarnpkg.com/en/docs/install)
3. Fork this repo, then clone it. [Instructions](https://guides.github.com/activities/forking/)
4. Open a commandline window in the directory you just cloned into, and run the command `yarn` to install node packages.
5. After packages are installed, start the development server with the command `yarn dev`.
6. Open the link to `localhost` that appears in the console once the development server is running.

Now when you make changes to your local wiki files, the local website will update those pages as soon as they are saved!

## 🚀 Deploying
The wiki is deployed using Docker. Pull the [latest image](https://github.com/beat-saber-modding-group/wiki/packages/54581) and run it. It exposes port 80, which can be remapped to whatever.

## 🔐 Licensing
The code that generates the wiki is licensed under the [MIT License](https://github.com/beat-saber-modding-group/wiki/blob/master/LICENSE). The wiki content is licensed under the [Creative Commons BY-NC-SA 4.0 License](https://github.com/beat-saber-modding-group/wiki/blob/master/wiki/LICENSE)
