gh-pages-boilerplate
========
[![devDependency Status](https://david-dm.org/axe312ger/gh-pages-boilerplate/dev-status.svg)](https://david-dm.org/axe312ger/gh-pages-boilerplate#info=devDependencies)

This is a slim boilerplate for small sites and projects which will be hosted on github.io. It is basically a simple but feature rich gulp workflow including automatic deployment to GitHub Pages.

## Features
* HTML code is written in the readable and clean [jade](http://jade-lang.com/) templating engine.
* Styling via CSS was never so fast and easy as with [libsass](http://libsass.org/) and [autoprefixer](https://github.com/postcss/autoprefixer). The Compass time is over, sorry.
* Live reload, even without browser addon.
* JS linting, keep your code valid and clean!
* Images get optimized in file size without any quality loss via [imagemin](https://github.com/imagemin/imagemin).
* Single command deployment to [GitHub Pages](https://pages.github.com/).
* JS & CSS code is automatically minified before deployment. 
* Clean and simple folder structure.
* Basically you can just clone the repo and start working. Use the whole repo, copy parts or extend it. It's your decision.

New ideas, issues and pull requests are very welcome.

## Install
Copy the files from this repo and use npm & bower to install all dependencies.
```
$ npm install && bower install
```

## How it works
### Development
```
$ gulp
```
Starts the webserver, transpiles the sass files, lints the javascript files and minifies images. This also starts the watch process to keep your files up to date.

It will also open a new tab with the server url.

### Deployment
```
$ gulp deploy
```
Optimises the content of your dist directory by minifying the stylesheets and js scripts and pushes the result to the "gh-pages" branch.
