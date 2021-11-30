const fs = require("fs")

const addMovie = (movieObj) =>{
    try{
        const stringyObj =JSON.stringify(movieObj)
        fs.writeFileSync("./storage.json", stringyObj)
    }catch(error){
        console.log(error)

    }
}

const listMovie =() =>{
    try{
        const jsonList =fs.readFileSync('./storage.json')
        const list = JSON.parse(jsonList)
        console.log(list)
    }catch(error){
        console.log(error)
    }
}
module.exports ={addMovie, listMovie}