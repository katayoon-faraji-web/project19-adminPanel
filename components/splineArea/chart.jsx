

import * as React from 'react';
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, Highlight, SeriesDirective, Inject, Tooltip, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1 = [
    { x: new Date(2013, 0, 1), y: 1 }, { x: new Date(2014, 0, 1), y: 1.5 }, { x: new Date(2015, 0, 1), y: 1.2 },
    { x: new Date(2016, 0, 1), y: 1.8 }, { x: new Date(2017, 0, 1), y: 2.3 }, { x: new Date(2018, 0, 1), y: 2.5 },
    { x: new Date(2019, 0, 1), y: 2.6 }, { x: new Date(2020, 0, 1), y: 2 }, { x: new Date(2021, 0, 1), y: 1.3 },
    { x: new Date(2022, 0, 1), y: 1.4 },{ x: new Date(2023, 0, 1), y: 1.5 }
];


const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
/**
 * Area sample
 */
const SplineArea = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };

    return (<div className="control-pane">
            {/* <style>{SAMPLE_CSS}</style> */}
            <div>
                <ChartComponent id="charts"   style={{ textAlign: 'center' ,width:'350px',height:'250px' }} primaryXAxis={{ valueType: 'DateTime',visible:false}} primaryYAxis={{ lineStyle: { width: 0 } ,visible:false}} load={load.bind(this)} width={Browser.isDevice ? '100%' : '75%'} legendSettings={{ enableHighlight: true }} chartArea={{ border: { width: 0 } }}  loaded={onChartLoad.bind(this)} tooltip={{ enable: true }}>
                    <Inject services={[SplineAreaSeries, DateTime, Tooltip, Legend, Highlight]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data1} xName="x" yName="y" fill='#0f8874' opacity={0.5}  type="SplineArea" width={2} border={{ width: 7 }}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default SplineArea;
