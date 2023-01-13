
# Chapter-2 Igniting our app
_____________________________________________________________________________________________________________

## Q:1 What is `NPM`?
Ans;
1. It is a tool used for package management and the default package manager for Node projects. 
2. Basically it does job of managing packages. We need npm in our project beacuse we need several packages to be there in our project.
3. It's an amazing configuration that npm run needs to run itself.
4. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' `npm` alternative is `yarn`
5. Way toiInitialize - npm init
6. `npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Q:2 What is `Parcel/Webpack`? Why do we need it?
Ans: 
1. Parcel/Webpack is type of a web application bundler used for development and productions purposes to power our application with different types of functionalities and features.
2. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. 
3. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
4. Bundler act as a catalyst.
We can't build just injecting react in our app. We need lots of super powers to make it production ready app.
There are lot more powers offered by bundler.

### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++, watches each file changes
* Bundling
* Minification
* Cleaning our code and code splitting
* DEV and production Build (Parcel differentiates dev and prod build)
* Super fast building algorithm
* Image optimization ( As sometimes images takes or media takes lots of time to load on page, parcel makes easy loading for this as well)
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration

Command for installing parcel - npm install -D parcel
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build: npx parcel <entry_point> 
    - For production build : npx parcel build <entry_point> 


## Q:3 What is `.parcel-cache`?
Ans: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Q:4 What is `npx`?
Ans: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.(npx = npm run)


## Q:5 What is difference between `dependencies` vs `devDependencies`? What is Transitive dependency ?
Ans: 
Dependencies - Dependency means your project is dependent on something and that can be library and framework in which your app is built on, needs to function effectively. Such as Vue, React, Angular, Express, JQuery and etc. 

DevDependencies -  are modules/packages a developer needs during development. Such as, parcel, webpack, vite, mocha. These packages are necessary only while you are developing your project, not necessary on production.
To save a dependency as a devDependency on installation we need to do - npm install --save-dev
instead of just, npm install --save

Transitive dependencies - Let's understand this with an example. React doesnot make your app fast and powerful alone itself. Like we have installed parcel as dev dependency , but parcel also depends on some other dependencies whick makes app fast by performing operations like minification, optimization, tree shaking, caching etc. When you check package-lock.json file, you will find parcel will have it's own dependencies and those dependencies can be dependent on some other dependencies, and this is known as "Transitive dependency".


## Q:6 What is Tree Shaking?
Ans: Tree shaking is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## Q:7 What is Hot Module Replacement?
Ans: Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.


## Q:8 List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
Ans: 5 superpowers of Parcel:
1. HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
2. File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
3. Minification - Minification is the process of minimizing code and markup in your web pages and script files.
4. Image optimization
5. Caching while development


## Q:9 What is `.gitignore`? What should we add and not add into it?
Ans: The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
package-lock.json should not add into your .gitignore file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```

## Q:10 What is the difference between `package.json` and `package-lock.json`
Ans: `package.json`: installed when you do npm init.
* This file is mandatory for every project.
* It contains basic information about the project.
* Application name/version/scripts.

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* Basically it locks the version. It tells the exact version what you are using.
* It is generated after an npm install.
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
committing the node_modules folder.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version.
* **^** : “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version.

If none of them is present , that means only the version specified in `package.json` file is used in the development.


## Q:11 Why should I not modify `package-lock.json`?
Ans: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.


## Q:12 What is `node_modules` ? Is it a good idea to push that on git?
Ans: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
Don't push `node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Q:13 What is the `dist` folder?
Ans: The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Q:14 What is `browserslist`?
Ans: Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.
You can it in package.json in below format -
"browserslist": [
    "last 10 versions"
  ],

