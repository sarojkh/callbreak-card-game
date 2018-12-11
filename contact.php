<script src="js/contact.js"></script>
<link href="css/contact.css" rel="stylesheet" media="screen">


<div class="row">
	<div class="span6 offset2" id="contact_form_container">
		<legend><h3>Contact Form</h3></legend>
		<div id="contact_form">
			<fieldset>
				<div id="error_message_container">
				</div>
				<label>Name</label>
				<input id="name" type="text" placeholder="Enter Name Here" >
				<span id="error_for_name"></span>
				<label>Email Id</label>
				<input id="email_id" type="text" placeholder="Enter Email Id Here">
				<span id="error_for_email_id"></span>
				<label>Phone Number<span style="font-style:italic; font-size:0.8em">&nbsp; (Optional)</span></label>
				<input id="phone_number" type="text" placeholder="Enter Phone Number Here">
				<span id="error_for_phone_number"></span>
				<label>Message</label>
				<textarea id="message" class="input-xlarge" rows="6"  placeholder="Enter Message Here"></textarea>
				<span id="error_for_message"></span>
				<label>
					<button id="contact_form_submit_button" type="submit" class="btn btn-inverse" onclick="submitContactForm()">Submit</button>
				</label>
			</fieldset>
		</div>
	</div>
</div>

