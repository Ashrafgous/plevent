import cuid from "cuid";
import { useState } from "react";
import { Segment, Form, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { Formik } from "formik";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the Event" : "Create new event"} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handlChange, handleSubmit }) => {
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type="text"
                placeholder="Event Title"
                name="title"
                value={values.title}
                onChange={(e) => handlChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Category"
                name="category"
                value={values.category}
                onChange={(e) => handlChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={(e) => handlChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={(e) => handlChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Venue"
                name="venue"
                value={values.venue}
                onChange={(e) => handlChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="date"
                placeholder="Date"
                name="date"
                value={values.date}
                onChange={(e) => handlChange(e)}
              />
            </Form.Field>
            <Button type="submit" floated="right" positive content="Submit" />
            <Button
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>;
        }}
      </Formik>
    </Segment>
  );
};

export default EventForm;
