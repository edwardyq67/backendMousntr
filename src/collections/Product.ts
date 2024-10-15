import { CollectionConfig } from 'payload/types'

const Product: CollectionConfig = {
  slug: 'product',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
{name:"name",
    type: "text",
    required: true,
    label: "Nombre"
},
{name:"description",
    type: "richText",
    label: "Descripción",
    required: true,
},
{name:"price",
    type: "number",
    required: true,
},
{name:"image",
    type: "upload",
    relationTo:'media'
},
  ],
}

export default Product
