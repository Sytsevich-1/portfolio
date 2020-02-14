<? 
  
  header("Content-type: text/html; charset=utf-8");
  $text .= "<b>name</b>: ".$_POST['name']."<br>" ;
  $text .= "<b>phone</b>: ".$_POST['phone']."<br>";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  mail("maxim.sytsevich@mail.ru", "От моего сайта", $text, $headers);

?>