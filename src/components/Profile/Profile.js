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
    <Container className="profile">
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <TextInfo className="tag">@{tag}</TextInfo>
        <TextInfo className="location">{location}</TextInfo>
      </Description>
      <Stats className="stats">
        <StatsItem>
          <TextInfo className="label">Followers</TextInfo>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <TextInfo className="label">Views</TextInfo>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <TextInfo className="label">Likes</TextInfo>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};
