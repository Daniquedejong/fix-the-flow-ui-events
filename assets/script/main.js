/*....Voorbeeld-12....*/
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

/*....button-1....*/
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', rotateHandler)
frontend.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  frontend.classList.toggle('rotate')
}

/*....button-2....*/
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', zoomoutHandler)
design.addEventListener('animationend', zoomoutHandler)

function zoomoutHandler() {
  design.classList.toggle('zoomout')
}

/*....button-3....*/
let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', turnHandler)
and.addEventListener('animationend', turnHandler)

function turnHandler() {
  and.classList.toggle('turn')
}

/*....button-4....*/
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', droplowHandler)
development.addEventListener('animationend', droplowHandler)

function droplowHandler() {
development.classList.toggle('droplow')
}

/*....button-5....*/
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', zoominHandler)
sprint5.addEventListener('animationend', zoominHandler)

function zoominHandler() {
sprint5.classList.toggle('zoomin')
}

/*....button-6....*/
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', hotpinkkHandler)
fix.addEventListener('animationend', hotpinkkHandler)

function hotpinkkHandler() {
fix.classList.toggle('hotpinkk')
}

/*....button-7....*/
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', hoverHandler)
the.addEventListener('animationend', hoverHandler)

function hoverHandler() {
the.classList.toggle('hover')
}

/*....button-8....*/
let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', blurHandler)
flow.addEventListener('animationend', blurHandler)

function blurHandler() {
flow.classList.toggle('blur')
}

/*....button-9....*/
let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', coolHandler)
user.addEventListener('animationend', coolHandler)

function coolHandler() {
user.classList.toggle('cool')
}

/*....button-10....*/
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', highHandler)
interface.addEventListener('animationend', highHandler)

function highHandler() {
interface.classList.toggle('high')
}
