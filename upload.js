$(document).ready(function(){
    var upload_errFlag = false;

    var importPic = $('#uploadPhoto');
    var importMarkH = $('#uploadMarksH');
    var importMarksS=$('#uploadMarksS');
    var importSemMark=$('#uploadSemMark')

    var maxSize = 4194304; /** 1MB = 1048576 bytes */
    var maxmSize = 10485760;
    
    $("#uploadSubmit").click(function(){ 
        
        if ( importPic.get(0).files.length ) {

            var fileSize = importPic.get(0).files[0].size; 
            
            if ( fileSize > maxSize ) {
                $("#error_uploadPhoto").show();
                upload_errFlag = true;
            } else {
                upload_errFlag = false;
                $("#error_uploadPhoto").hide();
            }

        }
        
        if ( importMarkH.get(0).files.length ) {

            var markFlSize = importMarkH.get(0).files[0].size; 
            
            if ( markFlSize > maxSize ) {
                $("#error_uploadMarksH").show();
                upload_errFlag = true;
            } else {
                upload_errFlag = false;
                $("#error_uploadMarksH").hide();
            }

        }

        if ( importMarksS.get(0).files.length ) {

            var marksFlSize = importMarksS.get(0).files[0].size; 
            
            if ( marksFlSize > maxSize ) {
                $("#error_uploadMarksS").show();
                upload_errFlag = true;
            } else {
                upload_errFlag = false;
                $("#error_uploadMarksS").hide();
            }

        }

        if ( importSemMark.get(0).files.length ) {

            var semmarkFlSize = importSemMark.get(0).files[0].size; 
            
            if ( semmarkFlSize > maxmSize ) {
                $("#error_uploadSemMarks").show();
                upload_errFlag = true;
            } else {
                upload_errFlag = false;
                $("#error_uploadSemMarks").hide();
            }

        }

        if ( upload_errFlag == false){
            alert("all looks good.");

        } else{
            return false;
        } 

    });
});