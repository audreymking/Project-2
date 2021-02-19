$(document).ready(function () {

    // grab local storage and display onto this page
    var favsList = JSON.parse(localStorage.getItem('favoritesList'));

    for (var i = 0; i < 8; i++) {

        var itemContainer = $("#item" + i)
        var itemTitle = favsList[i].itemTitle
        var itemURL = favsList[i].itemURL
        var pTwo = $("<a>").attr("href", itemURL)
        var pThree = $("<p>").text(itemTitle);

        itemContainer.append(pTwo);
        pTwo.append(pThree);
        pThree.attr("id", "responsiveLink");
    }

})
