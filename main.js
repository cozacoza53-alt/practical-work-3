import { getUsers } from "./api.js";
import { filterUsers, sortUsers } from "./utils.js";

async function main() {
    try {
        // Завантажуємо користувачів
        const users = await getUsers();

        // Фільтруємо за містом
        const filteredUsers = filterUsers(users, "Gwenborough");

        // Сортуємо за ім'ям
        const sortedUsers = sortUsers(filteredUsers);

        // Виводимо результат на сторінку
        const list = document.getElementById("users");

        sortedUsers.forEach(user => {
            const li = document.createElement("li");

            li.textContent = user.name + " — " + user.address.city;

            list.appendChild(li);
        });

        console.log(sortedUsers);

    } catch (error) {
        console.error("Не вдалося виконати програму:", error);
    }
}

main();
