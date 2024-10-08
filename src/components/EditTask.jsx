import * as React from 'react';
import { Card, CardContent, TextField, Typography, Box, Button, Modal, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Api } from '../service/Api';
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

export default function BasicModal(props) {
    console.log(props)
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState(props.task[1])
    const [description, setDescription] = React.useState(props.task[2])
    const handleOpen = () => setOpen(true);

    async function editTask() {
        const editTask = {
            _id:props.task[0],
            title: title || props.task[1],
            description
        }
        await Api(editTask, 'POST', '/edit-task').then(()=>{
            location.reload()
        })
    }

    function handleClose() {
        setOpen(false)
    }
    React.useEffect(()=>{
        setTitle(title)
        setDescription(description)
    },[title, description])
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <IconButton onClick={handleOpen}><EditIcon /></IconButton >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Card sx={style} style={{ borderRadius: 20 }}>

                        <h1 style={{ fontWeight: 600, fontSize: 40 }}> Editar Tarefa </h1>
                        <CardContent style={{ display: 'grid', gap: 25, padding: 30 }}>
                            <TextField
                                id="title-edittask-input"
                                label="Título"
                                type="text"
                                value={title}
                                variant="standard"
                                style={{ marginTop: 0 }}
                                onChange={(e)=>{
                                    setTitle(e.target.value)
                                }}
                            />
                            <TextField
                                id="desc-edittask-input"
                                label="Descrição"
                                type="text"
                                value={description}
                                variant="standard"
                                style={{ marginTop: 0 }}
                                onChange={(e)=>{
                                    setDescription(e.target.value)
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15 }}>
                                <Button id="cancel-edittask-button" variant="contained" style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff' }} onClick={handleClose}> Cancelar </Button>
                                <Button id="save-edittask-button" variant="contained" style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff' }} onClick={editTask}> Salvar </Button>
                            </div>

                        </CardContent>
                    </Card>

                </Modal>
            </div >
        </>
    );
}
