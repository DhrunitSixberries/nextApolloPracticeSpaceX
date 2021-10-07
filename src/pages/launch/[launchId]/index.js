import Image from "next/image";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { GET_SINGLE_LAUNCH } from "../../../graphQl/Query";

export default function index() {
  const router = useRouter();
  const [launchData, setLaunchData] = useState(null);
  const launchId = router.query.launchId;
  const { loading, error, data } = useQuery(GET_SINGLE_LAUNCH, {
    variables: {
      id: launchId,
    },
  });
  useEffect(() => {
    if (data) setLaunchData(data.launch);
  }, [data]);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <strong>Mission Name: {launchData?.mission_name}</strong>
          <br />
          <strong>Launch date and time:</strong>
          {new Date(launchData?.launch_date_local).toLocaleString()}
          <br />
          <p>{launchData?.details}</p>
          {launchData?.links.flickr_images?.length > 0 &&
            launchData.links.flickr_images.map((val) => (
              <div key={Math.random()} style={{ width: "100%" }}>
                <img src={val} style={{ height: "250px" }} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

// export async function getStaticProps() {
//     await useQuery()
//   console.log(called);
// }
