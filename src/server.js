import router from './router.js';
import express from 'express';
const PORT = 5000;
const app = express();
app.use(express.json());
app.use('/api', router);
app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}`);
});