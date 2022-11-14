import TaskList from "./Tasklist";

export default {
  title: "TaskList",
  component: TaskList,
};

const Template = (args: any) => <TaskList {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  tasks: [
    {
      id: "1",
      title: "Test Task 1",
      description: "TASK_INBOX 1",
    },
    {
      id: "2",
      title: "Test Task 2",
      description: "TASK_INBOX 2",
    },
    {
      id: "3",
      title: "Test Task 3",
      description: "TASK_INBOX 3",
    },
    {
      id: "4",
      title: "Test Task 4",
      description: "TASK_INBOX 4",
    },
  ],
  handleDelete: (id: string) => alert(`se elimino el registro ${id}`),
  handleEdit: (id: string) => alert(`se quiere editar el registro ${id}`),
};
