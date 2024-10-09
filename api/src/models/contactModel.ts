import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAllContacts = async () => {
  return prisma.person.findMany();
};

const createContact = async (data: { name: string, email: string, surname: string, phone: string, image: string }) => {
  return prisma.person.create({ data });
};

export default {
  getAllContacts,
  createContact,
};
