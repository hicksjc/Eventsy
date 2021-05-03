import * as MODEL from '../model/model.js';

function init() {
    $("nav a").click(function (event) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        console.log("nav");
        if (btnId == "blog" || btnId == "gallery") {
            MODEL.getPageContent(contentID, addPromoListeners);
            console.log("nav blog");
        } else {
            MODEL.getPageContent(contentID);
            console.log("link");
        }

    })

}
function addPromoListeners() {

    $(".gallery a").click(function (event) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        MODEL.getPageContent(contentID, addPromoListeners);
    })
    $(".blog-images a").click(function (event) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        console.log("here blog");
        MODEL.getPageContent(contentID, addPromoListeners);
    })
}
$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
})