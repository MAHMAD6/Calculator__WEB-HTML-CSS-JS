const buttons = document.querySelectorAll('.button');
const screenTextElement = document.querySelector('.screen p');


let screenText = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.textContent.trim();

        if (content === 'C') {
            screenText = '0';
        } else if (content === '=') {
            try {
                screenText = eval(screenText);
            } catch {
                screenText = 'Error';
            }
        } else {
            if (screenText === '0' || screenText === 'Error')
                screenText = '';
            screenText += content;
        }

        screenTextElement.textContent = screenText;
    });
});


document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === 'Escape') {
        screenText = '0';
    }
    else if (key === 'Enter') {
        try {
            screenText = eval(screenText);
        } catch {
            screenText = 'Error';
        }
    }
    else if (key === 'Backspace') {
        if (screenText != '' && screenText != '0') {
            screenText = screenText.substring(0, screenText.length - 1);
            if (screenText.length == 0)
                screenText = '0'
        }
    }
    else if (['+', '-', '*', '/', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(key)) {
        if (screenText === '0' || screenText === 'Error')
            screenText = '';
        screenText += key;
    }
    screenTextElement.textContent = screenText;
});
