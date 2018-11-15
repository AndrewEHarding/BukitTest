import React from "react";
import "./List.css";
import { Collapsible, CollapsibleItem } from "react-materialize";


const List = props => {
    return (
        <div>
            <Collapsible popout>
                {props.user.list.map(item => {
                    return (
                        <CollapsibleItem header={item.city} icon="filter_drama">
                            <h5>Here's some info on {item.city}!</h5>
                            <ul>
                                <li></li>
                            </ul>
                        </CollapsibleItem>
                    );
                })}
            </Collapsible>
        </div>
    );
};

export default List;