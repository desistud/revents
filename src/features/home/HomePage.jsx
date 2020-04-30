import React, { Fragment } from "react";
import { Segment, Header, Image, Button, Icon } from "semantic-ui-react";

const HomePage = ({ history }) => {
  return (
    <Fragment>
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button onClick={() => history.push("/events")} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Segment>
    </Fragment>
  );
};

export default HomePage;
