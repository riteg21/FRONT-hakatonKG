import React, { memo } from "react";

import classes from "./App.module.scss";
import resets from "./components/_resets.module.scss";
import { ListTasks } from "./components/ListTasks/ListTasks.js";

const App = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <ListTasks />
    </div>
  );
});

export default App;
