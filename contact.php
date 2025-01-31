<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ontvang de gegevens uit het formulier
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-mailadres waarnaar de mail wordt gestuurd
    $to = "info@runedevroe.be"; // Vervang dit door jouw e-mailadres
    $subject = "Nieuw contactformulier bericht";
    
    // E-mailinhoud
    $email_body = "Naam: $name\n";
    $email_body .= "E-mail: $email\n";
    $email_body .= "Bericht:\n$message\n";

    // Headers
    $headers = "From: $email";

    // Stuur de e-mail
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Bericht succesvol verzonden.";
    } else {
        echo "Er is een fout opgetreden bij het verzenden.";
    }
}
?>
