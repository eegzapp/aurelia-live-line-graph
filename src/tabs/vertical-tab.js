import {bindable} from 'aurelia-framework';

export class VerticalTab {
    @bindable tabIcon;
    @bindable tabText;

    constructor() {
        //console.log(this.icon);
        //this.imageSrc = "fa fa-camera-retro fa-3x";
    }

}