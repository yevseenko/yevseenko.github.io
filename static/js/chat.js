$(window).load(init_chat);

function init_chat() {
	$chatFrame = $('#chat_frame');
	$contactsFrame = $('#contacts_frame');
	$privateFrame = $('#private_frame');
	$sendBtn = document.getElementById('send_btn');
	$privateBtn = $('#private_btn');

	$sendBtn.onClick = send;
}

function send() {
	alert('Получилась какая-то хрень');
}