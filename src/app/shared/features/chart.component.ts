import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'chart',
    template: `
        <div class="chart-wrap">
            <p-chart type="doughnut" width="174.5px" [data]="data" [options]="options"></p-chart>
        </div>
    `,
    styles: []
})
export class ChartComponent implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            // labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [600, 600, 600],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ]
                }
            ]
        };


        this.options = {
            cutout: '55%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }
}