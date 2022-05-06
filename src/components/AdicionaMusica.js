import { SubscriptionsTwoTone } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'




export default function AdicionaMusica() {
    const [dialog, setDialog] = React.useState(false);

    return (
        <>
            <Dialog open={dialog}>
                <DialogTitle>Editar Música</DialogTitle>
                <DialogContent style={{ textAlign: 'center' }}>
                    <img style={{ width: '90%' }} src="https://pbs.twimg.com/profile_images/1217784855368470531/epouecHA_400x400.jpg" alt="imagem da musica" />
                    <TextField style={{ marginTop: '10px' }} variant='outlined' label="Nome da Música" fullWidth />
                    <TextField style={{ marginTop: '10px' }} variant='outlined' label="Nome do artista" fullWidth />
                    <TextField style={{ marginTop: '10px' }} variant='outlined' label="imagem" fullWidth />


                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={() => setDialog(false)} color="secondary">Cancelar</Button>
                    <Button color="primary">Salvar</Button>

                </DialogActions>

            </Dialog>

            <div style={{ display: 'flex', alignItems: 'center' }}>

                <TextField style={{ margin: 10 }} variant="outlined" fullWidth type="url" label="Url da música" />
                <Button style={{ padding: 15 }} onClick={() => setDialog(true)} startIcon={<SubscriptionsTwoTone />} variant="contained" color="secondary"  >Adicionar</Button>
            </div>

        </>

    )

}





