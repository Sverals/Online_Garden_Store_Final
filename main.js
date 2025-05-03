


$(document).ready(function() {    //wait for DOM to be ready instead of deferring

    //Coupon code
    $("#deal-button").on("click", () => {
        $("#deals-alert").addClass("turn-deals-on", "scale-transform");
        $("#alert-overlay").addClass("turn-deals-on");
    });
    $("#close").on("click", () => {
        $("#deals-alert").removeClass("turn-deals-on");
        $("#alert-overlay").removeClass("turn-deals-on");
    });

    enableHoverForDropdown(); //enables hover delay for dropdown
});

//Hover section, allows a delay after cursor is removed from hover menu, rather than using css with no delay
function enableHoverForDropdown() {
    let timeOut;
    const timerDelay = 400; //in milliseconds
    $(".dropbtn").hover(function() { //on hover
        clearTimeout(timeOut); //reset the function that removes display
        $(".dropbtn, #drop-content").addClass("display-on");
    }, function() { //called when hover is gone
        timeOut = setTimeout(function() { //adds delay to removing display
            $("#drop-content").removeClass("display-on");
        }, timerDelay);
    });
}
