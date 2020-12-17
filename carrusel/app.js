
var thumbs = new Swiper('.gallery-thumbs' , {

    /** TODO */
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});


/** TODO: Popup */
var modal = new Swiper('.gallery-pops', {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: thumbs
      },
  });

    // modal.controller.control = thumbs;
    // thumbs.controller.control = modal;
    
    var gallery = document.getElementById("la-calera-popup");
    function openPop (){
        gallery.style.display = "block";
    }
    function closePop (){
         gallery.style.display = "none";
         
     }
