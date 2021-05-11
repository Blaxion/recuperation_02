let myBody = document.getElementsByTagName('body')
console.log(myBody)
console.log(myBody[0].firstElementChild)
console.log(myBody[0].lastElementChild)

let div_all = document.getElementsByTagName('div')
console.log(div_all)
console.log(div_all[0])
console.log(div_all[1])

let exo4 = div_all[0].children
console.log(exo4)

let li_all = document.getElementsByTagName('li')
console.log(li_all[0])
console.log(li_all[0].nextElementSibling)
console.log(li_all[0].nextElementSibling.previousElementSibling)
