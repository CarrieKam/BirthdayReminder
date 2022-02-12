import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image, date } = person;
        return <article key={id} className="person">
          <img src={image} alt={name}></img>
          <div>
            <h4>{name}</h4>
            <p>📅 {date}</p>
            <p>{age} years old</p>
          </div>

        </article>
      })

      }

    </>
  );
};

export default List;
