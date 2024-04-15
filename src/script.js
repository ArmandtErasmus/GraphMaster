function plotFunction() {
    const input = document.getElementById('functionInput').value;
    const parsedInput = input.replace('^', '**'); 

    const xValues = [];
    const yValues = [];
    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(parsedInput.replace(/(^|[^a-z])(sin|cos|tan|log|exp)(?=[^a-z]|$)/g, '$1Math.$2')));
    }

    const data = [{
        x: xValues,
        y: yValues,
        type: 'scatter',
    }];

    const layout = {
        title: `Plot of ${input}`,
        xaxis: { title: 'X' },
        yaxis: { title: 'Y' },
    };

    Plotly.newPlot('plotContainer', data, layout);
}
