import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

export class BootstrapStyling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            devType: '',
            checkbox: 'false'
        }

    }

    onChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    onChangeSelect(event) {
        const select = event.target;
        const selectedText = select.options[select.selectedIndex].text
        this.setState({ [event.target.id]: selectedText })
    }

    onChangeCheck(event) {
        this.setState({ [event.target.id]: event.target.checked.toString() })
    }

    render() {
        return (
            <div>
                <Container className='mb-3'>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        id='email'
                                        type='email'
                                        placeholder='Enter email...'
                                        onChange={(event) => this.onChange(event)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        id='password'
                                        onChange={(event) => this.onChange(event)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Developer Type</Form.Label>
                                    <Form.Select id='devType' onChange={(event) => this.onChangeSelect(event)}>
                                        <option value={1}>Choose one...</option>
                                        <option value={2}>Frontend</option>
                                        <option value={3}>Backend</option>
                                        <option value={4}>Fullstack</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Check type='checkbox' label='Check me out' id='checkbox' onChange={(event) => this.onChangeCheck(event)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Button variant='primary' type='submit'>Submit</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container>{this.state.email}</Container>
                <Container>{this.state.password}</Container>
                <Container>{this.state.devType}</Container>
                <Container>{this.state.checkbox}</Container>
            </div>
        )
    }
}

export default BootstrapStyling