document.addEventListener("DOMContentLoaded", function() {
	let videoContainer = document.getElementById("homepage-video-container")
	videoContainer.style.display = "none"
	let videoButton = document.getElementById("video-button")

	videoButton.addEventListener("click",playVideo)
	
	function playVideo() {
		if (videoContainer.style.display === "none") {
			videoContainer.style.display = "block"
			videoButton.innerHTML = "Hide Video"
		} else {
			videoContainer.style.display = "none"
			videoButton.innerHTML = "Show Video"
		}
	}
})