const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

function useRequest(url, callback) {
  const value = +document.querySelector('input').value;
  if (value < 1 || value > 10 || isNaN(value)) {
    resultNode.innerHTML = "число вне диапазона от 1 до 10 или введены символы";
    return;
  }
  var _url = url + '?limit=' + value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', _url);
  xhr.onload = function() {
     if (xhr.status != 200) {
       resultNode.innerHTML = 'Статус ответа: ' + xhr.status;
     } else {
       const result = JSON.parse(xhr.response);
       if (callback) {
         callback(result);
      }
    }
  };
  xhr.onerror = function() {
   resultNode.innerHTML = 'Ошибка! Статус ответа: ' + xhr.status;
  };
  xhr.send();
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
}

btnNode.addEventListener('click', () => {
  useRequest('https://picsum.photos/v2/list', displayResult);
})