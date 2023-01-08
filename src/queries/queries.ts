import fetchData from "../helpers/fetchdata"
import { HomepageCategoriesQuery } from "./HomepageCategoriesQuery"
import { HomepageProductQuery } from "./HomepageProductQuery"


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