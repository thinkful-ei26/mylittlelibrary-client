My Little Library is an inventory management tool for teachers. It is meant to give teachers a way to record and track the movement of educational materials in a student group. Picture a high school or elementary school teacher, with a closet full of supplemental teaching aides, such as models, posters, flash cards, books and other media. This is the target user.

The app is deployed at https://obscure-ridge-45179.herokuapp.com/

 In this first prototype My Little Library is configured to work with print material. It could easily extend to other resources.

 The app provides a student view, and a staff view. The student view is read-only, and lets students search a catalog of materials. A staff view, requiring account registration and log in, lets staff add, update and delete materials.

 A student can perform the following actions,
 1. Search a catalog by author, title or genre.

 A teacher can perform the following actions,
1. Create an account with user credential.
2. Access a restricted view upon login.
3. Add new items to the catalog.
4. Update items in the catalog.
5. Remove items from the catalog.



 My Little App uses React and Redux on the front end, and a Mongo database on the back end, configured with Mongoose.

 