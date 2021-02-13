class Food
{
    constructor()
    {
        this.lastfed;
        this.foodstock;
        this.milkbottle = loadImage("images/Milk.png");
    }

    bottle1 = createSprite(250,250);
    bottle2 = createSprite(250,250);
    bottle3 = createSprite(250,250);
    bottle4 = createSprite(250,250);
    bottle5 = createSprite(250,250);

    bottles = [this.bottle1,this.bottle2,this.bottle3,this.bottle4,this.bottle5];



    getFoodStock()
    {        
        var foodref = database.ref("food");
        foodref.on("value", readpos, errorpos);

        var foodstockref = database.ref("foodstock");
        foodstockref.on("value", readpos2, errorpos);

        database.ref("/").set({ foodstock : 50,
        food : 0 }) 
    }

    

    updateFoodStock()
    {
        
         
            database.ref("/").update({ foodstock : foodstock + 1,
            food : food })
            doggo.changeImage("doggoanimation", dog)
         
    }

    deductFoodStock()
    {
        
         
            doggo.changeImage("happydoganimation",happydog) 
            database.ref("/").update({ food : food + 1,
            foodstock : foodstock -1 }) 
        
    }


    display()
    {
        milk = database.ref("foodstock");
        image (this.bottle1,)

        
    }
}