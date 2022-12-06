//1 способ
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
//console.log('jsonString', jsonString);

const data = JSON.parse(jsonString);
//console.log('data', data);

const list = data.list;
//console.log('list', list);

const result1 = {
  name: list[0].name,
  age: Number(list[0].age),
  prof: list[0].prof,
}

const result2 = {
  name: list[1].name,
  age: Number(list[1].age),
  prof: list[1].prof,
}

//console.log('result1', result1);
//console.log('result2', result2);

const listArr = [result1, result2];
console.log(listArr);

//2 способ
/*const jsonString = ` 
{ 
 "list": [ 
  { 
   "name": "Petr", 
   "age": "20", 
   "prof": "mechanic" 
  }, 
  { 
   "name": "Vova", 
   "age": "60", 
   "prof": "pilot" 
  } 
 ] 
} 
`;
const data = JSON.parse(jsonString); 
console.log(data);*/