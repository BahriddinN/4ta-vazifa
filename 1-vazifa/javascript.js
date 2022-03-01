var  yoshingiz = +prompt("Yoshingizni kiriting")
while ( isNaN(yoshingiz) ) {
  var  yoshingiz = +prompt("Yoshingizni kiriting")
  if (!isNaN(yoshingiz)) {
      break
  }
}
if (yoshingiz > 0, yoshingiz <= 18 ) {
    alert("Yoshsiz. O`qisingiz kerak")
}
else if (yoshingiz > 19, yoshingiz <= 50 ) { 
    alert("Ishlasingiz kerak")
}
else if (yoshingiz > 50, yoshingiz <= 59 ) { 
    alert("Yaqinda pensiyaga chiqasiz")
}
else if (yoshingiz > 59, yoshingiz <= 150 ) { 
    alert("Pensionerga o`xshaysiz, hali tirik bo`lsangiz")
}
else{ alert("Nimadir notog`ri ketib qoldi")}
