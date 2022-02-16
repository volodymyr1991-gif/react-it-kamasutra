// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//   state: {
//     profilePage: {
//       mesages: [
//         { id: 1, mesage: "hi my friend" },
//         { id: 2, mesage: "Hov are you" },
//         { id: 3, mesage: "whot your name" },
//         { id: 1, mesage: "React" },
//         { id: 1, mesage: "html" },
//       ],
//       newPostMesage: "incubator.com",

//       dialogs: [
//         { id: 1, name: "Andrey" },
//         { id: 2, name: "Maxim" },
//         { id: 3, name: "AndreMarky" },
//         { id: 1, name: "Taras" },
//         { id: 1, name: "Sofia" },
//       ],
//     },

//     mesagesPage: {
//       posts: [
//         { id: 1, mesage: "hi my friend", like: 10, age: 15 },
//         { id: 2, mesage: "Hov are you", like: 100, age: 18 },
//         { id: 3, mesage: "whot your name", like: 14, age: 17 },
//         { id: 4, mesage: "React", like: 25, age: 15 },
//         { id: 5, mesage: "html", like: 30, age: 18 },
//       ],
//       newPostText: "it-kamasutra",
//     },

//     sideBar: [
//       { id: 1, name: "Andrey" },
//       { id: 2, name: "Maxim" },
//       { id: 3, name: "Andre" },
//       { id: 4, name: "Taras" },
//     ],
//   },

//   getState() {
//     return this.state;
//   },

//   callSubscribe() {
//     console.log("state wos changed");
//   },
//   subscribe(observer) {
//     this.callSubscribe = observer;
//   },

//   dispatch(action) {
//     this.state.mesagesPage = profileReducer(this.state.mesagesPage, action);

//     this.state.profilePage = dialogsReducer(this.state.profilePage, action);
//     this.callSubscribe(this.state);
//   },
// };

// export default store;
// window.state = store;
