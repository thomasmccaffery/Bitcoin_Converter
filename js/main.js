//Function to exchange value between USD and BTC using MTGox API v2
function XChange(val,type)
{
	document.getElementById('loading').style.display = "block";
	$.getJSON("https://data.mtgox.com/api/2/BTCUSD/money/ticker", function(json) 
	{
		//Converts Dollar Amount to Bitcoins
	    if(type==1)
	     {
			var Rate = val/json.data.last.value;
			document.getElementById("BTCval").value=Rate;
			document.getElementById('loading').style.display = "none";
	     } 
	     //Converts Bitcoins to Dollar Amount
	    else if(type==2)
	     {
			var Rate = val*json.data.last.value;
			document.getElementById("USDval").value=Rate;
			document.getElementById('loading').style.display = "none";
	     }
	});
}