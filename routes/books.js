var express = require("express");
var router = express.Router();
var Book = require("./../models/Book");
var bookController = require("../controller/bookController");

// Routes for CRUD operation on books

router.post("/", bookController.newBook);

router.get("/", bookController.findAllBooks);

router.get("/:id", bookController.bookFindById);

router.put("/:id", bookController.bookFindByIdAndUpdate);

router.delete("/:id", bookController.bookFindByIdAndDelete)

module.exports = router;