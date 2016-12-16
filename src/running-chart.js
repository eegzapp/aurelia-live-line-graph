import * as d3 from "d3";
import $ from "jquery";

export class RunningChart {
    constructor() {
    }

    attached() {
        //console.log(this.runningChartRef);
        //document.querySelector('div');
        //console.log($(this.runningChartRef)[0]);

        d3.select(this.runningChartRef)
            .append('div')
            .text('blah');
    }
}