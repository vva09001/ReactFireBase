import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableUser extends Component {
    render() {
        const list = this.props.data.map((value,index) => {
            console.log(value.name)
            return (
                <Table.Row key={index}>
                    <Table.Cell>a</Table.Cell>
                    <Table.Cell>{value.age}</Table.Cell>
                    <Table.Cell>{value.address}</Table.Cell>
                    <Table.Cell>{value.email}</Table.Cell>
                </Table.Row>
            )
        })
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {list}
                </Table.Body>
            </Table>
        )
    }
}

export default TableUser;