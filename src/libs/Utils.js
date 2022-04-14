// Convert the position array to position string.
function ToString(pos) {
    return String.fromCharCode(pos[0] + 'a'.charCodeAt(0) - 1) + pos[1];
}

function ToArray(posString) {
    return [posString.charCodeAt(0) - 'a'.charCodeAt(0) + 1, posString.charCodeAt(1) - '0'.charCodeAt(0)];
}

export { ToString, ToArray };