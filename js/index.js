
const liftBtn = document.querySelectorAll(".lift-btn");
const doors = document.querySelectorAll(".door")
const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const lift = document.querySelector(".lift-doors")
liftBtn.forEach(btn => {
    btn.addEventListener("click", (e)=>{
       openDoors();       
       setTimeout(function(){
           closeDoors();
        }, 5000);
       setTimeout(function(){
           moveLiftUp(btn)
           
        }, 8000);
    })
});
function openDoors(){
    leftDoor.classList.add("left-door-close");
    rightDoor.classList.add("right-door-close");
    console.log("door open")
}
function closeDoors(){
    leftDoor.classList.remove("left-door-close");
    rightDoor.classList.remove("right-door-close");
    console.log("door close")
}
function moveLiftUp(btn){
    lift.classList.add("lift")
    console.log(btn)
    console.log("lift moving to other floor...");    
    
}


