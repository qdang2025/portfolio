// // document.querySelector("#contact-form").addEventListener("submit", function (event) {
// //     event.preventDefault();

// //     let name = event.target.name.value;
// //     let email = event.target.email.value;
// //     let message = event.target.message.value;

// //     // Here you'd normally send the form data to a server or service
// //     console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
// // });

// // get all nav links
// const menu = document.querySelector('nav .container ul');

// console.log(menu);
// const navItems = menu.querySelectorAll('li');


// const removeAllActive = () => {
//     navItems.forEach(item => {
//         const link = item.querySelector('a');
//         link.classList.remove('active');
//     })
// }
// navItems.forEach(item => {
//     const link = item.querySelector('a');
//     console.log("lol")
//     link.addEventListener('click', () => {
//         removeAllActive();
//         link.classList.add('active');
//     })
// })


// window.addEventListener('DOMContentLoaded', (event) => {
//     const name = 'Quang Dang';
//     const namePlaceholder = document.getElementById('name-placeholder');

//     function scramble(name) {
//         let scrambled = name.split('').reverse();
//         for (let i = 1; i < scrambled.length; i += 2) {
//             let temp = scrambled[i];
//             scrambled[i] = scrambled[i - 1];
//             scrambled[i - 1] = temp;
//         }
//         return scrambled.join('');
//     }

//     const scrambledName = scramble(name);
//     namePlaceholder.innerText = scrambledName;

//     let nameArray = scrambledName.split('');
//     let correctNameArray = name.split('');
//     let correctIndex = 0;

//     const unscramble = setInterval(() => {
//         let incorrectIndex = nameArray.indexOf(correctNameArray[correctIndex]);
//         if (incorrectIndex !== -1) {
//             // swap characters
//             [nameArray[incorrectIndex], nameArray[correctIndex]] = [nameArray[correctIndex], nameArray[incorrectIndex]];
//             namePlaceholder.innerText = nameArray.join('');

//             if (++correctIndex === correctNameArray.length) {
//                 clearInterval(unscramble);
//             }
//         }
//     }, 100);
// });
