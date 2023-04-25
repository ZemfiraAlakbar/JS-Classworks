let header = document.createElement('header')
let nav=document.createElement('nav')
let ul=document.createElement('ul')
let Home= document.createElement('li')
let About = document.createElement('li')
let Blog = document.createElement('li')
let Contact = document.createElement('li')
let homeSec=document.createElement('section')
let aboutSec=document.createElement('section')
let blogSec=document.createElement('section')
let contactSec=document.createElement('section')

document.body.append(header)
header.append(nav)
nav.append(ul)
ul.append(Home)
ul.append(About)
ul.append(Blog)
ul.append(Contact)

Home.innerText='Home'
About.innerText='About'
Blog.innerText='Blog'
Contact.innerText='Contact'

ul.style.height='10vh'
ul.style.display='flex'
ul.style.justifyContent='space-around';
ul.style.backgroundColor='#000'
ul.style.alignItems='center';

Home.style.color='#fff'
About.style.color='#fff'
Blog.style.color='#fff'
Contact.style.color='#fff'
Home.style.listStyle='none'
About.style.listStyle='none'
Blog.style.listStyle='none'
Contact.style.listStyle='none'
Home.style.cursor='pointer'
About.style.cursor='pointer'
Blog.style.cursor='pointer'
Contact.style.cursor='pointer'

homeSec.innerText='Home'
aboutSec.innerText='About'
blogSec.innerText='Blog'
contactSec.innerText='Contact'

homeSec.style.height='100vh'
homeSec.style.display='flex'
homeSec.style.alignItems='center'
homeSec.style.justifyContent= 'center'
homeSec.style.fontSize='20px'
homeSec.style.fontWeight='bolder'
homeSec.style.border='1px dashed #000'

aboutSec.style.display='flex'
aboutSec.style.alignItems='center'
aboutSec.style.height='100vh'
aboutSec.style.justifyContent= 'center'
aboutSec.style.fontSize='20px'
aboutSec.style.fontWeight='bolder'
aboutSec.style.border='1px dashed #000'

blogSec.style.height='100vh'
blogSec.style.display='flex'
blogSec.style.alignItems='center'
blogSec.style.justifyContent= 'center'
blogSec.style.fontSize='20px'
blogSec.style.fontWeight='bolder'
blogSec.style.border='1px dashed #000'

contactSec.style.height='100vh'
contactSec.style.display='flex'
contactSec.style.alignItems='center'
contactSec.style.justifyContent= 'center'
contactSec.style.fontSize='20px'
contactSec.style.fontWeight='bolder'
contactSec.style.border='1px dashed #000'

document.body.append(homeSec)
document.body.append(aboutSec)
document.body.append(blogSec)
document.body.append(contactSec)

homeSec.id='home'
aboutSec.id='about'
blogSec.id='blog'
contactSec.id='contact'

Home.addEventListener('click',function () {
    window.location.href='#home'
})
About.addEventListener('click',function () {
    window.location.href='#about'
})
Blog.addEventListener('click',function () {
    window.location.href='#blog'
})
Contact.addEventListener('click',function () {
    window.location.href='#contact'
})