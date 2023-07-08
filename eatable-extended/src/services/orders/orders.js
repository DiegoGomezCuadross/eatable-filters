import apiFetch from "../api-fetch";

export async function orders(){
    const listOrders = await apiFetch("/orders")  
    
    console.log( listOrders);
        
    return listOrders;
}