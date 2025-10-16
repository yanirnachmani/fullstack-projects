
export const _id = Symbol('id')

export default function createUser(name, id) {
    return {
        name,
        [_id]: id,
        getId() {
            return this[_id]
        }
    }
}


