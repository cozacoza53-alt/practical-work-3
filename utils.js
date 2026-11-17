export function filterUsers(users, city) {
    return users.filter(user =>
        user.address.city === city
    );
}

export function sortUsers(users) {
    return users.sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}
