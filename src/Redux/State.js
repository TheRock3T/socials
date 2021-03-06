import {rerenderEntireTree} from "../render";
/*Example database*/

let state = {
    dialogsPage: {
        messagesData: [
            {message: 'Hello my friend'},
            {message: 'I love react'},
            {message: 'SPAM SPIM SPIN'}
        ],
        dialogsData: [
            {id: 1, name: 'Dmitry'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Galina'}
        ]
    },
    profilePage: {
        postData: [
            {id: 1, message: 'Who you?', likes: 25, dislikes: 0},
            {id: 2, message: 'What is that?', likes: 723847, dislikes: 9324823},
            {id: 3, message: 'New social?', likes: 2445, dislikes: 10},
            {id: 4, message: 'Hello React', likes: 999, dislikes: 5}
        ]
    },
    onNavbar: {
        friendsList: [
            {name: 'Alexey D.'},
            {name: 'Alex D.'},
            {name: 'Ale D.'},
            {name: 'Oleg M.'},
            {name: 'Andrey K.'},
            {name: 'Katya L.'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0,
        dislikes: 0
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}

export default state