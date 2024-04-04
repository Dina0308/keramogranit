//анимация главной
function animation() {
    gsap.registerPlugin(ScrollTrigger);
 
     gsap.from('.main-catalog__item', {
       opacity: 0,
       yPercent: 100,
       stagger: 0.4,
       scrollTrigger: {
         trigger: '.main-catalog',
         start: '30% bottom', 
        
         toggleActions: 'play none none reverse',
       }
     });
 
     gsap.to('.promo__img', {
       'width': '150%',
       scrollTrigger: {
         start: 'top top',
         end: '400px',
         // markers: true,
         scrub: true,
       }
     });
 
     const tlImg = gsap.timeline({
       scrollTrigger: {
         trigger: '.main-about__images',
         start: 'top top',
         pin: true,
         scrub: 1,
       }
     });
     tlImg.to('.main-about__img:first-child img', {
       scale: 1
     });
     tlImg.to('.main-about__img:last-child img', {
       scale: 0
     }, '<');
    
  }
  animation();