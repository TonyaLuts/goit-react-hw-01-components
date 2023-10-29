import {
  Container,
  Description,
  Stats,
  StatsItem,
  Avatar,
  Name,
  TextInfo,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <TextInfo>@{tag}</TextInfo>
        <TextInfo>{location}</TextInfo>
      </Description>
      <Stats>
        <StatsItem>
          <TextInfo>Followers</TextInfo>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <TextInfo>Views</TextInfo>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <TextInfo>Likes</TextInfo>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};
