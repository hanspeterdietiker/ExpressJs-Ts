export class UserNotFoundException extends Error {
    constructor(id: string) {
        super("User with provide ID not found")
        this.name = "UserNotFoundError"
    }
}