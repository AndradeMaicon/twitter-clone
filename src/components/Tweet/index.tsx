import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Voce retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Maicon</strong>
            <span>@andrademaicon</span>
            <Dot/>
            <time>28 de fev</time>
          </Header>

          <Description>Foquete nao tem re</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              16
            </Status>
            <Status>
              <LikeIcon />
              30
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;