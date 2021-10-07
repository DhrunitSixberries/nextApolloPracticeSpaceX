import { Button, Col, Row, Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../graphQl/Query";
import { Launches } from "../components/Launches";

export default function Home() {
  const { error, loading, data } = useQuery(GET_LAUNCHES);
  return (
    <>
      <h1 className="display-3 text-center">Space-X Launches Data</h1>
      <div className="text-center">
        {data &&
          data?.launchesPast?.map((val) => (
            <Launches key={Math.random()} launchData={val} />
          ))}
        {loading && "Loading..."}
      </div>
    </>
  );
}
