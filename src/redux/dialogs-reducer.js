const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  messages: [
    { message: "HI", id: "1" },
    { message: "HI1", id: "2" },
    { message: "HI2", id: "3" },
    { message: "HI3", id: "4" },
    { message: "HI4", id: "5" },
  ],
  dialogs: [
    { name: "Artem1", id: "1" },
    { name: "Artem2", id: "2" },
    { name: "Artem3", id: "3" },
    { name: "Artem4", id: "4" },
    { name: "Artem5", id: "5" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
