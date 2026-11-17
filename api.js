
export async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Помилка завантаження даних");
        }

        const users = await response.json();

        return users;

    } catch (error) {
        console.error("Помилка:", error.message);
        throw error;
    }
}
