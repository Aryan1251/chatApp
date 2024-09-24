import RegisterAndLoginForm from "./RegisterAndLoginForm.js";
import {useContext} from "react";
import {UserContext} from "./UserContext.js";
import Chat from "./Chat.js";

export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return <Chat />;
  }

  return (
    <RegisterAndLoginForm />
  );
}