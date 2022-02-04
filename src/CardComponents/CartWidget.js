import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

 const CartWidget = ({Data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            //image={Data.CoinInfo.Image.Url}
            alt={Data.CoinInfo.FullName}
        />
 
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {Data.CoinInfo.FullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Data.RAW.USD.PRICE}
            </Typography>
      </CardContent>
    </Card>
  );
}

export default CartWidget;