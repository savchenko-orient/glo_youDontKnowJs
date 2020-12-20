'use strict';

const books = document.querySelectorAll('.book'),
    nameBooks = document.querySelectorAll('a'),
    advertising = document.getElementsByClassName('adv'),
    chapterBook = document.querySelectorAll('li'),
    newChapter = document.createElement('li');


    
document.body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";
books[5].after(books[2]);
books[0].before(books[1]);
books[3].before(books[4]);

nameBooks[4].innerText = 'Книга 3. this и Прототипы Объектов';

chapterBook[3].after(chapterBook[6]);
chapterBook[6].after(chapterBook[8]);
chapterBook[9].after(chapterBook[2]);

chapterBook[48].before(chapterBook[55]);
chapterBook[48].before(chapterBook[49]);
chapterBook[48].before(chapterBook[50]);
chapterBook[54].before(chapterBook[51]);


newChapter.innerText = 'Глава 8: За пределами ES6';
chapterBook[25].after(newChapter);




// advertising.parentNode.removeChild(advertising);


