let n = 0
const intervalo1 = setInterval(function() {
  console.clear()
  console.log("contador:" + n)
  n = n + 1
}, 1000)
// setTimeout - espere e depois execute
setTimeout(function() {
  clearInterval(intervalo1)
  window.alert("redirecinando")
  location.href = "https://www.google.com.br"
}, 5000)


