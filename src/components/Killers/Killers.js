import React, { useEffect, useState } from "react";

const Killers = () => {
  const [killers, setKillers] = useState([]);
  const [search, setSearch] = useState("");

  const showData = async () => {
    const URL = "https://dbd-api.herokuapp.com/killers";

    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setKillers(data);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? killers
    : killers.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Killers</h1>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar..."
          className="search"
        />

        <div className="grid">
          {results.map((killer) => (
            <div className="card killer">
              <span className="id">ID: {killer._id}</span>
              <img
                src={killer.icon.preview_portrait}
                alt={killer.name}
                className="img_s"
              />
              <img
                src={killer.icon.shop_background}
                alt={killer.name}
                className="img_l"
              />
              <div className="info">
                <div className="name">
                  <h2>
                    {killer.name} <span>{killer.name_tag}</span>
                  </h2>
                  <p>{killer.full_name}</p>
                </div>
                <div className="dates">
                  <h3>Information</h3>
                  <p>
                    <b>Gender: </b>
                    {killer.gender}
                  </p>
                  <p>
                    <b>Nationality: </b>
                    {killer.nationality}
                  </p>
                  <p>
                    <b>Weapon: </b>
                    {killer.weapon}
                  </p>
                  <p>
                    <b>Speed: </b>
                    {killer.speed}
                  </p>
                  <p>
                    <b>Difficulty: </b>
                    {killer.difficulty}
                  </p>
                  <p>
                    <b>Overview: </b>
                    {killer.overview}
                  </p>
                </div>
                <div className="perks">
                  <h3>Perks</h3>
                  <div className="perksIMG">
                    <img
                      src={
                        "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/" +
                        killer.perks[0] +
                        ".png"
                      }
                      title={killer.perks[0]}
                      alt="Perk imge"
                    />
                    <img
                      src={
                        "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/" +
                        killer.perks[1] +
                        ".png"
                      }
                      title={killer.perks[1]}
                      alt="Perk imge"
                    />
                    <img
                      src={
                        "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/" +
                        killer.perks[2] +
                        ".png"
                      }
                      title={killer.perks[2]}
                      alt="Perk imge"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Killers;
