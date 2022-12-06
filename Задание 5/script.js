const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn');

let userDataJson = localStorage.getItem("UserData"); // пробуем получить данные по ключу
//console.log(userDataJson);
if(userDataJson != null) { // если есть такие данные
  let userData = JSON.parse(userDataJson); // распарсим JSON
  document.getElementById('input1').value = userData.number; // установим значения
  document.getElementById('input2').value = userData.limit;  // установим значения
  useRequest('https://picsum.photos', displayResult);
}

function useRequest(url, callback) {
  
  const number = +document.getElementById('input1').value;
  const limit = +document.getElementById('input2').value;
  let error = false; // флаг ошибки
  
  if (number < 1 || number > 10 || isNaN(number)) {
    resultNode.innerHTML = " Номер страницы вне диапазона от 1 до 10; ";
    error = true;
  } 
  if (limit < 1 || limit > 10 || isNaN(limit)) {
    resultNode.innerHTML += " Лимит вне диапазона от 1 до 10; ";
    error = true;
  }
   if(error){ // если есть ошибка дальше не идем
     return;
   }
   else {
    // если все упешно, запишем данные с инпутов в localStorage
    localStorage.setItem('UserData', `{"number": ${number}, "limit": ${limit}}`); 
    let _url = `https://picsum.photos/v2/list?page=${number}&limit=${limit}`
    //console.log(_url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', _url);
    
    xhr.onload = function() {
     if (xhr.status != 200) {
       console.log('Статус ответа: ' + xhr.status);
     } else {
       const result = JSON.parse(xhr.response);
       if (callback) {
         callback(result);
       }
    }
  };
    
   xhr.onerror = function() {
   console.log('Ошибка! Статус ответа: ' + xhr.status);
   };
   xhr.send();
   };
};

function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
};

btnNode.addEventListener('click', () => {
  useRequest('https://picsum.photos', displayResult);
});