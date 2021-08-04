import React from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

//I need to get logged in user's photos (hook)
//on loading photos I'm going to use  react skeleton
//if there're photos, create a post component
//if a user doesn't have photos, tell 'em to create some

export default function Timeline() {
  usePhotos();
  return (
    <div className="container col-span-2">
      <p>I am the Timeline</p>
    </div>
  );
}
