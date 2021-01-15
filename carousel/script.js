const arrayImages = [
  'https://images.unsplash.com/photo-1553610074-8c838fa2e56e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
  'https://images.unsplash.com/photo-1582380626754-bcf3185f1832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
  'https://images.unsplash.com/photo-1568443153835-30ec5c707463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
  'https://images.unsplash.com/photo-1568283661163-c90193fd13f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
  'https://images.unsplash.com/photo-1573915778908-f47be489d8f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
];

const containerImages = {
  container: document.querySelector('#container')

};

const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');

arrowNext.addEventListener('click', function(){
  const activeItem = findActiveImg();
  if(!activeItem.classList.contains('last-item')){    
    activeItem.classList.remove('active');
    activeItem.nextElementSibling.classList.add('active');
  }
});

arrowPrev.addEventListener('click', function(){
  const activeItem = findActiveImg();
  if(!activeItem.classList.contains('first-item')){    
    activeItem.classList.remove('active');
    activeItem.previousElementSibling.classList.add('active');
  }
});


function createImage(array, container){
  array.forEach((element, index, array) => {
    const newImg = document.createElement('img');
    newImg.src = element;

    if(index === 0){
      newImg.classList.add('first-item');
      newImg.classList.add('active');
    } else if (index === (array.length - 1) ){
      newImg.classList.add('last-item');
    }
    container.appendChild(newImg);
  });
}


function findActiveImg(){
  return document.querySelector('.active');
}

createImage(arrayImages, containerImages.container);
document.alinkColor = 'red';