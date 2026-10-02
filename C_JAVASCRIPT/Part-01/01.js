alert("hello");//one time pop-ip
// fullName="pyush karalia";
// age=20;
// x=null;
// y=undefined;
// console.log(fullName);
// console.log(age);
// console.log(x);
// console.log(y);
// let name="capain america";
// let age2=21;
// const PI=3.14;
// console.log(name);
// console.log(age);
// console.log(PI);

const student={
    name:"pyush karalia",
    age:20,
    rollNo:92,
    cgpa:7.14,
    isPass:true
};

console.log(typeof student);
console.log(typeof student["name"]);


student["age"]=student["age"]+1;
//or 
//student.age=student.age+1;
console.log(student.age);


console.log(student["name"]);
//or
console.log(student.name);
