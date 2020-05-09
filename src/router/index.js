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
import Lesson from '../views/LearnBake/Lesson/Lesson';
import allLesson from '../views/LearnBake/Lesson/AllLesson'
import LearnBakeClassification from '../views/LearnBake/LearnBakeClassification'
import recipeDetails  from '../views/LearnBake/recipe' 
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
        path:"/search/recipe/:contentId?/:classifyId",
        component:LearnBakeClassification 
    },
    {
        path: "/classify",
        component:classify
    },
    {
        path: "/lesson",
        component:Lesson,
    },
    {
        path: "/alllesson",
        component:allLesson
    },
    {
        path:"/recipe/:id",
        component:recipeDetails
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