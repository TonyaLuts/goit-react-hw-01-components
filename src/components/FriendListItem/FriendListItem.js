import {
  FriendItem,
  FriendAvatar,
  FriendName,
  StatusOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem className="item" key={id}>
      <StatusOnline className="status" $isOnline={isOnline}></StatusOnline>
      <FriendAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};
