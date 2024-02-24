import { memo, useState } from 'react'

import { IoMdCloseCircleOutline } from 'react-icons/io'
import { WhiteGlobalButtonStyled } from 'style/style'

import TasksComponent from 'components/TasksComponent'

import { Id, TaskType } from 'types'

import { ButtonNoStyle, ColumnDivContainer, ColumnDivIntern } from './style'

interface IColumnComponentProps {
  id: Id
  columnId: Id
  title: string
  tasks: TaskType[]
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void
  createTask: (id: Id) => void
  deleteTask: (id: Id) => void
  updateTask: (id: Id, content: string) => void
  updateTaskTitle: (id: Id, title: string) => void
}

const ColumnComponent: React.FC<IColumnComponentProps> = ({
  title,
  id,
  tasks,
  columnId,
  deleteColumn,
  updateColumn,
  createTask,
  updateTask,
  updateTaskTitle,
  deleteTask,
}) => {
  const [editMode, setEditMode] = useState(false)
  const initialTitle = title || 'Nova Tarefa'

  return (
    <ColumnDivContainer>
      <div className="d-flex justify-content-between align-items-center mb-2">
        {!editMode && (
          <div
            defaultValue={initialTitle}
            onClick={() => setEditMode(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setEditMode(true)
              }
            }}
          >
            <h3>{initialTitle}</h3>
          </div>
        )}
        {editMode && (
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onBlur={() => setEditMode(false)}
            type="text"
            onChange={(e) => updateColumn(id, e.target.value)}
          />
        )}
        <ButtonNoStyle type="button" onClick={() => deleteColumn(id)}>
          <IoMdCloseCircleOutline color="white" size={30} />
        </ButtonNoStyle>
      </div>
      <ColumnDivIntern>
        {tasks.map((task) => (
          <TasksComponent
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            updateTaskTitle={updateTaskTitle}
          />
        ))}
      </ColumnDivIntern>

      <WhiteGlobalButtonStyled
        type="button"
        onClick={() => createTask(columnId)}
        className="p-2"
      >
        Adicionar tarefa
      </WhiteGlobalButtonStyled>
    </ColumnDivContainer>
  )
}
export default memo(ColumnComponent)
