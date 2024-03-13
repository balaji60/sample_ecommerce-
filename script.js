let open3=document.getElementById('open');
let cart=document.getElementById('cart');

let open_links3=document.getElementById('ul');
open3.addEventListener('click',()=>{
    open_links3.classList.toggle('open');
})


let header=document.querySelector('.header');
let cart_list=document.createElement('div');
cart_list.className="cart_list";
cart_list.style.cssText="position:absolute; height:50vh; transition: .3s; background-color:blue; width:100%; top:-50vh; right:0; "
header.append(cart_list)


cart.addEventListener('click',function(){
    cart_list.classList.toggle("open_close");
    
});

let main_image=document.getElementById("ma");
let small_imgs=document.getElementsByClassName("sm1");
small_imgs[0].onclick=function() {
    main_image.src=small_imgs[0].src;
}
small_imgs[1].onclick=function() {
    main_image.src=small_imgs[1].src;
}
small_imgs[2].onclick=function() {
    main_image.src=small_imgs[2].src;
}
small_imgs[3].onclick=function() {
    main_image.src=small_imgs[3].src;
}

 



