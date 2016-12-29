# Trestlemedia Toolkit

> A full featured toolkit for compiling js, sass and styleguide

#### Features
- Gulp
- Webpack
- [Fabricator](https://github.com/fbrctr/fabricator)
- Image minification
- Browser Sync

#### [Toolkit Demo](http://webpack.clientapp.com)


## Quick Start

To create standalone directory named toolkit inside your current folder

```shell
git clone https://github.com/rayestrada/toolkit.git
cd toolkit
npm build
```

To add toolkit files to current folder
```shell
git init
git remote add origin https://github.com/me/name.git
git pull origin master
npm build
```

To remove git tracking on the toolkit so you can track your instance independently

```shell
rm -rf .git
rm .gitignore
```


## Compiling

**Development**: Starts a watch of the toolkit files and initializes Browser Sync 
```shell
gulp --dev
```

**Production**: Compiles and minifies files for packaging
```shell
gulp
```


## Javascript

**Some Notes on...**
- how webpack is being used
- how to add new plugins/modules
- where to locate/write scripts
- how jquery can be used or included
- promote no script fallback best practices


## Styleguide

**Some Notes on...**
- Organization/location of files
- how to add a new component or material
- uses [handlebars](http://handlebarsjs.com/expressions.html) syntax
- Read full [documentation of Fabricator](http://fbrctr.github.io/docs/)  


## Sass

**Some Notes on...**
- Organization using the atomic css modal
- Breakpoints
- promote accesibility best practices


## Node

- how to install a new node module
- how to uninstall a node module
- how to shrinkwrap