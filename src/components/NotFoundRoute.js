import { useRouteError } from "react-router-dom";

NotFoundRoute = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>Oh, no. This page is not avialable</h1>
      <h2>{err.status + ' : ' + err.statusText}</h2>
    </div>
  );
};

export default NotFoundRoute;
