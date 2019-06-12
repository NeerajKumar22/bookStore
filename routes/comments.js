var express = require("express");
var router = express.Router();
var Comment = require("./../models/Comment");
var commentController = require ("../controller/commentController");

// Routes for CRUD operation on comments

router.post("/:bookId/comments", commentController.newComment);

router.get("/:bookId/comments", commentController.findAll);

router.get("/:bookId/comments/:id", commentController.findOne);

router.put("/:bookId/comments/:id", commentController.commentUpdate);

router.delete("/:bookId/comments/:id", commentController.commentDelete);

module.exports = router;
