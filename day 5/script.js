//array destructuring...
//["ele", "ele",]
const studarr = ["subash", "sanjai",["aravinth","paeshall"]];
console.log("--------normol structure--------");
console.log(studarr);
console.log(studarr[0]);
console.log(studarr[1]);
 console.log("--------de structure--------");
 const [name1, , [name3,name4]] = studarr;
 //[name1, , name3]= ["subash","sanjai",["aravinth", "parshall"]
//namw1=subash]
//, , = sanjai
//[name3,name4]=["snjai","parshall"]
console,log(name1);
console,log(name3);
console,log(name4);

//object destructuring
const data = {
    firstname:"sanjai",
    lastname:"guvi",
    pos:"mentor",
    loc:"chennai",
    country:"India",
    state:"tamilnadu",
}




























//property shorthand
let batch = "FSD55WD2";
let Time = "8.00 AM";

const schedule = {
topic: "ES6 JS",
batch,
time:Time,
};
console.log(schedule);

//template literals
const greet = "how are you";
const yourself= "I am a mentor in guvi";
const totalgreetmsg = "hi " + greet +" "+yourself;
const templatestr = `hi
${greet}
${yourself}
`;
console.log(totalgreetmsg);
console.log(templatestr);