import { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Card, CardContent, TextField, Button, Paper } from '@mui/material';
import '../App.css';
import AddTask from '../components/AddTask'
import EditTask from '../components/EditTask'
import { Api } from '../service/Api';
import { useNavigate } from 'react-router-dom';

function Tasks() {
  const navigate = useNavigate()
  if(!localStorage.getItem('token')) navigate('/login')
  const [task, setTasks] = useState([])
  const columns = [
    {
      name: '_id',
      label: 'ID',
      options: {
        display:false,
        filter: false,
        sort: true,
      }
    },
    {
      name: 'title',
      label: 'Título',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: 'description', label: 'Descrição', options: {
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
            <EditTask task={tableMeta.rowData} />
  
          );
        }
      }
    },
  ];

  const options = {
    filterType: 'checkbox',
    textLabels: {
      body: {
        noMatch: "Nenhum registro correspondente encontrado", 
      },
    },
    onRowsDelete: async (rowsDeleted, dataRows) => {
      const idsToDelete = rowsDeleted.data.map((row)=> task[row.dataIndex]._id)
      const body = {
        _ids:idsToDelete
      }
      const response = await Api(idsToDelete, 'POST','/delete-tasks')
      console.log(response)
    }
  };

  async function searchTask(){
    const response = await Api({},'GET','/get-tasks')
    console.log(response)
    setTasks(response.response)
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
