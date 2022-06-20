
let floorNumbers = 0;
let lifts = 1;
const floors = document.querySelector(".floors");
const addFloorBtn = document.querySelector(".add-floor");
const addLiftBtn = document.querySelector(".add-lift");
const banner = document.querySelector(".banner");
const liftContainer = document.querySelector(".lift-container");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const liftBtn = document.querySelectorAll(".lift-btn");
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector(".right-door");
const lift = document.querySelector(".lift-doors")
let floorArray = [];
//adding lifts
addLiftBtn.addEventListener("click", ()=>{
    lifts++;
    addLifts();
})

// adding floors
addFloorBtn.addEventListener("click", ()=>{
    floorNumbers++;
    addFloor(floorNumbers)    ;
})

// door animation
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("lift-btn")){
        // leftDoor.style.transform = "translateX(-85%)"
        // rightDoor.style.transform = "translateX(85%)" 
        // setTimeout(() => {
        //     doorClose();   
        // }, 5000);   
        floorArray.push(e.target.classList.item(2))
        console.log(floorArray) 
        liftMovements(e.target.classList);
    }
})
function doorClose(){
    leftDoor.style.transform = "translateX(0)"
    rightDoor.style.transform = "translateX(0)" 
}
function addFloor(floorNumbers){
    let floorContainer = document.createElement("div");
    floorContainer.classList.add("floor-container")
    let floor = `
            <div class="btn-container">
                <button class="lift-btn up-btn   ${floorNumbers}">Up</button>
                <button class="lift-btn down-btn ${floorNumbers}">Down</button>
            </div>
            <div class="lift-container">
            </div>
            
            <div class="floor">
                <div class="floor-base"></div>
            </div>
            <h3 class="floor-number">Floor ${floorNumbers}</h3>
    `;
    floorContainer.innerHTML= floor;
    floors.prepend(floorContainer);
}

function addLifts(){
    if(lifts<7){
        let liftDoor = document.createElement("div");
        liftDoor.classList.add("lift-doors");
        let lift = `
        <div class="door left-door"></div>
        <div class="door right-door"></div>
        `
        liftDoor.innerHTML = lift;
        liftContainer.append(liftDoor)
    }
    else{
        banner.classList.add("banner-show");
        setTimeout(() => {
            banner.classList.remove("banner-show");
        }, 1000);
    }
}
function liftMovements(e){
    let move = e.item(2)*(-178);
    lift.style.transition = "transform 2.5s linear"
    lift.style.transform= "translateY(" + move + "px)";
}

