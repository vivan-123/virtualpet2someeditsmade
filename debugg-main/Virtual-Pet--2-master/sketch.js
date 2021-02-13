//Create variables here
var dog, happydog, database, food, foodstock,foodobj,feeddogbutton,refillfoodstockbutton,bottles, milk;
var doggo;

function preload() {
  //load images here
  dog = loadImage("images/dog.png");
  happydog = loadImage("images/dogh.png");
}

function setup() {
  
  //create a canvas
  createCanvas(700, 500);

  //create dog sprite
  doggo = createSprite(500, 300);
  doggo.addImage("doggoanimation", dog);
  doggo.addImage("happydoganimation",happydog);
  doggo.scale = 0.2;

  //create a feed button
  feeddogbutton = createButton("Feed the dog");
  feeddogbutton.position(400,300);

  //create a refill stock button
  refillfoodstockbutton = createButton("Refill food stock");
  refillfoodstockbutton.position(400,350);

  foodobj = new Food();
  database = firebase.database();
  foodobj.getFoodStock();

  bottles = [];

}

function readpos(data) {
  food = data.val();
  console.log("food = "+food)
}


function readpos2(data) {
  foodstock = data.val();  
}

function errorpos() {
  console.log("crashedddd!!!!")
}

function draw() {
  //background
  background("cyan");

  //text
  fill ("yellow");
  textSize (28);
  text ("Note : Click on the up arrow",10,50);
  text ("key to feed the dog!",10,75);
  text ("Note : Click on the down arrow",10,125);
  text ("key to buy more food and",10,150);
  text ("refill the food stock!",10,175);

  //display food and food stock
  text("Food stock: "+foodstock,20,450);
  text("Food given to the dog: "+food,20,400);
  drawSprites();

  feeddogbutton.mousePressed(function()
  {
    foodobj.deductFoodStock();
    foodobj.display();
  })
  
  foodobj.display();

  refillfoodstockbutton.mousePressed(function()
  {
    foodobj.updateFoodStock();
    foodobj.display2();
  }) 
}
