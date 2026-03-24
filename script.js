//Eid sale 
function newPrice(urrtPic, discount) {
    
    if (typeof currentPrice != "number" {
        return "Invalid"
    }
    if (typeof discount != "number"
        return "Invalid"
    }
    // discount ta valid range e kina
    if (discount < 0 || discount > 100) {
        return "Invalid"
    }
    var cut = (currentPrice * discount) /100
    var newP = currentPrice - cut
    return newP.toFixed(3)
}


//OTP thik naki
function validOtp(otp) {
    // string chara shob invalid
    if (typeof otp != "string") {
        return "Invalid"
    }
    
    if (otp.length == 8 && otp.startsWith("ph-")) {
        return true
    }
    return false
}


//BCS 
function finalScore(omr) {
    // object nahole baad
    if (typeof omr != "object") {
        return "Invalid"
    }
    // null o array baad
    if (omr == null) {
        return "Invalid"

    }

    if (Array.isArray(omr)) {
    
        return "Invalid"

    }
    var total = omr.right + omr.wrong + omr.skip
    
    if (total != 100) {
        return "Invalid"
    }
    // wrong e marks kati
    var score = omr.right - (omr.wrong * 0.5)
    return Math.round(score)
}


//gonovote
function gonoVote(arr) {

    // array nahole invalid
    if (!Array.isArray(arr)) {
        return "Invalid"
    }
    var ha = 0
    var na = 0
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "ha") {
            ha++
        } else if (arr[i] == "na") {
            na++
        }
    }
    if (ha > na) return true
    if (ha == na) return "equal"
    return false
}


//info ber
function analyzeText(str) {
    // string nahole invalid
    if (typeof str != "string") {
        return "Invalid"
    }
    var words = str.split(" ")
    // khali string baad
    var realWords = []
    for (var i = 0; i < words.length; i++) {
        if (words[i] != "") {
            realWords.push(words[i])
        }
    }
    // no word invalid
    if (realWords.length == 0) {
        return "Invalid"
    }
    //boro word 
    var big = realWords[0]
    for (var j = 1; j < realWords.length; j++) {
        if (realWords[j].length > big.length) {
            big = realWords[j]
        }
    }
    // space baad
    var noSpace = ""

    for (var i = 0; i < str.length; i++) {
    
        if (str[i] != " ") {
        
            noSpace = noSpace + str[i]
    
        }

    }
    return { longwords: big, token: noSpace.length }
}
