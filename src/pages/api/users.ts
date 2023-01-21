// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'twitter-api-sdk';
import { AuthClient } from 'twitter-api-sdk/dist/types';

type public_metrics = { 
  followers_count: number | string ; 
  following_count: number | string; 
  listed_count: number | string; 
  tweet_count: number | string; 
} 
type User = {
    name : string;
    id: string;
    username : string;
    data:[public_metrics]

}

type FollowersData = {
    data : User[]| undefined | any 
}

const bearer_token : string | AuthClient = process.env.TWITTER_BEARER_TOKEN ? process.env.TWITTER_BEARER_TOKEN : '' ;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FollowersData>
) {
     const client = new Client( bearer_token );

  const followers = (await client.users.usersIdFollowers("102",{"user.fields": ["public_metrics"],max_results: 10}));
  
  
  res.status(200).json({data:  followers.data});
}
