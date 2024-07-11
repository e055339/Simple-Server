import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const appDirectory = process.cwd(); // 當前工作資料夾

// 設定靜態文件路徑
app.use(express.static(path.join(appDirectory, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(appDirectory, 'public', 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}