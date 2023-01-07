

export const HomepageProductQuery = `#graphql
query HomepageProduct {
    products {
       id
       product_name
       price
       product_image {
        directus_files_id {
            id
        }
       } 
       product_categories {
        Category_id {
            id
            slug
            category_name
        }
       }
    }
}
`