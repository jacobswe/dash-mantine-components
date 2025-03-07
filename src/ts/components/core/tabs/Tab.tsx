import React from "react";
import { DefaultProps } from "../../../props";
import { Tabs } from "@mantine/core";
import { MantineColor } from "@mantine/styles";

type Props = {
    /** Value that is used to connect Tab with associated panel */
    value: string;
    /** Tab label */
    children?: React.ReactNode;
    /** Section of content displayed after label */
    rightSection?: React.ReactNode;
    /** Section of content displayed before label */
    icon?: React.ReactNode;
    /** Key of theme.colors */
    color?: MantineColor;
    /** Whether the tab is disabled */
    disabled?: boolean;
} & DefaultProps;

/**
 * Utility component to pass to TabsList. For more information, see: https://mantine.dev/core/tabs/
 */
const Tab = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Tabs.Tab {...other}>{children}</Tabs.Tab>;
};

Tab.defaultProps = {};

export default Tab;
