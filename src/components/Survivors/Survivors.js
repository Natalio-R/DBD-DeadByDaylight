import React, { useEffect, useState } from "react";

const Survivors = () => {
  const [survivors, setSurvivors] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://dbd-api.herokuapp.com/survivors";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setSurvivors(data);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? survivors
    : survivors.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Survivors</h1>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar..."
          className="search"
        />

        <div className="grid">
          {results.map((survivor) => (
            <div className="card survivor">
              <span className="id">ID: {survivor._id}</span>
              <img
                src={survivor.icon.preview_portrait}
                alt={survivor.name}
                className="img_s"
              />
              <img
                src={survivor.icon.shop_background}
                alt={survivor.name}
                className="img_l"
              />
              <div className="info">
                <div className="name">
                  <h2>
                    {survivor.name} <span>{survivor.name_tag}</span>
                  </h2>
                  <p>{survivor.full_name}</p>
                </div>
                <div className="dates">
                  <h3>Information</h3>
                  <p>
                    <b>Gender: </b>
                    {survivor.gender}
                  </p>
                  <p>
                    <b>Nationality: </b>
                    {survivor.nationality}
                  </p>
                  <p>
                    <b>Role: </b>
                    {survivor.role}
                  </p>
                  <p>
                    <b>Difficulty: </b>
                    {survivor.difficulty}
                  </p>
                  <p>
                    <b>Overview: </b>
                    {survivor.overview}
                  </p>
                </div>
                <div className="perks">
                  <h3>Perks</h3>
                  <div className="perksIMG">
                    <img
                      src={
                        "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/" +
                        survivor.perks[0] +
                        ".png"
                      }
                      title={survivor.perks[0]}
                      alt="Perk imge"
                    />
                    <img
                      src={
                        "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/" +
                        survivor.perks[1] +
                        ".png"
                      }
                      title={survivor.perks[1]}
                      alt="Perk imge"
                    />
                    <img
                      src={
                        "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/" +
                        survivor.perks[2] +
                        ".png"
                      }
                      title={survivor.perks[2]}
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

export default Survivors;
