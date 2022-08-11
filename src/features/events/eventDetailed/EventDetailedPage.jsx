import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChats from "./EventDetailedChats";
import EventDetailedSiderBar from "./EventDetailedSiderBar";

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChats />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSiderBar />
      </Grid.Column>
    </Grid>
  );
};
export default EventDetailedPage;