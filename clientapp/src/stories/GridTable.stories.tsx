import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import GridTable from "../components/GridTable/GridTable";

type StoryProps = ComponentProps<typeof GridTable>;

const meta: Meta<StoryProps> = {
    component: GridTable,
    argTypes: {
        positionAndDirection: {
            options: ["1,1 NORTH", "1,2 NORTH"],
            control: {
                type: "select",
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const OneOneNorth: Story = {
    args: {
        positionAndDirection: "1,2 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};
