import React, { useState, useEffect } from "react"
// import Table from "react-bootstrap/Table"
import eventService from "../services/data"
import { Card, Col, Row  } from 'react-bootstrap'

const Events = () => {
    const [events, setEvents] = useState([])
    const getData = () => {
        eventService.getEvents().then(res => {
            setEvents([...res.data])
        })
    }
    useEffect(() => {
        getData()
    }, [])

    console.log(events);

    return (
        <div>
            <Row xs={1} sm={2} md={3} className="g-4">
                {events.map((event) => (
                    <Col key={event._id}>
                        <Card>
                            <Card.Img variant="top" src={event.photo} />
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <Card.Text>Start Date: {event.start_date}</Card.Text>
                                <Card.Text>End Date: {event.end_date}</Card.Text>
                                <Card.Text>Address: {event.address}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>   
        </div>
    )
}

export default Events