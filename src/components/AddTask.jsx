import * as React from 'react';
import { Card, CardContent, TextField, Typography, Box, Button, Modal } from '@mui/material';
import { Api } from '../service/Api'

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
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [isValidTask, setIsValidTask] = React.useState(false)
    const handleOpen = () => setOpen(true);

    async function addTask() {
        const newTask = {
            title,
            description
        }
        await Api(newTask, 'POST', '/create-task').then(()=>{
            location.reload()
        })
    }

    function handleClose() {
        setTitle('')
        setDescription('')

        setOpen(false)
    }

    React.useEffect(() => {
        const validated = title !== ''
        setIsValidTask(validated)
    }, [title, description])

    return (
        <>
            <div>
                <Button id='add-task-button' onClick={handleOpen} style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff' }}> Adicionar </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Card sx={style} style={{ borderRadius: 20 }}>

                        <h1 style={{ fontWeight: 600, fontSize: 40 }}> Adicionar Tarefa </h1>
                        <CardContent style={{ display: 'grid', gap: 25, padding: 30 }}>
                            <TextField
                                id="title-addtask-modal"
                                label="Título"
                                type="text"
                                variant="standard"
                                required
                                value={title}
                                error={!isValidTask}
                                style={{ marginTop: 0 }}
                                onChange={function (e) {
                                    setTitle(e.target.value)
                                }}
                            />
                            <TextField
                                id="desc-addtask-modal"
                                label="Descrição"
                                type="text"
                                value={description}
                                variant="standard"
                                style={{ marginTop: 0 }}
                                onChange={function (e) {
                                    setDescription(e.target.value)
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15 }}>
                                <Button id="cancel-addtask-button" variant="contained" style={{
                                    display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: '#ff3c5f', color: '#fff'
                                }}
                                    onClick={handleClose}> Cancelar </Button>
                                <Button id="salve-addtask-button" disabled={!isValidTask} variant="contained" style={{ display: 'grid', marginBottom: 10, marginTop: 10, backgroundColor: !isValidTask ? '#c5c5c5' : '#ff3c5f', color: '#fff' }} onClick={addTask}> Salvar </Button>
                            </div>
                        </CardContent>
                    </Card>

                </Modal>
            </div >
        </>
    );
}
