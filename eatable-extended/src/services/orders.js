import apiFetch from "./api-fetch";

export async function orders(){
    let listOrders
    
    try {
        listOrders = await apiFetch("/orders")  
        console.log(await listOrders);
          
    } catch (error) {
        
    }
    return listOrders;
}