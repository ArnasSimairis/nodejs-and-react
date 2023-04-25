import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import eventService from '../services/data';

const NewEvent = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [start_date, setStart_date] = useState('')
    const [end_date, setEnd_date] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const NewEvent = {
            title: title,
            description: description,
            photo: photo,
            start_date: start_date,
            end_date: end_date,
            address: address
        }
        eventService.postEvent(NewEvent)

        setTitle('')
        setDescription('')
        setPhoto('')
        setStart_date('')
        setEnd_date('')
        setAddress('')
    }
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                        type="text"
                        name="photo"
                        value={photo}
                        onChange={(e)=> setPhoto(e.target.value)}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                        type="text"
                        name="start_date"
                        value={start_date}
                        onChange={(e)=> setStart_date(e.target.value)}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                        type="text"
                        name="end_date"
                        value={end_date}
                        onChange={(e)=> setEnd_date(e.target.value)}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    
    
}


export default NewEvent;