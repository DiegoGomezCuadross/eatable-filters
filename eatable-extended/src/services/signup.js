import apiFetch from "./api-fetch";


export async function signup(){

    const body = {
        "email": "tester10@mail.com",
        "password": "letmein"
    }

    try {
        const data = await apiFetch("/users",{body})
        console.log(await data)
    } catch (error) {
        console.log(error)
    
    }
}