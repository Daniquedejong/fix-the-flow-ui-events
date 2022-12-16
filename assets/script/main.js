let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', rotateHandler)
frontend.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  frontend.classList.toggle('rotate')
}


let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', zoomoutHandler)
design.addEventListener('animationend', zoomoutHandler)

function zoomoutHandler() {
  design.classList.toggle('zoomout')
}


let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', turnHandler)
and.addEventListener('animationend', turnHandler)

function turnHandler() {
  and.classList.toggle('turn')
}


let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', droplowHandler)
development.addEventListener('animationend', droplowHandler)

function droplowHandler() {
development.classList.toggle('droplow')
}


let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', zoominHandler)
sprint5.addEventListener('animationend', zoominHandler)

function zoominHandler() {
sprint5.classList.toggle('zoomin')
}

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', hotpinkkHandler)
fix.addEventListener('animationend', hotpinkkHandler)

function hotpinkkHandler() {
fix.classList.toggle('hotpinkk')
}

let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', hoverHandler)
the.addEventListener('animationend', hoverHandler)

function hoverHandler() {
the.classList.toggle('hover')
}

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', blurHandler)
flow.addEventListener('animationend', blurHandler)

function blurHandler() {
flow.classList.toggle('blur')
}

