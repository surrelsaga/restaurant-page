# Restaurant Page
- I learnt about how to install dependencies in javascript and how to use webpack to bundle my source code in files so that the browser can load efficiently (What behinds the scene when we import is that webpack resolve those import and put the real js code in the same file and browser just read from it and display)

**Steps to run this project locally after cloning.**

## Commands

1. Clone the repository

2. Go into the project folder

```bash
cd restaurant-page
```

Moves your terminal into this project.

3. Install dependencies

```bash
npm install
```

Installs webpack, webpack-dev-server, loaders, and other packages from package.json.

4. Bundle the source code into output html and js files and put in /dist

```bash
npx webpack
```

We then can host the website locally from those bundled html and js files

## Optional

Builds the app in development mode and hosts it locally (usually at http://localhost:8080). Whenever we make a change, it will automatically run 'npx webpack' behind the scene and host the website from the latest bundle.

```bash
npx webpack
```

