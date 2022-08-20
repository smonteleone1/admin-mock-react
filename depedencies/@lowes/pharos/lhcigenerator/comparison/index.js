const getFusionDataForGauge= function(keys, withPharosData, withoutPharosData, totalRuns){

    const withDataHere = keys.map(key => ({ value: withPharosData[key] / (totalRuns * 1000) }));
    const withoutDataHere = keys.map(key => ({ value: withoutPharosData[key] / (totalRuns * 1000) }));
    const categories = [
        {
            category: [
                { label: 'CLS' },
                { label: 'FCI' },
                { label: 'FCP' },
                { label: 'FMP' },
                { label: 'TTI' },
                { label: 'LCP' },
                { label: 'FID' },
                { label: 'SI' },
                { label: 'TBT' }
            ]
        }
    ];
    const datasetForGauge = [
        {
            seriesname: 'With Pharos',
            data: withDataHere
        },
        {
            seriesname: 'Without Pharos',
            data: withoutDataHere
        }
    ];
    
    return {
        type: 'msbar2d',
        renderAt: 'chart-container-gauge',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                theme: 'fusion',
                caption: ``,
                xAxisname: 'Metrics',
                yAxisName: 'Time In seconds'
            },
            categories,
            dataset: datasetForGauge
        }
    };
    }

    const getBarDataForScore= function(keys, withPharosData, withoutPharosData, totalRuns){

        const withDataHere = keys.map(key => ({ value: withPharosData[key] / (totalRuns * 1000) }));
        const withoutDataHere = keys.map(key => ({ value: withoutPharosData[key] / (totalRuns * 1000) }));
        const categories = [
            {
                category: [
                    { label: 'Best Practices' },
                    { label: 'Performance Score' },
                    { label: 'Accessibility Score' },
                    { label: 'SEO Score' }
                ]
            }
        ];
        const datasetForGauge = [
            {
                seriesname: 'With Pharos',
                data: withDataHere.slice(9)
            },
            {
                seriesname: 'Without Pharos',
                data: withoutDataHere.slice(9)
            }
        ];
        
        return {
            type: 'msbar2d',
            renderAt: 'chart-container-gauge1',
            width: '700',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    theme: 'fusion',
                    caption: ``,
                    xAxisname: 'Score',
                    yAxisName: 'Score In Percentage'
                },
                categories,
                dataset: datasetForGauge
            }
        };
        }
    
    const getFusionDataForScore=function(keys, withPharosData, withoutPharosData, totalRuns){
        const rows = 
            {
                row: [{
                    "id": "bestPractices",
                    "label": "Best Practices"
                }, {
                    "id": "performanceScore",
                    "label": "Performance Score"
                }, {
                    "id": "accessibilityScore",
                    "label": "Accessibility Score"
                }, {
                    "id": "seoScore",
                    "label": "SEO Score"
                }
                ]
            }
        ;
        const columns = 
            {column:[
                {
                    id: "WP",
                    label: "With Pharos(in percentage)"
                },
                {   
                    id: "WIP",
                    label: "Without Pharos(in percentage)"
    
                },
                {   
                    id: "DIFF",
                    label: "Difference of score(in percentage)"
    
                }
            ]
        };
    
        const getDiffRange=(value)=>{
            if(value<-3 && value>-8){
                return "Medium";
            }
            else if(value<=-8){
                return "High"
            }
            else if(value<=0 && value>=-3){
                return "Low"
            }
            else if(value>0){
                return "Low"
            }
        }
        
        const getFieldData=(valueWithPharos, valueWithoutPharos, key)=>{

            const displayValueWithPharos = ((valueWithPharos/(totalRuns*10))).toString();
            const displayValueWithoutPharos = ((valueWithoutPharos/(totalRuns*10))).toString();
            const Difference = ((valueWithPharos-valueWithoutPharos)/(totalRuns))/10;
            const diff = Difference.toString();

            return [{
                rowid:key,
                columnid:'WP',
                value: displayValueWithPharos,
                displayValue:displayValueWithPharos,
                colorRangeLabel:"Values"
            },
            {
                rowid:key,
                columnid:'WIP',
                value: displayValueWithoutPharos,
                displayValue:displayValueWithoutPharos,
                colorRangeLabel:"Values"
            },
            {
                rowid:key,
                columnid:'DIFF',
                value: diff,
                displayValue:diff,
                colorRangeLabel:getDiffRange(diff)
            }
        ]
        }

        const data = keys.reduce((acc, key, i )=>{
            if(i>8){
            const data = getFieldData(withPharosData[key], withoutPharosData[key], key);
            acc  = acc.concat(data);
            }
            return acc;
        },[]);

        return{
            type: 'heatmap',
            renderAt: 'chart-container-perfComparison',
            width: '40%',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    theme: 'fusion',
                    caption: `Comparison of Perf Score(Total Runs ${totalRuns} )`,
                    xAxisname: 'Metrics',
                    yAxisName: 'Metrics Name',
                    showPlotBorder: "1",
                    showValues: "1",
                    mapByCategory: "1"
                },
                rows,
                columns,
                dataset:[{data}],
                colorRange: {
                    gradient: "0",
                    color: [{
                        code: "#6da81e",
                        minValue: "0.0",
                        maxValue: "0.4",
                        label: "Low"
                    }, {
                        code: "#f6bc33",
                        minValue: "0.5",
                        maxValue: "0.9",
                        label: "Medium"
                    }, {
                        code: "#e24b1a",
                        minValue: "0.9",
                        maxValue: "10",
                        label: "High"
                    },
                    {
                        code: "#ffffcc",
                        minValue: "0.9",
                        maxValue: "10",
                        label: "Values"
                    }]
                }
            }
        }

    }
    const getFusionDataForHeatMap = function(keys, withPharosData, withoutPharosData, totalRuns){
        const rows = 
            {
                row: [{
                    "id": "cumulativeLayoutShift",
                    "label": "CLS"
                }, {
                    "id": "firstCPUIdle",
                    "label": "FCI"
                }, {
                    "id": "firstContentfulPaint",
                    "label": "FCP"
                }, {
                    "id": "firstMeaningfulPaint",
                    "label": "FMP"
                }, {
                    "id": "interactive",
                    "label": "TTI"
                }, {
                    "id": "largestContentfulPaint",
                    "label": "LCP"
                }, {
                    "id": "maxPotentialFID",
                    "label": "FID"
                }, {
                    "id": "speedIndex",
                    "label": "SI"
                }, {
                    "id": "totalBlockingTime",
                    "label": "TBT"
                }
                ]
            }
        ;
        const columns = 
            {column:[
                {
                    id: "WP",
                    label: "With Pharos(In seconds)"
                },
                {   
                    id: "WIP",
                    label: "Without Pharos (In seconds)"
    
                },
                {   
                    id: "DIFF",
                    label: "Difference Pharos, withoutPharos(in seconds)"
                }
            ]
        };
    
        const getDiffRange=(value)=>{
            if(value>0.5){
                
                return "High";
            }
            else if(value<0.5&& value>0.25){
                return "Medium"
            }
            else if(value<=0.25&& value>=0){
                return "Low"
            }
            else if(value<0){
                return "Low"
            }
        }
        
        const getFieldData=(valueWithPharos, valueWithoutPharos, key)=>{

            const displayValueWithPharos = (valueWithPharos/(totalRuns*1000)).toFixed(3);
            const displayValueWithoutPharos = (valueWithoutPharos/(totalRuns*1000)).toFixed(3);
            const Difference = ((valueWithPharos-valueWithoutPharos)/(totalRuns*1000)).toFixed(3);
            const diff = (Difference).toString();

            return [{
                rowid:key,
                columnid:'WP',
                value: displayValueWithPharos,
                displayValue:displayValueWithPharos,
                colorRangeLabel:"Values"
            },
            {
                rowid:key,
                columnid:'WIP',
                value: displayValueWithoutPharos,
                displayValue:displayValueWithoutPharos,
                colorRangeLabel:"Values"
            },
            {
                rowid:key,
                columnid:'DIFF',
                value: diff,
                displayValue:diff,
                colorRangeLabel:getDiffRange(diff)
            }
        ]
        }

        const data = keys.reduce((acc, key)=>{
            const data = getFieldData(withPharosData[key], withoutPharosData[key], key);
            acc  = acc.concat(data);
            return acc;
        },[])

        return{
            type: 'heatmap',
            renderAt: 'chart-container',
            width: '40%',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    theme: 'fusion',
                    caption: `Comparison of Perf Metrics(Total Runs ${totalRuns} )`,
                    xAxisname: 'Metrics',
                    yAxisName: 'Metrics Name',
                    showPlotBorder: "1",
                    showValues: "1",
                    mapByCategory: "1"
                },
                rows,
                columns,
                dataset:[{data}],
                colorRange: {
                    gradient: "0",
                    color: [{
                        code: "#6da81e",
                        minValue: "0.0",
                        maxValue: "0.4",
                        label: "Low"
                    }, {
                        code: "#f6bc33",
                        minValue: "0.5",
                        maxValue: "0.9",
                        label: "Medium"
                    }, {
                        code: "#e24b1a",
                        minValue: "0.9",
                        maxValue: "10",
                        label: "High"
                    },
                    {
                        code: "#ffffcc",
                        minValue: "0.9",
                        maxValue: "10",
                        label: "Values"
                    }]
                }
            }
        }
    }
    


fetch('output').then((response) => response.json()).then((json) => {
    const withPharosData = {};
    const withoutPharosData = {};
    const keys = ['cumulativeLayoutShift',
        'firstCPUIdle',
        'firstContentfulPaint',
        'firstMeaningfulPaint',
        'interactive',
        'largestContentfulPaint',
        'maxPotentialFID',
        'speedIndex',
        'totalBlockingTime',
        'bestPractices',
        'performanceScore',
        'accessibilityScore',
        'seoScore'
    ];
    keys.forEach(key => {
        withPharosData[key] = 0;
        withoutPharosData[key] = 0;
    });
    let i = 0;

    for (i = 0; i < json.totalRuns; i += 1) {
        const { audits: { metrics: { details: { items: [metrics] = [] } = {} } = {} } = {}} = json.output[i];
        const { categories: {'best-practices':{score:bestPractices}={}, performance:{score:performanceScore}, accessibility:{score:accessibilityScore}, seo:{score:seoScore}}} = json.output[i];
        const modifiedMetrics = { ...metrics, bestPractices: bestPractices * 1000, performanceScore:performanceScore*1000, accessibilityScore:accessibilityScore*1000, seoScore:seoScore*1000 };
        keys.forEach(key => {
            withPharosData[key] += modifiedMetrics[key];
        });
    }
    for (let j = i; j < json.output.length; j += 1) {
        const { audits: { metrics: { details: { items: [metrics] = [] } = {} } = {} } = {} } = json.output[j];
        const { categories: {'best-practices':{score:bestPractices}={}, performance:{score:performanceScore}, accessibility:{score:accessibilityScore}, seo:{score:seoScore}}} = json.output[i];
        const modifiedMetrics = { ...metrics, bestPractices: bestPractices * 1000, performanceScore:performanceScore*1000, accessibilityScore:accessibilityScore*1000, seoScore:seoScore*1000 };
        keys.forEach(key => {
            withoutPharosData[key] += modifiedMetrics[key];
        });
    }


    // STEP 3 - Chart Configurations

    const fusionDataForHeatMap = getFusionDataForHeatMap(keys, withPharosData, withoutPharosData, json.totalRuns);
    const fusionDataForScore = getFusionDataForScore(keys, withPharosData, withoutPharosData, json.totalRuns);
    const barDataForScore = getBarDataForScore(keys, withPharosData, withoutPharosData, json.totalRuns);
    const gaugeFusionChartsConfigurations = {
        ...getFusionDataForGauge(keys, withPharosData, withoutPharosData, json.totalRuns)
    };

    const chartConfigurations = {
        ...fusionDataForHeatMap
    };

    const fusionScoreConfigurations={
            ...fusionDataForScore
    };
    const barScoreConfigurations={
        ...barDataForScore
};
    FusionCharts.ready(() => {
        const gaugeFusionCharts = new FusionCharts(gaugeFusionChartsConfigurations);  
        gaugeFusionCharts.render();
        const fusioncharts = new FusionCharts(chartConfigurations);
        fusioncharts.render();
        const fusionChartsForScore = new FusionCharts(fusionScoreConfigurations);
        fusionChartsForScore.render();
        const barChartsForScore = new FusionCharts(barScoreConfigurations);
        barChartsForScore.render();
    });

});
