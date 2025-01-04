'use client'
import React from 'react';
// import { useRouter } from 'next/navigation';

const UserProfile = ({ params }: { params: Promise<{ userId: number }> }) => {
//   const router = useRouter();
const _params = React.use<{ userId: number }>(params);
  const {userId} = _params;

  return (
    <div>
      <h1>User Profile</h1>
      <p>This is the profile for user: {userId}</p>
    </div>
  );
};

export default UserProfile;
