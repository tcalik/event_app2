# Fullstack Add Event App

## Node.js, Express, MySQL, React, Material UI


## To run this app

You will need Node and MySQL Server installed on your machine.

1. clone this repository using

`git clone`

2. Create an empty database on your MySQL server using the command

`CREATE DATABASE <name_of_your_db>`

3. Create a `.env` file in the main folder of this project. Use the `.env-example` template and change the values to fit your enviorment. `Sequelize` will create tables as needed in your database.

4. In the main folder run `npm install`, then run the same command in the `client` folder

5. To start the application run `npm run dev` in the main folder.

6. The application should now open in a new tab in your default browser, if it doesn't, navigate to ` http://localhost:3000 `

7. To close the application press ` Ctrl + C ` in your terminal.


## Testing
To run tests on this applications you can run `npm test` in the main folder to run tests on the backend, or navigate to the `client` folder and run `npm test` there to test the React frontend