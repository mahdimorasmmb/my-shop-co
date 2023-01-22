import fetchData from "../helpers/fetchdata"
import { HomepageCategoriesQuery } from "./HomepageCategoriesQuery"
import { HomepageProductQuery } from "./HomepageProductQuery"
import { ProductPageQuery } from "./ProductPageQuery"


export const getHomepageProduct = async () => {
    const data = await fetchData(HomepageProductQuery,
        {
            variables: {}
        }
    )

    return data.data.products
}
export const getHomepageCategories = async () => {
    const data = await fetchData(HomepageCategoriesQuery,
        {
            variables: {}
        }
    )
   

    return data.data.categories
}

export const getProductPage = async (variables={}) => {
    console.log(variables);
    
    const data = await fetchData(ProductPageQuery,
        {
            variables
        }
    )
   

    return data.data.products
}