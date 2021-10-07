import React from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function Launches({ launchData }) {
  return (
    <Card style={{ maxWidth: "400px", margin: "1rem auto" }}>
      <CardBody>
        <CardTitle tag="h5">{launchData.mission_name}</CardTitle>
        <CardText>{launchData.launch_site.site_name_long}</CardText>
        <Button>
          <Link href={`/launch/${launchData.id}`}>View more</Link>
        </Button>
      </CardBody>
    </Card>
  );
}
