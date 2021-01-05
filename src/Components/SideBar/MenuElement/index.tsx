import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBarItem } from "../SideBarProps"
import { renderMenuTree } from "../index"

export function MenuElement({ title, route, children }: SideBarItem) {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <li key={title}>
            <Link to={route} onClick={() => setOpen(!isOpen)}>
                {children && <div className="drop">{isOpen ? "-" : "+"}</div>}
                {title}
            </Link>
            {isOpen &&
                children &&
                children.length > 0 &&
                renderMenuTree(children)}
        </li>
    )
}
