import { ApolloClient, InMemoryCache } from "@apollo/client";


export const getClient = ()=>{
    const client = new ApolloClient({
        url: process.env.API_URL,
        cache: new InMemoryCache(),
        headers:{
            Authorization: `apikey ${process.env.NEXT_PUBLIC_SPEPZEN_API_KEY}`,
        },
    })
    return client;
}