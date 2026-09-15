"hello world"+ "Harsh"
// basic strings 

// for in the program we can write 

const name = "harishankar paul"
const repocount = 60

console.log(name + repocount + "Value");



//String Interpitation concept //
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gamename = "Shaithan ff"

// to get the specific postion or character of an  string 

console.log(gamename[3])

/// for accessing all the prototype
console.log(gamename.__proto__)

console.log(gamename.length)

// we can use any type of inbuilt function that comes under 

console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'))

const newString = gamename.substring(0,4)
console.log(newString);

const anotherstrig = gamename.slice(0, 4);
consolelog(anotherstrig);

// using of the trim function 

const newstringOne ="   hitesh   "
console.log(newstringOne);
console.log(newstringOne.trim());

//to ask ia word or number is being present or not

const url= "https://harishankar.com/harish%20choudhay"

console.log(url.replac('%20','-'))
console.log (url.includes('hitesh'))
console.log(gamename.split('-'));