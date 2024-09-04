import { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Card, CardContent, TextField, Button, Paper } from '@mui/material';
import '../App.css';
import AddTask from '../components/AddTask'
import EditTask from '../components/EditTask'

const columns = [
  {
    name: 'id',
    label: 'ID',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'titulo',
    label: 'Título',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'descricao', label: 'Descrição', options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "Ações",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <EditTask props={tableMeta.row} />

        );
      }
    }
  },
];
function Edit(){
  setEditName(TRUE)
}
const rows = [
  { id: 1, titulo: 'Task 1', descricao: 'descricao 1' },
  { id: 2, titulo: 'Task 2', descricao: 'descricao 2' },
  { id: 3, titulo: 'Task 3', descricao: 'descricao 3' },

];

const options = {
  filterType: 'checkbox',
};

function Tasks() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card style={{minWidth: 300, width: '60vw'}}>
        <MUIDataTable
          title={"Lista de Tarefas"}
          data={rows}
          columns={columns}
          options={options}
        />
      </Card>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
        <AddTask />
      </div>
    </>
  );
}

export default Tasks;
