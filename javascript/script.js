let navlinks = document.querySelectorAll(".links a");

let bodyid = document.querySelector("body").id;

for(let link of navLinks){

    if(link.dataset.active == bodyId){

        link.classList.add("active");
        
    }
}