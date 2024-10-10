import express from 'express';
import contactController from './controller/contactController';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.get('/contacts', contactController.getAllContacts);
app.post('/contacts', contactController.createContact);
app.delete('/contacts/:id', contactController.deleteContact); 
app.put('/contacts/:id', contactController.updateContact); 

export default app;
