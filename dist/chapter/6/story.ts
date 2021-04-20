type ExistingUser = {
    id: number
    name: string
}

type NewUser = {
    name: string
}

function deleteUser(user: { id?: number, name: string }) {
    delete user.id
}

let existingUser: ExistingUser = {
    id: 123456,
    name: 'Ima User'
}

deleteUser(existingUser)