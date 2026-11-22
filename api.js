export async function getUsers() {
    let response;
    try {
        response = await fetch("https://jsonplaceholder.typicode.com/users");
    } catch (error) {
        throw new Error("Мережева помилка: не вдалося з'єднатися з сервером");
    }

    if (!response.ok) {
        throw new Error("Помилка сервера: " + response.status);
    }

    try {
        return await response.json();
    } catch (error) {
        throw new Error("Отримано невалідний JSON");
    }
}