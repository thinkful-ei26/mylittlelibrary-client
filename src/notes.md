1/9/19 TODO:
* From add-view delete-view update-view, navigate back to stagg-view (not login-view) DONE
* From main-view, return 'Sorry, no matches found' message. DONE
* From add-view. delete-view, update-view message success/failure response to user.
* From delete-view move delete button
* Build logout from staff-view
* Reset input fields after submissions


1/8/19
* Shrink pw length
* On registration success, render login view. //DONE passed history prop to child reg-form, from parent reg-page 
* On login success, go to staff view //DONE
* On login fail, message user  //DONE
* On search, render the book id, so that staff can take the id and use it in delete or update. //DONE
* On search fail, message 'Sorry no match found'.(select === 'author') {
      field = 'author';
      // filter. $or[{author: re}];
    } else if (select === 'title') {
      field = 'title';
    } else {
      field = 'genre';
    } 
* Style, align //DONE
* From resgister page, hide login button //DONE






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


//************TODO

  