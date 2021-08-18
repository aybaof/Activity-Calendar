
open = false;

const sideMenu = document.querySelector(".sidemenu");

sideMenu.addEventListener("click", () => {
	
	if (open){
		sideMenu.style.right = "-19vw"
		open = false;
	} else {
		sideMenu.style.right = "0px"
		open = true;
	}
})

var x = 0
var y = 0
var currentElement = 0;
toDrag = null
var copies = [];


const containers = document.querySelectorAll("div.p1 table tr td")
const draggables = document.querySelectorAll("div.sidemenu table tr td img")


function updateCopies(){
	var name = copies[copies.length - 1]
	console.log(copies[copies.length - 1])
	console.log(name)
	copies[copies.length - 1].addEventListener("touchstart", () => {
		//name.style.visibility = "hidden"
	})
	copies[copies.length - 1].addEventListener("touchmove", () => {
		x = event.touches[0].clientX;
		y = event.touches[0].clientY;
		document.body.append(name);
		name.style.position = "absolute";
		name.style.width = "250px";
		name.style.left = x+'px';
  		name.style.top = y+'px';
	})
	console.log("yay")
}


for(let i = 0; i < 36; i++){
	draggables[i].addEventListener("touchstart", () => {
		currentElement = i;

		console.log(currentElement)
		toDrag = draggables[currentElement].cloneNode(true)
		toDrag.classList.add("copy");
		// toDrag.addEventListener("touchstart", console.log("working"))
		// draggables[currentElement].style.visibility = "hidden"
		
	})

}

for (item of draggables){
	item.addEventListener("touchmove", () => {
		x = event.touches[0].clientX;
		y = event.touches[0].clientY;
		console.log("dragging")
		document.body.append(toDrag);
		toDrag.style.position = "absolute";
		toDrag.style.width = "250px";
		toDrag.style.left = x+'px';
  		toDrag.style.top = y+'px';

	})
}

for (item of draggables){
	item.addEventListener("touchend", () => {


		if (document.elementFromPoint(x, y).classList.contains("deletion-box")){
			toDrag.remove();
		}

		// toDrag.remove();
		toDrag.style.display = "none"
		toDrag.style.display = "block"
		console.log("we are at: x = " + x + " y = " + y)
		copies.push(toDrag);
		console.log(copies[copies.length - 1])
		updateCopies();
		// newContainer = document.elementFromPoint(x, y)
		// newContainer.append(draggables[currentElement])
	})
}

var dateToday = new Date();
var day = dateToday.getDay() - 1;
const days = document.querySelectorAll("div.p1 table tr th");
days[day + 1].style.backgroundColor = "#c5e6f5" 

for(var i = day; i < 21; i += 7){
	containers[i].style.backgroundColor = "#c5e6f5" 
}
console.log(dateToday);
console.log(day);