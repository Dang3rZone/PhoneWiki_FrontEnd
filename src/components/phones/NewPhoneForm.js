import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewPhoneForm.module.css';

function NewPhoneForm(props) {
  const nameInputRef = useRef();
  const manufacturerInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredManufacturer = manufacturerInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredprice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const phoneData = {
      name: enteredName,
      manufacturer: enteredManufacturer,
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
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Manufacturer</label>
          <input
            type="text"
            required
            id="manufacturer"
            ref={manufacturerInputRef}
          />
        </div>
        {/* Image */}
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        {/* price */}
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" required id="price" ref={priceInputRef} />
        </div>
        {/* Description */}
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
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
