type ProfilPageProps = {
  name?: string;
  age?: number;
  job?: string;
  city: string;
};

const ProfilPage = (props: ProfilPageProps) => {
  const { name = "anonymouse", age, job, city } = props;
  return (
    <>
      <div className="card">
        <p>name : {name}</p>
        <p>age : {age}</p>
        {job ? <p>job : {job}</p> : <p>job : nganggur</p>}
        <p>city : {city}</p>
      </div>
    </>
  );
};
export default ProfilPage;
