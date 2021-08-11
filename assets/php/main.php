<?php

if (isset($_POST["submit"])) {

  if (empty($_POST["firstName"]) || empty($_POST["lastName"]) || empty($_POST["email"]) || empty($_POST["message"])) {/*"/^[a-zA-Z0-9 .,:;!-/]*$/i"*/
    header("Location: contact.html?error=novalues");
    die("<html><body><span style='color:red;'>test123</span>");
    echo "<script type='text/javascript'>document.querySelectorAll('form span input, form span textarea').parentNode.classList.add('invalid')</script>";

/*
    echo "<html><body><span style='color:red;'>test123</span></body></html>";
    echo "<script type='text/javascript'>windows.onload = function () { alert('Welcome to my website.')}</script>";
*/
    /*$output = "<span style='color:red;'>test123</span>";
    if(isset($output)){echo $output;}*/


  }

  elseif (!preg_match("/^[a-zA-Z -]*$/i", $_POST["firstName"]) || !preg_match("/^[a-zA-Z -]*$/i", $_POST["middleName"]) || !preg_match("/^[a-zA-Z -]*$/i", $_POST["lastName"])  || !preg_match("/^[a-zA-Z0-9 \n-.,:;!\/]*$/i", $_POST["message"])) {
    header("Location: contact.html?error=invalid-values");
  }

  elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    header("Location: contact.html?error=invalid-email");
  }


  else {
    $firstName = $_POST["firstName"];
    $middleName = $_POST["middleName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject = "New message - Genesisnow";
    $to = "stevenurk94@hotmail.com";

    // SETTING CONTENT-TYPE FOR HEADER
    $headers = "From: Genesisnow <noreply@genesisnow.nl>" . "\r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    // EMAIL BODY
    $body = "
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='UTF-8'>
        <title>New message - Genesisnow</title>
      </head>
    <body>
      <span style='font-size:12pt;font-family:arial;line-height:2;'>
        Onderstaand bericht werd verzonden vanaf de website:
        <br>
        <br>
        <b style='font-size:12pt;font-family:calibri;'>Verzonden vanaf:</b>
        <br>
        http://genesisnow.nl/contact.html
        <br>
        <br>
        <b style='font-size:12pt;font-family:calibri;'>From:</b>
        <br>
        {$email}
        <br>
        <br>
        <b style='font-size:12pt;font-family:calibri;'>Voornaam:</b>
        <br>
        {$firstName}
        <br>
        <br>
        <b style='font-size:12pt;font-family:calibri;'>Tussenvoegsel:</b>
        <br>
        {$middleName}
        <br>
        <br>
        <b style='font-size:12pt;font-family:calibri;'>Achternaam:</b>
        <br>
        {$lastName}
        <br>
        <br>
        <b style='font-size:12pt;font-family:calibri;'>Message:</b>
        <br>
        {$message}
        </span>
    </body>
  </html>
";

    mail($to, $subject, $body, $headers);
    header("Location: bedankt.html");


    // MAIL TO USER
    $c_to = "{$email}";
    $c_subject = "Conformation - Genesisnow";

    // EMAIL BODY FOR USER
    $c_body = "
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <title>Genesis now - Conformation mail</title>
        <style type='text/css'>
          @media screen and (min-width: 741px) {
            .container {
              width: 740px!important;
            }
          }

          p {
            font-size: 17px;
            margin: 0;
            font-family: calibri;
          }

          a {
            font-size: 16px;
            font-weight: bold;
            font-family: calibri;
          }

        </style>
      </head>
      <body style='margin:0;padding:0;min-width:100%;background-color:#eeeeee;'>
        <table style='max-width:740px;width:100%;background-color:#ffffff' class='container' cellspacing='0' cellpadding='0' align='center'>
          <tr>
            <td align='center'>
              <a target='_blank' href='https://genesisnow.nl'>
                <img style='max-width:740px; width:100%;height:auto;margin:auto;display:block;-webkit-user-select:none;' src='https://genesisnow.nl/img/genesis-logo2.png' alt='Genesisnow' align='middle' width='740'>
              </a>
            </td>
          </tr>
          <tr style='height:40px;'><td></td></tr>
          <tr>
            <td>
              <table style='width:100%;max-width:740px;' width='100%'>
                <tr>
                  <td style='width:10%;' width='10%'></td>
                  <td style='width:80%;' width='80%'>
                    <table style='margin:0 auto;max-width:580px;' cellspacing='0' cellpadding='0' align='center'>
                      <tr>
                        <td>
                          <p>Heey {$firstName}!</p>
                        </td>
                      </tr>
                      <tr><td style='height:20px;'></td></tr>
                      <tr>
                        <td>
                          <p>Superleuk dat je even een berichtje doet! Dankjewel.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Maar helaas pindakaas, waarschijnlijk ga je geen reactie krijgen. Nou.. eigenlijk weet ik het wel zeker :)!</p>
                        </td>
                      </tr>
                      <tr><td style='height:40px;'></td></tr>
                      <tr>
                        <td>
                          <p style='font-weight:bold;font-style:italic;font-size:15px;'>You send Steven the following message:</p>
                        </td>
                      </tr>
                      <tr style='height:5px;'><td></td></tr>
                      <tr>
                        <td style='height:.6px;width:100%;background:black;'></td>
                      </tr>
                      <tr><td style='height:20px;'></td></tr>
                      <tr>
                        <td>
                          <p style='font-style:italic;font-size:15px;'>{$message}</p>
                        </td>
                      </tr>
                      <tr style='height:20px;'><td></td></tr>
                      <tr>
                        <td style='height:.6px;width:100%;background:black;'></td>
                      </tr>
                      <tr><td style='height:40px;'></td></tr>
                      <tr>
                        <td>
                          <p>Luister, {$firstName} {$middleName} {$lastName}, misschien als je het nog een keer probeert dat je dan wel een reactie krijgt. Je weet het maar nooit. Ik zou zeggen: probeer het nog eens!</p>
                        </td>
                      </tr>
                      <tr><td style='height:30px;'></td></tr>
                      <tr>
                        <td align='left'>
                          <table style='margin:5px;' border='0' cellspacing='0' cellpadding='0'>
                            <tr>
                              <td style='width:300px;height:40px;border-radius:50px;text-align:center;cursor:pointer;' bgcolor='#1C2F5C'>
                                <a style='width:100%;display:inline-block;background-color:#1C2F5C;color:white;text-decoration:none;border-radius:50px;font-weight:bold;' target='_blank' href='https://genesisnow.nl/contact.html'>Nog een keer proberen</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr><td style='height:40px;'></td></tr>
                      <tr>
                        <td>
                          <p>Groeten,</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Steven</p>
                        </td>
                      </tr>
                      <tr><td style='height:20px;'></td></tr>
                    </table>
                  </td>
                  <td style='width:10%;' width='10%'></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style='height:40px;'></td>
          </tr>
        </table>
      </body>
    </html>
";

    mail($c_to, $c_subject, $c_body, $headers);
  }
}
