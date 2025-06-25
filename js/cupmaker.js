document.getElementById('cupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const label = document.getElementById('cupLabel').value;
  const color = document.getElementById('cupColor').value;
  saveToStorage('cups', { label, color });
  alert('Beker opgeslagen!');
});
