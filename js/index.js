
let floorNumbers = 1;
let lifts = 1;
const floors = document.querySelector(".floors");
const addFloorBtn = document.querySelector(".add-floor");


addFloorBtn.addEventListener("click", ()=>{
    floorNumbers++;
    addFloor(floorNumbers)    ;
})


function addFloor(floorNumbers){
    let floorContainer = document.createElement("div");
    floorContainer.classList.add("floor-container")
    let floor = `
            <div class="btn-container">
                <button class="lift-btn up-btn">Up</button>
                <button class="lift-btn down-btn">Down</button>
            </div>
            <div class="lift-container">
                <!-- <div class="lift-doors">
                    <div class="door left-door"></div>
                    <div class="door right-door"></div>
                </div> -->
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
    if(lifts<=5){
        
    }
}


