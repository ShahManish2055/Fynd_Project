const arr=['giraffe','tiger','lion'];
const arr2=[1,2,3,4];
arr.push('cheetah');
arr2.push(6);
arr.forEach(element=>{
    console.log(element);
});
arr2.forEach(element=>{
    console.log(element);
});
const fruits=['banana','orange'];
fruits.unshift('apple');//will and elements in the beginning of the array
console.log(fruits);
// fruits.findIndex(findFruit('apple'));
fruits.findIndex(findFruit);
function findFruit(fruit){
    return fruit=="banana";
}

const ages=[6,2,3,4];
ages.findIndex(checkAge);
ages.sort();//ascending
ages.reverse();//deScending after asc in the previous line
function checkAge(age){
    return age>3;
}

const cars=["bmw","mercedes"];
const car={type:"fiat",model:"400",color:"white"};//object