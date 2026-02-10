import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import { router } from './routes/registrationRoute.js';
import { errorHandler } from './middleware/errorHandler.js';
import { dbConnection } from './config/dbConnection.js';
import { userRouter } from './routes/userRoutes.js';

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname,"..", "DataWiz", "dist")));
app.use(express.json())

//Database Connection
dbConnection();

//Registration middleware
app.use('/api/registrations', router)

//Admin Login middleware
app.use('/api/admin', userRouter)
//Centralized Error Handler
app.use(errorHandler)
//SPA callback
app.use((req, res) => {
    res.sendFile(path.join(__dirname,"..", "DataWiz", "dist", "index.html"))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

