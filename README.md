gh-pages-boilerplate
========
This is a slim boilerplate for small micro sites hosted on github.io. It contains a rich gulp based workflow including features like sass transpilation, js linting, image minification and automated deployment to github.

## Install
Copy the files from this repo and use npm & bower to install all dependencies.
```
$ npm install && bower install
```

## How it works
```
$ gulp
```
Starts the webserver, transpiles the sass files, lints the javascript files and minifies images. This also starts the watch process to keep your files up to date.
```
$ gulp deploy
```
Optimises the content of your dist directory by minifying the stylesheets and js scripts and pushes the result to the "gh-pages" branch.