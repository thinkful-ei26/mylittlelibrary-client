My Little Library is an inventory management tool for teachers. It provides a way to record and track the movement of educational materials in a student group. In  elementary or high school settings, teachers often have shelves or a closet full of supplemental, teaching materials. These could include anatomy models, posters, flash cards, hardware and electronics, or books and other media. Some of these materials may belong to the teacher and others may be school property. Keeping track of it all is an ongoing challenge for busy teachers.

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

My Little App uses React and Redux on the front end, and a Mongo database on the back end, configured with Mongoose.
