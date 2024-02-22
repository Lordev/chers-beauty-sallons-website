<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $service = $_POST["service"];
    $message = $_POST["message"];
    $preferredDate = $_POST["preferred-date"];

    // Perform additional validation if needed

    // Email settings
    $to = "lorenzo_sallons@live.nl";
    $subject = "New Form Submission";
        $headers = "Van: $email\r\n" .
                "Antwoord-naar: $email\r\n" .
                "X-Mailer: PHP/" . phpversion();

    // Compose email message
    $emailMessage = "Naam: $name\n" .
                    "Email: $email\n" .
                    "Telefoon: $phone\n"
                    "Service: $service\n"
                    "Voorkeursdatum: $preferredDate\n"
                    "Bericht:\n$message";

    // Send email
    mail($to, $subject, $emailMessage, $headers);

    // Optionally, you can redirect the user after successful submission
    header("Location: thank_you.html");
    exit();
}
?>