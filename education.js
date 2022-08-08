var insthreg, boardhreg, percenthreg, instsreg, boardsreg, percentsreg, currentreg, currentedureg, overperreg, curbackreg

$(document).ready(function(){

    /** clear button trigger point */
    $("#regFormClear").click(function(){

        $(".error-form").hide();

        $(".form-data").val('');

    });

    /** next page redirection trigger point */
    $("#regNext").click(function(){ 
        
        var flagcheck = validateForm();

        if ( flagcheck ==  false ) {
            window.location.href = 'upload.html'; /** redirection page link */
        }
    });

    /** submit button trigger point */
    $("#regFormSubmit").click(function(){ 
        
        localStorage.clear(); /** clearing previous stored data from local storage */
        
        var flagcheck = validateForm();

        if ( flagcheck == false ) {
            localStorage.setItem("userHSCinst",insthreg);
            localStorage.setItem("userHSCboard",boardhreg);
            localStorage.setItem("userHSCpercent",percenthreg);
            localStorage.setItem("userSSCinst",instsreg);
            localStorage.setItem("userSSCboard",boardsreg);
            localStorage.setItem("userSSCpercent",percentsreg);
            localStorage.setItem("usercurrentpersue",currentreg);
            localStorage.setItem("usercurrentedu",currentedureg);
            localStorage.setItem("useroverpercent",overperreg);
            localStorage.setItem("userbacklog",curbackreg);
        }
        
    });

});


/**
 * validating form input values
 * @returns boolean true/false
 */
function validateForm(){
                            
    errorFlag = false;
    insthreg = $("#regInsth").val().trim();
    boardhreg = $("#regBoardh").val().trim();
    percenthreg = $("#regPercenth").val();
    instsreg = $("#regInsts").val().trim();
    boardsreg = $("#regBoards").val().trim();
    percentsreg = $("#regPercents").val().trim();
    currentreg = $("#regCurrent").val().trim();
    currentedureg = $("#regCurrentEdu").val().trim();
    overperreg = $("#regOverPer").val();
    curbackreg = $("#regCurBack").val().trim();

    if ( insthreg == "" ) {
        $("#error_regInsth").show();
        errorFlag = true;
    } else {
        $("#error_regInsth").hide();
        errorFlag = false;
    }

    if ( boardhreg == "" ) {
        $("#error_regBoardh").show();
        errorFlag = true;
    } else {
        $("#error_reBoardh").hide();
        errorFlag = false;
    }

    if ( percenthreg == "" ) {
        $("#error_regPercenth").show();
        errorFlag = true;
    } else {
        $("#error_regPercenth").hide();
        errorFlag = false;
    }

    if ( instsreg == "" ) {
        $("#error_regInsts").show();
        errorFlag = true;
    } else {
        $("#error_regInsts").hide();
        errorFlag = false;
    }

    if ( boardsreg == "" ) {
        $("#error_regBoards").show();
        errorFlag = true;
    } else {
        $("#error_regBoards").hide();
        errorFlag = false;
    }

    if ( percentsreg == "" ) {
        $("#error_regPercents").show();
        errorFlag = true;
    } else {
        $("#error_regPercents").hide();
        errorFlag = false;
    }

    if ( currentreg == "" ) {
        $("#error_regCurrent").show();
        errorFlag = true;
    } else {
        $("#error_regCurrent").hide();
        errorFlag = false;
    }

    if ( currentedureg == "" ) {
        $("#error_regCurrentEdu").show();
        errorFlag = true;
    } else {
        $("#error_regCurrentEdu").hide();
        errorFlag = false;
    }

    if ( overperreg == "" ) {
        $("#error_regOverPer").show();
        errorFlag = true;
    } else {
        $("#error_regOverPer").hide();
        errorFlag = false;
    }

    if ( curbackreg == "" ) {
        $("#error_regCurBack").show();
        errorFlag = true;
    } else {
        $("#error_regCurBack").hide();
        errorFlag = false;
    }


    if ( errorFlag == false){
        alert("all looks good.");

    } else{
        return errorFlag;
    } 
    return errorFlag;
}