import { ReactChild } from "react";

export interface ITodoItem {
    id: number;
    text: string;
}

export interface ITodo {
    children?: ReactChild[];
}
