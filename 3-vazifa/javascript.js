var  ismingiz = prompt("Ismingizni kiriting")
console.log("Sizning ismingiz " + ismingiz);
var  yoshingiz = +prompt("Yoshingizni kiriting")
console.log("Sizning yoshingiz " + yoshingiz);
var  a = +prompt("5 + 3 =")
while ( isNaN(a) ) {
    var  a = +prompt("5 + 3 =")
    if (!isNaN(a)) {
        break
    }}
if (a === 8 ) {
    console.log("Javobingiz to`g`ri " + a);
    }
    else{
        console.log("Javobingiz noto`g`ri " + a + ". Tog`ri javob = 8");
    }
    
    var  b = +prompt("8 - 2 =")
    while ( isNaN(b) ) {
        var  b = +prompt("8 - 2 =")
        if (!isNaN(b)) {
            break
        }}
    
if (b === 6 ) {
    console.log("Javobingiz to`g`ri " + b);
    }
    else{
        console.log("Javobingiz noto`g`ri " + b + ". Tog`ri javob = 6");
    }
    
    
    var  c = +prompt("5 * 4 =")
    while ( isNaN(c) ) {
        var  c = +prompt("5 * 4 =")
        if (!isNaN(c)) {
            break
        }}
    
if (c === 20 ) {
    console.log("Javobingiz to`g`ri " + c);
    }
    else{
        console.log("Javobingiz noto`g`ri " + c + ". Tog`ri javob = 20");
    }
    
    var  d = +prompt("10 / 2 =")
    while ( isNaN(d) ) {
        var  d = +prompt("10 / 2 =")
        if (!isNaN(d)) {
            break
        }}
    
if (d === 5 ) {
    console.log("Javobingiz to`g`ri " + d);
    }
    else{
        console.log("Javobingiz noto`g`ri " + d + ". Tog`ri javob = 5");
    }
    
    var  e = +prompt("10 % 3 =")
    while ( isNaN(e) ) {
        var  e = +prompt("10 % 3 =")
        if (!isNaN(e)) {
            break
        }}
    
if (e === 1 ) {
    console.log("Javobingiz to`g`ri" + e);
    }
    else{
        console.log("Javobingiz noto`g`ri" + e + ". Tog`ri javob = 1");
    }