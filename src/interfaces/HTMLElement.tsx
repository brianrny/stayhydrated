import { Children, PropsWithChildren } from "react"

export type Children = {
    children: JSX.Element
}

export type ChildrenWithProps<T> = {
    children?: JSX.Element
    props?: any | any[] | T | T[]
}

export type ChildrenAndProps = PropsWithChildren;
