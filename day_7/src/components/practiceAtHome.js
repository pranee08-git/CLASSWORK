import { useState, useEffect } from "react"
import { Grid, Card, CardContent } from '@mui/material'
import axios from 'axios'

export default function JSONServer() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios
        .get('http://localhost:8001/Products')
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          console.error('Error from AXIOS : ' + error)
        })
    }, [])
    return (
      <Grid container columnSpacing={2} rowSpacing={4}>
        {data.map((item) => (
        <Grid item xs={1} md={3} sm={2} lg={3} xl={4} key={item.id}>
            <Card sx={{ backgroundColor: 'green' }}>
              <CardContent>
                <h1>Name : {item.productName}</h1>
                <h3>Description : {item.productDescription}</h3>
                <h4>Price : {item.price}</h4>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
}