# 📖 BSMG Wiki &nbsp;[![CI Status](https://github.com/beat-saber-modding-group/wiki/workflows/Wiki%20CI/badge.svg)](https://github.com/beat-saber-modding-group/wiki/actions)
## ✏️ Contributing
If you wish to contribute, [submit a pull request](https://github.com/beat-saber-modding-group/wiki/pulls) with your changes. A wiki maintainer will review your changes and merge them in if deemed appropriate.

### A 文 Translating
Translation efforts are tracked using [GitHub's Project tracker.](https://github.com/bsmg/wiki/projects)
There you can see the status of each page that needs translating.
Please [contact the BSMG](http://bit.ly/MessageBSMG) if you'd like to help translate BSMG projects.
Most of the translation discussion takes place outside of this Git repo, and we can help connect you with the communities working on translation efforts.

## 🧪 Development
To run a local copy of the wiki:
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/en/docs/install)
3. [Fork this repo](https://guides.github.com/activities/forking/), then clone it. **Make sure to do all work on [another branch](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).**
4. Open a command-line window in the directory you just cloned into, then run the command `yarn` to install required packages.
5. After packages are installed, start the development server with the command `yarn dev`. You can kill the server by closing the terminal or by pressing <kbd>CTRL+C</kbd>
6. Open the link to [`localhost`](http://localhost:8080/) that appears in the console once the development server is running.

When you make changes to your local wiki files, the local website will update those pages as soon as they are saved! **Note:** Sidebar headers do not change due to an issue with Vuepress. They will render correctly if you restart the dev server, and on the final build.

Once you have finished making changes, you can either commit them directly using `git` tools, or copy them into the GitHub web interface if you don't know how to use `git`.

## 🚀 Deploying
The wiki is deployed using Docker. Pull the [latest image](https://github.com/beat-saber-modding-group/wiki/packages/54581) and run it. It exposes port 80, which can be remapped to whatever.

## 🔐 Licensing
The code that generates the wiki is licensed under the [MIT License](https://github.com/beat-saber-modding-group/wiki/blob/master/LICENSE). The wiki content is licensed under the [Creative Commons BY-NC-SA 4.0 License](https://github.com/beat-saber-modding-group/wiki/blob/master/wiki/LICENSE)
