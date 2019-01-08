* shrink pw length
* On registration success, render login view. //DONE passed history prop to child reg-form, from parent reg-page 
* On login success, go to staff view //DONE
* On login fail, message user  //DONE
* On search, render the book id, so that staff can take the id and use it in delete or update. //DONE
* On search fail, message 'Sorry no match found'.
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

  