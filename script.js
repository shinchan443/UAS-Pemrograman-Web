// Anggota Kelompok  
//   Nama : Ichsanul Fikri Al Farisi 
//   Nim : 230401010333
//   Kelas : IT203
//   Mata Kuliah : Pemrograman Web

//   Nama : Abdurrahman Rizki  
//   Nim  : 230401010078  
//   Kelas : IT203
//   Mata Kuliah : Pemrograman Web


// modal script
const closeModalBtn = document.getElementById("modal-close")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")
const langgananBtn = document.getElementById("langganan")

function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)
langgananBtn.addEventListener("click", closeModal)

// swiper script
let swiperCards = new Swiper('.card-content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
        delay: 2000,
    }
   
  });
  