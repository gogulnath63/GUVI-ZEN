//Array methods
//
//push
const arr = [1, 23, 54, 6, 7, 9, 32];
//push
console.log("org arr", arr);
arr.push(59);
console.log("push arr",arr);

//pop
console.log("org arr", arr);
arr.pop();
console.log("pop arr",arr);


//unshift
console.log("org arr", arr);
arr.unshift(59);
console.log("unshift",arr);

//shift
console.log("org arr", arr);
arr.shift();
console.log("shift",arr);

//shorting
console.log("org arr", arr);
arr.short((a, b)=>a - b);
console.log("short arr", arr );
arr.reverse();
console.log("dec sorted ", arr);

//slice
console.log("org arry", arr);
//slice(startindex, end index)
//startindex included
//end index excluded
const newarr = arr.slice(2 ,4);
console.log("org arr", arr);
console,log("sliced arr", newarr);

//splice
//splice(start,deletecount,item1,item2)
//return(deleted items)
console.log("org arr", arr);
const splicedarr = arr.splice(1, 2, "item1", 2, "item2");
console.log("after splice,", arr);
console.log("spliced from org", splicedarr);

//MRF (map,filter,reduce)



//filter
console.log(----------filter---------);
const filter_arr = mrf_arr.filter((val,index,
accArr) => {
    console.log(`
   value : ${val} 
   index : ${index}
   accArr: ${accArr}    
    `)
    return val !=4; //boolan
});
console.log(mrf_arr);
console.log(filter_arr);

//polyfill for filter


Array.prototype.guvifilter = function (fn) {
    let NewArr = [];
    for (let i = 0;i< this.length;i++){
        if (fn(this[i],i,this)){
            newarr.push(this[i]);
        }
    }
    return newarr;
}

console.log("------guvi filter-----")
const guvifilter_Arr = mrf_arr.guvifilter((val,
    index,accArr) =>{
        console.log()
    }
    )  //pending/

