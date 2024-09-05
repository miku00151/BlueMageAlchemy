class Mage {
    init(){
        this.maxMana = 100;
        this.currentMana = 100;
        this.vocationSuitability = 0;
        this.level = 1;
    }

    consume(amount){
        if (this.currentMana >= amount) {
            this.currentMana -= amount;
            return 0
        } else {
            // console.log('Not enough mana!');
            return 1
        }
    }

    regenerate(amount) {
        this.currentMana = Math.min(this.currentMana + amount, this.maxMana);
    }

    setMana(value) {
        this.currentMana = Math.min(value, this.maxMana);
    }

    levelUP(){
        this.level += 1;
    }

    setLevel(value){
        this.level = value;
    }

    setVS(value){
        this.vocationSuitability |= value;
    }
}

export {Mage}