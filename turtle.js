class Turtle {
    constructor(x,y,facing){
        this.x = x;
        this.y =y;
        this.facing = facing
    }
  
}
let flash = []
let facing = 'W'

Turtle.prototype.forward = function(n){

    let updated  = 0;

    if(this.facing === 'W')
    {
        updated  = this.y + n
        for (let i = 0; i<n; i++)
        {
            flash.push([this.x,++this.y])
        }
        this.y = updated;
        return this;

    }
    if(this.facing === 'E')
    {
        updated = this.y - n
        for (let i = 0;i<n;i++){
            flash.push([this.x, --this.y])
        }
        this.y = updated;
        return this;
    }
    if (this.facing === 'N')  
    {
        updated= this.x - n
        for (let i = 0;i<n;i++){
            flash.push([--this.x, this.y])
        }
        this.x= updated;
        return this;
        
    } 
    if(this.facing=== 'S')
    {
        updated = this.x + n
        for (let i = 0;i<n;i++){
            flash.push([++this.x, this.y])
        }
        this.x = updated;
        return this;
    }

} 

Turtle.prototype.left = function(){
    if(this.facing === 'W')
     {
         this.facing = 'N'
         return this;
     }
     if(this.facing=== 'N'){
        this.facing= 'E'
         return this;
     }
    if (this.facing ==='E')
    {
        this.facing = 'S'
        return this;
    }
    if(this.facing ==='S')
    {
        this.facing = 'W'
        return this;

    }
    

} 

Turtle.prototype.right = function(){
  
    if(this.facing === 'W')
    {
        this.facing = 'S'
        return this;
    }
    if(this.facing=== 'S'){
        this.facing= 'E'
        return this;
    }
   if (this.facing==='E')
   {
    this.facing = 'N'
       return this;
   }
   if (this.facing==='N')
   {
        this.facing = 'W'
       return this;
   }


} 
Turtle.prototype.allpoints = function(){

    console.log(flash);

}


Turtle.prototype.print = function() {

 
    x_cord = Math.max(...flash.map(x => x[0]))
    y_cord = Math.max(...flash.map(y => y[1]))


    let myNewArray = flash.reduce(function(prev, curr) {
        return prev.concat(curr);
      });
    let max = Math.max(...myNewArray)
    let arr =[]
    for(let i = 0; i<x_cord +1  ; i++)
    {  

        for(let j = 0; j<y_cord +1 ; j++)
        {
          if (arr[i] === undefined)
          {
            arr[i] = new Array;
          }
             
          if (arr[i][j] === undefined )
            {
               arr[i][j] = new Array;
            }
            arr[i][j] = '-'
         
        }
       
    

    }
    
    flash.forEach(element => {
        arr[element[0]][element[1]] = '#';
    });

     x1 = Math.max(...flash.map(x => x[0]))

    let path = ''

    for (let i = 0; i <x_cord+1; i++) 
        
        {
            
        for (let j = 0; j <y_cord+1; j++) 
            {
                path = path + arr[i][j]
            }
        
            path += '\n'
         
        }

        console.log(path);


}

let turtle1 = new Turtle (0,0,'W')

turtle1.forward(2).forward(2).right().forward(3).left().forward(2)

turtle1.print()






//console.log(flash, turtle1.x , turtle1.y)
//console.log(turtle1.facing)
//turtle1.allpoints()
//const flatten = require('lodash.flatten')









