var amazonIntervalId,amazonChecks=0,amazonTimeoutThreshold=3e3,amazonCheckInterval=50,script,startTime,loadScript=function(a){script=document.createElement("script"),script.type="text/javascript",script.src=a,document.head.appendChild(script)},loadGoogle=function(){loadScript("https://www.googletagservices.com/tag/js/gpt.js")},appendNode=function(a,b,c,d){var e=document.createElement(a),f=document.createTextNode(b);e.className=c,e.appendChild(f),d.appendChild(e)},logMetric=function(a,b){try{window.top.Imgur.Util.jafoLog({event:a,meta:b})}catch(c){}},checkAmazon=function(){var a=document.querySelectorAll("#amzn-native-ad-0 .amzn-native-product-title")[0];if(!a)return amazonChecks*amazonCheckInterval>amazonTimeoutThreshold?(script.remove(),document.getElementById("spotlight-amazon-styles").remove(),clearInterval(amazonIntervalId),logMetric("adFail",{provider:"amazon",type:"loadTimeout"}),void loadGoogle()):void amazonChecks++;var b=(new Date).getTime()-startTime;logMetric("adLoad",{provider:"amazon",timeToLoad:b}),clearInterval(amazonIntervalId),setTimeout(function(){var a=parseInt(document.querySelectorAll("#amzn-native-ad-0 .amzn-native-product-stars")[0].style.width)/100*5,b=parseInt(document.querySelectorAll("#amzn-native-ad-0 .amzn-native-product-review-count")[0].innerText.substr(1));if(isNaN(b))return document.getElementById("spotlight-amazon-styles").remove(),script.remove(),logMetric("adFail",{provider:"amazon",type:"renderTimeout"}),void loadGoogle();var c=document.querySelectorAll("#amzn-native-ad-0 .amzn-native-product-title-text")[0];c.innerText.length>52&&(c.innerText=c.innerText.substr(0,52)+"...");var d=document.querySelectorAll("#amzn-native-ad-0 .amzn-native-product-title")[0];appendNode("div","amazon deals","headline-label promoted",d),appendNode("div",a+" stars · "+b+" reviews","review-line",document.body),appendNode("div","Check It Out","cta",d),d.addEventListener("click",function(){logMetric("adClick",{provider:"amazon"})});var e=(new Date).getTime()-startTime;logMetric("adImpression",{provider:"amazon",timeToLoad:e})},100)};location.search.indexOf("amazon_first")>-1?(logMetric("adRequest",{provider:"amazon"}),startTime=(new Date).getTime(),loadScript("//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=366abf76-2bb8-4aaf-9175-0a228c822606&storeId=imgur04-20"),amazonIntervalId=setInterval(checkAmazon,amazonCheckInterval),document.write=function(a){document.body.insertAdjacentHTML("afterbegin",a)}):loadGoogle();var googletag=googletag||{};googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){googletag.defineSlot("/4761660/Leaderboard_728x90_ATF_LI",[728,90],"spotlight-slot").addService(googletag.pubads()),googletag.pubads().set("page_url",parent.window.location.href),googletag.pubads().setTargeting("adblock",window.top.usesABP.toString()),googletag.enableServices(),googletag.display("spotlight-slot")});
//# sourceMappingURL=spotlight.js.map