import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import { useState } from "react";
const EventDashboard = ({ formOpen, setFormOpen }) => {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvents(event) {
    setEvents([...events, event]);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvents={handleCreateEvents}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
