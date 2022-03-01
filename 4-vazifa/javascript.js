

  var  a = +prompt("Sonni kiriting")
while ( isNaN(a)) {
    
        var  a = +prompt("Bu son emas iltimos Sonni kiriting")
 
    if (!isNaN(a)) {
        break
    }}
    var  b = +prompt("Darajani kiriting")
while ( isNaN(b) ) {
    var  b = +prompt("Darajani kiriting")
    if (!isNaN(b)) {
        break
    }}
    
    if (b === 1) {
        alert(a)        
    }
    else if (b === 2) {
        alert( a * a )
        
    }
    else if (b === 3) {
        alert( a * a * a )
        
    }
    else if (b === 4) {
        alert( a * a * a * a )
        
    }
    else if (b === 5) {
        alert( a * a * a * a * a )
        
    }
    else if (b === 6) {
        alert( a * a * a * a * a * a)
        
    }
    
    else if (b === 7) {
        alert( a * a * a * a * a * a * a)
        
    }
    else if (b === 8) {
        alert( a * a * a * a * a * a * a * a )
        
    }
    else if (b === 9) {
        alert( a * a * a * a * a * a * a * a * a )
        
    }
    else if (b >= 10) {   
        alert( "Daraja faqat 1 honali bulishi kerak")
    }
    else{
        alert("Nimadie xato ketti")
    }