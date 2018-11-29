import React from "react";
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Icon, Modal } from "react-materialize";
import NewCity from "../NewCity";
import NewNote from "../NewNote";
import News from "./News"

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
                                <h5>Weather:</h5>
                                <h5>Current News:</h5>
                                <div><News city={item.city} /></div>
                                <h5>Your Notes:</h5>
                                {item.notes.length === 0 ? `You do not currently have any notes.` : item.notes.map(note => {
                                    return (<p className="note-item" key={note}><Icon small>edit</Icon>{note}</p>)
                                })}
                                <NewNote />
                                <hr></hr>
                                {/* <Button waves='light' onClick={() => console.log('remove city')}>Remove City<Icon right>delete</Icon></Button> */}
                                <Modal
                                    trigger={<Button floating large className='blue' waves='light' icon='delete' />}>
                                    <p>Are you sure you wat to delete {item.city} from your list?</p>
                                    <Button waves='light' onClick={() => console.log('remove city')}>Delete {item.city}</Button>
                                </Modal>
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