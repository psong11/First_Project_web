![](https://github.com/hsadev/web-template/workflows/Linter/badge.svg)
# DEV React-Apollo Starter

This is a repository with starter code for new frontend web projects at DEV.

**NOTE: When starting a project, update the title and provide a description here for the project. You should also put any engineering-specific information here that you think might be important for future engineers to know (quirks of an API, for example).**

To start a new project built off of this repository, click the green "Use this Template" button.

### Running the project

```bash
$ npm i
$ npm run start
```

## Contributing to this project

Please use the workflow and git conventions outlined [here](https://docs.google.com/document/d/1MJUp3kGXOG2ck8phtELk1Ph2AcBFZDMpM9j8dJTCeIw/edit?usp=sharing) when making contributions to this project. The guidelines are designed to increase the long term efficacy of the our engineering efforts, meaning the effort that goes into following these standards today will help save the engineers of tomorrow a considerable amount of time.

## Project Layout

### Project Structure

This repository contains by the general frontend web file structure conventions we use at DEV. It has react-router, apollo integration, and styled-components. It also has a full developer environment with prettier, eslint, and travis set up. The repository was designed first and foremost to scale to large projects. It should be easy to extend the base file structure and setup here to much larger projects.

```
project-repo-name
└───.github
|
└───.storybook
|
└───node_modules
|
└───public
│
└───src
│   │   App.js
|   |   client.js
│   │   config.js
|   |   index.js
|   |   theme.js
│   │
│   └───assets
│   |
│   └───components
│   |   └───LineInput
|   |   |   └─── index.js
|   |   |   └─── styles.js
|   |   |   └─── graphql.js
|   |   |   └─── story.js
│   |   └───NavBar
│   |   └───PageHeader
│   |   └───SubmitButton
│   |   └───TextArea
│   │
│   └───containers
│       └───About
│       └───ContactUs
│       └───Home
│
|   .eslintrc.json
|   .gitignore
|   .npmrc
|   .prettierrc
|   .travis.yml
|   package-lock.json
|   package.json
|   README.md
```

### Important Directories and Files

- **.github**

  - Used to store our PR and Issue templates, if you needed to create new templates or update the existing ones, they would go here.

- **.storybook**

  - Used to configure storybook for the project. If you ever needed to make something globally accessible to all stories, such as the theme, it would go in here.

- **public**

  - Used to store the root html and css files, favicon, etc.
    **Note:** You cannot import assets from this directory as it is outside of src

- **src**

  - The main directory. Used to store all javascript files

- **App.js**

  - The root component. Any resources that need to be accessed by the whole app (like redux, theme provider, apollo provider, etc.) must be stored here. We try to keep this file light, so only put work here if it is **_absolutely_** necessry

- **config.js**

  - Used to store constants that are important to the functionality of the app (like api urls, api keys, query limits, etc.)

- **theme.js**

  - Used to store constants that are important to style (like colors, fonts, widths, heights, etc.). This is also where we load our fonts.

- **containers**

  - Used to store the different "Pages" of the app.
    **Note:** Pages are determined by url. If you can reach a component by going to a specific url and that component is the root of that url, then it should go into containers.

- **components**

  - The top level components folder is used to store components that will be used throughout the app. If a component is used in more than one container, then it should be in this folder.

## Storybook

Storybook is a tool that allows you to work on and view individual components without having to build an entire page to do so. This becomes very useful as the project grows larger and you are required to navigate 2 or 3 levels deep to even get to the page your component is on (especially when you're restyling minute details like font-size or widths).

#### Running Storybook

In order to use story book you can simply run the following command

```bash
$ npm run storybook
```

This will launch a storybook window in your default browser on localhost:9009. If you would like to view storybook in a different browser, you can simply open that browser and go to localhost:9009.
