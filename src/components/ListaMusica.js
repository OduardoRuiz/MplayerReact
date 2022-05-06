import { PlayArrow, QueueMusic } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'




export default function ListaMusica() {

    const musicaFake = {
        titulo: 'Titulo da Musica',
        artista: 'Artista da musica',
        imagem: 'https://pbs.twimg.com/profile_images/1217784855368470531/epouecHA_400x400.jpg'
    }


    function Musica({ musica }) {
        const { imagem, artista, titulo } = musica;

        return (
            <Card style={{ display: 'flex', alignItems: 'center', margin: '10px'}}>

                <CardMedia image={imagem} style={{ objectFit: 'cover', width: '140px', height: '140px' }} />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant='h5' component="h2" >{titulo}</Typography>
                        <Typography variant='subtitle1' component="h3">{artista}</Typography>

                    </CardContent>
                    <CardActions>
                        <IconButton><PlayArrow color="secondary" /></IconButton>
                        <IconButton><QueueMusic color="secondary" /></IconButton>

                    </CardActions>
                </div>

            </Card>
        )
    }

    return (

        <div>

            {Array.from({ length: 15 }, () => musicaFake).map((musica, index) => {

                return (<Musica key={index} musica={musica} />)
            })
            }
        </div>

    )

}



