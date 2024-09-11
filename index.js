//Task1
var string1="Hello";
var string2="World";
console.log(`"${string1}${string2}"`);
//Task2
var details={
    "Name":"jashu",
    "Age":20,
    "Grade":"A"
}
console.log(`Name:${details.Name}\nAge:${details.Age}\nGrade:${details.Grade}`)
//task3
var string="banana";
var count=0;
for(var i=0;i<=string.length;i++){
    if(string[i]=="a"){
        count=count+1;
    }
}
console.log(`The character "a" apperars ${count} times in "${string}"`);
//task4
var car={
   "Make": "Toyota",
    "Model": "Corolla",
    "Year": 2020,
    "Color":"Blue"
}
for(var i in car){
    console.log(`${i+":"+" "+car[i]}`)
}
//task5
var string ="abcdef";
var result='';
for(var i=string.length-1;i>=0;i--){
    result+=string[i];
}
console.log(`"${result}"`);

