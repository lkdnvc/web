//console.log(bh.apply({ block: 'event', elem: 'title' }));
(function() {
	getIssues();
})()

var ORG = "innojs";
var projects = "web-events";

function getIssues() {
	var events=[];
	$.ajax({
		url: "https://api.github.com/repos/innojs/web-events/issues",
		method:"GET",
		success: function(data) {
			for (var i = 0; i < data.length; i++) {
				events.push(parseEvent(data[i]));
			}

			//here logc to process update ui
			console.log(events);
		}
	});
}

function parseEvent(issue){
	var result = issue.body.match(/^(```(.|\n|\r)+```)/g);
	var eventJSON = result[0].replace(/```/g,"");
	var result = JSON.parse(eventJSON);
	return result;
}


