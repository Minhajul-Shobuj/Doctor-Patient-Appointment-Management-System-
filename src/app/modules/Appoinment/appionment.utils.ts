import { User } from '../User/user.model';

export const getDayNameFromDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

export const getUserId = async (userEmail: string) => {
  const user = await User.findOne({
    email: userEmail,
  });
  return user?._id.toString();
};
