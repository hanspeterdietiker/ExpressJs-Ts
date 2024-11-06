import BaseError from "../BaseError"
import HttpStatusCodeException from "../HttpStatusCodeException"

export default class Api400Error extends BaseError {
    constructor(
        name: string,
        statusCode = HttpStatusCodeException.BAD_REQUEST,
        description = 'Request data is invalid or missing required fields.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)

    }
}