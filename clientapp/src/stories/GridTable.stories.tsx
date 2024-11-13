import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import GridTable from "../components/GridTable/GridTable";

type StoryProps = ComponentProps<typeof GridTable>;

const meta: Meta<StoryProps> = {
    component: GridTable,
    tags: ["autodocs"],
    argTypes: {
        positionAndDirection: {
            control: {
                type: "text",
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const MiddleNorth: Story = {
    args: {
        positionAndDirection: "2,2 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const BottomLeftNorth: Story = {
    args: {
        positionAndDirection: "0,0 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const TopLeftNorth: Story = {
    args: {
        positionAndDirection: "0,4 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const TopRightNorth: Story = {
    args: {
        positionAndDirection: "4,4 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const BottomRightNorth: Story = {
    args: {
        positionAndDirection: "4,0 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const InvalidCoordinates: Story = {
    args: {
        positionAndDirection: "5,1 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const InvalidInput: Story = {
    args: {
        positionAndDirection: "3,1 SOUTHWEST",
    },
    render: (args) => <GridTable {...args} />,
};
