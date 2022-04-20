import {gql} from "@apollo/client";

export const GET_JOBS = gql`
    query getJobs {
        jobs {
            id
            slug
        }
    }
`

