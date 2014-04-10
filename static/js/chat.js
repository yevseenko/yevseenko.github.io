$(window).load(init_chat);

function init_chat() {
	$chatFrame = $('#chat_frame');
	$contactsFrame = $('#contacts_frame');
	$privateFrame = $('#private_frame');
	$sendBtn = $('#send_btn');
	$privateBtn = $('#private_btn');

	$sendBtn.onclick = send;
}

function send() {
	alert('Получилась какая-то хрень');
	$chatFrame.innerHTML = '<b>Вот сюда мы что-то отправили</b>';
}