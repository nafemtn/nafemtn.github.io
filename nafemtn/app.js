// function showContent() {
//     document.querySelector('.loader-container').classList.add('hidden');
// }

// setTimeout(showContent, 3000);

const txtAnim = document.querySelector('h1');
const fullstack =document.querySelector('.fullStacks')

new Typewriter(txtAnim, {
    loop: true,
    deleteSpedd: 100
})
.changeDelay(100)
.typeString('Developpeuse web')
.typeString('<span style="color: #FF7F00"> <strong> Junior </strong> </span>')
.pauseFor(300)
.typeString('<strong> FullStacks </strong> ')
.pauseFor(600)
.deleteChars(12)
.start()