import { useHistory } from 'react-router-dom';
import NewPhoneForm from '../components/phones/NewPhoneForm';

function NewPhonePage() {
  const history = useHistory();
  function addPhoneHandler(phoneData) {
    fetch('https://nodejs-phonestore-back.herokuapp.com/api/phones', {
      method: 'POST',
      body: JSON.stringify(phoneData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>
        Add a <strong>new</strong> Phone
      </h1>
      <NewPhoneForm onAddPhone={addPhoneHandler} />
    </section>
  );
}

export default NewPhonePage;
