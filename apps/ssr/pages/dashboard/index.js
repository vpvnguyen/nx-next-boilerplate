import React from 'react';
import StarWarsAPI from '../../api/StarWars';
import JsonPlaceholderAPI from '../../api/JsonPlaceholder';

const Dashboard = () => {
  React.useEffect(() => {
    const callAPI = async () => {
      const people = await StarWarsAPI.getPeople();
      const posts = await JsonPlaceholderAPI.getPosts();
      console.log({ people, posts });
      return { people, posts };
    };
    callAPI();
  });

  return (
    <div>
      <h1>Dashboard page</h1>
    </div>
  );
};

export default Dashboard;
