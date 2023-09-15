const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const   links = document.querySelectorAll(".links");

btn.addEventListener('click',()=>{
    box.classList.toggle('active');
});

links.forEach((item,index)=>{
    if(index ==0 ){
        item.classList.add('active-link')
    }
    item.addEventListener('click',()=>{
        for (let i of links){
             i.classList.remove("active-link");
            };
            item.classList.add("active-link");
    });
});