async function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!word) {
    resultDiv.innerHTML = "<p>Please enter a word.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();

    if (data.title === "No Definitions Found") {
      resultDiv.innerHTML = `<p>No definitions found for "${word}".</p>`;
      return;
    }

    const meaning = data[0].meanings[0];
    const definition = meaning.definitions[0].definition;
    const partOfSpeech = meaning.partOfSpeech;
    const phonetic = data[0].phonetic || "";

    resultDiv.innerHTML = `
      <h2>${word} ${phonetic}</h2>
      <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
      <p><strong>Definition:</strong> ${definition}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p>Error fetching definition.</p>";
  }
}
