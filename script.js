var tl = gsap.timeline({
    repeat:-1
 });

 tl.to(".imagecontainer",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:2,
    stagger:2
},'riza')
.to(".text h1",{
    top:0,
    ease:Expo.easeInOut,
    duration:2,
    stagger:2
},'riza')
.to(".text h1",{
    delay:2,
    top:"-100%",
    ease:Expo.easeInOut,
    duration:2,
    stagger:2
},'riza')