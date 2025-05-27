const form = document.getElementById('regForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userData = {
    username: "randomUser123",
    email: "randomuser@example.com"
  };

  message.textContent = 'Submitting...';

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response error');
        return res.json();
      })
      .then(() => {
        message.textContent = '✅ Registration successful!';
        form.reset();
      })
      .catch(() => {
        message.textContent = '❌ Registration failed. Try again.';
      });
  }, 1500);
});
