// header navigation panel

class ButtonChange {
  constructor({ el, speed, open }) {
    this.el = document.querySelector(el)
    this.open = document.querySelector(open)
    this.speed = speed === 300 ? speed : 500
    this.button = this.open.querySelector('.header__close')

    this.el.addEventListener('click', () => {
      this.open.classList.toggle('open')
      this.open.style.transition = `${this.speed}ms linear`
      this.el.classList.toggle('open')
    })

    this.button.addEventListener('click', el => {
      this.open.classList.toggle('open')
      this.el.classList.toggle('open')
    })

  }
}

const buttonChange = new ButtonChange({
  el: '.header__content-bar',
  speed: 300,
  open: '.header__list'
});

// change the width of button in which written "Kontakt" in the process of adaptation aquired

const headerBtn = document.querySelector('.header_btn'),
  maxWidth = headerBtn.clientWidth,
  content = headerBtn.innerHTML,
  width = () => {
    if (window.innerWidth < 400) {
      headerBtn.style.width = '50px'
      headerBtn.innerHTML = ''
      headerBtn.classList.add('remove')
    } else {
      headerBtn.style.width = `${maxWidth}px`
      headerBtn.innerHTML = content
      headerBtn.classList.remove('remove')
    }
  }
width()
window.onresize = () => width()

// wide by pressing the button standing on the top side of the picture
class Wide {
  constructor({ el, time, btn }) {
    this.el = document.querySelector(el)
    this.btn = this.el.querySelector(btn)
    this.time = time === 500 ? time : 500

    this.btn.addEventListener('click', el => {
      this.el.classList.toggle('active')
      this.el.style.transition = `${this.time}ms linear`
    })

  }
}

const wide = new Wide({
  el: '.section__image',
  time: 500,
  btn: '.section__image-icon'
});

// show the picture in the element of connect.pug with the button named show-picture

class Show {
  constructor({ el, time, button }) {
    this.el = document.querySelector(el)
    this.button = document.querySelector(button)
    this.close = this.el.querySelector('.history__image-btn')
    this.time = time === 500 ? time : 500

    this.button.addEventListener('click', el => {
      this.el.classList.toggle('active')
      this.close.classList.toggle('active')
    })

    this.close.addEventListener('click', e => {
      this.el.classList.toggle('active')
      this.close.classList.toggle('active')
    })
  }
}

const show = new Show({
  el: '.history__image',
  time: 500,
  button: '.show-picture'
});

// user button changing in the actio of modyfication

class Push {
  constructor({ el }) {
    this.el = document.querySelector(el)
    this.text = this.el.innerHTML
    this.pushing()
    this.width = this.el.clientWidth
    window.onresize = () => this.pushing()



  }
  pushing() {
    if (window.innerWidth < 500) {
      this.el.innerHTML = ''
      this.el.style.width = '30px'
      this.el.classList.add('center')
    } else if (window.innerWidth > 500) {
      this.el.innerHTML = this.text
      this.el.classList.remove('center')
      this.el.style.width = `${this.width}px`
    }

  }
}

const push = new Push({
  el: '.block__user-btn'
});

// showing the picture from last.puck

class Look {
  constructor({ el, time, img, btn }) {
    this.el = document.querySelector(el)
    this.img = document.querySelector(img)
    this.btn = this.img.querySelector(btn)
    this.time = time === 500 ? time : 500
    
    this.el.addEventListener('click', e => {
      this.img.classList.toggle('look')
      this.btn.classList.toogle('close')
    })

    this.btn.addEventListener('click', el => {
      this.img.classList.toggle('look')
      this.btn.classList.toogle('close')
    })

  }
}

const look = new Look({
  el: '.build__btn',
  time: 500,
  img: '.build__img',
  btn: '.build__img-btn'
});