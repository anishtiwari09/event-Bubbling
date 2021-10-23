class Rectangle
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y
    }
    getArea(){
        return this.x*this.y;
    }
}

class Square extends Rectangle{
    constructor(x)
    {
        super(x,x)
    }
}
const rect1=new Rectangle(10,20)
console.log(rect1.getArea())
const square=new Square(20)
console.log(square.getArea())