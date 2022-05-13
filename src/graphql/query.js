import { gql } from '@apollo/client'
export const GET_SONGS = gql`
query MyQuery {
    musica(order_by: {created_at: desc}) {
      artist
      duration
      id
      thumbnail
      url
      title
    }
  }`;