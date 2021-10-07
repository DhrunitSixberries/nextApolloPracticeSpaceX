import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      mission_id
      id
      details
    }
  }
`;

export const GET_SINGLE_LAUNCH = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
      mission_id
      id
      details
    }
  }
`;
