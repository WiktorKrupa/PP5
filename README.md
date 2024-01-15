# PP5
Projekt na PP5

uruchonienie serwera
cd ../PP5/js
node serverSetup.js

strona główna - index.html
    przejście do 3 formularzy
      Zarezerwuj stolik
      Sprawdź swoje rezerwacje
      Oceń naszą restauracje

  Reserwacja stolika - booking.html
      powrót do strony głównej
      wypełnienie informacji rezerwacji
      imię, mail, data, etc.
      "Zarezerwuj" zapisuje informacje o rezerwacji, i przechodzi do 
      potwierdzenia rezerwacji

  Potwierdzenie rezerwacji - confirmation.html
      powrót do strony głównej
      wypełniony, nieedytowalny formularz z informacjami o rezerwacji

Sprawdź swoje rezerwacje - CheckByEmail.html
    powrót do strony głównej
    pole do wprowadzenia maila rezerwacji
    Submit - sprawdzenie rezerwacji pod wprowadzonym adresem email
    
Rezerwacje użytkownika - userReservations.html
  rezerwacje na podany email w formacie json
    trzeba zmienić na coś ładnego

Oceń naszą restaurację - RateUs.html
  powrót do strony głównej 
  wybór oceny
  opinia
  submit zapisuje opinie w pliku json

