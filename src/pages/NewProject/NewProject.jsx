import React, { useEffect, useState } from 'react';
import './new-project.css';
import { garments } from '../../garments';

const NewProject = () => {
  const [garments, setGarments] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    link: '',
    author: '',
    image: '',
    description: '',
    category: '',
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

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newGarment = {
      name: formValues.name,
      link: formValues.link,
      author: formValues.author,
      image: formValues.image,
      description: formValues.description,
      category: formValues.category,
      measurements: formValues.measurements,
      fabric: formValues.fabric,
      notes: formValues.notes,
      state: formValues.state,
    };

    const newGarments = [...garments, newGarment];
    setGarments(newGarments);
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
    <form onSubmit={handleAddFormSubmit}>
      <label htmlFor="">
        Name of the pattern :
        <input
          name="name"
          value={formValues.name}
          type="text"
          onChange={handleChange}
        />
      </label>
      Link :
      <label htmlFor="">
        <input
          type="link"
          name="link"
          value={formValues.link}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Author of the pattern :
        <input
          name="author"
          value={formValues.author}
          type="text"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        {' '}
        Image :
        <input
          type="field"
          name="image"
          value={formValues.image}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Desctiption / Notes:
        <textarea
          name="description"
          value={formValues.description}
          type="textarea"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Category :
        <select
          type="text"
          name="category"
          value={formValues.category}
          onChange={handleChange}
        >
          <option value="all">ALL</option>
          <option value="tops">TOPS</option>
          <option value="bottoms">BOTTOMS</option>
          <option value="dresses">DRESSES</option>
          <option value="accessories">ACCESSORIES</option>
        </select>
      </label>
      <label htmlFor="">
        Measurements :
        <input
          name="measurements"
          value={formValues.measurements}
          type="textarea"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Fabric :
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
        State of creation :
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
        <button type="submit">save garment</button>
      </label>
    </form>
  );
};
export default NewProject;
