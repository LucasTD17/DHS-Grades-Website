var first_chart = document.getElementById('first_chart').getContext('2d');

var StarChart = new Chart(first_chart, {
    type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['12th', '11th', '10th', '9th'],
        datasets:[{
            label:'Average Score', 
            data:[
                96,
                87,
                77,
                69
            ]
        }]
    },
    options:{}
});

