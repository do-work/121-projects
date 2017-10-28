/**
 * adjust an html element contents.
 * ex. the member login html content when logged in to say logout
 *
 * @param {string} Id of the desired element to change
 * @return {null} no buttonId,
 *
 * @note adjust logic on 11,12 as needed
 */


if (urlContains('homeowner') && !urlContains('homeowner-login')) {
    renameIdContent('button-id', 'homeowner-login');
}

function urlContains(path) {
    return (window.location.pathname).includes(path); //returns boolean
}

function renameIdContent(buttonId, newContent) {
    var loginButton = document.getElementById(buttonId);

    if (loginButton === null) {
        return console.log(buttonId + ' does not exist');
    }
    loginButton.innerHTML = newContent;
}