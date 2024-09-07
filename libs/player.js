import { Mage } from "./mage";
class player{
    init(){
        this.mage = Mage();
        this.mage.init();
        this.maxPrestige = 0;
        this.currentPrestige = 0;
        this.progress = 0;
    }

    addMaxPrestige(amount){
        this.maxPrestige += amount
    }

    subMaxPrestige(amount){
        this.maxPrestige -= amount
    }

    setMaxPrestige(value){
        this.maxPrestige = value
    }

    regeneratePrestige(amount){
        this.currentPrestige = Math.min(this.currentPrestige+amount,this.maxPrestige)
    }

    consumePrestige(amount){
        if(this.currentPrestige >= amount){
            this.currentPrestige -= amount
            return 0
        }
        else{
            return 1
        }
    }

    addProgress(amount){
        this.progress += amount
    }

    setProgress(value){
        this.progress = value
    }
}

export {player}