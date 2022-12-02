console.log(sessionStorage);

//Setting the number of items in the cart to 0. (RH)
let itemsInCart = 0;
//Setting the price of items in the cart to 0. (RH)
let priceInCart = 0;
//Creating an array to store the prices of the items. (RH)
const prices = [10, 15, 20];

//Adding to cart from the cards on the browsing pages. (RH)
function addToCartAnimal()
{
	itemsInCart = itemsInCart+1;
	let animalItemsInCart = itemsInCart;
	document.getElementById("numberOfItems").innerHTML = itemsInCart;
	sessionStorage.setItem("animalToy", animalItemsInCart);
}

function addToCartDisney()
{
	itemsInCart = itemsInCart+1;
	let disneyItemsInCart = itemsInCart;
	document.getElementById("numberOfItems").innerHTML = itemsInCart;
	sessionStorage.setItem("disneyToy", disneyItemsInCart);
}

function addToCartCN()
{
	itemsInCart = itemsInCart+1;
	let cnItemsInCart = itemsInCart;
	document.getElementById("numberOfItems").innerHTML = itemsInCart;
	sessionStorage.setItem("cnToy", cnItemsInCart);
}

//Clearing the cart. (RH)
function clearCart()
{
	itemsInCart = 0;
	document.getElementById("numberOfItems").innerHTML = itemsInCart;
	sessionStorage.setItem("animalToy", 0);
	sessionStorage.setItem("disneyToy", 0);
	sessionStorage.setItem("cnToy", 0);
}

function addTogether()
{
	let addingAnimals = sessionStorage.getItem("animalToy");
	let addingDisney = sessionStorage.getItem("disneyToy");
	let addingCN = sessionStorage.getItem("cnToy");
	
	let animalPrice = prices[0];
	let disneyPrice = prices[1];
	let cnPrice = prices[2]
	
	let beforeTotalAnimals = animalPrice * addingAnimals;
	let beforeTotalDisney = disneyPrice * addingDisney;
	let beforeTotalCN = cnPrice * addingCN;
	
	let total = +beforeTotalAnimals + +beforeTotalDisney + +beforeTotalCN;
	alert(total);
}

//Array with user names and passwords (NE)(RH)
let users = [["Ryan","pass1"],
			["Nikola","pass2"],
			["Chris","pass3"]];
let registeredEmail = sessionStorage.getItem("email");
let registeredPass = sessionStorage.getItem("password");
let correct = false;

//Tested if email and password is stored properly. (NE)(RH)
//alert(registeredEmail); 
//alert(registeredPass);


function login()
{
	let inpEmail = document.getElementById("email").value;
	let inpPass = document.getElementById("password").value;
	
	//This is just to check if the hard-coded usernames and passwords are correct. (RH)(NE)
	for(let i = 0; i < users.length; i++)
	{
		if(inpEmail == users[i][0])
		{
			if(inpPass == users[i][1])
			{
				correct = true;
				sessionStorage.setItem("email", users[i][0]);
				sessionStorage.setItem("password", users[i][1]);
				sessionStorage.setItem("userName", users[i][0]);
				sessionStorage.setItem("firstName", users[i][0]);
				sessionStorage.setItem("lastName","");
			}
			else
			{
				alert("Incorrect, please try again.");
			}
		}
	}
	
	//This is just to check if the session stored usernames and passwords are correct. (RH)(NE)
	if(inpEmail == registeredEmail)
	{
		if(inpPass == registeredPass)
		{
			correct = true;
		}
			else
		{
		alert("Incorrect, please try again.");
		}
	}
	
	//If the above are correct, send them in to the main page. (RH)(NE)
	if(correct == true)
	{
		window.location.href="main.html";
	}
}