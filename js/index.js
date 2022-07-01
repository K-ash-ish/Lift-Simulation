
let floorNumbers = 0;
let lifts = 1;
let floorQueue = [];

const addFloorBtn = document.querySelector(".add-floor");//event listner
const addLiftBtn = document.querySelector(".add-lift");//event listner

const lift = document.querySelector(".lift-doors");
const liftContainer = document.querySelector(".lift-container");

const DomElements = ()=>{
    const floors = document.querySelector(".floors");
    const banner = document.querySelector(".banner");
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector(".right-door");
    return {floors, banner, leftDoor, rightDoor};
}

//adding lifts
addLiftBtn.addEventListener("click", ()=>{
    lifts++;
    let maxLifts;
    if(window.innerWidth<600&& window.innerWidth > 400){
        maxLifts= 5;
        addLifts(maxLifts)
    }
    else if (window.innerWidth<400){
        addLifts(4)
    }
    else{
        maxLifts = 8
        addLifts(maxLifts);
    }
})
function addLifts(maxLifts){
    let {banner} = DomElements();
    if(lifts<maxLifts){
        let liftDoor = document.createElement("div");
        liftDoor.classList.add("lift-doors");
        liftDoor.dataset.currentfloor = 0;
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

// adding floors
addFloorBtn.addEventListener("click", ()=>{
    floorNumbers++;
    addFloor(floorNumbers)    ;
})
function addFloor(floorNumbers){
    let {floors} = DomElements();
    let floorContainer = document.createElement("div");
    floorContainer.classList.add("floor-container")
    let floor = `
            <div class="btn-container">
                <button class="lift-btn up-btn   ${floorNumbers}" data-floor = ${floorNumbers}>Up</button>
                <button class="lift-btn down-btn ${floorNumbers}" data-floor = ${floorNumbers}>Down</button>
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

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("lift-btn")){
        targetFloor = e.target.classList.item(2);
        checkLiftStatus(targetFloor);
    }
})

function checkLiftStatus(targetFloor){
    console.log("Checking if lift is busy or not")
    
    if(!lift.classList.contains("busy")){
        console.log("Lift not busy moving to the floor")
        moveLift(targetFloor);
    }
    else{
        floorQueue.push(targetFloor)
        console.log("lift is busy queuing the floor");
    }
}

function moveLift(targetFloor){
    let {leftDoor, rightDoor} = DomElements();
    
    let currentFloor = lift.dataset.currentfloor;
    let duration = Math.abs(targetFloor - currentFloor) * 2
    let move = targetFloor*(-178);
    lift.style.transition = `transform ${duration}s linear`;
    lift.style.transform= "translateY(" + move + "px)";
    lift.classList.add("busy");
    lift.dataset.currentfloor = targetFloor;
    
    setTimeout(() => {
        leftDoor.style.transform = "translateX(-85%)"
        rightDoor.style.transform = "translateX(85%)" 
    }, duration * 1500);  

    setTimeout(() => {
        leftDoor.style.transform = "none"
        rightDoor.style.transform = "none" 
    }, 3000 +(1500 * duration)); 

    setTimeout(() => {
        lift.classList.remove("busy")
        if(floorQueue.length){
            moveLift(floorQueue.shift());
        }
        else{
            console.log("No more CALLLLLSS.....")
        }
    }, 6000 + ( duration * 1500));

}
