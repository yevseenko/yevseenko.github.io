$(document).ready(function init() {
		$clearBtn = document.getElementById('clearBtn');
		$calcBtn = document.getElementById('calcBtn');
		$slsTextArea = document.getElementById('sls');
		$onecTextArea = document.getElementById('onec');
		$slsOnly = document.getElementById('sls_only');
		$onecOnly = document.getElementById('onec_only');
		$numberDiff = document.getElementById('number_diff');

		$invoice = document.getElementById('invoice');
		$checkInvoiceBtn = document.getElementById('checkInvoiceBtn');
		$clearInvoiceBtn = document.getElementById('clearInvoiceBtn');
		$dublicateInvoice = document.getElementById('dublicateInvoice');

		$calcBtn.onclick = calculate;
		$clearBtn.onclick = clear;	
	});

	function calculate() {
		if (!$slsTextArea.value.length || !$onecTextArea.value.length) {
			alert('Одно из полей - <b>пустое</b>');
			return;
		}
			
			var slsArray = $slsTextArea.value.split("\n"),
			onecArray = $onecTextArea.value.split("\n"),

			slsObject = _.object(_.map(slsArray,parseStringSls)),
			onecObject = _.object(_.map(onecArray,parseStringOneC)),

			slsKeys = _.keys(slsObject),
			onecKeys = _.keys(onecObject),

			slsOnly = _.difference(slsKeys,onecKeys),
			onecOnly = _.difference(onecKeys,slsKeys),

			numberDiff = _.filter(_.intersection(onecKeys,slsKeys),function(num){return slsObject[num] != onecObject[num]});

		$slsOnly.innerHTML = _.map(slsOnly,function(num){return '<b>SLS:</b> ' + num + ' -> ' + slsObject[num]}).join('<br />');
		$onecOnly.innerHTML = _.map(onecOnly,function(num){return '<b>1C:</b> ' + num + ' -> ' + onecObject[num]}).join('<br />');
		$numberDiff.innerHTML = _.map(numberDiff,function(num){return num + ' -> <b>SLS:</b> ' + slsObject[num] + ' -> <b>1C:</b> ' + onecObject[num]}).join('<br />');

		if ($slsOnly.innerHTML == "") {
			$slsOnly.innerHTML = '<b>Нет данных для отображения';
			$('#sls_only').removeClass().addClass('success');
			} else { $('#sls_only').removeClass().addClass('danger'); };		
		if ($onecOnly.innerHTML == "") {
			$onecOnly.innerHTML = '<b>Нет данных для отображения';
			$('#onec_only').removeClass().addClass('success');
			} else { $('#onec_only').removeClass().addClass('danger'); };
		if ($numberDiff.innerHTML == "") {
			$numberDiff.innerHTML = '<b>Нет данных для отображения';
			$('#number_diff').removeClass().addClass('success');
			} else { $('#number_diff').removeClass().addClass('danger'); };
	}	

	function parseStringOneC(elem){
		var tmpArr = elem.split('-00');
		if (tmpArr.length!=2) {
			alert('Error while parse string "'+elem+'"');
			return []; 
		}
		tmpArr = tmpArr[1].replace('\t',' ');
		tmpArr = tmpArr.split(' ');
		return [tmpArr[0],tmpArr[tmpArr.length - 1]];
	}

	function parseStringSls(elem){
		var tmpArr = elem.replace('\t',' ');
		tmpArr = tmpArr.split(' ');
		return [tmpArr[1],tmpArr[2]];
	}

	function clear() {
		$slsTextArea.value = '';
		$onecTextArea.value = '';
		$slsOnly.innerHTML = '';
		$('#sls_only').removeClass();
		$onecOnly.innerHTML = '';
		$('#onec_only').removeClass();
		$numberDiff.innerHTML = '';
		$('number_diff').removeClass();
	}