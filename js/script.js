function live_chat_close(el){
	$(document.getElementById("live-chat")).addClass("invisible");
}

function live_chat_toggle(){
	live_chat = $(document.getElementById("live-chat"));
	if (live_chat.hasClass("invisible")){
		live_chat.removeClass("invisible");
	}else{
		live_chat.addClass("invisible");
	}
}