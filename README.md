# Data sync to google sheet

 In this project i make a web where if the data was update into the database the 
 if the we click to sync button the data  was sync to google sheet.
 also the same time google sheet link copy on to the clipboard.


# Table of Content

Api Endpoint
Backend Setup
FrontEnd Setup
Taech Stack

NOTE - in backend add your google sheet api credentials.json file inside the backend folder 

# Api Endpoint

post - / 
 Description - getting the user details form the backend and calling a fuction where this funcion sync the data to the google sheet and return a respoce then the we send the sheet link to the json.

Request - in request here a just simple get request.
Response -



# Backend Setup

1.  Clone the Repo.
    git clone 
    cd backend

2.  Install dependencies.
    npm install

3.  Start the mongodb (Insue the mongdb run localy)

4.  Run the Server
    node app.js

5.  Server is running on port:- http://localhost:8080

# Frontend Setup

1. Navigate to frontend Folder
   cd ../frontend

2. Install dependencies
   npm install

3. Start React Server
   npm run dev

4. Frontend running on prt : http://localhost:5173

# Tech Stack

Frontend - React.js , Tailwind Css,react toastify  
 Backend - Node.js , Express.js ,Google Sheet Api
Database - MongoDb
