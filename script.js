const dockItem = document.getElementsByClassName('dockItem');
for (let i = 0; i <dockItem.length; i++) {
    dockItem[i].addEventListener('click', () => {
    dockItem[i].classList.add('clicked');
    setTimeout(() => {
      dockItem[i].classList.remove('clicked');
    }, 3000);
});
};