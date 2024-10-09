import { Request, Response } from 'express';
import contactService from '../services/contactService';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); 
  }
});

const upload = multer({ storage });

const getAllUsers = async (req: Request, res: Response) => {
  const users = await contactService.getAllContacts();
  res.json(users);
};

const createUser = async (req: Request, res: Response) => {
  const { name, email, surname, phone } = req.body;
  if (!req.file){
    res.status(400).json({message: "Imagem obrigatória"})
  }
  else{ 
    const image = req.file.filename; 
    const newUser = await contactService.createContact({ name, email, surname, phone, image });
    res.status(201).json(newUser);
  }
};

export default {
  getAllUsers,
  createUser: [upload.single('image'), createUser] 
};
