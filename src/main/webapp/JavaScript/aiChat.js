function applyGptJavaScript() {
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
  console.log(text);
  gptMessage(text); 
})
.catch(function(error) {
  console.error(error);
});
}

// 입력 필드 띄우는 함수
$(function() {
  $("input[type='text']").keypress(function(e) {   //<img class="tiger_chat" alt="image" src="character_mini.jpg">
    if (e.keyCode == 13 && $(this).val().length) {
      var _val = $(this).val();
      var _class = $(this).attr("class");
      $(this).val('');    
      var _tar = $(".chat_wrap .g_inner").append('<div class="item '+_class+'"><div class="box"><p class="msg">' + _val + '</p><span class="time">' + currentTime() + '</span></div></div>');
      var lastItem = $(".chat_wrap .g_inner").find(".item:last");
      setTimeout(function() {
        lastItem.addClass("on");    
      });

      var position = lastItem.position().top + $(".chat_wrap .g_inner").scrollTop();
      console.log(position);
      $(".chat_wrap .g_inner").stop().animate({
        scrollTop: position
      }, 500);  
      if(_val == '상담 종료' || _val == '상담종료'){
		  gptbox.style.display = 'none';
	  }
      gpt(_val)          
    }
  });
});

// 시간
var currentTime = function() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var apm = hh >= 12 ? "오후" : "오전";
  hh = hh % 12;
  hh = hh ? hh : 12;
  mm = mm < 10 ? "0" + mm : mm;
  var ct = apm + " " + hh + ":" + mm + " ";
  return ct;
}

// html에 직접 시간을 주기 위한 함수
	$(function() {
	  var timeElements = $(".time");
	  var time = currentTime();
	  timeElements.text(time);
	});
	
	//상단 스크롤 기능

$("#topButton").hide();

$(".chat_wrap .g_inner").scroll(function() {
  if ($(this).scrollTop() == 0) {
    $("#topButton").hide();
  } else {
    $("#topButton").show();
  }
});

$("#topButton").click(function() {
  $(".chat_wrap .g_inner").scrollTop(0);
  $("#topButton").hide();
});

const store = {
    texts: '',
    isRecognizing: true
};

(() => {
    /* Speech API start */
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!("webkitSpeechRecognition" in window)) {
        alert("Your browser is not supported!")
    } else {
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'ko-KR';
        recognition.continuous = false;
        recognition.maxAlternatives = 20000;

        recognition.onspeechend = function() {
            recognition.stop();
            document.querySelector('.dictate').classList.remove("on");
            store.isRecognizing = true;
        };

        recognition.onresult = function(e) {
            store.texts = Array.from(e.results)
                .map(results => results[0].transcript).join("");

            console.log(store.texts)
            const selectedValue = store.texts;
      
	    if (e.results[0].isFinal&&selectedValue!="위로 올려줘."&&selectedValue!="로그인."&&selectedValue!="테마 변경.") {
		let selectedValue = Array.from(e.results)
		.map(results => results[0].transcript).join("").trim(); // 마침표 제거 코드 추가
		
		selectedValue = selectedValue.replace(/.$/, ""); // 마침표 제거
		
		var _tar = $(".chat_wrap .g_inner").append('<div class="item mymsg"><div class="box"><p class="msg">' + selectedValue + '</p> <span class="time">' + currentTime() + '</span></div></div>');
		var lastItem = $(".chat_wrap .g_inner").find(".item:last");
		setTimeout(function() {
		lastItem.addClass("on");
		});
		var position = lastItem.position().top + $(".chat_wrap g_inner").scrollTop();
		console.log(position);
		$(".chat_wrap .g_inner").stop().animate({
		scrollTop: position
		}, 500);
		gpt(selectedValue);
		}
		
		if(selectedValue=="위로 올려줘."){
			$(".chat_wrap .g_inner").scrollTop(0);
		}
		if(selectedValue=="로그인."){
			loadmid("menu/login.jsp");
			midBox.style.display = 'block';
			midBox.style.zIndex = '999';
		}

	  if (selectedValue === "상담 종료.") {
		   gptbox.style.display = 'none';
	  }

	     // options.style.display = 'none';
	     // setTimeout(() => input.focus(), 100);  
        };
        /* // Speech API END */
		
		
		document.addEventListener('keydown', (event) => {
		  if (event.code === 'Space') {
		    if (store.isRecognizing && document.activeElement.tagName !== 'INPUT'&& document.activeElement.tagName !== 'TEXTAREA') {
		      active();
		    } else {
		      inactive();
		    }
		  }
		});

        const active = () => {
            document.querySelector('.dictate').classList.add('on')
            recognition.start();
            store.isRecognizing = false;
        };

        const unactive = () => {
            document.querySelector('.dictate').classList.remove('on')
            recognition.stop();
            store.isRecognizing = true;
        };

        document.querySelector('.dictate').addEventListener('click', () => {
            if (store.isRecognizing) {
                active();
            } else {
               unactive();
            }
        });
    }
})();


}