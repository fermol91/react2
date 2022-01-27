import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const CartWidget = () => (
    <div>
    <Card>
        <CardBody>
            <CardTitle tag="h5">Bit Coin</CardTitle>
            <CardText>
                Principal Criptomoneda
            </CardText>
            <Button>
                Button
            </Button>
        </CardBody>
    </Card>
  </div>
)

export default CartWidget;