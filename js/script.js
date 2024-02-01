/* Banner Autoslide start */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    
    if (n > imgList.length)  slideIndex = 1;
    else if(n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display ='none';
    }

    
    imgList[slideIndex - 1].style.display= 'block';
    
}

/* Banner autoslide end */


/* Validasi input nama dan email */

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-kirim');

/* Tombol Send input Nama & Email start */

button.addEventListener('click', function(){
   let nama = inputName.value;
   let email = inputEmail.value;

   /* Validasi input nama */

    if (!nama) { // !(negasi) atau jika tidak ada nama

        //alert("nama harus diisi");

        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Nama harus diisi"; // fungsinya seperti perintah alert di atas
    }

    /* Validasi input email */

    if (!email) {

        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = "Email harus diisi";
    }
}
);

/* Tombol Send input Nama & Email end */


/*
let currentIndex = 0;

// Declare variable to control slides 
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides')


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transform = 'translateX(${-currentIndex * slideWidth}px)'
}
*/

/*
setInterval(() => {
    plusDivs(1);
}, 1000)
*/

// setInterval(nextSlide, 500);



