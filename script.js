class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        // this.attack = this.attack.bind(this);
    }
    //Include methods below
    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            return "Direct Hit!";
        }
        else {
            return "Too slow, Joe!";
        }
     }

     flee() {
        return "You gave up! But kept your life in the process! GAME OVER. Final Score: "
     }
}

class PlayerShip extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
}

class EnemyShip extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
}

const USSAssembly = new PlayerShip(20, 5, .7)
const attackVessel = new EnemyShip(6, 4, .8)

const atkBtn = document.getElementById("atk__btn");
const fleeBtn = document.getElementById("flee__btn");

// atkBtn.addEventListener("click", attack());
// fleeBtn.addEventListener("click", flee());

 console.log(attackVessel)
// console.log(USSAssembly)
console.log(USSAssembly.attack(attackVessel));
console.log(attackVessel.hull);
console.log(USSAssembly.flee());
