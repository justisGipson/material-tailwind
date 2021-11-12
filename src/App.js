import {Button, Alert, ClosingAlert, Icon} from "@material-tailwind/react"
import CardComponent from "./card";
import "@material-tailwind/react/tailwind.css"
import { div } from "prelude-ls";

import LogRocket from 'logrocket';
LogRocket.init('pwwcap/dmeo');

// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'Justis Gipson',
  email: 'justis@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

export default function App() {
  return (
    <div className="bg-gray-700 p-20 h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white">Hello Tailwind 👋</h1>
      <p className="text-gray-400 mt-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <br />
      <div>
        <CardComponent />
      </div>
      <Button color="lightBlue" buttonType="filled" size="regular" ripple="dark">
        <Icon name="favorite" /> Hey friends 🚀
      </Button>
    </div>
  )
}
