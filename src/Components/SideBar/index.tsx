import React from "react"
import { SideBarItem } from "./SideBarProps"
import { MenuElement } from "./MenuElement"
import { BrowserRouter } from "react-router-dom"

import "./style.css"

const SIDE_BAR_ITEMS: SideBarItem[] = [
    {
        title: "Home page",
        route: "/",
    },
    {
        title: "Profile",
        route: "/profile",
        children: [
            {
                title: "Payments",
                route: "/payments",
                children: [
                    {
                        title: "Visa",
                        route: "/visa",
                    },
                    {
                        title: "Mastercard",
                        route: "/mastercard",
                    },
                ],
            },
            {
                title: "Change password",
                route: "/changePassword",
            },
        ],
    },
]

export function renderMenuTree(items: SideBarItem[]) {
    return (
        <ul className={"treeline"}>
            {items.map(({ title, route, children }) => {
                return (
                    <MenuElement
                        key={title}
                        title={title}
                        route={route}
                        children={children}
                    />
                )
            })}
        </ul>
    )
}

function SideBar() {
    return (
        <BrowserRouter>
            <aside>{renderMenuTree(SIDE_BAR_ITEMS)}</aside>
        </BrowserRouter>
    )
}

export { SideBar }
