import React, { useState } from 'react';
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

  const handleChange = (event) => {
    event.preventDefault();
  };

  console.log(formValues);
  return (
    <form action="registration" onSubmit={handleChange}>
      <label htmlFor="">
        Name of the pattern
        <input
          value={formValues.name}
          type="text"
          onChange={(e) => {
            setFormValues({ ...formValues, name: e.target.value });
          }}
        />
      </label>
      <label htmlFor="">
        Author of the pattern{' '}
        <input
          value={formValues.author}
          type="text"
          onChange={(e) => {
            setFormValues({ ...formValues, author: e.target.value });
          }}
        />
      </label>
      <label htmlFor="">
        Desctiption of the garment/pattern{' '}
        <textarea
          value={formValues.description}
          type="textarea"
          onChange={(e) => {
            setFormValues({ ...formValues, description: e.target.value });
          }}
        />
      </label>
      <label htmlFor="">
        Measurements
        <input
          value={formValues.measurements}
          type="text"
          onChange={(e) => {
            setFormValues({ ...formValues, measurements: e.target.value });
          }}
        />
      </label>
      <label htmlFor="">
        Fabric
        <select
          type="text"
          name="fabric"
          value={formValues.fabric}
          onChange={(e) => {
            setFormValues({ ...formValues, fabric: e.target.value });
          }}
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
          onChange={(e) => {
            setFormValues({ ...formValues, notes: e.target.value });
          }}
        />
      </label>
      <label htmlFor="">
        State of creation
        <select
          name="state"
          value={formValues.state}
          id=""
          onChange={(e) => {
            setFormValues({ ...formValues, state: e.target.value });
          }}
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
