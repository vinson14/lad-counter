import Amplify from "@aws-amplify/core";
import awsConfig from "../src/aws-exports";
const fakeInvites = [{ name: "Huam", inviteeName: "Vinson" }];
import API from "@aws-amplify/api";

Amplify.configure(awsConfig);
const apiName = "lad30counter";
const path = "/invites";
export const getInvites = async () => {
  const init = {
    headers: {},
  };
  return await API.get(apiName, path, init);
};

export const postInvite = async (invite) => {
  const init = {
    headers: {},
    body: invite,
  };
  try {
    const response = await API.post(apiName, path, init);
    return true;
  } catch (err) {
    return false;
  }
};

export const deleteInvite = async (invite) => {
  const init = { headers: {} };
  try {
    const response = await API.del(
      apiName,
      `${path}/${invite.dateCreated}`,
      init
    );
    return true;
  } catch (err) {
    return false;
  }
};
