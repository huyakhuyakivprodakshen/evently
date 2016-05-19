<?php
  require 'functions.php';
  if (is_ajax()) {
    $data = $_POST;
    $fields = [];
    $errors = [];
    $response;
    if(isset($_COOKIE["request"]) && $_COOKIE["request"]==1) {
      $response["success"] = 1;
      $response["message"] = "You've already registered.";
      echo json_encode($response);
      return;
    }
    if (empty($data["register-name"])) {
      array_push($fields, 1);
      array_push($errors, 'Please, introduce yourself');
    }
    if (empty($data["register-email"]) && empty($data["register-phone"])) {
      array_push($fields, 2);
      array_push($fields, 3);
      array_push($errors, 'Leave us at least one way to contact you');
    }
    if (!empty($data["register-email"]) && !validate_email($data["register-email"])) {
      array_push($fields, 2);
      array_push($errors, 'Invalid email format');
    }

    if(!empty($errors)) {
      $response["success"] = 0;
      $response["errors"] = $errors;
      $response["fields"] = $fields;
    } else {
      setcookie("request", 1, time()+3600);
      $response["success"] = 1;
      $response["message"] = "Congratulations, ".$data["register-name"]." ! We'll contact you as soon as possible.";
      mail('apraxia@yandex.ru','New Order',json_encode($response));
    }
    echo json_encode($response);
  }
?>
