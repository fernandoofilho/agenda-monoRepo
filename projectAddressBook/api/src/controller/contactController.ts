import { Request, Response } from "express";
import contactService from "../services/contactService";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.resolve(__dirname, "../../../src/assets/");

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

const getAllContacts = async (req: Request, res: Response) => {
  const users = await contactService.getAllContacts();
  res.json(users);
};

const createContact = async (req: Request, res: Response) => {
  const { name, email, surname, phone } = req.body;
  if (!req.file) {
    res.status(400).json({ message: "Imagem obrigatória" });
  } else {
    const image = req.file.filename;
    const newUser = await contactService.createContact({
      name,
      email,
      surname,
      phone,
      image,
    });
    res.status(201).json(newUser);
  }
};
const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  await contactService.deleteContact(Number(id));
  res.status(204).send();
};

const updateContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, surname, phone, image } = req.body;

  const updatedContact = await contactService.updateContact(Number(id), { name, email, surname, phone, image });
  res.status(200).json(updatedContact);
};


export default {
  getAllContacts,
  createContact: [upload.single("image"), createContact],
  deleteContact,
  updateContact,
};
