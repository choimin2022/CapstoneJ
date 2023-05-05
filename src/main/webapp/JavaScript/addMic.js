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
      
	    if (e.results[0].isFinal&&selectedValue!="위로 올려줘.") {
		let selectedValue = Array.from(e.results)
		.map(results => results[0].transcript).join("").trim(); // 마침표 제거 코드 추가
		
		selectedValue = selectedValue.replace(/.$/, ""); // 마침표 제거
		
		var _tar = $(".chat_wrap .inner").append('<div class="item mymsg"><div class="box"><p class="msg">' + selectedValue + '</p> <span class="time">' + currentTime() + '</span></div></div>');
		var lastItem = $(".chat_wrap .inner").find(".item:last");
		setTimeout(function() {
		lastItem.addClass("on");
		});
		var position = lastItem.position().top + $(".chat_wrap .inner").scrollTop();
		console.log(position);
		$(".chat_wrap .inner").stop().animate({
		scrollTop: position
		}, 500);
		sendMessage(selectedValue);
		}
		
		if(selectedValue=="위로 올려줘."){
			$(".chat_wrap .inner").scrollTop(0);
		}

	     // options.style.display = 'none';
	     // setTimeout(() => input.focus(), 100);  
        };
        /* // Speech API END */
		
		
			document.addEventListener('keydown', (event) => {
		  if (event.code === 'Space') {
		    if (store.isRecognizing && document.activeElement.tagName !== 'INPUT') {
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
