import Character from '../js/basic';

export default class Daemon extends Character {
    constructor (name, type) {
      super(name, type);
      this.setStats();
    }
  };