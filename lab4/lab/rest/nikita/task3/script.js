let tooltipContainer;

document.onmouseover = function(event) {
    let target = event.target;

    let tooltipText = target.dataset.tooltip;
    if (!tooltipText || target.className != 'tippable') return;
    tooltipText = validateTooltip(tooltipText);

    createTooltip(target, tooltipText);
};

document.onmouseout = function(e) {
    removeTooltip();
};

function removeTooltip() {
    if (tooltipContainer != null) {
        tooltipContainer.remove();
        tooltipContainer = null;
    }
}

function validateTooltip(tooltipText) {
    if (tooltipText.length >= 300)
        tooltipText = tooltipText.slice(0, 297).trimEnd() + '...';
    return tooltipText;
}

function createTooltip(target, tooltipText) {
    tooltipContainer = document.createElement('div');
    tooltipContainer.className = 'tooltip-container';
    let tooltipElement = document.createElement('div');
    tooltipElement.className = 'tooltip';
    tooltipElement.innerHTML = tooltipText;
    tooltipContainer.appendChild(tooltipElement);
    let triangle = document.createElement('div');
    triangle.className = 'triangle';
    tooltipContainer.appendChild(triangle);
    document.body.querySelector('main').appendChild(tooltipContainer);

    let coords = target.getBoundingClientRect();
    const initialLeft = coords.left + (target.offsetWidth - tooltipContainer.offsetWidth) / 2;
    let left = initialLeft;
    let translateString = new String();
    if (left < 10) {
        left = 10;
        translateString += 'translateX(' + (-(left-initialLeft)) + 'px)';
    }
    else if (left + tooltipContainer.offsetWidth + 10 >= document.documentElement.clientWidth) {
        left = document.documentElement.clientWidth - tooltipContainer.offsetWidth - 10;
        translateString += 'translateX(' + (initialLeft - left) + 'px)';
    }
    let top = coords.top - tooltipContainer.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
        tooltipContainer.style.flexDirection = 'column-reverse';
        translateString += 'rotate(180deg) '; 
    }
    tooltipContainer.style.left = left + 'px';
    if (translateString != new String())
        triangle.style.transform = translateString;
    tooltipContainer.style.top = top + 'px';
}