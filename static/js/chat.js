$(window).load(init_chat);

function init_chat() {
	$chatFrame = $('#chat_frame');
	$contactsFrame = $('#contacts_frame');
	$privateFrame = $('#private_frame');
	$sendBtn = $('#send_btn');
	$privateBtn = $('#private_btn');

	$sendBtn.on("click", send());
}

function send() {
	$privateFrame.value = 'Привет';
}