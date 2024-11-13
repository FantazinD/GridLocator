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

export const ZeroOneWest: Story = {
    args: {
        positionAndDirection: "0,1 WEST",
    },
    render: (args) => <GridTable {...args} />,
};

export const ZeroZeroSouth: Story = {
    args: {
        positionAndDirection: "0,0 SOUTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const ZeroFourEast: Story = {
    args: {
        positionAndDirection: "0,4 EAST",
    },
    render: (args) => <GridTable {...args} />,
};

export const FourFourNorth: Story = {
    args: {
        positionAndDirection: "4,4 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const FourZeroNorth: Story = {
    args: {
        positionAndDirection: "4,0 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const TwoTwoWest: Story = {
    args: {
        positionAndDirection: "2,2 WEST",
    },
    render: (args) => <GridTable {...args} />,
};

export const ThreeOneEast: Story = {
    args: {
        positionAndDirection: "3,1 EAST",
    },
    render: (args) => <GridTable {...args} />,
};

export const ThreeTwoWest: Story = {
    args: {
        positionAndDirection: "3,2 WEST",
    },
    render: (args) => <GridTable {...args} />,
};

export const ZeroTwoEast: Story = {
    args: {
        positionAndDirection: "0,2 EAST",
    },
    render: (args) => <GridTable {...args} />,
};

export const FourTwoEast: Story = {
    args: {
        positionAndDirection: "4,2 EAST",
    },
    render: (args) => <GridTable {...args} />,
};

export const InvalidCoordinates: Story = {
    args: {
        positionAndDirection: "5,1 NORTH",
    },
    render: (args) => <GridTable {...args} />,
};

export const InvalidDirection: Story = {
    args: {
        positionAndDirection: "3,1 SOUTHWEST",
    },
    render: (args) => <GridTable {...args} />,
};

export const InvalidInput: Story = {
    args: {
        positionAndDirection: "3,4SOUTHWEST",
    },
    render: (args) => <GridTable {...args} />,
};

export const CharacterInput: Story = {
    args: {
        positionAndDirection: "Three,Two East",
    },
    render: (args) => <GridTable {...args} />,
};
