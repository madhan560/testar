import React, { useState } from "react";




function ListRender() {
    const [todolist, settodolist] = useState(
        [
            {
                id: 1,
                name: "wakeup"

            },
            {
                id: 2,
                name: "Eat"

            },
            {
                id: 3,
                name: "sleep"

            },
            {
                id: 4,
                name: "play"

            },

            {
                id: 5,
                name: "Run"

            },



        ]

    )

return (
    <>
        <h1>hi</h1>
        {todolist.map((da) => (
            <div>
            <h1>{da.id}.{da.name}</h1>
            
            
            </div>

        )

        )
                          
        
        }

    </>
)
}
export default ListRender


