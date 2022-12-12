const tl = gsap.timeline({defults:{duration:0.75, ease:"power1.out"}})

tl.fromTo('.lion-container', {scale:0}, {scale:1, ease:"elastic.out(1, 0.4)", duration:1.5}, '<')
tl.fromTo('.lion', {opacity:0, x:-50, rotation:'-45deg'}, {opacity:1, x:0, rotation:'0deg'}, '<50%')
tl.fromTo('.text', {x:30, opacity:0}, {x:0, opacity:1}, '<')

tl.fromTo('.lion', {rotation:'-20deg', duration:1.5}, {yoyo:true, repeat:-1, rotation:'20deg', duration:1.5}, '<')


