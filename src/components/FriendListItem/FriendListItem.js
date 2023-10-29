import {
  FriendItem,
  FriendAvatar,
  FriendName,
  StatusOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <StatusOnline $isOnline={isOnline}></StatusOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
