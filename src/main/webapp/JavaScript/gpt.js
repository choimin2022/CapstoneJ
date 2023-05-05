function gpt(message){   //온도 0 이면 계속 색다른 대답 온도 변경
	
const model = 'text-davinci-003'	
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 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" // api 키 넣는곳 Bearer 옆에 넣으면 됩니다
};
//https://api.openai.com/v1/engines/"+ model +"/completions  다빈치003
//https://api.openai.com/v1/chat/completions  gpt 3.5
fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
  method: "POST",
  headers: headers,
 //body: JSON.stringify({ prompt: message, max_tokens: 4000, temperature: 0, top_p: 1.0,  })
 //body: JSON.stringify({ "model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": message}]})
   body: JSON.stringify({ prompt: message, max_tokens: 500, temperature: 0, top_p: 1.0,  })
})
  .then(function(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error " + response.status + ": " + response.statusText);
  }
})
.then(function(json) {
  const completions = json.choices;
  const text = completions[0].text;   
  Fmessage(text); 
})
.catch(function(error) {
  console.error(error);
});
}

 