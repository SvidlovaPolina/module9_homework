const parser = new DOMParser();
//console.log('parser', parser);

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log('xmlString', xmlString);

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const nameNode1 = xmlDOM.querySelectorAll("name")[0];
const firstNode1 = xmlDOM.querySelectorAll("first")[0];
const secondNode1 = xmlDOM.querySelectorAll("second")[0];
const ageNode1 = xmlDOM.querySelectorAll("age")[0];
const profNode1 = xmlDOM.querySelectorAll("prof")[0];
//console.log('nameNode1', nameNode1);
//console.log('firstNode1', firstNode1);
//console.log('secondNode1', secondNode1);
//console.log('ageNode1', ageNode1);
//console.log('profNode1', profNode1);

const langAttr1 = nameNode1.getAttribute('lang');
//console.log('langAttr1', langAttr1);

const nameNode2 = xmlDOM.querySelectorAll("name")[1];
const firstNode2 = xmlDOM.querySelectorAll("first")[1];
const secondNode2 = xmlDOM.querySelectorAll("second")[1];
const ageNode2 = xmlDOM.querySelectorAll("age")[1];
const profNode2 = xmlDOM.querySelectorAll("prof")[1];
//console.log('nameNode2', nameNode2);
//console.log('firstNode2', firstNode2);
//console.log('secondNode2', secondNode2);
//console.log('ageNode2', ageNode2);
//console.log('profNode2', profNode2);

const langAttr2 = nameNode2.getAttribute('lang');
//console.log('langAttr2', langAttr2);

const result1 = {
  firstName: firstNode1.textContent,
  secondName: secondNode1.textContent,
  age: Number(ageNode1.textContent),
  prof: profNode1.textContent,
  lang: langAttr1,
};

const result2 = {
  firstName: firstNode2.textContent,
  secondName: secondNode2.textContent,
  age: Number(ageNode2.textContent),
  prof: profNode2.textContent,
  lang: langAttr2,
};

//console.log('result1', result1);
//console.log('result2', result2);

const list = [result1, result2];
console.log(list);