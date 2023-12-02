# 📖 BSMG Wiki &nbsp;[![CI Status](https://github.com/bsmg/wiki/workflows/Wiki%20CI/badge.svg)](https://github.com/bsmg/wiki/actions)

## ✏️ Contributing

If you wish to contribute, [submit a pull request](https://github.com/bsmg/wiki/pulls) with your changes. A wiki maintainer will review your contributions and merge them in if deemed appropriate.

Don't know where to start? Checkout this [crash course](https://docs.google.com/document/d/1r6IP6l3uo8rc__GxfLkpaToxheeXotdYaKEj3oWB2js/edit?usp=sharing) on making contributions!

Alternatively, users who are unsure on how to work with Git can [submit an issue](https://github.com/bsmg/wiki/issues) that contains a link to a shared google document with the text you would like to contribute. Note this will take longer to process than submitting a pull request.

### 🌐 Localization &nbsp;[![Crowdin](https://badges.crowdin.net/bsmg-wiki/localized.svg)](https://crowdin.com/project/bsmg-wiki)

Translation efforts are managed using [Crowdin](https://crowdin.com/project/bsmg-wiki).
There you can see the status of each language available that needs translating.

#### Want to Help Translate?

[Apply Here](https://forms.gle/e3BqA3poMjESARe76) and make sure you are in the [BSMG Discord](https://discord.gg/beatsabermods). We will be in touch!

If you don't see your language available on Crowdin you can still [apply](https://forms.gle/e3BqA3poMjESARe76) and we will add it once you are accepted!

## 🧪 Development

To run a local copy of the wiki:

1. Install [Node.js](https://nodejs.org/en/download/) (using [Volta](https://volta.sh/) is recommended)
2. [Fork this repo](https://guides.github.com/activities/forking/), then clone it. **Make sure to do all work on [another branch](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).**
3. Open a command-line window in the directory you just cloned into, then run the command `npm install` to install required packages.
4. After packages are installed, start the development server with the command `npm run dev`. You can kill the server by closing the terminal or by pressing <kbd>CTRL+C</kbd>
5. Open the link to `localhost` that appears in the console once the development server is running.

When you make changes to your local wiki files, the local website will update those pages as soon as they are saved!

The Wiki has a built-in linter that runs automatically when you push commits to enforce formatting rules. You can run this on your local copy with the command `npm run lint` to flag issues. You can also run `npm run fmt` to have the linter try to resolve the issues automatically. If you need assistance with interpreting or fixing the errors, [submit an issue](https://github.com/bsmg/wiki/issues) with a screenshot of the errors attached.

Once you have finished making changes, you can either commit them directly using `git` tools, or copy them into the GitHub web interface if you don't know how to use `git`.

## 🖧 Deployment

To deploy your fork of the wiki to GitHub pages (for example to allow others to preview your changes):

1. Open `/wiki/.vitepress/config.ts`.
2. Search for `export default defineConfig({`.
3. Add an entry to this dictionary with `base: '<reponame>'` where `<reponame>` is the name of your forked repository.
4. In the same file, search for `sitemap: {`.
5. Change the `hostname` entry to `https://<username>.github.io/<reponame>/)` where `<username>` is your GitHub username and `<reponame>` is the name of your forked repository.
6. Enable GitHub pages from GitHub actions on your repository.
   ![image](https://github.com/Undeceiver/BSMGwiki/assets/22258580/fb242848-1445-41c2-a065-ba00fc3e73d4)
7. Whenever you push changes to the repository, GitHub will automatically attempt to deploy it. You can check the state in the Actions tab of your repository on GitHub.
8. When you make a push request to the main repository, remember to exclude these changes!!

## 🔐 Licensing

- The code that generates the wiki is licensed under the [MIT License](https://github.com/bsmg/wiki/blob/master/LICENSE).
- The wiki content is licensed under the [Creative Commons BY-NC-SA 4.0 License](https://github.com/bsmg/wiki/blob/master/wiki/LICENSE).
- Translations of the wiki content is owned by the Beat Saber Modding Group (BSMG) and licensed under the [Creative Commons BY-NC-SA 4.0 License](https://github.com/bsmg/wiki/blob/master/wiki/LICENSE).
