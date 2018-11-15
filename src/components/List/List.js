import React from "react";
import "./List.css";
import { Collapsible, CollapsibleItem } from "react-materialize";


const List = props => {
    return (
            <Collapsible popout>
                {props.user.list.map(item => {
                    return (
                        <CollapsibleItem header={item.city} icon="filter_drama">
                            <h5>Here's some info on {item.city}!</h5>
                            {item.visited ? `You have visited ${item.city}!` : `You have not visited ${item.city} yet!`}
                            <ul>
                                <li>Weather:</li>
                                <li>Current News:</li>
                            </ul>
                            {item.notes.map(note => {
                                return (<p>{note}</p>)
                            })}
                            <textarea rows="10" col="5" placeholder="Write a new note..."></textarea>
                        </CollapsibleItem>
                    );
                })}
            </Collapsible>
    );
};

export default List;