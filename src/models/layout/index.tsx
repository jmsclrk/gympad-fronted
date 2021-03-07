export interface ColumnOptions {
    minWidth: number;
    options: { [key: number]: Column }
}

export interface Column {
    component: JSX.Element;
    flex: number;
}