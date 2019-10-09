// basic functionalities

$(document).ready(function() {
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
})