interface Personagens {
  result: any;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: Personagens = {
  result: "",
};

export const showMarvel = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SHOW_MARVEL":
      return action.payload;
    default:
      return state;
  }
};
