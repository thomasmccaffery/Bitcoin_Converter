//Function to exchange value between USD and BTC using MTGox API v2
function XChange(val,type)
{
	document.getElementById('loading').style.display = "block";
	$.getJSON("https://data.mtgox.com/api/2/BTCUSD/money/ticker", function(json) 
	{
		//Converts Dollar Amount to Bitcoins
	    if(type==1)
	     {
			var Rate = addCommas((val/json.data.last.value).toFixed(5));
			document.getElementById("BTCval").value=Rate;
			document.getElementById('loading').style.display = "none";
			document.getElementById("USDval").style.width=(val.toString().length*17)+"px";
			document.getElementById("BTCval").style.width=(Rate.toString().length*17)+"px";
	     } 
	     //Converts Bitcoins to Dollar Amount
	    else if(type==2)
	     {
			var Rate = addCommas((val*json.data.last.value).toFixed(5));
			document.getElementById("USDval").value=Rate;
			document.getElementById('loading').style.display = "none";
			document.getElementById("BTCval").style.width=(val.toString().length*17)+"px";
			document.getElementById("USDval").style.width=(Rate.toString().length*17)+"px";

	     }
	});
}

function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}