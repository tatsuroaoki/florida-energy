Vue.component('nav-content',{
	template: '<div><a href="index.html">Home</a><a href="#">Research</a><a href="energy-education.html">Education</a><a href="#">Outreach</a><a href="#">User Facilities</a><a href="industry.html">Energy Industry</a><a href="#">Advisory Board</a><a href="#">Contact Us</a></div>'
})

Vue.component('footer-content', {
	template: '<div><i class="fab fa-facebook"></i><i class="fab fa-twitter-square"></i><i class="fab fa-linkedin"></i></div>'
})

document.addEventListener("DOMContentLoaded", function() {

	let headerApp = new Vue({
		el: '#headerApp'
	})
	
	let footerApp = new Vue({
		el: '#footerApp'
	})
	})