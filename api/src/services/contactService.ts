import contactModel from '../models/contactModel';

const getAllContacts = async () => {
  return await contactModel.getAllContacts();
};

const createContact = async (data: { name: string, email: string, surname: string, phone: string, image: string }) => {
  if (!data.name || !data.email || !data.surname || !data.phone || !data.image) {
    throw new Error('Todos os campos são obrigatórios, incluindo a imagem.');
  }


  return await contactModel.createContact(data);
};

export default {
  getAllContacts,
  createContact,
};
