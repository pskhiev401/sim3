module.exports = {
  userLogin: (req, res, next) => {
    console.log(req.body.e);
    const db = req.app.get('db');
    const { username, password } = req.body.e;

    db.add_user([username, password])
      .then(response => {
        // console.log('test', response);
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getAllPost: (req, res, next) => {
    const {username} = req.query
    // console.log('getAllPost HIT #####')
    const db = req.app.get("db");
    db.get_posts_by_user(username)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },

  updateContent: (req, res, next) => {
    console.log(req.params)
    console.log(req.body)
    const {username} = req.params
    const {editedContent} =  req.body
    const db = req.app.get("db");
    db.update_content([username, editedContent])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err));


  }
};
