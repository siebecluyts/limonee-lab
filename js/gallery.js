const container = document.getElementById('galleryContainer');
const drinks = getFromStorage('drinks');
const cups = getFromStorage('cups');

container.innerHTML += `<h2>🥤 Drankjes</h2>`;
drinks.forEach(d => {
  container.innerHTML += `<div><strong>${d.name}</strong>: ${d.flavors.join(', ')}</div>`;
});

container.innerHTML += `<h2>🥛 Bekers</h2>`;
cups.forEach(c => {
  container.innerHTML += `<div style="background:${c.color};padding:1rem;border-radius:1rem;margin:1rem;">
    <strong>${c.label}</strong>
  </div>`;
});
