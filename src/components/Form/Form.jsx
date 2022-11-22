import React, { useEffect, useState } from 'react';
import './form.css';
import '../../garments.js';

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    author: '',
    description: '',
    measurements: '',
    fabric: '',
    notes: '',
    state: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const formData = window.localStorage.getItem('garment-details');
    console.log(formData);
    setFormValues(JSON.parse(formData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('garment-details', JSON.stringify(formValues));
  });

  console.log(formValues);
  return (
    <form>
      <label htmlFor="">
        Name of the pattern
        <input
          name="name"
          value={formValues.name}
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Author of the pattern{' '}
        <input
          name="author"
          value={formValues.author}
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Desctiption of the garment/pattern{' '}
        <textarea
          name="description"
          value={formValues.description}
          type="textarea"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Measurements
        <input
          name="measurements"
          value={formValues.measurements}
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Fabric
        <select
          type="text"
          name="fabric"
          value={formValues.fabric}
          onChange={handleChange}
        >
          <option value="canvas">Canvas</option>
          <option value="cotton">Cotton</option>
          <option value="denim">Denim</option>
          <option value="jersey">Jersey</option>
          <option value="leather">Leather</option>
          <option value="linen">Linen</option>
          <option value="wool">Wool</option>
          <option value="modal">Modal</option>
          <option value="muslin">Muslin</option>
          <option value="oilskin">Oilskin</option>
          <option value="silk">Silk</option>
          <option value="tencel">Tencel</option>
          <option value="tweed">Tweed</option>
          <option value="twill">Twill</option>
          <option value="velvet">Velvet</option>
          <option value="viscose">Viscose</option>
        </select>
      </label>
      <label htmlFor="">
        Notes
        <textarea
          type="text"
          name="notes"
          value={formValues.notes}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        State of creation
        <select
          name="state"
          value={formValues.state}
          id=""
          onChange={handleChange}
        >
          <option value="dreaming_of">dreaming-of</option>
          <option value="pattern_printed">pattern printed</option>
          <option value="fabric_cutted">fabric cutted</option>
          <option value="sewing_toile_on_progress">
            sewing toile on progress
          </option>
          <option value="toile_done">toile done</option>
          <option value="sewing_masterpiece_in_progress">
            sewing masterpiece in progress
          </option>
          <option value="garment_sewed_already">garment sewed already</option>
        </select>
      </label>
    </form>
  );
};
export default Form;
