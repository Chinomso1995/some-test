const mobileMenuToggler = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const desktopPlayIcon = document.querySelector('.play-icon');
const mobilePlayIcon = document.querySelector('.mobile-play-icon')
const video = document.querySelector('.video-to-play')

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  location.assign("./thank-you/thank-you.html")
})


mobileMenuToggler.addEventListener("click", function(){ 
    mobileMenu.classList.toggle("mobile-menu-active");
});

desktopPlayIcon.addEventListener("click", function(){ 
  video.paused ? video.play() : video.pause();
});

mobilePlayIcon.addEventListener("click", function(){ 
  video.paused ? video.play() : video.pause();
});




function navigation(slider) {
    let wrapper, dots, arrowLeft, arrowRight
  
    function markup(remove) {
      wrapperMarkup(remove)
      dotMarkup(remove)
      arrowMarkup(remove)
    }
  
    function removeElement(elment) {
      elment.parentNode.removeChild(elment)
    }
    function createDiv(className) {
      var div = document.createElement("div")
      var classNames = className.split(" ")
      classNames.forEach((name) => div.classList.add(name))
      return div
    }
  
    function arrowMarkup(remove) {
      if (remove) {
        removeElement(arrowLeft)
        removeElement(arrowRight)
        return
      }

      customisedArrowLeft = document.querySelector(".arrow--left")
      customisedArrowRight = document.querySelector(".arrow--right")
      arrowLeft = createDiv("arrow arrow--left")
      arrowLeft.addEventListener("click", () => slider.prev())
      arrowRight = createDiv("arrow arrow--right")
      arrowRight.addEventListener("click", () => slider.next())

      customisedArrowLeft.addEventListener("click", () => slider.prev())
      customisedArrowRight.addEventListener("click", () => slider.next())
  
      wrapper.appendChild(arrowLeft)
      wrapper.appendChild(arrowRight)
    }
  
    function wrapperMarkup(remove) {
      if (remove) {
        var parent = wrapper.parentNode
        while (wrapper.firstChild)
          parent.insertBefore(wrapper.firstChild, wrapper)
        removeElement(wrapper)
        return
      }
      wrapper = createDiv("navigation-wrapper")
      slider.container.parentNode.appendChild(wrapper)
      wrapper.appendChild(slider.container)
    }
  
    function dotMarkup(remove) {
      if (remove) {
        removeElement(dots)
        return
      }
      dots = createDiv("dots")
      slider.track.details.slides.forEach((_e, idx) => {
        var dot = createDiv("dot")
        dot.addEventListener("click", () => slider.moveToIdx(idx))
        dots.appendChild(dot)
      })
      wrapper.appendChild(dots)
    }
  
    function updateClasses() {
      var slide = slider.track.details.rel
      slide === 0
        ? arrowLeft.classList.add("arrow--disabled")
        : arrowLeft.classList.remove("arrow--disabled")
      slide === slider.track.details.slides.length - 1
        ? arrowRight.classList.add("arrow--disabled")
        : arrowRight.classList.remove("arrow--disabled")
      Array.from(dots.children).forEach(function (dot, idx) {
        idx === slide
          ? dot.classList.add("dot--active")
          : dot.classList.remove("dot--active")
      })
    }
  
    slider.on("created", () => {
      markup()
      updateClasses()
    })
    slider.on("optionsChanged", () => {
      console.log(2)
      markup(true)
      markup()
      updateClasses()
    })
    slider.on("slideChanged", () => {
      updateClasses()
    })
    slider.on("destroyed", () => {
      markup(true)
    })
  }
  
var slider = new KeenSlider("#my-keen-slider", { slides: {
    perView: 1,
    spacing: 25,
    origin: "center",
  },}, [navigation])

  var slider = new KeenSlider("#mobile-keen-slider", { slides: {
    perView: 1,
    spacing: 25,
    origin: "center",
  },}, [navigation])