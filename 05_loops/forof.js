let heros = ["batman","superman","ironman"]


for(const hero of heros){
    //console.log(hero)
}


let greet = "hello wolrd"

for(greetings of greet){
    //console.log(greetings)
}


// maps

const map = new Map()
map.set('IN',"Inida")
map.set('USA',"united states of america")
map.set('FR',"france")
map.set('IN',"Inida")             // in map values are unique sp this will not print 
//console.log(map)

for(const key of map){
    console.log(key)
}

//destructure of an array

for (const [key,value] of map) {
    console.log(key)
    
}