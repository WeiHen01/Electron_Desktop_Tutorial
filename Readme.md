This is a [Electron.js](https://www.electronjs.org/) project which is a desktop application project.

## Getting Started

First, initialize the npm project to create `package.json` by typing following command:

```bash
npm init -y
```

Then, Install Electron as a development dependency:

```bash
npm install electron - save-dev
```

## How to run application

To run the application, you need to modify the `package.json` by adding **start** script:

```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron ."
},
```

Then you can type `npm start` in the terminal to run the application. However in this stage, you might get an error as there's no default or initial page assigned to be displayed when running the application.

## Assigning the default / initial page

To define the default page, you need to create a Javascript file to be assigned. In this project, I have created a file called `index.js` in directory **src/index.js**. Then, you may refer the **index.js** to see how to create the window frame.

After create index.js, you need to modify the `package.json` by editing the **main** script:

```bash
"main": "src/index.js",
```

## Finally you can run the app!

Now, after done all configurations! You can run the application by typing `npm start`! Now you can see your desktop application!

## Learn More

To learn more about Electron.js, take a look at the following resources:

- [Electron.js Documentation](https://www.electronjs.org/docs/latest) - learn about Electron.js features and API.
- [Learn Electron.js](https://www.electronjs.org/docs/latest/api/app) - an interactive Electron.js tutorial.