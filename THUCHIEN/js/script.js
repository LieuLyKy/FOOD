let currentStep = 1;
const progressBar = document.getElementById('progress');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function prevStep(step) {
    if (step > 1) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep = step - 1;
        document.getElementById(`step${currentStep}`).style.display = 'block';

        const progressWidth = (currentStep - 1) * 33.33;
        progressBar.style.width = `${progressWidth}%`;

        updateButtons();
    }
}

function nextStep(step) {
    if (step < 3) {
        document.getElementById(`step${currentStep}`).style.display = 'none';
        currentStep = step + 1;
        document.getElementById(`step${currentStep}`).style.display = 'block';

        const progressWidth = (currentStep - 1) * 33.33;
        progressBar.style.width = `${progressWidth}%`;

        updateButtons();
    }
}

function updateButtons() {
    if (currentStep === 1) {
        prevButton.style.display = 'none';
    } else if (currentStep === 3) {
        nextButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}



