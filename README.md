# QiaoQiao Prototype

This is a prototype for the QiaoQiao website using react.semantic-ui

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Running

```bash
$ npm install
$ npm start
```

The server should be live at <http://localhost:3000>.

## Building for production

```bash
$npm run build
```

This should place the production files to upload the the webserver in the build directory

## How to get tools needed for this project

### Install `semantic-ui` and `semantic-ui-react`

```bash
$ npm install --save semantic-ui-react 
$ npm install --save-dev semantic-ui
```
Follow the prompts for the `semantic-ui` package, choosing the most customizable option, which saves to the project directory. There's also the option to leave the `semantic/` directory in `node_modules/`, which would result in no additional project directory files at the expense of not being able to specify a different Semantic UI theme. With these files in the project directory, theme customization can be done in `semantic/src/theme.config` and `semantic/src/themes/`. See [the Semantic UI usage docs](http://react.semantic-ui.com/usage) for more information.

### Build and link the Semantic UI `dist/` files if using gulp


Semantic UI uses the tool `gulp` to build. If you do not have it, you may want to [install it globally](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). The following build steps must be done after every change to themes or other modifications to `semantic` itself.
```bash
$ (cd semantic && gulp build)
```

