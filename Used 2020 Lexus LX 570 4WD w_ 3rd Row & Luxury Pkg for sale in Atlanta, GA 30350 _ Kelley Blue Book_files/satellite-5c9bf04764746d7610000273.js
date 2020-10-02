_satellite.pushAsyncScript(function(event, target, $variables){
  var dm = {};
dm.i = 0;
var receiveMessage = function(e) {
    //if the origin's domain contains accelerate.dealer.com or makemydeal.com and if there is data in the message
    if (e.data) {
        try {
            dm[dm.i] = JSON.parse(e.data);
            if (dm[dm.i].payload) {
                //get the payload event name OR the payload value
                payloadName =
                    dm[dm.i].payload.eventName || dm[dm.i].payload.value || "";
                console.log("payloadName is " + payloadName);
                console.log("toPost: " + JSON.stringify(dm[dm.i]));
                console.log("post to " + parent.location.href);
                console.log("POASTY");
            }
            dm.i = dm.i + 1;
        } catch(e) {
            return;
        }
    }
};
//add the event listener
window.addEventListener("message", receiveMessage);
});
