export const ProductPageQuery = `#graphql
query ProductPage($product_slug:String){
    products (filter:{slug:{_eq:$product_slug}}) {
       slug
       id
       product_name
       price
       product_description
       product_image {
        directus_files_id {
            id
        }
       } 
       product_categories {
        categories_id {
            id
            slug
            category_name
        } 
       }
       quantity
       product_color {
        color_id {
            color_name
            id
            slug
            code_color
        }
       }
       product_size {
        size_id {
            id
            short_name
            size_name
            
        }
       }
    }
}
`;
