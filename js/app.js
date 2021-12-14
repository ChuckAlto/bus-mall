'use strict';

console.log('hello world');

const allPics = [];

let CLICKS_ALLOWED = 25;
let votes = 0;
let myContainer = document.getElementById('container');

let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');

let viewResults = document.getElementById('view-results');


function Bus (name, fileExtension = 'jpg'){
  this.name = name;
  this.src= `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  allPics.push(this);
}

new Bus('bag');
new Bus('banana');
new Bus('bathroom');
new Bus('boots');
new Bus('breakfast');
new Bus('bubblegum');
new Bus('chair');
new Bus('cthulhu');
new Bus('dog-duck');
new Bus('dragon');
new Bus('pen');
new Bus('pet-sweep');
new Bus('scissors');
new Bus('shark');
new Bus('sweep', 'png');
new Bus('tauntaun');
new Bus('unicorn');
new Bus('water-can');
new Bus('wine-glass');


function getRandomPic (){
  return Math.floor(Math.random() * allPics.length);
}



function renderPics(){

  let busOne=getRandomPic();
  let busTwo=getRandomPic();
  let busThree=getRandomPic();

  while(busOne === busTwo || busOne === busThree || busTwo === busThree){
    busTwo = getRandomPic();
    busThree = getRandomPic();
  }
  imageOne.src = allPics[busOne].src;
  imageOne.alt = allPics[busOne].name;
  allPics[busOne].views++;

  imageTwo.src = allPics[busTwo].src;
  imageTwo.alt = allPics[busTwo].name;
  allPics[busTwo].views++;

  imageThree.src = allPics[busThree].src;
  imageThree.alt = allPics[busThree].name;
  allPics[busThree].views++;
}

function handleImageClick(event){
  votes++;
  let imageClicked = event.target.alt;
  console.log(imageClicked);

  for (let i = 0; i < allPics.length; i++){
    if(imageClicked === allPics[i].name){
      allPics[i].votes++;
    }
  }
  renderPics();

  if (votes === CLICKS_ALLOWED){
    myContainer.removeEventListener('click', handleImageClick);
  }
}

function handleShowResults(event){
  let results = document.getElementById('results');
  if(votes === CLICKS_ALLOWED){

    for (let i =0; i < allPics.length; i++){

      let li = document.createElement('li');
      li.textContent = `${allPics[i].name} was viewed ${allPics[i].views} times and clicked ${allPics[i].votes} times`;
      results.appendChild(li);
    }
  }
  else alert(`Must vote ${CLICKS_ALLOWED} times before viewing results.`);

}

renderPics();

myContainer.addEventListener('click', handleImageClick);

viewResults.addEventListener('click', handleShowResults);
