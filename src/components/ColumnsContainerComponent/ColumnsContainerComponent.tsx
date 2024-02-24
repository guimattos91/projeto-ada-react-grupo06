import { memo, useState } from 'react'

import { GlobalButtonStyled } from 'style/style'

import ColumnComponent from 'components/ColumnComponent'

import { generateId } from 'helpers'

import { ColumnType, Id, TaskType } from 'types'

import { ColumnDivContainer, InsideColumnDiv } from './style'

const ColumnsContainerComponent: React.FC = () => {
  const [columns, setColumns] = useState<ColumnType[]>([])
  const [tasks, setTasks] = useState<TaskType[]>([])

  const createNewColumn: () => void = () => {
    const columnToAdd: ColumnType = {
      id: generateId(),
      title: 'Grupo de Tarefas',
    }

    setColumns([...columns, columnToAdd])
  }

  const deleteColumn: (id: Id) => void = (id: Id) => {
    const filteredColumns = columns.filter((col) => col.id !== id)
    setColumns(filteredColumns)
  }
  const updateColumn: (id: Id, title: string) => void = (
    id: Id,
    title: string,
  ) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col
      return { ...col, title }
    })
    setColumns(newColumns)
  }
  const createTask: (taskId: Id) => void = (taskId: Id) => {
    const newTask: TaskType = {
      id: generateId(),
      content: 'Escreva sua tarefa',
      columnId: taskId,
      title: 'Nova Tarefa',
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask: (taskId: Id) => void = (taskId: Id) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(filteredTasks)
  }

  const updateTaskTitle: (taskId: Id, title: string) => void = (
    taskId: Id,
    title: string,
  ) => {
    const newTask = tasks.map((task) => {
      if (task.id !== taskId) return task
      return { ...task, title }
    })
    setTasks(newTask)
  }
  const updateTask: (taskId: Id, content: string) => void = (
    taskId: Id,
    content: string,
  ) => {
    const newTask = tasks.map((task) => {
      if (task.id !== taskId) return task
      return { ...task, content }
    })
    setTasks(newTask)
  }
  return (
    <ColumnDivContainer>
      <div className="m-auto d-flex flex-column">
        <InsideColumnDiv>
          <div className="d-flex g-2">
            {columns &&
              columns.map((col) => (
                <ColumnComponent
                  id={col.id}
                  title={col.title}
                  key={col.id}
                  columnId={col.id}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  updateTask={updateTask}
                  updateTaskTitle={updateTaskTitle}
                  deleteTask={deleteTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
          </div>
        </InsideColumnDiv>
        <GlobalButtonStyled
          type="button"
          onClick={() => createNewColumn()}
          className="align-self-end"
        >
          Criar Nova Coluna
        </GlobalButtonStyled>
      </div>
    </ColumnDivContainer>
  )
}
export default memo(ColumnsContainerComponent)
