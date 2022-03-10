# :herb:ReLoved

:link: https://reloved.netlify.app/

This App provides a platform that allows the user through a REST API to perform CRUD operations such as (create, read, update, delete) for the back-end data base.For the user interface our frontEnd will serve the information and allow you to display the new data created by the user by re-rendering React.js components.

![demo](public/gif/reloved.gif "reloved demo" )

# :recycle:Motivation

Our motivations for developing the app was to apply all the knowledge acquired over our time learning at the School of Code and testing our knowledge Working in a team of six  to deliver the app within the time given by implementing agile software development methodologist. Also developing valuable software that aims to contribute to minimize one of the main problems for global environment that is the problem of consumption.
## :interrobang: The Problem 

We live in a world where as each day or year goes by, the planet we live in is being destroyed by the millions of tonnes of waste that could instead be recycled. 
Our goal is to help make our world a more sustainable place, and we are doing that by helping our users exchange and give away free items that they would otherwise throw away. 


## :art: Design

This [Figma ](https://www.figma.com/file/4a4pAmlYiymqzVMmP4yP0t/Partners-in-Code?node-id=0%3A1 "Figma") link will take you to our high-fidelity wire framework.



## :computer: Tech Stack


Front-end     | Back-end     
------------- | -------------
React         | Node.js
CSS           | Heroku
Auth0         | PostgreSQL
DropBox       | DropBox
Chakra-UI     | 

## :dvd: App Installation

:iphone: For the front end repository 

Make a project directory, clone this repository and initialise the project.
This will install all the necesary packages to run the frontend in your local machine.

* :one: ` cd into the project directory folder created before`
* :two: git clone https://github.com/SchoolOfCode/final-project-front-end-partners-in-code.git`
* :three: `npm install `
* :four: `npm start `

:wrench: For the back end repository 

Before run the app you will need to provide the data to connect to your database in the .env file.The app provides an example file with the structure. This app uses a postgresql database. You can create one online for free in Heroku or install postgresql in your computer. Once you have your database created,run the next scripts to create the table and populate the data:

This [Heroku ](https://www.heroku.com/ "Heroku") link will take you to Heroku website where you can create your database.

Create another project directory, clones this repository and initialise the project.
* :one: ` cd into the project directory folder created before `
* :two: git clone https://github.com/SchoolOfCode/final-project-api-partners-in-code.git`
* :three: `npm install `
* :four: `add your Heroku information to a .env file where your will link your database to the project `
~~~
*Create a table items into the database

  `npm run db:createusers`
//Will create an empty table in your database with all the variables needed for the app.
  `npm run db:populateItems`
//Will insert mock data into the database.This data is store in a file in db/libs/items.js
  `npm run db:truncateTable`
//Will delete all the contents of the table. 
  `npm run db:dropTable`
//Will delete the table and all its contents. 
~~~

# :file_folder: Features

#### Authentication 
User Authentication through the implementation of Auth0.

#### Create Items

#### Alerts

####
## API Routes

<!-- - (GET) Returns HomePage: localhost:3000  -->
- (GET) Returns All Items: localhost:3000/
- (GET) Returns Item by ID: localhost:3000/:id 
- (POST) Creates new item in the database: localhost:3000/


## Table of Contents

- What Problem our app is Solving
- Tech Stack
- App Installation
- Features
- API Routes 
- Design


