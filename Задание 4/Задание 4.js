// когда выводила console.log(json), выдавало ошибку про невалидный json
// ссылка с picsum выдает сразу картинку
// сделала задание через url

const resultNode = document.querySelector('.j-result');
const btn = document.querySelector('.j-btn');

function useRequest(baseUrl) {
  let imageUrl = "";
  const value1 = +document.getElementById('input1').value;
  const value2 = +document.getElementById('input2').value;
  if (value1 < 100 || value2 < 100 || value1 > 300 || value2 > 300) {
    resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    return;
  } else {
    console.log(`${baseUrl}/${value1}/${value2}`);
    fetch(`${baseUrl}/${value1}/${value2}`)
    .then(response => 
          imageUrl = response.url
          //console.log(response)
         ); 
    displayResult(imageUrl);
  }
};

function displayResult(imageUrl) {
  let cards = '';
   imageUrl = 'https://picsum.photos/300/300'
  
    const cardBlock = `
      <div class="card">
        <img
          src='${imageUrl}'
          class="card-image"
        />
      </div>
    `;
  
  cards = cards + cardBlock;
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

btn.addEventListener('click', () => {
  useRequest('https://picsum.photos');
})