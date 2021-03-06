export default class GamePad {

    /** Gets the axis of the first gamepad connected 
     * 
     * @returns The axes and buttons available for the connected gamepad controller.
     * These are returned in two separate arrays.
     * If no gamepad is detected, return null.
     */
    getGamepad() {
        let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        if (gamepads[0] !== null)
            return [gamepads[0].axes, gamepads[0].buttons];
        return null;
    }
}