//script 

//google ai api 
async function getData() {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY"; // 👈 include your API key here

  const requestBody = {
    contents: [{
      parts: [{
        text: "Tell me a joke about programmers."  // 👈 change this to whatever prompt you want
      }]
    }]
  };

  try {
    const response = await fetch(url, {
      method: "POST",  // Gemini needs POST
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
