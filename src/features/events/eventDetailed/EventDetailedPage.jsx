import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChats from "./EventDetailedChats";
import EventDetailedSiderBar from "./EventDetailedSiderBar";
import { useSelector } from "react-redux";

const EventDetailedPage = ({ match }) => {
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event}/>
        <EventDetailedChats />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSiderBar  attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
  );
};
export default EventDetailedPage;
