const mongoose = require('mongoose');
// Mongoose 모듈 불러오기
require('dotenv').config();
// 환경 변수 사용

mongoose.connect(process.env.MONGO_URL, {
  // MongoDB 연결
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  // MongoDB 버전에 따라 발생하는 오류를 해결하기 위한 옵션
});

const db = mongoose.connection;

const handleConnection = () => {
  console.log('✅ DB is connected!');
};
const handleError = (err) => {
  console.log(`Error on DB: ${err}`);
};

db.once('open', handleConnection);
// DB 정상 연결 시 handleConnection 함수 실행
db.on('error', handleError);
// DB 에러 발생 시 handleError 함수 실행
