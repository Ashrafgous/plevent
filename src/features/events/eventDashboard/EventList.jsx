import EventListItem from "./EventListItem";

const EventList = (props) => {
  return (
    <div>
      {props.events.map((event) => (
        <EventListItem event={event} key={event.id}/>
      ))}
    </div>
  );
};
export default EventList;
