ui.mobile.startWeinre = function(server) {
	if (server) {
		localStorage.weinre = server;
	} else {
		var setServer = localStorage.weinre || "";
		server = prompt("Weinre Server:", setServer);
		if (!server)
			return;
		localStorage.weinre = server;
	}
	var script=document.createElement('script');
	script.src = "http://" + server + "/target/target-script.js";
	document.getElementsByTagName("head")[0].appendChild(script);
};
