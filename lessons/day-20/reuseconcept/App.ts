import UserAPI from './UserAPI'

main();

async function main() {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const userAPI = new UserAPI(baseUrl);

    const allUsers: any[] = await userAPI.getUsers();
    console.log(allUsers);
    const user = {
        name : "Teo codon",
        password: "aicungbiet"
    }
    const createUser = await userAPI.createAUser(user);
    console.log(createUser);
}