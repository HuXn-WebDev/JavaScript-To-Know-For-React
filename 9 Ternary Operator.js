let password = 2

function passwordChecker(ps) {
    // if (ps === 8) {
    //     return "Strong Password"
    // } else {
    //     return "Password should be 8 characters"
    // }

    return ps === 8 ? "Strong Password" : "Password should be 8 characters"
}

console.log(passwordChecker(password));