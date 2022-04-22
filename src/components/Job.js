const Job = ({ title, contractType, country, city, className }) => {
  const bool = true;

  //   const { title, contractType, country, city, className } = props;

  return (
    <div className={`job ${className}`}>
      {/* {props.title ? (
        <h2>{props.title}</h2>
      ) : (
        <h2>cette offre n'a pas de titre</h2>
      )} */}

      {title && <h2>{title}</h2>}
      <p>
        {contractType} - {country} - {city}
      </p>
      {/* {bool === true ? <p>Bool est truthy</p> : <p>Bool est falsy</p>} */}
    </div>
  );
};

export default Job;
