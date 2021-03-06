import React from "react";
import "./NewCity.css";
import { Modal, Button, Input, Row, Icon } from "react-materialize";

class NewCity extends React.Component {
    state = {
        cityName: "",
        stateName: "",
        visited: false
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Modal
                header='Add a New City to Your List'
                trigger={<Button floating large className='blue' waves='light' icon='add' />}>
                <Row>
                    <Input
                        name="cityName"
                        value={this.state.cityName}
                        onChange={this.handleInputChange}
                        maxLength={40}
                        s={6}
                        label="City Name"
                    />
                    <Input
                        name="stateName"
                        value={this.state.stateName}
                        onChange={this.handleInputChange}
                        maxLength={2}
                        s={6}
                        label="State Name"
                    />
                </Row>
                {/* Have you visited this city before?
                <Row>
                    <Input
                        name='visited'
                        type='checkbox'
                        checked={this.state.visited}
                        onChange={this.handleInputChange}
                        label='Already Visited' />
                </Row> */}
                <Button waves='light' onClick={() => console.log(`${this.state.cityName}, ${this.state.stateName}, Visited: ${this.state.visited}`)}>Add City to List<Icon right>send</Icon></Button>
            </Modal>
        );
    }
}

export default NewCity;