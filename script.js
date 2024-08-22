document.getElementById('copyUrlButton').addEventListener('click', function() {
    event.preventDefault(); 
    const textElement = document.getElementById('copyUrl');
    const url = getTextContentWithoutHTML(textElement);

    navigator.clipboard.writeText(url).then(function() {
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = 'URL gekopieerd naar klembord!';
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 2000);
    }).catch(function(error) {
        console.error('Kan tekst niet kopiëren: ', error);
    });
});

function getTextContentWithoutHTML(element) {
    let text = '';
    element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.nodeValue;
        }
    });
    return text;
}

const element = document.querySelector('.marker');
const currentTransform = window.getComputedStyle(element).transform;

// If there's an existing transform, concatenate; otherwise, just apply the new one
element.style.transform = currentTransform !== 'none' 
    ? currentTransform + ' rotate(-45deg)' 
    : 'rotate(-45deg)';


    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const minYearDisplay = document.getElementById('minYear');
    const maxYearDisplay = document.getElementById('maxYear');
    const sliderTrack = document.querySelector('.slider-track');

    function updateValues() {
      const minValue = parseInt(rangeMin.value);
      const maxValue = parseInt(rangeMax.value);

      // Prevent the sliders from crossing each other
      if (minValue >= maxValue) {
        rangeMin.value = maxValue - 1;
      }
      if (maxValue <= minValue) {
        rangeMax.value = minValue + 1;
      }

      minYearDisplay.textContent = rangeMin.value;
      maxYearDisplay.textContent = rangeMax.value;

      // Update the track color to show the range between the two handles
      const minPercent = ((rangeMin.value - rangeMin.min) / (rangeMin.max - rangeMin.min)) * 100;
      const maxPercent = ((rangeMax.value - rangeMax.min) / (rangeMax.max - rangeMax.min)) * 100;

      sliderTrack.style.background = `linear-gradient(to right, #ddd ${minPercent}%, blue ${minPercent}%, blue ${maxPercent}%, #ddd ${maxPercent}%)`;
    }

    rangeMin.addEventListener('input', updateValues);
    rangeMax.addEventListener('input', updateValues);

    // Initialize the track background on load
    updateValues();