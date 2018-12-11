
function submitContactForm(){
	resetSubmitFormFieldsBorder();
	$("#error_message_container").empty();

	var errorCount=0;
	if(!nameIsValid()){
		errorCount++;
		$("#name").css("border-color", "#b94a48");
	}
	if(!emailIdIsValid()){
		errorCount++
		$("#email_id").css("border-color", "#b94a48");
	}
	if(!messageIsValid()){
		errorCount++;
		$("#message").css("border-color", "#b94a48");
	}
	if(!phoneNumberIsValid()){
		errorCount++;
		$("#phone_number").css("border-color", "#b94a48");
	}
	if(errorCount!=0){
		displayErrorMessage();
		return;
	}
	displaySuccessMessage();
}

function nameIsValid(){
	var name=$('#name').val();
	return name.length !=0;
}

// regexp courtesty: http://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
function emailIdIsValid(){
	var emailId=$('#email_id').val();
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	return pattern.test(emailId);
}

function messageIsValid(){
	var message=$('#message').val();
	return message.length!==0;
}
function phoneNumberIsValid(){
	var phoneNumber=$("#phone_number").val();
	if(phoneNumber=="")
		return true;
	return !isNaN(phoneNumber) && phoneNumber.length>6;
}

function displaySuccessMessage(){
	resetSubmitForm();
var successMessage="<div class=\"alert alert-success\" style=\"font-size:0.8em\">"+
	"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>"+
	"Message Sent. Thank You!."+
	"</div>";
	$("#error_message_container").append(successMessage);
}

function displayErrorMessage(){
var errorMessage="<div class=\"alert alert-warning\" style=\"font-size:0.8em\">"+
	"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>"+
	"Invalid/Missing Fields. Re-enter."+
	"</div>";
	$("#error_message_container").append(errorMessage);
}

function resetSubmitFormFieldsBorder(){
	$("#name").css("border-color", "#ccc");
	$("#email_id").css("border-color", "#ccc");
	$("#phone_number").css("border-color", "#ccc");
	$("#message").css("border-color", "#ccc");
}

function resetSubmitForm(){
	$("#name").val("");
	$("#email_id").val("");
	$("#phone_number").val("");
	$("#message").val("");
}


