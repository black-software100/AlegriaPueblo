

gsap.registerPlugin(ScrollTrigger) 


gsap.from(".p1", {
  scrollTrigger: {
    trigger:".donacion",
    end:" top ",  
    start:"top 100px",
    // scrub:1,
    //markers:true
  }, 
    // start the animation when ".box" enters the viewport (once) ,
    color:"transparent",
    y: 90,
    // duration:90
});

  gsap.from(".p2", {
    scrollTrigger: {
        trigger:".proyectos",
        end:" bottom center",  
        start:"top 100px",
        // toggleClass:"carta",
        scrub:1,
        markers:true
    }, // start the animation when ".box" enters the viewport (once) ,
    ease:"none",
    // boxshadow:  "5px 5px 20px rgba(0,0,0,0.4)",
    color:"transparent",
    duration:1,
    x:-200
  });

