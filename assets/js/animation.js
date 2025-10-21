
//Animations
gsap.registerPlugin(ScrollTrigger);

// //scroller-smooth
// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 300)
// })
// gsap.ticker.lagSmoothing(0)
// // close



// banner
  gsap.set(".hero-title .word", { y: 40, opacity: 0 });
  gsap.set(".hero-subtitle", { y: 30, opacity: 0 });
  gsap.set(".cta-button", { y: 30, opacity: 0 });

  const tl = gsap.timeline();
  tl.to(".hero-title .word", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out"
  });
  tl.to(".hero-subtitle", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
  }, "-=0.6");
  tl.to(".cta-button", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
  }, "-=0.7");




