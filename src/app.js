console.log("Merhaba Kodlama.io")

// not almak istersem.

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

const euroDun = 11.2 
//euroDun = 11 tekrardan değer verilmmez. constant değer yukarıda belirlendi.

console.log(euroDun)
console.log(dolarDun)

//array
//camelCasing (ilk harf küçük diğeri büyük)
//PascalCasin(iki baş harf de büyük)
let konutKredileri = ["Konut Kredisi" , "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]
//let konutKredieri = [12, "Emlak Konut Kredisi", ["a","b","c"]] --> array her halttan içerik barındırır.

console.log("<ul>")
for (let i = 0; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)
