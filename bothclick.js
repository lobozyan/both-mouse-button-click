var BothMBDown = {
	bothMBDownEnable: false,
	myTimeOut: 25, // interval between right and left buttons clicks, ms
	myClickDownTime: 0,
	myClickDown: '',
	bothClickEvent: document.addEventListener("mousedown", function (event) { 
		if(BothMBDown.bothMBDownEnable === true){
			var curTime = new Date().getTime();
			if(((BothMBDown.myClickDown === 0 && event.button === 2) || (BothMBDown.myClickDown === 2 && event.button === 0)) && (curTime - BothMBDown.myClickDownTime) < BothMBDown.myTimeOut){
				BothMBDown.myClickDown = '';
				BothMBDown.myClickDownTime = 0;
				document.oncontextmenu = function (){return false};
				BothMBDown.doingOnBothClick();
			}else{
				BothMBDown.myClickDownTime = curTime;
				BothMBDown.myClickDown = event.button;
				document.oncontextmenu = function (){return true};
			}
		}
	}, true),
	doingOnBothClick: function(){}	
}
