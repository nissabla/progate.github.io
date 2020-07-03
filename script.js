window.onscroll = function scrollFunction() {
    let mybutton = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.backgroundColor = 'rgb(34,49,52,0.9)';
      mybutton.style.zIndex = '10';
    } else {
      mybutton.style.s = 'transparant';
    }
  }
  
  function findPos(item) {
    let curtop = 0;
    if (item.offsetParent) {
      do {
        curtop += item.offsetTop;
      }
      while (item = item.offsetParent);
      return [curtop];
    }
  }
  
  const scrollLink = (id)=> {
    let a = document.getElementById(id);
    window.scroll({
      top: findPos(a) - 120,
      behavior: 'smooth'
    });
    let elm = document.getElementById('menu-toggle');
    if (elm.checked = true) {elm.click();}
  }

const card = document.querySelectorAll('.wisata-wrapper .container .card section');
card.forEach(img => {
  img.addEventListener('mouseover', function () {
    img.classList.toggle('clicked');
    console.log(img);
    
  })
  img.addEventListener('mouseout', function () {
    img.classList.toggle('clicked');
  })
});
