import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { useAppProvider } from '../../providers';

const OrderCard = ({order}) => {

  const { addToCart } = useAppProvider()
  const {descr, price, name, img} = order;

  return (
    <Card sx={{ maxWidth: 345, mr: 3, ml: 3, mb: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          R$ {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descr}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: "center"}}>
        <Button size="small" onClick={() => addToCart(order)}>Comprar</Button>
      </CardActions>
    </Card>
  );
};

export default OrderCard;