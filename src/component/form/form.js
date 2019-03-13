import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
class FromRS extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group widths={2}>
                        <Form.Input label='Name:' name="usname" onChange={this.props.changeHandle}></Form.Input>
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Age:' type="number" name="age" onChange={this.props.changeHandle}></Form.Input>
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Address:' name="address" onChange={this.props.changeHandle}></Form.Input>
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Email:' name="email" onChange={this.props.changeHandle}></Form.Input>
                    </Form.Group>
                    <Button onClick={this.props.clicked}>Send data</Button>
                    <Button onClick={this.props.getData}>Get data</Button>
                </Form>
            </div>
        )
    }
}

export default FromRS;