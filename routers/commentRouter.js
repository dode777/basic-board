const express = require('express');
const commentRouter = express.Router();

const { postComment, editComment, deleteComment } = require('../controllers/commentController');

commentRouter.post('/:postId([0-9a-fA-F]{24})', postComment);
commentRouter.post('/:postId([0-9a-fA-F]{24})/:commentId([0-9a-fA-F]{24})/edit', editComment);
commentRouter.post('/:postId([0-9a-fA-F]{24})/:commentId([0-9a-fA-F]{24})/delete', deleteComment);

module.exports = commentRouter;
