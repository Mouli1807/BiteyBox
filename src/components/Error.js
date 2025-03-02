import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);  
  return (
    <div className="errormsg">
        <h1>{err.status} {err.statusText}</h1>
        <h1>something went wrong</h1>
        <h2>{err.data}</h2>
    </div>
  );
}

export default Error;