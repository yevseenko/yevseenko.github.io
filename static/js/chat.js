$(window).load(init_chat);

function init_chat() {
	$chatFrame = $('#chat_frame');
	$contactsFrame = $('#contacts_frame');
	$privateFrame = document.getElementById('private_frame');
	$sendBtn = document.getElementById('send_btn')
	$privateBtn = document.getElementById('private_btn')

	$sendBtn.onclick = send;
}

function send() {
	$privateFrame.innerHTML = 'Привет';
}