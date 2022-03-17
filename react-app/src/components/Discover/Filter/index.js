import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMakesByYear, getModelsByMake } from "../carmakemodelapi";
import Make from "./Make";
import MilesPerYear from "./MilesPerYear";
import Model from "./Model";
import Term from "./Term";
import Year from "./Year";

const Filter = () => {
  const [filter, setFilter] = useSearchParams();

  const years = [2020, 2021, 2022, 2023];
  const [makes, setMakes] = useState(null);
  const [models, setModels] = useState(null);

  const handleSelectYear = (event) => {
    setFilter({
      year: event.target.name,
    });
  };

  const handleSelectMake = (event) => {
    setFilter({
      year: filter.get("year"),
      make: event.target.name,
    });
  };

  const handleSelectModel = (event) => {
    setFilter({
      year: filter.get("year"),
      make: filter.get("make"),
      model: event.target.name,
    });
  };

  useEffect(() => {
    getMakesByYear(filter.get("year")).then((makesByYear) => {
      let tempMakes = [];
      makesByYear.forEach((makeObject) => {
        tempMakes.push(makeObject.make);
      });
      return setMakes(tempMakes);
    });
  }, [filter.get("year")]);

  useEffect(() => {
    getModelsByMake(filter.get("make"), filter.get("year")).then(
      (modelsByMake) => {
        let tempModels = [];
        modelsByMake.forEach((modelObject) => {
          tempModels.push(modelObject.model);
        });
        return setModels(tempModels);
      }
    );
  }, [filter.get("make")]);

  return (
    <>
      <Year filter={filter} years={years} handleSelectYear={handleSelectYear} />
      <Make filter={filter} makes={makes} handleSelectMake={handleSelectMake} />
      <Model
        filter={filter}
        models={models}
        handleSelectModel={handleSelectModel}
      />
      {/* <MilesPerYear />
      <Term /> */}
    </>
  );
};

export default Filter;
