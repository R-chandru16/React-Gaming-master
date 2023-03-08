import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconName } from "react-icons/gi";

export const SidebarData = [
    {
        title: "Chess",
        path: "/Chess",
        icon: <FaIcons.FaChessQueen />,
        className: "navText",
    },
    {
        title: "VolleyBall",
        path: "/VolleyBall",
        icon: <FaIcons.FaVolleyballBall />,
        className: "navText",
    },
    {
        title: "FootBall",
        path: "/Football",
        icon: <IoIcons.IoIosFootball />,
        className: "navText",
    },

    {
        title: "TableTennis",
        path: "/TableTennis",
        icon: <FaIcons.FaTableTennis />,
        className: "navText",
    },
    {
        title: "Rugby",
        path: "/Rugby",
        icon: <FaIcons.FaFootballBall />,
        className: "navText",
    },
];
