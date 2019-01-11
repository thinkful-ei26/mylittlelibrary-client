My Little Library is an inventory management tool for teachers. It provides a way to record and track the movement of educational materials in a student group. In elementary or high school settings, teachers often have shelves or a closet full of supplemental, teaching materials. These could include anatomy models, posters, flash cards, hardware and electronics, or books and other media. Some of these materials may belong to the teacher and others may be school property. Keeping track of it all is an ongoing challenge for busy teachers.

- The app is deployed at https://obscure-ridge-45179.herokuapp.com/
- Front end code review at https://github.com/thinkful-ei26/mylittlelibrary-client.git
- Back end code can be reviewed at https://github.com/thinkful-ei26/mylittlelibrary-server.git

In this first prototype My Little Library is configured to work with print material. It could easily extend to other resources.

The app provides a student view, and a staff view. The student view is read-only, and lets students search a catalog of materials. A staff view, requiring account registration and log in, lets staff add, update and delete materials.

A student can perform the following actions,

1.  Search a catalog by author, title or genre.

A teacher can perform the following actions,

1. Create an account with user credential.
2. Access a restricted view upon login.
3. Add new items to the catalog.
4. Update items in the catalog.
5. Remove items from the catalog.

TECH STACK
My Little App uses React and Redux on the front end, and a Mongo database on the back end, configured with Mongoose.

The client makes use of react-router-dom navigation tools. Views to register a new account and login, as well as views to update the database make use of redux-form tools.


GUIDE TO COMPONENTS:

1.  index.js is the main rendering component. It renders App.js and wraps it in react-redux and react-router-dom
2.  In App.js I import the  main child components and wrap them in Route's to facilitate navigation within the app.
3.  main-view.js holds all the logic and state for a search function (it is non-redux), which gets imported and used in several views. The component queries the database with fetch, and renders the results.
file:///home/jimmy/Pictures/Screenshot%20from%202019-01-11%2015-20-45.png

4. The login and registration forms both make use of input.js which renders the input fields and captures the input values. 
    a. The registration component makes use of a registerUser action (action/users.js) to fetch the ajax call to POST a new user, and then logs that new user into the staff-view.
    b. The login-form component relies on the actions/auth actions to verify web tokens and authenticate users.
file:///home/jimmy/Pictures/Screenshot%20from%202019-01-11%2015-22-04.png

5. On successful loging staff-view.js is rendered. This is a navigation portal to crud operations. 
    a. The add-view.js, edit-view.js and delete-view.js components all work in a similar way. They each
        - render an input form and capture input values.
        - apply validation to select fields (defined in, and imported from src/validators.js)
        - make an ajax call and evalutate the response.
        - message the user.

file:///home/jimmy/Pictures/Screenshot%20from%202019-01-11%2015-23-17.png

HOW TO USE
- Download the front and back ends from the repositories linked above.
- npm install dependencies.
- You will need a mongo database, either locally or hosted. I use mlab here.
     
