/***********NODE PACKAGE MANAGER ********/

/*
The most popular package manager is Node Package Manager, or NPM, which is the default package manager for Node.js. Its command-line tool, npm, is even included in the Node.js installation process. This tool enables developers to download and manage packages via the terminal. 


    1. Downloads and installs the packages to be used as dependencies on a project.
    
    2. Checks the packages to make sure they don’t have any known vulnerabilities.
    
    3. Checks if packages can be updated to a newer version.
    handles all of the packages’ sub-dependencies.
    
    4. Cleanly removes all the files of a package when it’s no longer needed.
    
    5. Provides a repeatable and consistent process of installing dependencies for you and your teammates.

*/

/** 1. INITIALIZATION **/
npm  init

// 
npm  init -y
/**
 * To initialize a new app.
 * To handle project’s name, version number, description and much more
 * A package.json file will be generated with the information listed in JSON format!
 */

/** 2. NODEMON **/
npm i nodemon
// tool used to automatically restart a program when a file changes, alleviating the need to do so manually each time you save a file.
