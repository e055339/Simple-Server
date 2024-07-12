import express from 'express';
import path from 'path';
import userRouter from './routes/user.js';

const app = express();
const PORT = 3000;

const appDirectory = process.cwd(); // 當前工作資料夾

app.use(express.json()); // 解析req

// 設定靜態文件路徑
app.use(express.static(path.join(appDirectory, 'public')));

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(appDirectory, 'public', 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
