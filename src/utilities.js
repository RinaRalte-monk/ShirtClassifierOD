const labelMap = {
    0: { name: 'PatternCloth', color: 'red' },
    1: { name: 'SolidCloth', color: 'blue' },
    2: { name: 'TextCloth', color: 'green' }
};

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extract variables
            const [y, x, height, width] = boxes[i];
            const text = classes[i];

            // Set styling
            ctx.strokeStyle = labelMap[text]['color'];
            ctx.lineWidth = 10;
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';

            // DRAW!!
            ctx.beginPath();
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10);
            ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 2);
            ctx.stroke();
        }
    }
};
