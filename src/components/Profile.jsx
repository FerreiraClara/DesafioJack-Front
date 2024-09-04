import * as React from 'react';
import { Card, CardContent, TextField, Typography, Box, Button, Modal, IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import perfil from '../assets/profile.jpg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff' }}>Visualizar Perfil</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={style} style={{ mixWidth: 345, minHeight: 400, borderRadius: 5, backgroundColor: '#2c2c2c', width: 700 }}>
                    <Card sx={{ backgroundColor: '#2c2c2c', color: '#fff' }}>

                        <CardContent style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <div>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={perfil}
                                    alt="profile image"
                                    style={{ display: 'grid', justifyContent: 'center', alignItems:'center', borderRadius: 50, minHeight: 200, minWidth: 200, width: 300 }}
                                />
                                <Button style={{ fontFamily: 'Oswald', fontSize: 12, width: '100%' }}> Change profile </Button>

                            </div>
                            <div style={{ display: 'grid', gap: 5 }}>
                                <h1 style={{ fontSize: 20, fontWeight: 600 }}> Name </h1>
                                <Typography style={{ fontSize: 15 }}> Clara Rocha Ferreira </Typography>
                                <Button style={{ fontFamily: 'Oswald', fontSize: 12 }}> Change name </Button>
                                <h1 style={{ fontSize: 20, fontWeight: 600 }}> Email </h1>
                                <Typography style={{ fontSize: 15 }}> clara@gmail.com </Typography>
                                <Button style={{ fontFamily: 'Oswald', fontSize: 12 }}> Change email </Button>
                                <h1 style={{ fontSize: 20, fontWeight: 600 }}> Password </h1>
                                <Typography style={{ fontSize: 15 }}> ****** </Typography>
                                <Button style={{ fontFamily: 'Oswald', fontSize: 12 }}> Change password </Button>
                            </div>
                        </CardContent>

                        <CardActions style={{ display: 'flex', justifyContent: 'flex-end', gap: 15 }}>
                            <Button id="cancel-addtask-button" variant="contained" style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff' }}> Cancelar </Button>
                            <Button id="salve-addtask-button" variant="contained" style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff' }}> Salvar </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Modal>
        </div>
    );
}