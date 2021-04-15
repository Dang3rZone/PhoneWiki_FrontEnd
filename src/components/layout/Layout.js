import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Container>
        <Row>
          <main className={classes.main}>{props.children}</main>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
