import express from 'express';
import contactController from './controller/contactController';
const app = express();

app.use(express.json());

app.get('/contacts', contactController.getAllContacts);
app.post('/contacts', contactController.createContact);
app.delete('/contacts/:id', contactController.deleteContact); 
app.put('/contacts/:id', contactController.updateContact); 
app.put('/contacts/favorite/:id', contactController.favoriteContact); 

export default app;
