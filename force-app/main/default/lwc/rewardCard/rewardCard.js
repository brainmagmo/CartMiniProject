import { LightningElement, api } from 'lwc';

export default 
class RewardCard 
extends LightningElement {

    @api itemImgUrl;
    @api itemTitle; 

    amount = 0;

    less() {
        if (this.amount > 0) {
            this.amount = this.amount - 1;
        }
    }

    more() {
        this.amount = this.amount + 1;
    }

    addToCart() {
        if (this.amount > 0){
            this.dispatchEvent(
                new CustomEvent('addtocart', {
                detail:
                    {
                        title: this.itemTitle,
                        amount: this.amount,
                    }
                })
            );
            console.log("dispatched addToCart");
            console.log(this.itemTitle);
            console.log(this.amount);
            console.log("end dispatch");
            this.amount = 0
        }
    }

}