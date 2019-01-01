Make an API call to mongodb://<dbuser>:<dbpassword>@ds215172.mlab.com:15172/library-app.
1. From searchbar.js make a fetch call, nested inside loadBooks(), which renders the database on page load.
2. The fetch method populates the book state, with book objects from the database and makes the objects available generally as the array this.state.books. This array can then be iterated on to extract specific elements, such as book.title or book.author.
3. in searchbar.js
    a. The client calls the server (using fetch), the server calls the db. 
    b. The database is rendered to the output area.
4. Build a dynamic query such that will return items based on input. For example, searching 'The Wise' should retrun the object{ title:"The Wise Mans Fear (The Kingkiller Chronicle, #2)",
author:"Mary Sue"}, which i then will format. How? Go find examples. We did this somewhere back...i think in noteful. go looking, and if i don't find anything, put in a ticket. notev4 does a search on notes. It does it on the server route using regex on the get call.

router.get('/', (req, res, next) => {
  const { searchTerm, folderId, tagId } = req.query;
  const userId = req.user.id;

  let filter = { userId };

  if (searchTerm) {
    const re = new RegExp(searchTerm, 'i');
    filter.$or = [{ title: re }, { content: re }];
  }

  if (folderId) {
    filter.folderId = folderId;
  }

  if (tagId) {
    filter.tags = tagId;
  }

  Note.find(filter)
    .populate('tags')
    .sort({ updatedAt: 'desc' })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});