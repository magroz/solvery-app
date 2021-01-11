import React from "react"
import { Route, Switch } from "react-router-dom"
import { FirstLesson } from "../FirstLesson/FirstLesson"
import { Timer } from "../Timer/Timer"

export interface AppRouteProps {
    exact?: boolean
    path: string
    component?: any
}

const routes: AppRouteProps[] = [
    {
        path: "/first-lesson",
        component: () => <FirstLesson />,
    },
    {
        path: "/timer",
        component: () => <Timer />,
    },
    {
        exact: true,
        path: "/",
        component: () => <h1>main</h1>,
    },
    {
        path: "*",
        component: () => <h1>404</h1>,
    },
]

export default function AppRouter() {
    return (
        <Switch>
            {routes.map((route, id) => (
                <Route
                    key={id}
                    exact={route.exact}
                    path={route.path}
                    children={<route.component />}
                />
            ))}
        </Switch>
    )
}
