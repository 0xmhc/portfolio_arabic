const Amthal = require("./data/index.json")

function randomMathal(){
    return Amthal[Math.floor(Math.random() * Amthal.length)]
}

function randomTen(){
    let randomItems = new Set()
    while(randomItems.size <= 10){
        let randomMathal = Math.floor(Math.random() * Amthal.length)
        if(!randomItems.has(randomMathal)){
            randomItems.add(randomMathal)
        }
    }
    return [...randomItems].map(index=>{
        return Amthal[index]
    })
}
module.exports = {randomMathal,randomTen}