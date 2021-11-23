const fakeInvites = [{ name: "Huam", inviteeName: "Vinson" }];

export const getInvites = async () => {
  return fakeInvites;
};

export const postInvite = async (invite) => {
  console.log(invite);
  fakeInvites.push(invite);
  return true;
};
