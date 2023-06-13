const  switchToggle = document.querySelector('input[type = "checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const image4 = document.getElementById('image4')
const image5 = document.getElementById('image5')
const image6 = document.getElementById('image6')


function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
        imageSwitch('dark');
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
        imageSwitch('light');
    }

function darkMode(){
    toggleIcon.children[0].textContent="Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    
}

function lightMode(){
    toggleIcon.children[0].textContent="Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor= 'rgb(255 255 255 / 50%)';
}
}
function imageSwitch (mode){
    image1.src=`img/currency_${mode}.svg`
    image2.src=`img/income_${mode}.svg`


}
switchToggle.addEventListener('change',switchMode);