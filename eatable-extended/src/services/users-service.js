import apiFetch from "./api-fetch";


export async function signup(body = {
    "email": "tester10@mail.com",
    "password": "letmein"
}){
    const {token, ...user} = await apiFetch("/users",{body})

    sessionStorage.setItem(tokenKey,token)
    
    console.log(user);
    
    return user;
}

export async function show(){
    const {token, ...user} = await apiFetch("/profile")

    console.log(user);
    return user;
}

export async function update(body = {
    "name": "New Name",
    "phone": "2235652301",
    "address": "Francia"
}){

    const {token, ...user} = await apiFetch("/profile",{body, method:"PATCH"})
    console.log(user);

    return user;
}

