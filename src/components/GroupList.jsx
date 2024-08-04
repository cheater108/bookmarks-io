import React from "react";
import GroupMenu from "./GroupMenu";

export default function GroupList({ groups }) {
    return (
        <div
            style={{
                padding: "1em",
                width: "20%",
            }}
        >
            {groups?.map((ele) => {
                console.log(ele._id);
                return <GroupMenu key={ele._id} name={ele.name} />;
            })}
        </div>
    );
}
