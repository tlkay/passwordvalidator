
//get password

function getPassword(){
    let passwordEl = document.getElementById("password")
    let pwValue = passwordEl.value 

    //convert password to array
    let passwordArray = Array.from(pwValue)  //this could also be done with a split
    testPasswordLength(passwordArray)
}

//make sure 8 characters in password
function testPasswordLength(pwArray){
        let minChar = 8
        if (minChar <= pwArray.length){
            testCharacter(pwArray)
        } else {
            alert("This password is too short")
        }
}

//test each character to ensure meets criteria
function testCharacter(pwArray){
    let lc = false
    let uc = false
    let num = false
    let spec = false

    for (let i = 0; i < pwArray.length; i++){
        let char = pwArray[i]

        if (char.match(/[a-z]/g)) {lc = true}
        
        if (char.match(/[A-Z]/g)) {uc = true}
        
        if (char.match(/[0-9]/g)) {num = true}
    
        if (char.match(/[.,:;”’<>@#%&=~!*+?^${}()|[\]\\]/g)) {spec = true}
    }

    if ((lc == true) && (uc == true) && (num == true) && (spec == true))
        {alert ("You have successfully changed your password.")
        }
    else alert ("You have not met all the criteria.")
}