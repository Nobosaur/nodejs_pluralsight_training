var maxTime = 1000;

// IF input is even, double it
//If input is odd, error
//(call takes random nuber of time < 1s)
var evenDoubler = function(v, callback) {
	var waitTime = Math.floor(Math.random()*(maxTime + 1));
	if (v%2) {
		setTimeout(function() {
			callback(new Error("Odd imput"));	
		}, waitTime);
	} else {
		setTimeout(function(){
			callback(null, v*2, waitTime);
		}, waitTime);
	}
};

var count = 0;

for (var i = 0; i < 10; i++) {
	console.log("Calling evenDouble for value: " + i);
	evenDoubler(i, function(err,results,time) {
		if (err) {
			console.log("ERROR:" + err.message);
		} else {
			console.log("The results are:" + results + " (" + time + "ms)");
		}
		if (++count ===10) {
			console.log("Done!");
		}
	});
};

console.log("-----");