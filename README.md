# 201GroupProject

## Setting up the text stack

This project uses a React frontend and Java Servlet backend with MySQL database.\

### 1. download the React app

Clone this repo and run 'npm install' to download all the dependencies.

### 2. download the Java backend

Clone the repo at [https://github.com/zmerchant17/Assignment4Backend](https://github.com/zmerchant17/Assignment4Backend).\
It doesn't matter what folder the repo is on your computer.\

Import the Dynamic Web Project into Eclipse.\
Open up the Constants.java file and paste your JDBC SQL url into the String variable.\
This allows the servlets to connect to the SQL database on your computer.\
NOTE: where it says password, replace it with your SQL Workbench password you set up.\

### 3. create the MySQL database

In the backend repo, open the file titled 'database.sql'.\
Copy all that code.\
Start your SQL server and open MySQL Workbench.\
After typing in your password, go to 'schemas' and create a new one.\
Name that schema 'project' and click 'Apply'.\
On the next page, past all the code from database.sql into there and save.\
This will create a schema with all the neccesary tables and names.\



## Connecting the back and front ends

### 1. run the React app

Do 'npm start' in the terminal to run the app in the development mode.\
NOTE: make sure you are inside the 'frontend' folder.\
The react app will run on localhost using port 3000: [http://localhost:3000](http://localhost:3000) \

### 2. start the backend server

Run the backend project you imported into eclipse using Tomcat.\
Find the port your Tomcat server is running on (most likely it will be 8080, but just make sure).\
Then go back to the React app and navigate to the 'axios.js' file (src -> api -> axios.js).\
Depending on what port your Tomcat server is on, change the 'baseURL' to match the port.\
This allows axios to find the endpoints our servlet is creating.\

### 3. test the app

You should still be able to make changes to the App and Java backend while both servers are running.\
You can test features like login by adding values into your database through workbench and testing the verification in the login form.\

## Troubleshooting

### CORS Error

If you get an error that says something like:  
'Access to XMLHttpRequest ... from origin ... has been blocked by CORS policy..."\
This just means there is some Cross Origin errors from communicating on two different ports.\
I have not figured out if this is a backend or frontend issue yet but was able to bypass the problem by diabling CORS in chrome.\
To do this: \
1. open your computer terminal \
2. run this command: \
'open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security'
3. a new chrome tab should open up and you can just reopen the app by going to [http://localhost:3000](http://localhost:3000).

