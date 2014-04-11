$(window).load(init_chat);

function init_chat() {
	$chatFrame = $('#chat_frame');
	$contactsFrame = $('#contacts_frame');
	$privateFrame = $('#private_frame');
	$sendBtn = $('#send_btn');
	$privateBtn = $('#private_btn');
	$nickInput = $('#nick_input');
	$textInput = $('#text_input');

	$sendBtn.on('click', send);
}

function send() {
	$chatFrame.html($nickInput.value + ':' + $textInput.value);
}