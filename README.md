# bus-mall

## lab 11

the busmall website contains a header with the name of the site and a picture. in the body are three pictures that change whenever one is clicked on.  after a predetermined amount of clicks a button is available to view an unordered list containing how many times a picture was viewed and how many times it was clicked.
picture credit for the bus.jpg in the header goes to Egor Litvinov.

## Lab 12

Busmall now contains a bar chart using a library from chart.js.  The bar shows how many times a picture was chosen from the three, and also how many times it was viewed. I set a function on the section containing the canvas that calls the section only when the event is rendered. Also added to the javascript was a way to ensure that the same picture will not preceed itself at any time. 

## lab 13

Made it so information is stored locally on my machine, or any machine using the website. The total views and votes will be stored as well as the name and source. the values will increase every time the website is refreshed adding to the totals that were already stored locally.

## lab 15

in this final polishing of the lab I removed console logs and cleaned up spacing linter errors. The site presents 3 pictures to choose from. As one is chosen three brand new pictures appear.  after 25 choices a bar graph appears telling the user how many times a picture appeared and how many times it was clicked.  In local storage, the total number of views and clicks is saved and is added to whenever the page is loaded and run through again on the same machine.
