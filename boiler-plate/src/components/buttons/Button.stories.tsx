import ButtonCreate from "./ButtonCreate";

export default {
  title: "Button",
  component: ButtonCreate,
};
const Template = (args: any) => <ButtonCreate {...args} />;
export const Default: any = Template.bind({});
Default.args = {
    handleClick: () => alert("Crear tarea")
}