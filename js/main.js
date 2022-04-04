//  1. Math randomdan foydalanib console ga quyidagi shartlarda xabarlarni chiqaring:
//     - math randomdan hosil bo'lgan son 1 va 100 oralig'ida bo'lsin
//     - agar hosil bo'lgan son 1 dan katta, 17 dan kichik bo'lsa, consolega "Maktab yoshi"
//     - agar hosil bo'lgan son 18 dan katta, 24 dan kichik bo'lsa, consolega "Universitet yoshi"
//     - agar hosil bo'lgan son 25 dan katta, 40 dan kichik bo'lsa, consolega "Ishlash yoshi"
//     - agar hosil bo'lgan son 41 dan katta bo'lsa, consolega "Nuroniylar yoshi"
const btn = document.querySelector('.main-btn');
let age = Math.round(Math.random()*100)+1;

if (age <= 17  && age > 1) {
    console.log(age + " maktab yoshi" + " Study hard!");
} else if (age <= 24 && age > 18) {
    console.log(age +" Universitet yoshi" + " Study harder");
} else if (age < 40) {
    console.log(age + " Ishlash yoshi" + " Work hard");
} else {
    console.log(age + " Nuroniylar yoshi" + " Rest Hard!");
}


//first try with btn, it works!!!
btn.addEventListener('click', () => {
    let age = Math.floor(Math.random()*100)+1;

if (age <= 17  && age > 1) {
    console.log(age + " maktab yoshi" + " Study hard!");
} else if (age <= 24 && age > 18) {
    console.log(age +" Universitet yoshi" + " Study harder");
} else if (age < 40) {
    console.log(age + " Ishlash yoshi" + " Work hard");
} else {
    console.log(age + " Nuroniylar yoshi" + " Rest Hard!");
}
})