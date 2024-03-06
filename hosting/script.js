//array and objects interration
//array
let arr = ["gogul",1,true,{pos: "mentor", value: 5},[2,5]];
console.log(arr[2]);
//objects (json- javascript objects notation)

//key and value
let obj ={
    name: "gogul",
    age: 1,
    work: true,
    posarr: ["gogul", 1, true],
    demobj: {
        pos:"mentor",
        id: 5,
    },
};
//dot oprations
console.log(obj.demobj.pos);

//map opreations
console.log(obj["ismember"]);