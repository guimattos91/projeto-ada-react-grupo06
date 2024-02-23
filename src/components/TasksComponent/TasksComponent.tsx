import { memo, useState } from 'react'

import { IoMdCloseCircleOutline } from 'react-icons/io'

import { Id, TaskType } from 'types'

import {
  ButtonNoStyle,
  HeaderDiv,
  InputStyled,
  TaskDivContainer,
} from './style'

interface ITaskComponentProps {
  task: TaskType
  deleteTask: (id: Id) => void
  updateTaskTitle: (id: Id, title: string) => void
  updateTask: (id: Id, content: string) => void
}

const TasksComponent: React.FC<ITaskComponentProps> = ({
  task,
  deleteTask,
  updateTaskTitle,
  updateTask,
}) => {
  const [editModeTitle, setEditModeTitle] = useState(false)
  const [editModeContent, setEditModeContent] = useState(false)
  const initialTitle = task.title || 'Nova Tarefa'
  const initialContent = task.content || 'Escreva sua tarefa'
  return (
    <TaskDivContainer>
      <HeaderDiv>
        {!editModeTitle && (
          <div
            onClick={() => setEditModeTitle(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setEditModeTitle(true)
              }
            }}
          >
            {initialTitle}
          </div>
        )}
        {editModeTitle && (
          <InputStyled
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onBlur={() => setEditModeTitle(false)}
            onChange={(e) => updateTaskTitle(task.id, e.target.value)}
            defaultValue={initialTitle}
            className="me-1"
          />
        )}
        <ButtonNoStyle type="button" onClick={() => deleteTask(task.id)}>
          <IoMdCloseCircleOutline color="#75b2ff" size={25} />{' '}
        </ButtonNoStyle>
      </HeaderDiv>

      <div>
        {!editModeContent && (
          <div
            onClick={() => setEditModeContent(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setEditModeContent(true)
              }
            }}
          >
            {initialContent}
          </div>
        )}
        {editModeContent && (
          <InputStyled
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onBlur={() => setEditModeContent(false)}
            onChange={(e) => updateTask(task.id, e.target.value)}
            defaultValue={initialContent}
          />
        )}
      </div>
    </TaskDivContainer>
  )
}
export default memo(TasksComponent)
