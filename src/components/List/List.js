import React from "react";
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Icon } from "react-materialize";


const List = props => {
    return (
        <div>
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
                            {item.notes.map(note => {
                                return (<p key={note}>{note}</p>)
                            })}
                            <textarea rows="10" col="5" placeholder="Write a new note..."></textarea>
                            <Button waves='light'>Add New Note<Icon right>send</Icon></Button>
                        </CollapsibleItem>
                    );
                })}
            </Collapsible>
            <Button floating large className='red' waves='light' icon='add' />
        </div>
    );
};

export default List;