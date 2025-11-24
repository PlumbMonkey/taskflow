import {
  DndContext,
  DragEndEvent,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { Task } from '../types'
import KanbanColumn from './KanbanColumn'

interface KanbanBoardProps {
  tasks: Task[]
  onTaskClick: (task: Task) => void
  onTaskMoved: (taskId: string, newStatus: string, newOrderIndex: number) => void
}

export default function KanbanBoard({ tasks, onTaskClick, onTaskMoved }: KanbanBoardProps) {
  const statuses = ['to_do', 'in_progress', 'done'] as const

  // Configure pointer sensor for better drag detection
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const taskId = active.id as string
    const overData = over.data?.current
    
    // Determine the target status
    let newStatus = ''
    
    // If over is a column (droppable area)
    if (overData?.status) {
      newStatus = overData.status
    } else {
      // If over is a task, find its status
      const overTask = tasks.find((t) => t.id === over.id)
      if (overTask) {
        newStatus = overTask.status
      }
    }

    if (!newStatus) return

    const tasksInStatus = tasks
      .filter((t) => t.status === newStatus)
      .sort((a, b) => a.order_index - b.order_index)

    let newOrderIndex = 0
    if (tasksInStatus.length > 0) {
      const overTaskId = over.id as string
      const overTaskIndex = tasksInStatus.findIndex((t) => t.id === overTaskId)

      if (overTaskIndex === -1) {
        // Dropped in empty area, add to end
        newOrderIndex = tasksInStatus[tasksInStatus.length - 1].order_index + 1
      } else if (overTaskIndex === 0) {
        newOrderIndex = tasksInStatus[0].order_index - 1
      } else if (overTaskIndex === tasksInStatus.length - 1) {
        newOrderIndex = tasksInStatus[tasksInStatus.length - 1].order_index + 1
      } else {
        const above = tasksInStatus[overTaskIndex - 1]
        const below = tasksInStatus[overTaskIndex]
        newOrderIndex = (above.order_index + below.order_index) / 2
      }
    }

    onTaskMoved(taskId, newStatus, newOrderIndex)
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statuses.map((status) => (
          <KanbanColumn
            key={status}
            status={status}
            statusLabel={
              status === 'to_do' ? 'To Do' : status === 'in_progress' ? 'In Progress' : 'Done'
            }
            tasks={tasks.filter((t) => t.status === status)}
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </DndContext>
  )
}
