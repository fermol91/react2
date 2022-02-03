import React from 'react'
/*import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

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
*/
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

 const CartWidget = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CartWidget;