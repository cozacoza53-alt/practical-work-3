import { getUsers } from "./api.js";
import { filterUsers, sortUsers } from "./utils.js";

async function main() {
    try {
        const users = await getUsers();

        const filteredUsers = filterUsers(users, "Gwenborough");

        const sortedUsers = sortUsers(filteredUsers);

        const list = document.getElementById("users");

        sortedUsers.forEach(user => {
            const li = document.createElement("li");

            li.textContent = user.name + " — " + user.address.city;

            list.appendChild(li);
        });

        console.log(sortedUsers);

    } catch (error) {
    console.error("Не вдалося виконати програму:", error);
    const list = document.getElementById("users");
    list.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = "Помилка: " + error.message;
    list.appendChild(li);
    }
}

main();
