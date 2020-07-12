import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage  } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>
          Editar perfil
        </EditButton> */}

        <h1>Chrigor Eduardo</h1>
        <h2>@chrigor_eduardo</h2>

        <p>
          Developer at
          <a href="#"> Grupo IV2</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 26 de Janeiro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>299</strong>
          </span>
          <span>
            <strong>405</strong>
            Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;