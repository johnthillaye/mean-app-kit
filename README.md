# mean-app-kit


## How to use

	[Install MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-debian/)

	Clone this repo

	````
	$ git clone https://github.com/johnthillaye/mean-app-kit
	$ cd mean-app-kit
	````

	Install dependencies and build app
	````
	$ npm install
	$ bower install
	$ gulp build
	````

	Launch Server (listens by default on `localhost:3000`) 
	````
	$ node app.js
	````

## Stack

	Back-End:
	* Server: Node.JS + Express
	* Database: MongoDB + Mongoose
	* View Engine: EJS
	* Package Manager: NPM

	Front-End:
	* Web: AngularJS + jQuery
	* CSS: Bootstrap
	* Utils: lodash
	* Package Manager: Bower

	Tools:
	* Build: Gulp


## To Do

	* Add Gulp Tasks for API endpoints creation (route, mongose model, pipe)
	* Modify routescan module for better method handling