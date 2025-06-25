function saveToStorage(key, data) {
  const all = JSON.parse(localStorage.getItem(key) || '[]');
  all.push(data);
  localStorage.setItem(key, JSON.stringify(all));
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}
