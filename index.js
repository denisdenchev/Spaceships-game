class Spaceship{

    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

class Mothership extends Spaceship {
    constructor(name, health) {
        super (name, health)
        this.name = name;
        this.health = health;
    }
    loseHealthWhenHit() {
       this.health = this.health -9
    }
}
const motherShip = new Mothership ("Mothership", 100);

class DefenceShip extends Spaceship {
    constructor(name, health) {
        super (name, health)
        this.name = name;
        this.health = health;
    }
    loseHealthWhenHit() {
        this.health = this.health -10
    }
}
const defenceShip1 = new DefenceShip ("Defenceship1", 80);
const defenceShip2 = new DefenceShip ("Defenceship2", 80);
const defenceShip3 = new DefenceShip ("Defenceship3", 80);
const defenceShip4 = new DefenceShip ("Defenceship4", 80);
const defenceShip5 = new DefenceShip ("Defenceship5", 80);

class AttackShip extends Spaceship{
    constructor(name, health) {
        super (name, health)
        this.name = name;
        this.health = health;
    }
    loseHealthWhenHit() {
        this.health = -12
    }
}
const attackShip1 = new AttackShip ("Attackship", 45);
const attackShip2 = new AttackShip ("Attackship", 45);
const attackShip3 = new AttackShip ("Attackship", 45);
const attackShip4 = new AttackShip ("Attackship", 45);
const attackShip5 = new AttackShip ("Attackship", 45);
const attackShip6 = new AttackShip ("Attackship", 45);
const attackShip7 = new AttackShip ("Attackship", 45);
const attackShip8 = new AttackShip ("Attackship", 45);

const motherShipObject = () => {
    document.getElementById("mothership").innerHTML = motherShip.name + "</br>" + motherShip.health;
    }
motherShipObject();

const defenceShipObject = () => {
    document.getElementById("defence-ships").innerHTML += defenceShip1.name + "</br>" + defenceShip1.health + "</br>" + "</br>";
    document.getElementById("defence-ships").innerHTML += defenceShip2.name + "</br>" + defenceShip2.health + "</br>" + "</br>";
    document.getElementById("defence-ships").innerHTML += defenceShip3.name + "</br>" + defenceShip3.health + "</br>" + "</br>";
    document.getElementById("defence-ships").innerHTML += defenceShip4.name + "</br>" + defenceShip4.health + "</br>" + "</br>";
    document.getElementById("defence-ships").innerHTML += defenceShip5.name + "</br>" + defenceShip5.health + "</br>" + "</br>";
}
defenceShipObject();

const attachShipObject = () => {
    document.getElementById("attack-ships").innerHTML += attackShip1.name + "</br>" + attackShip1.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip2.name + "</br>" + attackShip2.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip3.name + "</br>" + attackShip3.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip4.name + "</br>" + attackShip4.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip5.name + "</br>" + attackShip5.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip6.name + "</br>" + attackShip6.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip7.name + "</br>" + attackShip7.health + "</br>" + "</br>";
    document.getElementById("attack-ships").innerHTML += attackShip8.name + "</br>" + attackShip8.health + "</br>" + "</br>";
}
attachShipObject();

// const attackMotherShip = () => {
//     motherShip.loseHealthWhenHit();
//     motherShipObject();
// }


const shipsArray = [mothership, defenceShip1,defenceShip2,defenceShip3,defenceShip4,defenceShip5,attackShip1,attackShip2,attackShip3,attackShip4,attackShip5,attackShip6,attackShip7,attackShip8];

console.log(shipsArray[].loseHealthWhenHit())