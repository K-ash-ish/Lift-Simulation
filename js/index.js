
const liftBtn = document.querySelectorAll(".lift-btn");
const doors = document.querySelectorAll(".door")
const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
liftBtn.forEach(btn => {
    btn.addEventListener("click", (e)=>{
       leftDoor.classList.add("left-door-close");
       rightDoor.classList.add("right-door-close");
       setTimeout(() => {
        leftDoor.classList.remove("left-door-close");
        rightDoor.classList.remove("right-door-close");
       }, 5000);
    })
});


