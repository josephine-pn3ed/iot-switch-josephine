// basic functionalities

$(document).ready(function() {
	var rowNumber = 1;
	var topicArray = [];
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function(){
		    console.log("Successfully connected");
		})

	$("#btn-off").click (function() {
		client.publish("josephine/light/status", "Turned Off: "+ moment().format('MMMM Do YYYY, h:mm:ss a'));
		$(this).css({"opacity": 0.5});
		$("#btn-on").css({"opacity": 1});
		$("#off").show();
		$("#on").hide();
	})

	$("#btn-on").click (function() {		
		client.publish("josephine/light/status", "Turned On: "+ moment().format('MMMM Do YYYY, h:mm:ss a'));
		$(this).css({"opacity": 0.5});
		$("#btn-off").css({"opacity": 1});
		$("#off").hide();
		$("#on").show();
	});

	$("#btn-clear").click (function() {
		for (var i=rowNumber-1; i>=1; i--) {
			document.getElementById("table").deleteRow(i);
		}
		rowNumber = 1;
	})
})