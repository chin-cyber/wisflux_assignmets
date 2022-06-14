import  _ from "lodash";
const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  // 1.Get array of first names of everyone
  let firstname = members.map(getfirstname);

 console.log(firstname)
  
   function getfirstname(item){
       let ans=item.name.split(" ");
       return( ans[0]);
   }
  
  let arr1=[]
  var temp;
    let fullName=_.map(members,'name')
 fullName.forEach(element => {
     temp=_.split(element," ")
        arr1.push(temp[0])
       });
 console.log(arr1)


//2.makes everyone last name in uppercase and return in array
let lastname=members.map(modifylastname);
console.log(lastname);
 
function modifylastname(item){
    let ans=item.name.split(" ")
    return ans[0]+" "+ans[1].toUpperCase()
}
//using lodash
 fullName.forEach(element => {
     temp=_.split(element," ")
     temp=_.toUpper(temp[1])
     arr1.push(temp)
 });
console.log(arr1)


//3.Get entries where age is between 41-60

lastname=members.filter(a=>{ return (a.age>40 && a.age<62)});
   console.log("------",lastname)
//using lodash
let suitablenames=_.filter(members , function(o){return (40<o.age && o.age<61 )})
 console.log(suitablenames)
 

// 4.get average age
let sum=0;
let count=0;
let avg=members.map(getaverage)
function getaverage(item){
    if(item.age)
    sum=+item.age ;
    count++;
  }
console.log(sum/members.length);

  //using lodash

var age=0;
_.map(members,o=>{
    age=+o.age;
})
console.log(age/members.length)

//5. Get Person with maximum age
 age=0;
let name1="xyz";
let map=members.filter(a=> {
    if (a.age>age){
    age=a.age;
    name1=a.name;}
});
console.log("********",name1);
//using lodash
var age=0;
var name='xyz';
_.map(members,o=>{
   if(o.age>age){
       age=o.age
       name=o.name
   }
   
})
console.log(name)

//6. Divide persons in three groups, result should look like
//       {
//         'young': [],
//         'old': [],
//         'noage': []
//       }
//       Less than 35yrs is young, above 35 is old

let young=[];
let old=[];
let noage=[];
map=members.filter(a=> {
    if (a.age<35){
    young.push(a.name)
    }
    else if(a.age>35 && a.age>0)
    {
    old.push(a.name)
    }
    else
    old.push(a.name)

}
);
console.log(young,old,noage)

//usiing lodash library
 young=[]
 old=[]
 noage=[]
_.map(members,o=>{
    if(o.age<35){
        

    }
    else if(o.age>35){

    }
    else{

    }
})

    let members_copy=members;
    addproperty(members_copy)
    function addproperty(members_copy){
        for (let i= 0;  i< members_copy.length; i++) {
            let sampleobj={
                name:members_copy.name,
                age:members_copy.age
            }
         var object=members_copy[i]
            if(object.age>35){
                let sampleobj={
                    name:members_copy.name,
                    age:members_copy.age,
                    type:'old'
                }
                members_copy[i]=sampleobj;
            }
            else if (object.age<35&&object.age>0){
                let sampleobj={
                    name:members_copy.name,
                    age:members_copy.age,
                    type:'young'

                }
                members_copy[i]=sampleobj;
            }
            else{
                let sampleobj={
                    name:members_copy.name,
                    age:members_copy.age,
                    type:'noage'
            }
            members_copy[i]=sampleobj;
            
            }    


            }
        }

    console.log(_.groupBy(members_copy,'type'))

   // 7. add a new member to same members array instance at index 2

    members.splice(2,0,{name:"dhruv",age:"80"})
    console.log(members);
    //no function in lodash for this
    members.splice(2,0,{name:'dhruv',age:'19'})
    console.log(members)


    //8. extract first and second element using destructing
   const  {a1 ,a2 , ...rest} = members
    console.log('a1',a1)
    console.log('a2',a2)
    console.log(rest)
    //using lodash 

    //9. Create a new array instance adding a new member at index 0,
    // and keeping existing afterwards
      let arr=members;
      arr.splice(0,0,{namme1:"chirag" , age:"20"})
      console.log(arr)
     
     //not a vaalid function available in lodash  
    let members_instance=members
    members_instance.splice(0,0, {name:'chirag',age:'19'})
    console.log(members_instance)

    // 10. Extract properties of object using destructuring
     // [a1 ,a2, ...rest] = members;
      console.log('a1',a1)
      console.log('a2',a2)
      console.log(rest)
      console.log(a1.name)
      console.log(a1.age)
   

  //  11. Rename extracted property of object while destructing 
    

console.log(ans)
members.forEach(element => {
    const object=element;
    let ans=copyandassign(object)
    console.log(ans)
  });
function copyandassign(input){
  const newobj={...input}
  newobj.age=Math.floor(Math.random()*90)
  return newobj
}





//12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

members.forEach(element=>{
  printproperty(element)

})
function printproperty(argument){
  const {name , ...rest}=argument
  console.log(name)
  console.log(rest)
 }




// //   13. Create a new object by copying using spread operator, override
// //       one of the properties to assign a new value in the same step

members.forEach(element => {
  const object=element;
  let ans=copyandassign(object)
  console.log(ans)
});
function copyandassign(input){
const newobj={...input}
newobj.age=Math.floor(Math.random()*90)
return newobj
}

// //   14. Use reduce function on array and object
// // for (let i = 0; i < array.length; i++) {
  //let ans=members[i].name.slice;}
  let ans=members.reduce(function(acc,curr){
    let temp = acc.push(curr.name)
    return temp
},[])
console.log(ans)

//using lodash
let gfg=_.reduce(members,function (acc,curr){
  let temp = acc.push(curr.name)
    return temp
},[])
console.log(gfg)



