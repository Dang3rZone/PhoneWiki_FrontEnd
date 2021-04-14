import PhoneItem from './PhoneItem';
import classes from './MeetupList.module.css';

function PhoneList(props) {
  return (
    <div className={classes.list}>
      <div className={classes.column}>
        {props.phones.map((phone) => (
          <PhoneItem
            key={phone.id}
            id={phone.id}
            image={phone.image}
            name={phone.name}
            price={phone.price}
            description={phone.description}
          />
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
