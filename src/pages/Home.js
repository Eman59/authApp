import { Container } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './home.css';

const Home = () => {
  const[data, setData] = useState([]);
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/?_limit=52`
      );
      console.log(res.data)
      setData(res.data)
    }
    getData();
  },[]);
    return (
        <Container>
          <h3 className='sub-head mt-3'>Welcome</h3>
          <div className="row">
            {data.map((user, index) => {
              return(
                  <div className="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto">
                    <Card sx={{ maxWidth: 345, mt: 5, height: 325}}>
                      <CardMedia
                        component="img"
                        alt="user-image"
                        height="140"
                        image={user.url}
                      />
                      <CardContent sx={{ height: 120}}>
                        <Typography gutterBottom variant="h5" component="div">
                          User ID: {user.id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.title}
                        </Typography>
                      </CardContent>
                      <div class="cardFooter">
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </div>
                    </Card>
                  </div>
              )
            })}
          </div>
        </Container>
    )
}

export default Home
