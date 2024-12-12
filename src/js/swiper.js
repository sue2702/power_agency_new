
const swiper = new Swiper(".swiper_2", {
    slidesPerView: 5,
  });
  const swiper2 = new Swiper(".swiper_1", {
    
    thumbs: {
      swiper: swiper,
    },
  });

  const Myswiper = new Swiper(".myswiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });