import React from "react";
import Login from "../views/Hut/Login";
import LearnBake from "../views/LearnBake/Index";
import Error from "../views/Error";
import Index from "../views/Index";
import My from '../views/My'
import BakingCircle from "../views/BakingCircle/Index";
import QuestionsAnswers from "../views/QuestionsAnswers/index";
import Hut from "../views/Hut/Index";
import university from '../views/LearnBake/VideoSchool/Index';
import classify from '../views/LearnBake/classify';
import tips from '../views/LearnBake/Skills/index';
import Novice from '../views/LearnBake/NoviceTutorial/index';
export default [
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/Error",
        component: Error
    },
    {
        path: "/skills",
        component: tips
    },
    {
        path: "/Novice",
        component: Novice
    },
    {
        path: "/university",
        component: university
    },
    {
        path: "/classify",
        component:classify
    },
    {
        path: "/",
        component: Index,
        childrends: [
            {
                path: "/",
                component: LearnBake,
                exact: true
            }, {
                path: "/BakingCircle",
                component: BakingCircle,
                // isAuthorization:true
            }, {
                path: "/Hut",
                component: Hut,
                isAuthorization:true
            }, {
                path: "/QuestionsAnswers",
                component: QuestionsAnswers,
                // isAuthorization: true,
                childrends: [
                    {
                        path: "/My",
                        exact: true,
                        component: My
                    }
                ]
            }
        ]
    }
]