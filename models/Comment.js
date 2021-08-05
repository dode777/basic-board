const mongoose = require('mongoose');

const days = ['월', '화', '수', '목', '금', '토', '일'];
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const dayNum = new Date().getDay();
const day = days[dayNum];
const h = new Date().getHours();
const m = new Date().getMinutes();

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Types.ObjectId,
    ref: 'Post',
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  writer: {
    type: String,
    default: '익명',
    trim: true,
  },
  password: {
    type: Number,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String,
    default: `${year}, ${month}월 ${date}일 ${h}:${m}`,
  },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
