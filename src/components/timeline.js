import React from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

//I need to get logged in user's photos (hook)
//on loading photos I'm going to use  react skeleton
//if there're photos, create a post component
//if a user doesn't have photos, tell 'em to create some

export default function Timeline() {
  const { photos } = usePhotos();
  console.log('photos', photos);
  return (
    <div className="container col-span-2">
      {photos ? (
        <>
        {[...new Array(4)].map(
          (_, index) =>
          <Skeleton key={index} count={4} width={320} height={600} className="mb-5"/>
        )}
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) =>
        <p key={content.docId}>{content.imageSrc}</p>)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}
