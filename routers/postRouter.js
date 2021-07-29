const express = require('express');
const postRouter = express.Router();

const {
  getAllPost,
  getWrite,
  postWrite,
  getOnePost,
  getEditPost,
  postEditPost,
  deleteOnePost,
  deleteAllPost,
} = require('../controllers/postController');

// 모든 게시글 조회
postRouter.get('/', getAllPost);

// 게시글 작성 GET / POST
postRouter.get('/post', getWrite);
postRouter.post('/post', postWrite);

// 게시글 전체 DELETE - 임시
postRouter.delete('/post/all', deleteAllPost);

// 특정 게시글 GET / DELETE
postRouter.get('/post/:postId', getOnePost);
postRouter.delete('/post/:postId', deleteOnePost);

// 게시글 수정 GET / POST
postRouter.get('/post/edit/:postId', getEditPost);
postRouter.post('/post/edit/:postId', postEditPost);

module.exports = postRouter;
