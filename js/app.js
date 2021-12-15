'use strict';

console.log('hello world');

const allPics = [];

let CLICKS_ALLOWED = 25;
let votes = 0;
let indexCollection = [];

let myContainer = document.getElementById('container');

let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');




function Bus(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
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


function getRandomPic() {
  return Math.floor(Math.random() * allPics.length);
}




function renderPics() {




  while (indexCollection.length < 6) {
    let randomNum = getRandomPic();
    while (!indexCollection.includes(randomNum)) {
      indexCollection.push(randomNum);
    }

  }
  console.log(indexCollection);


  let busOne = indexCollection.shift();
  let busTwo = indexCollection.shift();
  let busThree = indexCollection.shift();
  console.log(busOne, busTwo, busThree);
  console.log(indexCollection);

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

function renderBusChart() {
  const chart = document.getElementById('my-chart').getContext('2d');

  let busNames = [];
  let busVotes = [];
  let busViews = [];


  for (let i = 0; i < allPics.length; i++) {
    busNames.push(allPics[i].name);
    busVotes.push(allPics[i].votes);
    busViews.push(allPics[i].views);
  }


  let chartData = {
    type: 'bar',
    color: 'rgba(0, 0, 0, 1)',
    data: {
      labels: busNames,
      datasets: [{
        label: 'number of votes',
        data: busVotes,
        backgroundColor: 'rgba(172, 12, 85, .5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
      },

      {
        label: 'number of views',
        data: busViews,
        backgroundColor: 'rgba(24, 200, 1, .5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
      }]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }


  };

  let myChart = new Chart(chart, chartData);
}

function showSection(){
  document.getElementById('sectionId').style.display='block';
}


function handleImageClick(event) {
  votes++;
  let imageClicked = event.target.alt;
  console.log(imageClicked);

  for (let i = 0; i < allPics.length; i++) {
    if (imageClicked === allPics[i].name) {
      allPics[i].votes++;
    }
  }
  renderPics();


  if (votes === CLICKS_ALLOWED) {
    myContainer.removeEventListener('click', handleImageClick);
    showSection();
    renderBusChart();

  }
}

renderPics();

myContainer.addEventListener('click', handleImageClick);


