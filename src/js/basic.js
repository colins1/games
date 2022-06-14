export class Characte {
  constructor (name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

export class Bowerman extends Characte {
  constructor (name, type, attack, defence) {
    super(name);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Characte {
  constructor (name, type, attack, defence) {
    super(name);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Characte {
  constructor (name, type, attack, defence) {
    super(name);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Characte {
  constructor (name, type, attack, defence) {
    super(name);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Characte {
  constructor (name, type, attack, defence) {
    super(name);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Characte {
  constructor (name, type, attack, defence) {
    super(name);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
