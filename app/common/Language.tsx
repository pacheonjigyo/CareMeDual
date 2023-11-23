import { useObserver } from "mobx-react";
import * as React from "react";

import { wordList } from "../data/words.js";
import { AppContext } from "../stores/index.js";

export const Language = (props: any) => {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      {
        wordList[props.label][
          commonStore.language === "default" ? "ko" : commonStore.language
        ]
      }
    </>
  ));
};
