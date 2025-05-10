
const Category = document.getElementById('category');
const OpenMenu = document.getElementById('openMenu');

Category.addEventListener('click', () => {
  const OpenMenuPosition = OpenMenu.style.right === '0rem' ? '-20rem' : '0rem';
  OpenMenu.style.right = OpenMenuPosition;
});
const category = document.getElementById('category');

category.addEventListener('click', function() { 
  category.classList.toggle('rotate');
});

