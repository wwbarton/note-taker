const router = require("express").Router();
const store = require("../db/store");
//create routes that get notes, post notes,
// /api/notes
router.get("/notes", (req, res) => {
  store.getNotes().then((notes) => {
    return res.json(notes);
  });
});
// /api/notes
router.post("/notes", (req, res) => {
  store.addNotes(req.body).then((note) => res.json(note));
});
module.exports = router;
