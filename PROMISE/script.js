//promise

//produce of promise 
funtion getnewdata(val) {
    return new promise((resolve, reject ) => {
     if(val !=0) {
        setTimeout(() =>{
            resolve(`yourvalue is ${val}`);
        },2000);
     }else{
        setTimeout(() =>{
            reject('[ERROR] you have no data');
        }, 1000);
     }
    });
}

//promise states (three States)
// pending (processing)
// resolve-> fulfilled
// rejected

// consumer of promise

console.log("stsrt");
getdata(1)
.then((data) => console.log(data))
.catch9((err) => console.log(err));
console.log("end");

function courseCreation() {
 return new promise((res) => {
    setTimeout(() => {
        res("created course p[1]");
    }, 2000);
 });
}


function chooseCourse(data) {
 return new promise((res) => {
    setTimeout(() => {
        res(`${data} for MERN p[2]`);
    }, 3000);
 });
}

function makepayment(data) {
    return new promise((res) => {
       setTimeout(() => {
           res(`${data} and made payment p[3]`);
       }, 2000);
    });
   }
//promise chaining

courseCreation()
.then((data) => {
    console.log(data);
    return chooseCourse(data);
})

.then((data2) => {
    console.log(data2);
    return makepayment(data2);
})

.then((finaldata) => {
    console.log(finaldata);
})

//promise.all

const promise1 = new promise((res) =>{
    setTimeout(() => {
        res("promise 1 resolved")
    }, 2000);
});

const promise = new promise((res) =>{
    setTimeout(() => {
        res("promise 2 resolved")
    }, 2000);
});

const promise3 = new promise((rej) =>{
    setTimeout(() => {
        rej("promise 3 rejected")
    }, 5000);
});

// when ll promise are resolved it will be resolved.
//if any one is rejected will only show rejected response
promise.all([promise1, promise2, promise3])
     .then((data) =>console.log(data))
     .catch((err) => console.log(err));
     