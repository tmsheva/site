import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export const store = {
  _state: {
    profilePage: {
      posts: [
        { message: "first", id: "1", likesCount: "0" },
        { message: "second", id: "2", likesCount: "0" },
        { message: "third", id: "3", likesCount: "0" },
        { message: "fourth", id: "4", likesCount: "0" },
        { message: "fifth", id: "5", likesCount: "0" },
      ],
      newPostText: "ArtemText",
    },
    dialogsPage: {
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
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
