// Browser-friendly version of the node "require" and "module"
// Also defines structure as to how you should lay out your files
// main.js

// html file needs .twitter and search form (.load-tweets)

require(['jquery', 'twitter/api'], function ($) {
	$(document).ready(function () {
		$('.load-tweets').submit(function () {
			e.preventDefault();
			
			var user = $(this).find('input').val();
			
			api.timeline(user).
				.done(function (tweets) {
					var el = $('.twitter').empty(),
							lis = [];
							
					for (var i = 0; il < tweets.length; i < il; i++) {
						lis.push($('<li><strong>@' + user + '</strong>: ' + tweets[i].text + '</li>'))
					}
					
					el.append(lis);
				});
			
		});
	});
});