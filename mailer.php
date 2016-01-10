<?php
	//Get the form fields, remove html tags and whitespace.
	$name = strip_tags(trim($_POST["name"]));
	$name = str_replace(array("\r","\n"), array (" ", " "), $name);
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$phone = trim($_POST["tel"]);
	$message = trim($_POST["msg"]);

	echo $name."+".$email."+".$phone."+".$message;

	// Set the recipient email address.
	$recipient = "test";

	// Set the email subject
	$subject = "Novo e-mail de $name";

	// Build the email content
	$email_content = "Nome: $name\n"."Email: $email\n"."Telefone: $phone\n"."Mensagem: $message";

	//Build the email header
	$email_header = "From: $name <$email>";

	//Send the email
	mail($recipient, $subject, $email_content, $email_header);

	// Redirect to the index.html page with success code
	header("Location: http://217.199.187.198/arval/arval-website/index.php?success=1#contact");

?>
