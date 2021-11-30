const yargs = require("yargs")

const {addMovie, listMovie} = require('./utils')

const app =()=>{
  if(process.argv[2] === "add"){
      addMovie({title: yargs.argv.title, actor: yargs.argv.actor})
      
  }else if (process.argv[2]=== "list"){
    listMovie()
  }else{
      console.log("Incorrect command")
  }
}

app ();