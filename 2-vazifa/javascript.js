var  a = +prompt("Sonlarni ortacha qiymatini bilish uchun 1-sonni kiriting")
while ( isNaN(a) ) {
    var  a = +prompt("1-sonni kiriting")
    if (!isNaN(a)) {
        break
    }}
    
    var  b = +prompt("2-sonni kiriting")
while ( isNaN(b) ) {
    var  b = +prompt("2-sonni kiriting")
    if (!isNaN(b)) {
        break
    }}
    
    var  c = +prompt("3-sonni kiriting")
    while ( isNaN(c) ) {
        var  c = +prompt("3-sonni kiriting")
        if (!isNaN(c)) {
            break
        }}
       
        if (a < b && b < c && c > a ) {
           
            alert( "O`rtacha qiymat" + "<" + b +">  " + a +" > " + b +" > " + c)
        }
         else  if (a > b && b < c && c > a ) {
            
             alert( "O`rtacha qiymat" + "<" + a + ">  " + b +" > " + a +" > " + c)
         }
        
         else  if (a < b && b > c && c > a  ) {
            
             alert( "O`rtacha qiymat" + "<" + c +">  " + a +" > " + c +" > " + b)
         }
         else  if (a > b && b > c && c < a ) {
            
             alert( "O`rtacha qiymat" + "<" + b +">  " + c +" > " + b +" > " + a)
         }
         else  if (a > b && b > c && c < a  ) {
            
             alert( "O`rtacha qiymat" + "<" + c +">  " + b +" > " + c +" > " + a)
         }
         else  if (a < b && b > c && c < a  ) {
            
             alert( "O`rtacha qiymat" + "<" + a +">  " + c +" > " + a +" > " + b)
         }
         else{"Nimadir noto`g`ri kiritdingiz"}
        