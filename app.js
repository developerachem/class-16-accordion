const accordionTitel = document.querySelectorAll('.accordion-titel');

accordionTitel.forEach(item => {
  item.addEventListener('click', function () {

    accordionTitel.forEach(item => {
      if (item != this) {
        item.classList.remove('active')
        item.nextElementSibling.style.height = '0';
      item.children[1].classList.remove('active')

      }

    })


    item.classList.toggle('active')


    if (item.classList.contains('active')) {
      item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
      item.children[1].classList.add('active')

    } else {
      item.nextElementSibling.style.height = '0';
      item.children[1].classList.remove('active')

    }


  })

})