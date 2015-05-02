document.addEventListener("DOMContentLoaded", function(){
	
	var out = document.querySelector("#out");	
	var goMath = document.querySelector("#goMath");	
	goMath.addEventListener("click", function(){
		var firstRandomNumber = 0;
		var secondRandomNumber= 0; 
		var sumOfRandom = 0;
		var limit = 100;
		
		firstRandomNumber = Math.random();
		firstRandomNumber = firstRandomNumber * limit;
		firstRandomNumber = Math.floor(firstRandomNumber);
		
		secondRandomNumber = Math.random();
		secondRandomNumber = secondRandomNumber * limit;
		secondRandomNumber = Math.floor(secondRandomNumber);
		
		sumOfRandom = firstRandomNumber + secondRandomNumber;
		
		out.textContent = "Total: "+ sumOfRandom;		
	});		
});
	