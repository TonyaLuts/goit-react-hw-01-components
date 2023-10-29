import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.spasing(2)};
  padding: ${p => p.theme.spasing(2)};
  background-color: ${p => p.theme.color.white};
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
`;

const getStatus = props => {
  switch (props.$isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return props.theme.color.bg;
  }
};

export const StatusOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${getStatus};
  margin-right: ${p => p.theme.spasing(5)};
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 80px;
  object-fit: cover;
  border-radius: ${p => p.theme.spasing(2)};
  background-color: ${p => p.theme.color.bg};
  margin-right: ${p => p.theme.spasing(5)};
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
