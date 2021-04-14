import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewPhoneForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredprice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const phoneData = {
      name: enteredName,
      image: enteredImage,
      price: enteredprice,
      description: enteredDescription,
    };
    //   checking if this works
    // console.log(phoneData);
    props.onAddPhone(phoneData);
  }

  return (
    <Card>
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Phone name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        {/* Image */}
        <div className={classes.control}>
          <label htmlFor="image">Phone Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        {/* price */}
        <div className={classes.control}>
          <label htmlFor="price">Phone price</label>
          <input type="number" required id="price" ref={priceInputRef} />
        </div>
        {/* Description */}
        <div className={classes.control}>
          <label htmlFor="description">Phone Description</label>
          <textarea
            name=""
            id="description"
            cols="5"
            rows="5"
            required
            ref={descriptionInputRef}
          ></textarea>
          <div className={classes.actions}>
            <button>Add Phone</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default NewPhoneForm;
