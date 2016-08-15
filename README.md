# NZ_YumE
It is a story about a web application which doesn't directly interact with browser...
Yes, I mean it.

## Project overview
* browser -> emulator -> application
* emulator and application are both web apps
* application has no knowledge of the browser
* It means the application should have no HTML so it needs to render the UI via the emulator.
* This project heavily used Dependency injection, not only for the separation concern, but also enables fast coding thanks to the layers decouple. 
* It is really about how you manage the state of the application, but thanks to typescript, we can achieve it with confidence.

## Architecture Overview
* Data interfaces
    * IApp : an application should implement this interface, it's a contract between emulator and the application about how the application should render
        * IPage : to describe how to structure the page
            * IElement : an interface of how an element on the page should looks like 
            * IFunction : define the properties of a callback function
            * IListItem : a way on how the ListItem should be rendered
* Service interfaces
    * IActionService : the services exposes to the application from the emulator, handles all the functions that an app want
    * IStateService : a wrapper class around the IApp object
    * ISystemService : utilities for all the runtime emulator functions
    * ITemplatingService : DOM manipulation and some wrapper method of jQuery

## Directory Structure:
* dist: final production code distribution bundled by Webpack.
* temp: For debug only, NOT FOR PRODUCTION. Modules loaded by SystemJS. All the js compile via coding-time, we debug from this folder. 
* src: source codes, yes, it means I dislike the "app" convention...
* test: test cases

## Some files:
* tsconfig.json: configuration for typescript
* package.json: configuration for npm
* webpack.config.js: configuration for webpack
* design.txt: 1st edition of architecture design

## NPM Packages used:
* Webpack: For code bundling, actually it is so awesome and can replace gulp,browserify and systemjs in a whole.
    * css-loader: to load the css so webpack can interpret it.
    * extract-text-webpack-plugin: to save the bundled css in a file rather than create inline-styles.
    * awesome-typescript-loader: load .ts files and compiles to js so Webpack can bundle them.
* Typescript: to compile the code file on the fly to do some checking

## 3rd party libraries used:
* Bootstrap v4 RC3: Yes, the latest version.
    * Tether v1.3: a layout libraries which bootstrap rely on.
* jQuery v3: Dependency of bootstrap and our app
* OAuth.js and SHA1.js : Signature generating libraries from Netflix, since we need to make API call to Yelp via OAuth2 protocol.

## TODO
- [x] Architecture Design (paper Based)
- [x] NPM Packages init
- [x] Typescript configuration
- [x] Bundle System configuration (Webpack)
- [x] this is a complete item
- [x] All interfaces design
- [x] implementing services
- [x] optimizing the TemplatingService and SystemService for a better decouple
- [x] Running using Webpack bundle version
- [x] Running using SystemJS module version
- [x] implementing one page of the application
- [x] Testing and make it running so the whole design is safe
- [ ] implementing the rest application
- [ ] Assemble whole architecture
- [ ] integrating testing library 
- [ ] documenting
- [ ] testing