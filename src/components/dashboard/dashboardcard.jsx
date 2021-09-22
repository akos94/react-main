import React from "react";
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';

export default function DashboardCard({dashboard}) {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/Green-Iguana.jpg"
                        alt="green iguana"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        {dashboard.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dashboard.details}
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
    )
}