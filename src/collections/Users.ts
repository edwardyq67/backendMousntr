import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'firstName', // Campo para el nombre
      type: 'text', // Tipo de campo
      required: true, // Campo obligatorio
    },
    {
      name: 'lastName', // Campo para el apellido
      type: 'text', // Tipo de campo
      required: true, // Campo obligatorio
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
