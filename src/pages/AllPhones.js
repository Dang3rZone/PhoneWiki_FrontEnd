import { useState, useEffect } from 'react';
import PhoneList from '../components/phones/PhoneList';

function AllPhonesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPhones, setLoadedPhones] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://nodejs-phonestore-back.herokuapp.com/api/phones')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const phones = [];
        for (const key in data) {
          const phone = {
            id: key,
            ...data[key],
          };
          phones.push(phone);
        }
        setIsLoading(false);
        setLoadedPhones(phones);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <h1>
        Best Place to search <strong>Phones</strong>!
      </h1>

      <PhoneList phones={loadedPhones} />
    </div>
  );
}

export default AllPhonesPage;
