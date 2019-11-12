let allToolTips = document.querySelectorAll('.tooltip');

allToolTips.forEach(function (tooltip) {
    tooltip.addEventListener('mouseover', function() {
        let toolTipText = this.dataset.text;
        let newSpan = document.createElement('span');
        newSpan.className = 'tooltipText';
        newSpan.innerText = toolTipText;
        this.appendChild(newSpan);
    })
});

allToolTips.forEach(function (tooltip) {
    tooltip.addEventListener('mouseout', function() {
        let span = document.querySelector('.tooltipText');
        this.removeChild(span);
    })
});