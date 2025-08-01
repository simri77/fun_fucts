const btn = document.getElementById("Generetor");
const display = document.getElementById("factDisplay");

btn.addEventListener("click", getData());
async function getData() {
  const apiKey = 'AIzaSyDsIp4BEwbOzv2LXGmv2UXWEeuJhxSBEqY';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Tell me fun facts under 20 words"
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}



 