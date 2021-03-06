export default class InputView{
    constructor(element) {
        this._rootElem = element;

        // 1: GamePad
        // 2: Keyboard
        this._selection = 0;

        let self = this;

        this._rootElem.querySelector("#gamepad-button").onclick = function() {
            self._selection = 1;

            self._rootElem.querySelector("#gamepad-info").style.display='block';
            self._rootElem.querySelector("#keyboard-info").style.display='none';
        }

        
        this._rootElem.querySelector("#keyboard-button").onclick = function() {
            self._selection = 2;

            self._rootElem.querySelector("#keyboard-info").style.display='block';
            self._rootElem.querySelector("#gamepad-info").style.display='none';
        }
    }

    useKeyboard() {
        return this._selection === 2;
    }

    useGamePad() {
        return this._selection === 1;
    }

    setData(msg) {
        this._rootElem.querySelector("#dataText")
            .innerText = ` Input values:\n x: ${msg.x.toFixed(3)}  y: ${msg.y.toFixed(3)}  z: ${msg.z.toFixed(3)}  r: ${msg.r.toFixed(3)}  `;
    }

    updateGamepadImage(x,y,z,r,armButton,disarmButton,manual,stabilize,depthHold) {

        if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1 ) {
            this._rootElem.querySelector("#svg_1").style.fill = "red";  //arm
        } else {
            this._rootElem.querySelector("#svg_1").style.fill = "cecece";  
        }

        if (Math.abs(z) > 0.1 || Math.abs(r) > 0.1 ) {
            this._rootElem.querySelector("#svg_2").style.fill = "red";  //arm
        } else {
            this._rootElem.querySelector("#svg_2").style.fill = "cecece";  
        }

        if (armButton) {
            this._rootElem.querySelector("#svg_17").style.fill = "red";  //arm
        } else {
            this._rootElem.querySelector("#svg_17").style.fill = "cecece";  
        }

        if (disarmButton) {
            this._rootElem.querySelector("#svg_8").style.fill = "red";  //disarm
        } else {
            this._rootElem.querySelector("#svg_8").style.fill = "cecece";  
        }

        if (manual) {
            this._rootElem.querySelector("#svg_6").style.fill = "red";  //arm
        } else {
            this._rootElem.querySelector("#svg_6").style.fill = "cecece";  
        }

        if (stabilize) {
            this._rootElem.querySelector("#svg_7").style.fill = "red";  //disarm
        } else {
            this._rootElem.querySelector("#svg_7").style.fill = "cecece";  
        }

        if (depthHold) {
            this._rootElem.querySelector("#svg_5").style.fill = "red";  //disarm
        } else {
            this._rootElem.querySelector("#svg_5").style.fill = "cecece";  
        }
    }

    /* keyboardImage(keyA,keyS,keyW,keyD,keyLeft, keyDown, keyUp, keyRight, manual, stabilize, depthHold) {

        if (keyA) {
            this._rootElem.querySelector("#svg_5").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_5").style.fill = "cecece";  
        }

        if (keyS) {
            this._rootElem.querySelector("#svg_6").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_6").style.fill = "cecece";  
        }

        if (keyW) {
            this._rootElem.querySelector("#svg_7").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_7").style.fill = "cecece";  
        }

        if (keyD) {
            this._rootElem.querySelector("#svg_8").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_8").style.fill = "cecece";  
        }

        if (keyLeft) {
            this._rootElem.querySelector("#svg_9").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_9").style.fill = "cecece";  
        }

        if (keyDown) {
            this._rootElem.querySelector("#svg_10").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_10").style.fill = "cecece";  
        }

        if (keyUp) {
            this._rootElem.querySelector("#svg_11").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_11").style.fill = "cecece";  
        }

        if (keyRight) {
            this._rootElem.querySelector("#svg_12").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_12").style.fill = "cecece";  
        }

        if (key1) {
            this._rootElem.querySelector("#svg_13").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_13").style.fill = "cecece";  
        }

        if (key2) {
            this._rootElem.querySelector("#svg_14").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_14").style.fill = "cecece";  
        }

        if (key3) {
            this._rootElem.querySelector("#svg_15").style.fill = "red";
        } else {
            this._rootElem.querySelector("#svg_15").style.fill = "cecece";  
        }
    } */
}