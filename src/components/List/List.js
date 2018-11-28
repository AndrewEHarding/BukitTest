import React from "react";
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Icon } from "react-materialize";
import NewCity from "../NewCity";
import NewNote from "../NewNote";


const List = props => {
    return (
        <div>
            {props.user.list.length === 0 ? `You do not currently have any cities on your list.` :
                <Collapsible popout>
                    {props.user.list.map(item => {
                        return (
                            <CollapsibleItem key={item.city} header={item.city} icon={item.visited ? 'check_box' : 'check_box_outline_blank'}>
                                <h5>Here's some info on {item.city}!</h5>
                                {item.visited ? `You have visited ${item.city}!` : `You have not visited ${item.city} yet!`}
                                <ul>
                                    <li>Weather:</li>
                                    <li>Current News:</li>
                                </ul>
                                <p>Your Notes:</p>
                                {item.notes.length === 0 ? `You do not currently have any notes.` : item.notes.map(note => {
                                    return (<p className="note-item" key={note}>{note}</p>)
                                })}
                                <NewNote />
                                <hr></hr>
                                <Button waves='light' onClick={() => console.log('remove city')}>Remove City<Icon right>delete</Icon></Button>
                            </CollapsibleItem>
                        );
                    })}
                </Collapsible>
            }

            <NewCity />
        </div>
    );
};

export default List;