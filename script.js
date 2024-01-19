// Get references to HTML elements
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Function to check if the provided input is a valid US phone number
const checkValidNumber = input => {
    if (input === '') {
      alert('Please provide a phone number');
      return;
    }
  
    // Regular expression components
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
      `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );
  
    // Create a paragraph element to display the validation result
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
  
    // Set the text color based on the validation result
    phoneRegex.test(input)
      ? (pTag.style.color = '#00471b')
      : (pTag.style.color = '#4d3800');
  
    // Append the validation result text to the paragraph element
    pTag.appendChild(
      document.createTextNode(
        `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
      )
    );
  
    // Append the paragraph element to the results div
    resultsDiv.appendChild(pTag);
  };
  
  // Event listener for the 'Check' button
checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
  });
  