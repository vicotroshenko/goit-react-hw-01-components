import { Container } from "../section 1/Container/Container";
import { Profile } from "../section 1/Profile/Profile";
import { Statistics } from '../section 2/Statistics/Statistics'
import user from 'user.json';
import data from 'data.json';


export const App = () => {
  return (
  <Container>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    <Statistics 
        stats={data}
        title = "Upload stats"
    />
  </Container>
  );
};
