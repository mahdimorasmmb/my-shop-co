interface Category {
  id: string;
  status: string;
  sort: null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  category_name: string;
  slug: string;
}

// interface Image {
//     _key: string
//     _type: 'image'
//     asset: {
//         url: string
//     }
// }

interface Product {
  id: string;
  status: string;
  sort: null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  product_name: string;
  slug: string;
  product_description: string;
  product_image: [
    {
      directus_files_id: {
        id: string;
      };
    }
  ];
  price: number;
  stock: number;
  product_categories: [
    {
      categories_id: {
        id: string;
      };
    }
  ];
  quantity: number;
  product_color: Array<Color>;
  product_size:Array<Size>;
}

interface Color {
  color_id: {
    color_name:string
    id:string
    slug:string
    code_color:string
  };
}

interface Size {
  size_id: {
    id;
    short_name;
    size_name;
  };
}

// interface StripeProduct {
//     id: string;
//     amount_discount: number;
//     amount_subtotal: number;
//     amount_tax: number;
//     amount_total: number;
//     currency: string;
//     description: string;
//     object: string;
//     quantity: number;
//     price: {
//         unit_amount: number;
//     };
// }
