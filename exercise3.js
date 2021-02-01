let normalCase = ["hallo","semua,","belajar","coding","di","skilvul","yuk"]
let swapCase =[]

normalCase.forEach((data, idx) => {
    if (idx % 2 === 0) {
        hurufBesar = data.toUpperCase()
        swapCase.push(hurufBesar)
    } else {
        hurufKecil = data.toLowerCase()
        swapCase.push(hurufKecil)
    }
})

document.write(swapCase.join(" "))
console.log(swapCase.join(" "))