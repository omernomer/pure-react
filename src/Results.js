import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((item) => (
          <Pet
            name={item.name}
            animal={item.animal}
            breed={item.breed}
            images={item.images}
            key={item.id}
            location={`${item.city}, ${item.state}`}
            id={item.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
