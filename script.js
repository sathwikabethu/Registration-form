const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const address = document.getElementById('address').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;

  if (!name || !email || !password || !address || !dob || !gender) {
    errorMessage.innerText = 'Please fill in all required fields.';
  } else {
    // Form submission logic here
    console.log('Form submitted successfully!');
    form.submit();
  }
});
