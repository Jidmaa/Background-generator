var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul=document.querySelector("ul");
var li=document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}
function createButton (li,i) {
	
{
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Delete";
	li[i].appendChild(btn);
} 

}
for (i=0; i<document.querySelectorAll("li").length; i++){
createButton(li,i);
var listNum = i+1;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createButton(document.querySelectorAll("li"),listNum);
		listNum = listNum+1;
		Create_delete_button();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createButton(document.querySelectorAll("li"),listNum);
		listNum = listNum+1;
		Create_delete_button();
	}
}


//Function that Toggles the "done" class 
function ToggleDone(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

//Function that deletes the listrow 
function delete_row(e)
{
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
	listNum=listNum-1;
}

//Function that creates the delete button 
function Create_delete_button() { 
	for (i=0; i<listNum; i++)
{
	document.querySelectorAll("li")[i].firstElementChild.addEventListener("click",delete_row); 
}
}

//The calls
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click",ToggleDone);  
Create_delete_button();