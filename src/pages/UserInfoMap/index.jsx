import React from 'react';
import { Container, UserInfo, ListRepositoryes, Description, ItemRepo } from './style';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import imgStar from '../../assets/star.svg';

import { useSelector } from 'react-redux';


   //console.log(gitHubUser);
// interface IStarRepo {
//   id: string;
//   name: String;
//   description: String;
// }

// interface IGitUser {
//   id: string;
//   alias: string;
//   user_url: String;
//   avatar_url: String;
//   description: string;
//   location: String;
//   starRepositories: IStarRepo[];
// }
const UserInfoMap = () => {

  const gitHubUser = useSelector(state => state.gitHubUser);
  
  const starRepositories = gitHubUser.starRepositories || [];

  const mapIcon = Leaflet.icon({
    iconUrl: imgStar,
    iconSize: [40, 40]    
  });

  return (
    <Container>
      <aside>
        <UserInfo>
          <img src={gitHubUser.avatar_url} alt="User avatar" />
          <div>
            <h1>{gitHubUser.alias}</h1>
            <a href={gitHubUser.user_url} target='_blank'>
              <p>Go to my gitHub</p>
            </a>
          </div>

        </UserInfo>
        <Description>
          <h2>Description:</h2>
          <p>{gitHubUser.description}</p>
        </Description>

        <h2>Liked Repositories:</h2>
        <ListRepositoryes>
          {starRepositories.map(repo => (
            <ItemRepo key={repo.id}>
            <div>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
            </div>
            <img src={imgStar} alt="star"/>
          </ItemRepo>
          ))}
          
        </ListRepositoryes>
      </aside>
      <MapContainer
        center={[gitHubUser.location[1], gitHubUser.location[0]]}
        zoom={5}
        scrollWheelZoom={true}
        dragging={true}
        style={{ width: '100%', heigth: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker  
          icon={mapIcon}
          position={[gitHubUser.location[1], gitHubUser.location[0]]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240}>
            {gitHubUser.locationName}
          </Popup>
          
        </Marker>
      </MapContainer>
    </Container>
  );
}

export default UserInfoMap;