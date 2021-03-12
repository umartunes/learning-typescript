// --------------------------------------
// Unknown, Never Types

let userInput: unknown; //we can store anything in unknown
let username: string;

userInput = 5;
userInput = "Max"

// we must do a type check condition here if we're assigning value of unknown variable type to another
// but if userInput were type "any" we were not in need to write a condition here
if( typeof userInput === "string" ){
    username = userInput
}

// This function never written any value
function generateError(message: string, code: number): never{

    // it's throwing an object, it's not a type cast :)
    throw { message: message, errorCode: code }

}

generateError("An error occurred!", 500)
