import BaseError from "../BaseError"
import HttpStatusCodeException from "../HttpStatusCodeException"

export default class Api404Error extends BaseError {
    constructor(
        name: string,
        statusCode = HttpStatusCodeException.NOT_FOUND,
        description = 'Not found.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}