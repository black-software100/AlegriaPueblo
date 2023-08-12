gsap.from(".mv", { duration: 2, fadein: true, z: 1250});

gsap.registerPlugin(ScrollTrigger) 


  // // gsap.from(".mv", {
  // //   scrollTrigger: {
  // //       trigger:".img",

  // //       end:" top ",  
  // //       start:"top 100px",
  // //       scrub:1
  //   //}, // start the animation when ".box" enters the viewport (once) ,
  //   // ease:"none",
  //   // x: -2090,
  //   // duration:90
    
  // });

  // gsap.to(".cartas", {
  //   scrollTrigger: {
  //       trigger:".img",
  //       end:" top ",  
  //       start:"top 100px",
  //       toggleClass:"carta",
  //       scrub:1
  //   }, // start the animation when ".box" enters the viewport (once) ,
  //   ease:"none",
  //   //boxshadow:  "5px 5px 20px rgba(0,0,0,0.4)",

  //   background: "#d1b891",
  //   color:"black",
  //   border:"black",
  //   duration:1,
    
  // });

  // gsap.from(".pmv", {
  //   scrollTrigger: {
  //       trigger:".img",

  //       end:" top ",  
  //       start:"top 100px",
        
  //       scrub:1
  //   }, // start the animation when ".box" enters the viewport (once) ,
  //   ease:"none",
  //   color:"transparent",
  //   duration:90
  // });
  
  // gsap.to(".mb", {
  //   scrollTrigger: {
  //       trigger:".cartas",
  //       start:"top center",
  //       end:" top 100px",
  //       scrub:1
  //   }, // start the animation when ".box" enters the viewport (once)
  //   background: "#d1b891" ,
  //   ease:"none",
  //   duration:90,
  // });

  // gsap.to(".cat", {
  //   scrollTrigger: {
  //       trigger:".cartas",
  //       start:"top center",
  //       end:" top 100px",
  //       scrub:1
  //   }, // start the animation when ".box" enters the viewport (once)
  //   background:"#fff",
  //   ease:"none",
  //   duration:1,
  // });