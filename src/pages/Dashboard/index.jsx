import React, { useCallback, useState } from 'react';
import {Container, Title, Form, Error} from './style';
import imgLogo from '../../assets/logo.svg';
import { useHistory } from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {addGitHubUserInfors} from '../../store/modules/githubUsers/actions';
import {apiGit, apiMapBox} from '../../services/api';

const Dashboard = () => {

  const [userName, setUserName] = useState('');
  const [errorMesage, setErrorMesage] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowUserGitHubInfors = useCallback( async (event) => {
    
    event.preventDefault();

    if (!userName) {
      setErrorMesage(
        'Sorry, but you need informed a GitHub username to continue',
      );
      return;
    }

    try {
      let response = await apiGit.get(`users/${userName}`);
      const userData = response.data;
      
      response = await apiGit.get(`users/${userName}/starred`);
      const repoData = response.data;//location

      response = await apiMapBox.get(`${userData.location}.json/?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);
      const mapData = response.data;//location
      
      console.log(mapData);
      const starsRepositories = [];

      repoData.map(repo => (
        starsRepositories.push(
          {
            id: repo.id,
            name: repo.name,
            description: repo.description || ""
          }
        )
      ));

      setErrorMesage('');

      //create a user
      const gitUser = {
        id: userData.id,
        alias: (userData.name ||userData.login),
        user_url: userData.html_url,
        avatar_url: userData.avatar_url,
        description: userData.bio,
        location: (mapData.features ? mapData.features[0].geometry.coordinates : [-3.7429958, -38.5165226]),
        locationName: userData.location ||"unknow",
        starRepositories: starsRepositories
      };

      dispatch(addGitHubUserInfors(gitUser));
      let path = '/user';
      history.push(path);
    } catch (error) {
      setErrorMesage('We don´t find this user by name');
    }

  }, [dispatch, userName, history]);

  return (
    <Container>
      <img src={imgLogo} alt="GitHub Explorer"/>
      <Title>Explore Users on GitHub</Title>
      <Form hasError={!!errorMesage} onSubmit={handleShowUserGitHubInfors}>
        <input
          type="text"
          placeholder="Name of user on gitHub"
          value={userName} 
          onChange={e => setUserName(e.target.value)}
        />
        <button type="submit" >Search</button>
      </Form>
      {!!errorMesage && <Error>{errorMesage}</Error>}
    </Container>
  );
}

export default Dashboard;