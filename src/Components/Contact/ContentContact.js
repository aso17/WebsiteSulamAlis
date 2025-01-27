import React from "react";
import { Card, Button } from "react-bootstrap";
const ContentContact = () => {
  var objToday = new Date(),
    weekday = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = (function () {
      var a = objToday;
      if (/1/.test(parseInt((a + "").charAt(0)))) return "";
      a = parseInt((a + "").charAt(1));
      return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "";
    })(),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? "0" + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder,
    months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour =
      objToday.getHours() > 12
        ? objToday.getHours() - 12
        : objToday.getHours() < 10
        ? "0" + objToday.getHours()
        : objToday.getHours(),
    curMinute =
      objToday.getMinutes() < 10
        ? "0" + objToday.getMinutes()
        : objToday.getMinutes(),
    curSeconds =
      objToday.getSeconds() < 10
        ? "0" + objToday.getSeconds()
        : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  var today =
    curHour +
    ":" +
    curMinute +
    "." +
    curSeconds +
    curMeridiem +
    " " +
    dayOfWeek +
    " " +
    dayOfMonth +
    " of " +
    curMonth +
    ", " +
    curYear;

  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Bisa Melakukan Reservasi Terlebih Dahulu</Card.Title>
          <Card.Text>
            Untuk Informasi Harga & Informasi Lebih Lanjut Bisa langsung Click
            Tombol Di bawah
          </Card.Text>
          <Button variant="secondary">Hubungi Kami</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{today}</Card.Footer>
      </Card>
    </div>
  );
};

export default ContentContact;
