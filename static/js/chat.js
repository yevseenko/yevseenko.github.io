$(window).load(init_chat);

function init_chat() {
	$chatFrame = $('#chat_frame');
	$contactsFrame = $('#contacts_frame');
	$privateFrame = $('#private_frame');
	$sendBtn = $('#send_btn');
	$privateBtn = $('#private_btn');
	$nickInput = document.getElementById('nick_input');
	$textInput = document.getElementById('text_input');

	$sendBtn.on('click', send);
}

function send() {
	$chatFrame.html($nickInput.value + ':' + $textInput.value);
}