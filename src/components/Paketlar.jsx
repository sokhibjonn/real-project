import React from "react";
import { Card, CardTitle, CardText, Button, Row } from "reactstrap";
import FooterPage from "./FooterPage";

export default function Paketlar(){
    return(
        <>
        <h1 className="text-center newFor mt-5 mb-5">Paketlar</h1>
        <Row xs="3" className="row row-cols-1 row-cols-md-3 mb-5">
        <Card
    body
    className="col-md-3 my-2 forColor"
    style={{
      width: '18rem'
    }}
  >
    <CardTitle tag="h5" className="nest text-center">
      FREE
    </CardTitle>
    <CardText className="nest text-center">
      0 so'm
    </CardText>
    <CardText className="nestt text-center">
      Faqat treylerlar va bepul filmlarni tomosha qilish mumkin
    </CardText>
    <Button className="nest collin mb-3" color="warning">
      Ulanish
    </Button>
  </Card>
  <Card
    body
    className="col-md-3 my-2 forColor"
    style={{
      width: '18rem'
    }}
  >
    <CardTitle tag="h5" className="nest text-center">
    PREMIUM OY
    </CardTitle>
    <CardText className="nest text-center">
      15 990 so'm
    </CardText>
    <CardText className="nestt text-center">
     1 OY Davomida: Seriallar,kinolar va Ko'rsatuvlarni cheklanmagan holda ko'rishingiz mumkin!
    </CardText>
    <Button className="nest collin mb-3" color="warning">
      Ulanish
    </Button>
  </Card>
  <Card
    body
    className="col-md-3 my-2 forColorr nestt"
    style={{
      width: '18rem'
    }}
  >
   <CardTitle tag="h5" className="nest text-center">
    PREMIUM OY
    </CardTitle>
    <CardText className="nest text-center">
      15 990 so'm
    </CardText>
    <CardText className="nestt text-center">
     3 OY Davomida: Seriallar,kinolar va Ko'rsatuvlarni cheklanmagan holda ko'rishingiz mumkin!
    </CardText>
    <Button className="nest collin mb-3" color="warning">
      Ulanish
    </Button>
  </Card>
  </Row>
        </>
    )
}