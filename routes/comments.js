var express = require("express");
var router = express.Router();
var Comment = require("./../models/Comment");
var commentController = require ("../controller/commentController");

// Routes for CRUD operation on comments

router.post("/", commentController.newComment);

router.get("/", commentController.findAll);

router.get("/:id", commentController.findOne);

router.put("/:id", commentController.commentUpdate);

router.delete("/:id", commentController.commentDelete);

module.exports = router;
