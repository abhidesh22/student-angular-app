import { itemtype } from "./item-types";

export interface Item {
    id: number;
    deleted?: boolean;
    type?: itemtype
    time?: number;
    text?: string;
    dead?: boolean;
    parent?: number;
    poll?: number;
    kids?: number[];
    url?: string;
    score?: number;
    title?: string;
    parts?: number[];
    descendants?: number;
    by?:string;
  }