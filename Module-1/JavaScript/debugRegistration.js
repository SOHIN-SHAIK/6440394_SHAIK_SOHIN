form.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    username: form.elements['username'].value,
    email: form.elements['email'].value,
  };
  console.log('Submitting user data:', userData);

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    .then(res => {
      console.log('Fetch response status:', res.status);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      console.log('Fetch response data:', data);
      message.textContent = 'Registration successful!';
      form.reset();
    })
    .catch(err => {
      console.error('Fetch error:', err);
      message.textContent = 'Registration failed. Try again.';
    });
  }, 1500);
});
