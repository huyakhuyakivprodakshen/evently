<?php
  require 'functions.php';
  if (is_ajax()) {
    $data = $_POST;
    $fields = [];
    $errors = [];
    $response;
    if(isset($_COOKIE["message"]) && $_COOKIE["message"]==3) {
      $response["success"] = 1;
      $response["message"] = "You're sending messages too often. Try later";
      echo json_encode($response);
      return;
    }
    if (empty($data["contact-name"]) || empty($data["contact-email"]) || empty($data["contact-message"])) {
      array_push($fields, 1,2,3);
      array_push($errors, 'All fields are required');
    }
    if (!empty($data["contact-email"]) && !validate_email($data["contact-email"])) {
      array_push($fields, 2);
      array_push($errors, 'Invalid email format');
    }
    if (!empty($errors)) {
      $response["success"] = 0;
      $response["errors"] = $errors;
      $response["fields"] = $fields;
    } else {
      if (isset($_COOKIE["message"])) {
        $i = $_COOKIE["message"];
        $i++;
      } else {
        $i = 1;
      }
      setcookie("message", $i, time()+3600);
      $response["success"] = 1;
      $response["message"] = "Thank you for your message! We'll contact you via e-mail if necessary.";
      mail('apraxia@yandex.ru','New message',json_encode($response));
    }
    echo json_encode($response);
  }
?>
