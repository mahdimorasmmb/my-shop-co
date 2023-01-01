import fetchData from "../helpers/fetchdata"
import { HomepageProductQuery } from "./HomepageProductQuery"


export const getHomepageProduct = async () => {
    const data = await fetchData(HomepageProductQuery,
        {
            variables: {}
        }
    )

    return data.data.product
}