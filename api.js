// api.js
async function fetchWiki(title) {
  const url = `https://fr.wikipedia.org/w/api.php?format=json&action=query&titles=${title}&prop=extracts&explaintext=true&origin=*`;
  const response = await fetch(url);
  return response.json();
}

// Exemple d'utilisation :
fetchWiki('test').then(data => console.log(data));
