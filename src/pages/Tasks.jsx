import { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Card, CardContent, TextField, Button, Paper } from '@mui/material';
import '../App.css';
import AddTask from '../components/AddTask'
import EditTask from '../components/EditTask'
import { Api } from '../service/Api';



function Tasks() {
  const [count, setCount] = useState(0);
  const [task, setTasks] = useState([])
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

  const options = {
    filterType: 'checkbox',
  };

  async function searchTask(){
    const response = await Api({},'GET','/get-tasks')
    setTasks(response)
  }

  useEffect(()=>{
    searchTask()
  },[])
  
  return (
    <>
      <Card style={{minWidth: 300, width: '60vw'}}>
        <MUIDataTable
          title={"Lista de Tarefas"}
          data={task}
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
