import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllContacts = async () => {
  return prisma.person.findMany();
};

const getContact = async (id: number) => {
  return prisma.person.findUnique({where:{id: id}});
};

const createContact = async (data: {
  name: string;
  email: string;
  surname: string;
  phone: string;
  image: string;
}) => {
  const existingContact = await prisma.person.findUnique({
    where: { email: data.email },
  });

  if (existingContact) {
    throw new Error('Email já está em uso.');
  }
  
  return prisma.person.create({ data });
};  

const deleteContact = async (id: number) => {
  return await prisma.person.delete({
    where: {
      id: id,
    },
  });
};

const updateContact = async (id: number, data: { name?: string, email?: string, surname?: string, phone?: string, image?: string }) => {
  return await prisma.person.update({
    where: { id: id },
    data: data,
  });
};

export default {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
  getContact
};
