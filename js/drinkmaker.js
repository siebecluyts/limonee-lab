document.getElementById('drinkForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('drinkName').value;
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  const flavors = Array.from(checkboxes).map(cb => cb.value);
  saveToStorage('drinks', { name, flavors });
  alert('Drankje opgeslagen!');
});