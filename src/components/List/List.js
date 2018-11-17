import React from "react";
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Modal, Icon, Row, Input } from "react-materialize";


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
                            <Button waves='light' onClick={() => console.log('add note')}>Add New Note<Icon right>send</Icon></Button>
                            <Button waves='light' onClick={() => console.log('remove city')}>Remove City<Icon right>delete</Icon></Button>
                        </CollapsibleItem>
                    );
                })}
            </Collapsible>
            <Modal
                header='Add a New City to Your List'
                trigger={<Button floating large className='red' waves='light' icon='add' />}>
                <Row>
                    <Input s={6} label="City Name" />
                    <Input s={6} label="State" />
                </Row>
                Have you visited this city before?
                <Row>
                    <Input name='on' type='switch' value='1' />
                    <Input name='group1' type='checkbox' value='red' label='Already Visited' />
                </Row>
                <Button waves='light' onClick={() => console.log('add city')}>Add City to List<Icon right>send</Icon></Button>
            </Modal>
        </div>
    );
};

export default List;