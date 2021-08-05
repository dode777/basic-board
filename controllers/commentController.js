const Comment = require('../models/Comment');

const postComment = async (req, res) => {
  try {
    const {
      params: { postId },
      body: { comment, writer, password },
    } = req;

    await Comment.create({
      post: postId,
      comment,
      writer,
      password,
    });

    res.redirect(`/board/post/${postId}`);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const editComment = async (req, res) => {
  try {
    const {
      params: { postId, commentId },
      body: { comment, password },
    } = req;

    const targetComment = await Comment.findOne({ post: postId, _id: commentId });

    if (password == targetComment.password) {
      targetComment.comment = comment;
      targetComment.save();
      res.redirect(`/board/post/${postId}`);
    } else {
      res.status(403).send({ ERROR: '비밀번호가 올바르지 않습니다.' });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const {
      params: { postId, commentId },
      body: { password },
    } = req;
    const comment = await Comment.findOne({ _id: commentId, post: postId });
    console.log(comment);
    if (password == comment.password) {
      await Comment.findOneAndDelete({ _id: commentId, post: postId });
      res.redirect(`/board/post/${postId}`);
    } else {
      res.status(403).send({ ERROR: '비밀번호가 올바르지 않습니다.' });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { postComment, editComment, deleteComment };
