import "./style.scss";
import React from "react";
interface ToggleItem {
    value: string;
    text: string;
}
export interface IProps {
    toggles: Array<ToggleItem>;
    defaultValue?: string;
    onChange?: (current: any) => void;
}
export interface IState {
    current: any;
    currentIndex: number;
    slideWidth?: number;
    slideLeft?: number;
}
declare class ToggleNavigation extends React.Component<IProps, IState> {
    static defaultProps: IProps;
    private curRefs;
    constructor(props: any);
    componentDidMount(): void;
    setSlidePos: () => void;
    toggleHandle: (value: string, index: number) => void;
    render(): JSX.Element | null;
}
export default ToggleNavigation;
