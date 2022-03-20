console.log("Merhaba Kodlama.io")

let dolarDun=9.20
let dolarBugun=9.30
//var ve let arasındaki fark var diğer bloklar arasında {} alınan değerleride kapsadığı için tüm program etkilenir. 
console.log(dolarDun)

let konutKredileri=["Konut Kredisi","Taşıt Kredileri","Kamu Konut Kredileri"]
let exampleArray=[12,"Taşıt Kredileri",['a','b','c']]

for (let index = 0; index < konutKredileri.length; index++) {
    const element = konutKredileri[index]
    console.log("<li>"+element+"</li>")    
}
// console.log(konutKredileri)
// console.log(exampleArray)