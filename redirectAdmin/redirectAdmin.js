function UrlException(message) {
    this.message = message;
    this.name = 'urlException';
}

function redirectAdminToACY() {
    var baseUrl = window.location.hostname; // returns website.com
    var pathUrl = window.location.pathname; // returns '/gallery'
    var checkBaseForAdmin = pathUrl.includes('administrator'); // returns boolean
    var checkPathForAcy = pathUrl.includes('option=com_acymailing'); //returns boolean

    if (checkBaseForAdmin && !checkPathForAcy) {
        throw new UrlException('This is not an admin url or is already at acy component');
    } else {
        window.location.assign(baseUrl + '/administrator?option=com_acymailing');
    }
}

try {
    redirectAdminToACY();
} catch (e) {
    if (typeof console !== 'undefined') {
        console.log(e.name + ":" + e.message);
    }
}