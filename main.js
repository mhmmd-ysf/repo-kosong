// function submit(e) {
//   e.preventDefault()
//   const availability = document.getElementsByName("availability")

//   // availability.forEach(item => {
//   //   console.log(item.value, item.checked)
//   // })
//   for(let i = 0; i < availability.length; i++) {
//     let item = availability[i]
//     console.log(item.value, item.checked)
//     if(item.checked === true) {
//       // simpan? rubah? ....
//     }
//   }
// }

// const form = document.getElementById("form")

// form.addEventListener("submit", submit)

// 2

localStorage.setItem("nama", "Yusuf")
localStorage.setItem("makan", "nasi goreng")
localStorage.setItem("minum", "cocacola")


sessionStorage.setItem("nama", "Yusuf")
sessionStorage.setItem("makan", "nasi goreng")
sessionStorage.setItem("minum", "cocacola")

function splitKata(str) {}

console.log(sessionStorage)