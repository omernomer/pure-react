import { useEffect, useState } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog"];
const BREEDS = [];

const SearchParams = () => {
  //const locationTuple=useState("");
  //const location = locationTuple[0];
  //const setLocation = locationTuple[1];
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, [animal]);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBredd(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            {BREEDS.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((item) => (
        <Pet
          name={item.name}
          animal={item.animal}
          breed={item.breed}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
