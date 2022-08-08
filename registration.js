var fnamereg, lnamereg, dobreg, emailreg, fnamefreg, lnamefreg, fnamemreg, lnamemreg, gendreg, nationreg, telereg, mobilereg, addressreg, cityreg, countryreg;

$(document).ready(function(){

    /** clear button trigger point */
    $("#regFormClear").click(function(){

        $(".error-form").hide();

        $(".form-data").val('');

        $('input[name="gender"]').prop('checked', false);

        $('#regCity').prop('selectedIndex',0);

    });

    /** next page redirection trigger point */
    $("#regNext").click(function(){ 
        
        var flagcheck = validateForm();

        if ( flagcheck ==  false ) {
            window.location.href = 'edu_info.html'; /** redirection page link */
        }
    });

    /** submit button trigger point */
    $("#regFormSubmit").click(function(){ 
        
        localStorage.clear(); /** clearing previous stored data from local storage */
        
        var flagcheck = validateForm();

        if ( flagcheck == false ) {
            localStorage.setItem("userFirstname",fnamereg);
            localStorage.setItem("userLastname",lnamereg);
            localStorage.setItem("userDateOfBirth",dobreg);
            localStorage.setItem("userMailID",emailreg);
            localStorage.setItem("FathersFastname",fnamefreg);
            localStorage.setItem("FathersLastname",lnamefreg);
            localStorage.setItem("MothersFastname",fnamemreg);
            localStorage.setItem("MothersLastname",lnamemreg);
            localStorage.setItem("userGender",gendreg);
            localStorage.setItem("userNationality",nationreg);
            localStorage.setItem("userTelephone",telereg);
            localStorage.setItem("userMobile",mobilereg);
            localStorage.setItem("userCity",cityreg);
            localStorage.setItem("userCountry",countryreg);
        }
        
    });

});


/**
 * validating form input values
 * @returns boolean true/false
 */
function validateForm(){
                            
    var errorFlag = false;
    fnamereg = $("#regFname").val().trim();
    lnamereg = $("#regLname").val().trim();
    dobreg = $("#regDob").val();
    emailreg = $("#regEmail").val().trim();
    fnamefreg = $("#regFnameF").val().trim();
    lnamefreg = $("#regLnameF").val().trim();
    fnamemreg = $("#regFnameM").val().trim();
    lnamemreg = $("#regLnameM").val().trim();
    gendreg = $("input[name=gender]:checked").val();
    nationreg = $("#regNation").val().trim();
    telereg = $("#regTele").val().trim();
    mobilereg = $("#regMobile").val().trim();
    addressreg=$("#regAddress").val();
    cityreg = $('#regCity :selected').val();
    countryreg = $('#regCountry :selected').val();

    if ( fnamereg == "" ) {
        $("#error_regname").show();
        errorFlag = true;
    } else {
        $("#error_regname").hide();
        errorFlag = false;
    }

    if ( lnamereg == "" ) {
        $("#error_regname").show();
        errorFlag = true;
    } else {
        $("#error_regname").hide();
        errorFlag = false;
    }

    if ( dobreg == "" ) {
        $("#error_regDob").show();
        errorFlag = true;
    } else {
        $("#error_regDob").hide();
        errorFlag = false;
    }

    if ( emailreg == "" ) {
        $("#error_regEmail").show();
        errorFlag = true;
    } else {
        $("#error_regEmail").hide();
        errorFlag = false;
    }

    if ( fnamefreg == "" ) {
        $("#error_regnameF").show();
        errorFlag = true;
    } else {
        $("#error_regnameF").hide();
        errorFlag = false;
    }

    if ( lnamefreg == "" ) {
        $("#error_regnameF").show();
        errorFlag = true;
    } else {
        $("#error_regnameF").hide();
        errorFlag = false;
    }

    if ( fnamemreg == "" ) {
        $("#error_regnameM").show();
        errorFlag = true;
    } else {
        $("#error_regnameM").hide();
        errorFlag = false;
    }

    if ( lnamemreg == "" ) {
        $("#error_regnameM").show();
        errorFlag = true;
    } else {
        $("#error_regnameM").hide();
        errorFlag = false;
    }

    if ( gendreg == "" || gendreg == undefined ) {
        $("#error_regGend").show();
        errorFlag = true;
    } else {
        $("#error_regGend").hide();
        errorFlag = false;
    }

    if ( nationreg == "" ) {
        $("#error_regNation").show();
        errorFlag = true;
    } else {
        $("#error_regNation").hide();
        errorFlag = false;
    }

    if ( telereg == "" ) {
        $("#error_regTele").show();
        errorFlag = true;
    } else {
        $("#error_regTele").hide();
        errorFlag = false;
    }

    if ( mobilereg == "" ) {
        $("#error_regMobile").show();
        errorFlag = true;
    } else {
        $("#error_regMobile").hide();
        errorFlag = false;
    }

    if ( addressreg == "" ) {
        $("#error_regAddress").show();
        errorFlag = true;
    } else {
        $("#error_regAddress").hide();
        errorFlag = false;
    }

    if ( cityreg == "" ) {
        $("#error_regCity").show();
        errorFlag = true;
    } else {
        $("#error_regCity").hide();
        errorFlag = false;
    }

    if ( countryreg == "" ) {
        $("#error_regCountry").show();
        errorFlag = true;
    } else {
        $("#error_regCountry").hide();
        errorFlag = false;
    }

    if ( errorFlag == false){
        alert("all looks good.");

    } else{
        return errorFlag;
    } 

    return errorFlag;
}