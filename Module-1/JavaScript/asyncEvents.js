<button id="loadBtn">Load Events</button>
<div id="spinner" style="display:none;">Loading...</div>
<ul id="eventsList"></ul>


const loadBtn = document.getElementById('loadBtn');
const spinner = document.getElementById('spinner');
const eventsList = document.getElementById('eventsList');
const apiURL = 'https://jsonplaceholder.typicode.com/posts?_limit=5'; // mock events

// Using .then() and .catch()
function fetchEventsThen() {
  spinner.style.display = 'block';
  eventsList.innerHTML = '';
  fetch(apiURL)
    .then(res => {
      if (!res.ok) throw new Error('Fetch failed');
      return res.json();
    })
    .then(data => {
      spinner.style.display = 'none';
      data.forEach(e => {
        const li = document.createElement('li');
        li.textContent = e.title;
        eventsList.appendChild(li);
      });
    })
    .catch(err => {
      spinner.style.display = 'none';
      eventsList.textContent = 'Error loading events';
      console.error(err);
    });
}

// Using async/await
async function fetchEventsAsync() {
  spinner.style.display = 'block';
  eventsList.innerHTML = '';
  try {
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    data.forEach(e => {
      const li = document.createElement('li');
      li.textContent = e.title;
      eventsList.appendChild(li);
    });
  } catch (err) {
    eventsList.textContent = 'Error loading events';
    console.error(err);
  } finally {
    spinner.style.display = 'none';
  }
}

// Choose method here:
loadBtn.onclick = () => fetchEventsAsync();
// Or to test .then(): loadBtn.onclick = fetchEventsThen;

