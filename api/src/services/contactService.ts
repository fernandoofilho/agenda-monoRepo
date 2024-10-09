import contactModel from "../models/contactModel";

const getAllContacts = async () => {
  return await contactModel.getAllContacts();
};

const createContact = async (data: {
  name: string;
  email: string;
  surname: string;
  phone: string;
  image: string;
}) => {
  if (
    !data.name ||
    !data.email ||
    !data.surname ||
    !data.phone ||
    !data.image
  ) {
    throw new Error("Todos os campos são obrigatórios, incluindo a imagem.");
  }

  return await contactModel.createContact(data);
};
const deleteContact = async (id: number) => {
  return await contactModel.deleteContact(id);
};
const updateContact = async (id: number, data: { name?: string, email?: string, surname?: string, phone?: string, image?: string }) => {
    return await contactModel.updateContact(id, data);
  };
export default {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact
};
