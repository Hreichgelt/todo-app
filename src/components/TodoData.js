// This file should somehow link the todo Database/todo-server repo/hit the api-endpoints from that repo
// Going to hardcode first for front end ref
import { format } from 'date-fns'
format(new Date(), 'mm/dd/yyyy')


export const TodoData = [
        {
        "title": "wake up",
        "description": "",
        "dueAt": "2023-02-19T00:12:09+00:00",
        "createdAt": new Date(),
    },
    
    {
        "title": "Ball till you Fall",
        "description": "1234 get your ass on the dance floor",
        "dueAt": null,
        "createdAt": new Date(),
    },
    
    {
        "title": "Eat Breakfast",
        "description": "Be Healthy",
        "dueAt": null,
        "createdAt": new Date(),
    },
    
    {
        "title": "Workout",
        "description": "Compounds First",
        "dueAt": null,
        "createdAt": new Date(),
    },
    
    {
        "title": "Eat Lunch",
        "description": "Fruits and Veggies",
        "dueAt": null,
        "createdAt": new Date(),
    }
    
]