import apiFetch from "../api-fetch";


export async function signup(body = {
    "email": "tester10@mail.com",
    "password": "letmein"
}){
    const {token, ...user} = await apiFetch("/users",{body})

    sessionStorage.setItem(tokenKey,token)
    
    console.log(user);
    
    return user;
}