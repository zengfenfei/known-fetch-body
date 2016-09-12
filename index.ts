import * as FormData from "form-data";

let knownReqBodyTypes: any[] = [FormData];
if (typeof document != "undefined") { // Add browser specific types
    knownReqBodyTypes.push(Blob);
    var URLSearchParams;
    (typeof URLSearchParams != "undefined") && knownReqBodyTypes.push(URLSearchParams);
} else {
    knownReqBodyTypes.push(Buffer);
}
export default function isKnownReqBodyType(body): boolean {
    if (typeof body == "string") {
        return true;
    }
    // Detect if body is node stream.Readable. Import stream.Readable (and detect by `instanceof`) will make the final bundle much larger, this checking method is inspired by https://github.com/bitinn/node-fetch/blob/f17aa9af1f0a2fa8b46a5c95eecaa0eba23fe9ff/index.js#L239.
    if (body && typeof body.pipe == 'function') {
        return true;
    }
    for (var i = 0; i < knownReqBodyTypes.length; i++) {
        if (body instanceof knownReqBodyTypes[i]) {
            return true;
        }
    }
    return false;
}