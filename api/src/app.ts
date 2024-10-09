import express from 'express';
import contactController from './controller/contactController';
const app = express();

app.use(express.json());

app.get('/contacts', contactController.getAllUsers);
app.post('/contacts', contactController.createUser);

export default app;
