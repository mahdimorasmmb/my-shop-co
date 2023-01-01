

export const HomepageProductQuery = `#graphql
query HomepageProduct {
    products {
       id
       product_name
       price
       product_image {
        id
       } 
       product_categories {
        categories_id {
            id
            category_name
        }
       }
    }
}
`