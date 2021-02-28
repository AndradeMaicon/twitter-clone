import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Maicon Andrade</h1>
        <h2>@andrademaicon</h2>
        <p>Developer at <a href="https://github.com/">Crowdlearn</a></p>

        <ul>
          <li>
            <LocationIcon />
            Tres Rios, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de fevereiro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>125</strong>
          </span>

          <span>
            <strong>112 </strong> seguidores
          </span>
        </Followage>

        <Feed />
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;