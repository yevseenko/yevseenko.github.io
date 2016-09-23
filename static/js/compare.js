window.onload = function init() {
		$clearBtn = document.getElementById('clearBtn');
		$calcBtn = document.getElementById('calcBtn');
		$slsTextArea = document.getElementById('sls');
		$onecTextArea = document.getElementById('onec');
		$slsOnly = document.getElementById('sls_only');
		$onecOnly = document.getElementById('onec_only');
		$numberDiff = document.getElementById('number_diff');

		$slsOnlyName = document.getElementById('sls_only_name');
		$onecOnlyName = document.getElementById('onec_only_name');
		$calcNameBtn = document.getElementById('calcNameBtn');
		$clearNameBtn = document.getElementById('clearNameBtn');
		$slsTextAreaName = document.getElementById('sls_name');
		$onecTextAreaName = document.getElementById('onec_name');
		$numberDiffName = document.getElementById('number_diff_name');

		$invoice = document.getElementById('invoice');
		$checkInvoiceBtn = document.getElementById('checkInvoiceBtn');
		$clearInvoiceBtn = document.getElementById('clearInvoiceBtn');
		$dublicateInvoice = document.getElementById('dublicateInvoice');

		$calcBtn.onclick = calculate;
		$clearBtn.onclick = clear;
		$calcNameBtn.onclick = calculateName;
		$clearNameBtn.onclick = clearName;
		$checkInvoiceBtn.onclick = check;
		$clearInvoiceBtn.onclick = clearInvoice;
	}

	function calculate() {
		if (!$slsTextArea.value.length || !$onecTextArea.value.length) {
			alert('Одно из полей - пустое');
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

	function calculateName() {
		if (!$slsTextAreaName.value.length || !$onecTextAreaName.value.length) {
			alert('Одно из полей - пустое');
			return;
		}

			var slsArrayName = $slsTextAreaName.value.split("\n"),
			onecArrayName = $onecTextAreaName.value.split("\n"),

			slsObjectName = _.object(_.map(slsArrayName,parseStringSlsName)),
			onecObjectName = _.object(_.map(onecArrayName,parseStringOneCName)),

			slsKeysName = _.keys(slsObjectName),
			onecKeysName = _.keys(onecObjectName),

			slsOnlyName = _.difference(slsKeysName,onecKeysName),
			onecOnlyName = _.difference(onecKeysName,slsKeysName),

			numberDiffName = _.filter(_.intersection(onecKeysName,slsKeysName),function(num){return slsObjectName[num] != onecObjectName[num]});

			$slsOnlyName.innerHTML = _.map(slsOnlyName,function(num){return '<b>[1]:</b> ' + num + ' -> ' + slsObjectName[num]}).join('<br />');
			$onecOnlyName.innerHTML = _.map(onecOnlyName,function(num){return '<b>[2]:</b> ' + num + ' -> ' + onecObjectName[num]}).join('<br />');
			$numberDiffName.innerHTML = _.map(numberDiffName,function(num){return num + ' -> <b>[1]:</b> ' + slsObjectName[num] + ' -> <b>[2]:</b> ' + onecObjectName[num]}).join('<br />');

		if ($slsOnlyName.innerHTML == "") {
			$slsOnlyName.innerHTML = '<b>Нет данных для отображения';
			$('#sls_only_name').removeClass().addClass('success');
			} else { $('#sls_only_name').removeClass().addClass('danger'); };		
		if ($onecOnlyName.innerHTML == "") {
			$onecOnlyName.innerHTML = '<b>Нет данных для отображения';
			$('#onec_only_name').removeClass().addClass('success');
			} else { $('#onec_only_name').removeClass().addClass('danger'); };
		if ($numberDiffName.innerHTML == "") {
			$numberDiffName.innerHTML = '<b>Нет данных для отображения';
			$('#number_diff_name').removeClass().addClass('success');
			} else { $('#number_diff_name').removeClass().addClass('danger'); };
	}

	function parseStringOneCName(elem) {
		var tmpArr = elem.replace('\t',' ');
		tmpArr = tmpArr.split(' ');
		return [tmpArr[0],tmpArr[1]];
	}

	function parseStringSlsName(elem) {
		var tmpArr = elem.replace('\t',' ');
		tmpArr = tmpArr.split(' ');
		return [tmpArr[0],tmpArr[1]];
	}

	function clearName() {
		$slsTextAreaName.value = '';
		$onecTextAreaName.value = '';
		$slsOnlyName.innerHTML = '';
		$('#sls_only_name').removeClass();
		$onecOnlyName.innerHTML = '';
		$('#onec_only_name').removeClass();
		$numberDiffName.innerHTML = '';
		$('number_diff_name').removeClass();
	}

	function check() {
		var arr = $invoice.value.split("\n");
		var arr2 = {};
		for (i in arr) {
			(arr2[arr[i]]!=undefined)?(arr2[arr[i]]++):(arr2[arr[i]]=1);
		};
		return arr2;
		$dublicateInvoice.innerHTML = _.map(arr2,function(num){return '<b>Накладная</b> ' + num + ' -> ' + arr2[num]}).join('<br />');
	}