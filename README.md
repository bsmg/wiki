# 📖 BSMG Wiki &nbsp;[![CI Status](https://github.com/bsmg/wiki/workflows/Wiki%20CI/badge.svg)](https://github.com/bsmg/wiki/actions)

## ✏️ Contributing

If you wish to contribute, [submit a pull request](https://github.com/bsmg/wiki/pulls) with your changes. A wiki maintainer will review your contributions and merge them in if deemed appropriate.

Don't know where to start? Checkout this [crash course](https://docs.google.com/document/d/1r6IP6l3uo8rc__GxfLkpaToxheeXotdYaKEj3oWB2js/edit?usp=sharing) on making contributions!

Alternatively, users who are unsure on how to work with Git can [submit an issue](https://github.com/bsmg/wiki/issues) that contains a link to a shared google document with the text you would like to contribute. Note this will take longer to process than submitting a pull request.

### 🌐 Localization

Translation efforts are managed using [Lingohub](https://lingohub.com/).

#### Want to Help Translate?

[Apply Here](https://forms.gle/e3BqA3poMjESARe76) and make sure you are in the [BSMG Discord](https://discord.gg/beatsabermods). We will be in touch!

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

1. [Enable GitHub pages from GitHub actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) on your repository.
2. Once the workflow is complete, any changes made to the `master` branch will be deployed to `https://{username}.github.io/{repository_name}/`, where `{username}` is your GitHub username and `{repository_name}` is the name of your forked repository.

## 🔐 Licensing

- The code that generates the wiki is licensed under the [MIT License](https://github.com/bsmg/wiki/blob/master/LICENSE).
- The wiki content is licensed under the [Creative Commons BY-NC-SA 4.0 License](https://github.com/bsmg/wiki/blob/master/wiki/LICENSE).
  - While you own the copyright to content you contribute, you agree to license it in perpetuity under the CC BY-NC-SA 4.0 license. Attribution is tracked by Commit/Pull Request history of the repository.
- Copyright of the wiki content translations are owned by the respective contributors and licensed in perpetuity under the [Creative Commons BY-NC-SA 4.0 License](https://github.com/bsmg/wiki/blob/master/wiki/LICENSE).
  - Due to the nature of the translation process contributions are not individually attributed, but are listed as a whole team in the About Us [Translators Page](/wiki/about/translators.md).
