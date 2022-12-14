import { Container, Header, Segment,Image, Button, Icon } from "semantic-ui-react";

const HomePage = ({history}) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image size="massive" src='/assets/logo.png' style={{marginBottom: 12}}/>
          Plevents
        </Header>
        <Button onClick={() => history.push('/events')} size="huge" inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>

      </Container>
    </Segment>
  );
};

export default HomePage;
