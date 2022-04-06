var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", toggleItemDone);
	createDeleteButtonForListElement(li);
	input.value = "";
}

function deleteListElement(event){
	event.target.parentElement.remove();
}

function createDeleteButtonForListElement(element){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	element.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteListElement);
}

function toggleItemDone(event){
	event.target.classList.toggle("done");
}


// 						INITIALISATION

//  Create Eventlisteners for new input
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Create delete buttons for existing li elements and 
// all event listeners for li's + buttons
Array.from(ul.children).forEach(element => {
	element.addEventListener("click", toggleItemDone);
	createDeleteButtonForListElement(element);
});
