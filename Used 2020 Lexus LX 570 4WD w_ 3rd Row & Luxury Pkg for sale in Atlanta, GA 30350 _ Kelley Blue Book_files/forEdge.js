// 4/27/2018

var dLogoURL = getParameterByName("dLogoURL");
var did = getParameterByName("did");
var websiteLink = getParameterByName("clickThruURL");
var useDefaultLink = getParameterByName("useDefaultLink");
var dealerName = getParameterByName("dealername");
//var clickmacro = getParameterByName("clickmacro");
//console.log(dealerName == "");
function getParameterByName(name)
{
	  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	  var regexS = "[\\?&]" + name + "=([^&#]*)";
	  var regex = new RegExp(regexS);
	  var results = regex.exec(window.location.search);  
	  if(results == null)
		return "";
	  else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}

var dealerAddress, cityStateZip, phone, tagline, data, showLink = "false";


doRequest('https://content.autotrader.com/content/dmd-main/dmdGearbox.json?dealerId=' + did);
function doRequest(url) {

    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
		if (xhttp.readyState < 4)
		{                         
			// while waiting response from server.... Loading!
		}
		else if (xhttp.readyState === 4) 
		{                // 4 = Response from server has been completely loaded.
			if (xhttp.status == 200 && xhttp.status < 300)  // http status between 200 to 299 are all successful
			{
				data = JSON.parse(xhttp.responseText);
				runAd();
														  //alert(obj.DealerName);
			}
			else
			{

	//			console.log("Error " + xhttp.status + " " + xhttp.readyState);
	//			var mainIframe = window.frameElement;
	//			mainIframe.setAttribute("data-click-thru-url", clickThruURL);
	//			mainIframe.setAttribute("data-dealer-name", decodeURIComponent(dName));
	//			mainIframe.src = defaultAd+"?clickthruurl="+escape(clickThruURL)+"&dealername="+decodeURIComponent(dName)+"&v=120216";
			}
		}
	};
	
	
	//xhttp.open("GET","requestHandler.jsp?dealerId=66839",true);
	
	xhttp.open("GET",url,true);
	//http://autotrader-dev.adobecqms.com/content/interactive_ads/inventoryads.json?makeCode=FORD&searchRadius=25&searchZip=30303&limit=3
	
	xhttp.send();
}
	
function runAd()
{

				//dealer name
				if(data.hasOwnProperty("DealerName") && dealerName == "")
				{
					dealerName = data.DealerName;
				}
				
				//address
				if(data.hasOwnProperty("Address"))
				{
						dealerAddress = data.Address;
						cityStateZip = data.CityStateZip;
				}else
				{
					dealerAddress = "";
					cityStateZip = "";
				}
				
				//phone
				if(data.hasOwnProperty("Phone"))
				{
					phone = data.Phone;
					var m = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
					phone = (!m) ? null : m[1] + "." + m[2] + "." + m[3];
				}else
				{
					phone = "";
				}
				
				//click thru
				console.log("data.WebsiteLink " + data.WebsiteLink);
				console.log("websiteLink " + websiteLink);
				if(data.hasOwnProperty("WebsiteLink") && useDefaultLink == "Yes")
				{
					websiteLink = websiteLink + data.WebsiteLink;
					console.log(websiteLink);
				}/*else
				{
					websiteLink = "";
				}*/
				
				var clicktag = encodeURIComponent(websiteLink);
				
				//tagline          
				if(data.hasOwnProperty("Tagline"))
				{
					tagline = data.Tagline;
				}else
				{
					tagline = "";
				}
				
				
				if(data.hasOwnProperty("NoData"))
				 {
					dealerName = "", dealerAddress = "", cityStateZip = "", phone = "", websiteLink = "", tagline= ""; 
				 }

	var tCount = 0;
	var theTimer = setInterval(timerFunction, 1000);
	function timerFunction() 
	{
		tCount += 1;
		console.log("Timer " + tCount);
		if (typeof runEdge !== 'undefined' && typeof runEdge === 'function') 
		{
		clearInterval(theTimer);
		runEdge(); 
		}else if (tCount === 10)
		{
		clearInterval(theTimer);
		console.log(tCount);
		}
	}
}