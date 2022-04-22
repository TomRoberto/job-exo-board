import Job from "./Job";

import data from "../data.json";

const Jobs = () => {
  return (
    <main>
      {data.map((elem) => {
        return (
          <Job
            key={elem.id}
            title={elem.title}
            contractType={elem.contractType}
            country={elem.country}
            city={elem.city}
            className={elem.className}
          />
        );
      })}

      {/* <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"red"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"yellow"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"green"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"blue"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"pink"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"red"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"yellow"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"green"}
      />
      <Job
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"blue"}
      /> */}
    </main>
  );
};

export default Jobs;
