const promiseONe = new Promise(function(resolve , reject){
    // Do an async task
    // Db calls, network call
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})

promiseONe.then(function(){
    console.log('promise consumed');
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task 2');
         resolve()
    },1000)
   
}).then(()=>{
    console.log('async 2 resolved');
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve( {
    username:"vividh",
    email:"vividhcho8430@gmail.com"
})
    },1000)
})

promiseThree.then((user)=>{

console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let err = false 
      if(!err){
        resolve({username : "abhi",
            pass:123
        })
      }
      else{
        reject('error something went wrong')
      }
    },2000)
})

promiseFour.then((user)=>{
      console.log(user)
      return user.username
}).then((username)=>{                       // this is know as channing 
console.log(username);
}).catch((err)=>{
console.log(err);
}).finally(()=>{
    console.log('finally promise is either resolved or rejected');
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err = false 
        if(!err){
          resolve({username : "javaScript",
              pass:123
          })
        }
        else{
          reject('error : JS went wrong')
        }
      },2000)
})

async function consumePromiseFive(){
  try {
    const response =  await promiseFive
  console.log(response);}
 catch(err){
    console.log(err);
}
}
consumePromiseFive()


