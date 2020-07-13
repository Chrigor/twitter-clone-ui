import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

interface Props {
  retweeted?: boolean;
}

const Tweet: React.FC = (props: Props) => {
  return (
    <Container>

      <Retweeted>
        {
          props.retweeted && (
            <>
            <RocketseatIcon />
            Você retweetou
            </>
          )
        }
  </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Grupo IV2</strong>
            <span>@GrupoIV2</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              921
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;