import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const CartItem = ({order}) => {

  const {price, name, img} = order

  return (
    <Card 
        sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '32vw', 
            height:'10vh', 
            mb: 3, 
            overflow:'unset' 
        }}
    >
        <CardMedia
            sx={{ height: '10vh', width: 125, borderRadius:'4px 0 0 4px' }}
            image= {img}
            title={name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            R$ {price}
            </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: "end", width:'50%'}}>
            <Button size="small" color='error'>Remover</Button>
        </CardActions>
    </Card>
  );
}

export default CartItem;