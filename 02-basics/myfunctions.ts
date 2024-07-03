function addTwo(num: number) {
    return num + 2;
}

function getUpper(val:string) {
    return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean) {
    console.log(name, email, isPaid);
}

let loginUser = (name: string, email: string, isPaid: boolean = false)=>{}

addTwo(5)  
getUpper("s")


signUpUser("praveen", "praveeen@mail.com", false)

loginUser("h", "h@h.com")