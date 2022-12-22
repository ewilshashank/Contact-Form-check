<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){
     //if email and message not empty
     if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //if user entered email is valid

        $receiver = "codewithewil33467872@gmail.com"; //email receiver email address
        $subject = "From: $name <$email>"; //subject of the email subjects look like from: CodingNepal <abc@gmail.com>

        $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage: $message:: $message\n\nRegards,\n$name";
        $sender = "From: $email"; //sender email
        if(mail($receiver, $subjects, $body, $sender)){ //mail() it is a inbuilt function to sent mail
            echo "Your Message has been sent";

        }else{
            echo "sorry, failed to send your message";
        }

     }else{
        echo "Enter a Valid email address";
     }
}else{
    echo "Email and password field required";
}

?>