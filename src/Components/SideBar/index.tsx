import React from 'react'
interface SideBarItem {
    title: string
    route: string
    children?: SideBarItem[]
}

const SIDE_BAR_ITEMS: SideBarItem[] = [
    {
        title: 'Home page',
        route: '/',
    },
    {
        title: 'Profile',
        route: '/profile',
        children: [
            {
                title: 'Payments',
                route: '/payments',
            },
            {
                title: 'Change password',
                route: '/changePassword',
            },
        ],
    },
]

function SideBar() {
    return (
        <aside>
            {SIDE_BAR_ITEMS.map((item) => {
                return (
                    <div>
                        <div>{item.title}</div>
                        {item?.children && (
                            <div>
                                {item.children.map((subItem) => {
                                    return (
                                        <div>
                                            <div>{subItem.title}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )
            })}
        </aside>
    )
}

export { SideBar }
