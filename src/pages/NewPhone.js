import { useHistory } from 'react-router-dom';
import NewPhoneForm from '../components/phones/NewPhoneForm';

function NewPhonePage() {
  const history = useHistory();
  function addPhoneHandler(phoneData) {
    fetch('http://localhost:3000/api/phones/', {
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
      <h1>Add new Phone</h1>
      <NewPhoneForm onAddPhone={addPhoneHandler} />
    </section>
  );
}

export default NewPhonePage;
