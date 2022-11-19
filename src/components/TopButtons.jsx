import React from 'react'

function TopButtons({setQuery}) {
  const cities = [
    {
        id:1,
        title:'London'
    },
    {
        id:2,
        title:'Chicago'
    },
    {
        id:3,
        title:'Delhi'
    },
    {
        id:4,
        title:'Sydney'
    }, 

    {
      id:5,
      title:'Moscow'
    }
  ]

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;