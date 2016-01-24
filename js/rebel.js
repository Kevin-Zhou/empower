var letpass = false;
var attempts = 0;
while (letpass === false) {
	attempts++;
	if (attempts <= 3) {
		var pass = prompt("This site is in beta. Enter a developer password.");
	}
	if (pass === "gunpoint") {
		alert("Access granted");
		letpass = true;
	}
	else if (attempts > 3) {
		alert("You have exceeded 3 developer login attempts.")
		window.location.replace('http://twitter.com');
		break;
	}
}