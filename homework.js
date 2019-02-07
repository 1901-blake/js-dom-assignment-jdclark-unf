/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------

1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
*/

function getUSA() {
	let nodes = document.querySelectorAll('*');
	let usaNodes = [];
	
	for (let i = 0; i < nodes.length; i++) {
		for (let j = 0; j < nodes[i].attributes.length; j++) {
			if (nodes[i].attributes[j].value === 'USA') {
				usaNodes.push(nodes[i].attributes[j]);
			}
		}
	}

	console.log(`getUSA() = ${usaNodes[0].ownerElement.innerText}`);
}
getUSA();

/*
2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
*/

function getPeopleInSales() {
	let cells = document.getElementsByTagName('td');
	let salesPeople = [];

	for (let i = 0; i < cells.length; i += 2) {
		if (cells[i+1].innerText === 'Sales') {
			salesPeople.push(cells[i].innerText);
		}
	}
	
	console.log(`getPeopleInSales() = ${salesPeople}`);
}
getPeopleInSales();

/*  
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>
*/

function getAnchorChildren() {
	let anchorSpans = document.querySelectorAll('a > span');
	let results = [];

	for (let i = 0; i < anchorSpans.length; i++) {
		results.push(anchorSpans[i].innerText);
	}

	console.log(`getAnchorChildren = ${results}`);
}
getAnchorChildren();

/*
4. Hobbies
Define function getHobbies()
Find all checked options in the 'hobbies' select element.
Print the value and the contents.
*/

function getHobbies() {
	let hobbyElement = document.querySelector('select[name=hobbies]');
	let selectedHobby = hobbyElement.value;
	
	console.log(`getHobbies() = ${selectedHobby}`);
}
getHobbies();

/*  
5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.
*/

function getCustomAttribute() {
	let custElements = document.querySelectorAll('*[data-customAttr]');
	let resultsArray = [];

	for (let i = 0; i < custElements.length; i++) {
		resultsArray[i] = `${custElements[i].nodeName}: '${custElements[i].dataset.customattr}'`;
	}

	console.log(`getCustomAttribute() = ${resultsArray}`);
}
getCustomAttribute();

/*
6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element
*/

function getSum() {
	let num1 = parseInt(document.getElementById('num1'));
	let num2 = parseInt(document.getElementById('num2'));
	let sum = document.getElementById('sum').innerText;

	if (num1 + num2) {
		sum.innertext = `${parseInt(num1) + parseInt(num2)}`;
	} else {
		sum.innerText = "Cannot add";
	}
}

let nums = document.getElementsByClassName('nums');
nums.addEventListener(onchange, getSum());

/*
7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.

8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.

10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.

11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.

12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).


*/