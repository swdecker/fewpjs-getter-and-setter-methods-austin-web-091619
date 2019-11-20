// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius*2
    }
    set diameter(newDiam){
        this.radius = newDiam/2
    }
    get circumference(){
        return this.radius*2*Math.PI
    }
    set circumference(newC){
        this.radius = newC/(2*Math.PI)
    }
    get area(){
        return Math.PI*this.radius**2
    }
    set area(newA){
        this.radius = Math.sqrt(newA/Math.PI)
    }
}