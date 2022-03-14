import { LightningElement, api } from 'lwc';

export default class RewardItem extends LightningElement {
    @api title;
    @api amount;
}