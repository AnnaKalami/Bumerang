// Враг.
let newSkin;
class Enemy {
  constructor({ position } = {position: 1}) {
    this.generateSkin();
    this.position = position;
  }

  
  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
   newSkin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = this.position;
    this.skin = newSkin
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
