import { env } from "../env/client.mjs";


const graphQLAPI = env.NEXT_PUBLIC_GRAPHQL;




const fetchData = async (query: string, { variables = {} }, token?: string) => {
    const headers: { 'Content-Type': string, Authentication?: string } = {
        'Content-Type': 'application/json',
    }

    if (token) {
        headers.Authentication = `Bearer ${token}`
    }

    const res = await fetch(graphQLAPI || '', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()

    if (json.errors) {
        throw new Error(json.errors)
    }


    return json

}


export default fetchData