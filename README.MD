[![MIT License](https://img.shields.io/github/license/HalloSouf/discordjs-example)](https://choosealicense.com/licenses/mit/) [![Last Commit](https://img.shields.io/github/last-commit/HalloSouf/discordjs-example)](https://github.com/HalloSouf/discordjs-example)
# DiscordJS Handler

With this project I want to create an example for everyone who wants to create a Discord bot. You can use this template
and extend it by creating your own commands.
## Run Locally

To run this Discord bot on your local machine, you need to clone this repository first.
```bash
  git clone https://github.com/HalloSouf/discordjs-example.git
```

Navigate with your terminal to the following folder.
```bash
  cd discordjs-example
```

Now you need to install all required dependencies to run the application. 
The installation will include [Typescript](https://www.typescriptlang.org/) and 
[ts-node](https://www.npmjs.com/package/ts-node) for building and running the application.
```bash
  # Yarn
  yarn install

  # NPM 
  npm install
```

After installing all the dependencies, create a new file called `.env`. This file includes
the environment variables for your project such as your Discord bot token. Replace the
`***` with your Discord bot token.
```env
CLIENT_ENV=development
CLIENT_TOKEN=***
```

When you are done with setting your project up, run your Discord bot.
```bash
  # Yarn
  yarn run dev

  # NPM
  npm run dev
```


## Running Tests

This project includes ESLint which analyzes the codebase to find quickly some problems 
in your code. You can use the following command to test the codebase with the `.eslintrc.yml`
in the root-folder.

```bash
  # Yarn
  yarn run eslint

  # NPM
  npm run eslint
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

