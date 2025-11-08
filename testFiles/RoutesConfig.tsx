import { Outlet, RouteObject } from "react-router";

import HomePage from "../app/page";
import About from "../app/about/page";
import Posts from "../app/posts/page";
import Post from "../app/posts/[id]/page";
import PageNotFound from "../app/pageNotFound/page";

import Link from "next/link";
import React from "react";

export const routesConfig: RouteObject[] = [{
    element: (
        <>
            <div className="navbar" data-testid='NavBar'>
                <Link href={"/"} data-testid={"homeTab"}>Home</Link>
                <Link href={"/about"} data-testid={"aboutTab"}>About</Link>
                <Link href={"/posts"} data-testid={"postsTab"}>Posts</Link>
            </div>
            <Outlet/>
        </>
    ),
    children: [
        {
            path: '/',
            element: <div data-testid="HomePage"><HomePage/></div>,
        },
        {
            path: '/about',
            element: <div data-testid="AboutPage"><About/></div>,
        },
        {
            path: '/posts',
            element: <div data-testid="PostsPage"><Posts/></div>,
        },
        {
            path: '/post/:id',
            element: <div data-testid="PostPage"><Post/></div>,
        },
        {
            path: '*',
            element: <div data-testid="PageNotFound"><PageNotFound/></div>,
        }
    ]
}]