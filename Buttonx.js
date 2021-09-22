/* 
Based on a Pablo Stanley (https://medium.com/@pablostanley) design
*/

var coolbutton = document.getElementById('coolbutton');
	var inprogress = false;
	coolbutton.onclick = function(){
		if (inprogress) {
			return false;
		}
		inprogress = true
		coolbutton.classList.add('coolass_button_first');
		setTimeout(function(){
		coolbutton.classList.add('coolass_button_bridge1');
		},500);
		setTimeout(function(){
		coolbutton.classList.add('coolass_button_second');
		},600);
		setTimeout(function(){
		coolbutton.classList.add('coolass_button_third');
		},700);
		setTimeout(function(){
		coolbutton.classList.add('coolass_button_final');
		},1800);
		setTimeout(function(){
			coolbutton.classList.remove('coolass_button_final');
			coolbutton.classList.remove('coolass_button_third');
			coolbutton.classList.remove('coolass_button_second');
			coolbutton.classList.remove('coolass_button_bridge1');
			coolbutton.classList.remove('coolass_button_first');
			inprogress = false;
		},3200)
	};
