export default class ClientRequestView{
    constructor(websocket,element) {
        this._rootElem = element;
        this._websocket = websocket;
        let self = this;

        this._rootElem.querySelector("#requestControlButton").onclick = function() {
            self._websocket.sendControlRequest(true);
            self._rootElem.querySelector("#flight-modes").value = "none";
        }

        this._rootElem.querySelector("#cancelControlButton").onclick = function() {
            self._websocket.sendControlRequest(false);
        }

        this._rootElem.querySelector("#arm-button").onclick = function() {
            self._websocket.sendShuttleCommand("armShuttle",true);
        }

        this._rootElem.querySelector("#disarm-button").onclick = function() {
            self._websocket.sendShuttleCommand("armShuttle",false);
        }
    }

    updateControl(msg) {
        let userName = msg.body;
        let feedbackText = "";
        if (userName === null) {
            feedbackText = 'No one is in control of the shuttle.'
        } else {
            feedbackText = `${userName} is in control of shuttle.`
        }
        this._rootElem.querySelector("#requestAnswer").innerText = feedbackText;
        
    }
}