// const arr=[1,23]
// console.log(arr)
// const arr=[42,2,5,3,22,1];
//console.log(arr.length)//length

//==========Swaping Two no.==============================================
//=========using bubble sort=======
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp


//         }
//     }
// }
// console.log(arr)

//===Swaping two no using Built In method====

// const arr=[42,2,5,3,22,1];
// const newAr=arr.sort((a,b)=>{
//     return b-a
// })
// console.log(newAr)


// let x=5;
// let y=10;
// console.log("before swiping x:",x)
// console.log("before swiping y:",y)
// let temp=x;
// x=y
// y=temp
// console.log("after swiping x:",x)
// console.log("after swiping y:",y)

//  x=x+y;//15
//  console.log("x::",x);
//  y=x-y;
//  console.log("y::",y) //    y=15-10 =>5
//  x=x-y 
//  console.log("x::",x)  //  x= 15-5=>10
//  console.log("after swiping x:",x)
// console.log("after swiping y:",y)






//  x=x*y;//15
//  y=x/y
//  x
//  console.log("x::",x);
//  y=x-y;
//  console.log("y::",y) //    y=15-10 =>5
//  x=x-y 
//  console.log("x::",x)  //  x= 15-5=>10
//  console.log("after swiping x:",x)
// console.log("after swiping y:",y)


//================ another Method swape two number==========
// var x=1;
// var y=9;
// [x,y]=[y,x]

// console.log(" x:",x)
// console.log("y:",y)







//================ 30/08/2024================
//array length ,
// let a=[12,45,77,86,54,34,33]
// const length=a.length
// console.log(length)



//======array sort======
let s=[23,54,56,43,67,32,78]
 let y=s.sort((d,c)=> {
    return d-c
})
console.log(y)

//========================= reverse()=========