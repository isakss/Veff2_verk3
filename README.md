# Sambland

Sambland is a project developed in order to put the basis of Angular 2 into practice. The project consists of a web based store, where the user can add sellers and products.

## Getting Started

In order to make use of this application you need to have the latest version of Angular 2 installed. To check wether you have Angular 2 installed you can run the following command in your terminal:

```
ng version
```
If you do not in fact have Angular 2 installed then you will need to install it via your favorite package manager, such as npm or bower. In order to install npm you can get it by downloading Node from this page https://nodejs.org/en/download/.

Once you have installed npm on your system, you can install the angular-cli globally on your system by running the following command in your terminal:

```
npm install -g angular-cli
```

Now you should be able to verify that you have Angular 2 installed by running the very first command suggested above. Once Angular has been installed you can clone the repository, make sure to run the following command in the root of your project folder to make sure you have all the dependencies installed:

```
npm install
```

And then run the following command to launch the website on a localhost:

```
ng serve
```

This web application makes use of a server in a file called index.js, to run it go to the server folder in the project and run:

```
node index.js
```

You should have everything in you hands to get started at this point, this application is tested using karma and jasmine, which are built into the angular-cli, and makes use of bootstrap and toastr dependencies for css enhancing purposes.


