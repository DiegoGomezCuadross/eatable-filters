import apiFetch from "../api-fetch"


export async function update(body = {
    "name": "New Name",
    "phone": "2235652301",
    "address": "Francia"
}){

    const {token, ...user} = await apiFetch("/profile",{body, method:"PATCH"})
    console.log(user);

    return user;
}