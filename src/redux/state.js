import { rerenderAllTree } from "../render"

let state = {
    posts: [
        {id: 1, message: 'asidfasd', likesCount: 12},
        {id: 2, message: 'lol', likesCount: 228},
        {id: 3, message: 'lolol', likesCount: 1337},
        {id: 4, message: 'lololo', likesCount: 322},
        {id: 5, message: 'asidfddasd', likesCount: 12}
    ],
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Elena'},
            {id: 3, name: 'Maxim'},
            {id: 4, name: 'Zurab'},
            {id: 5, name: 'Shotovich'},
        ],
        messages: [
            {senderName: 'Viktor', message: 'Hi'},
            {senderName: 'Korneplod', message: 'Loerm'},
            {senderName: 'Lol', message: 'Ipmusdf'},
            {senderName: 'Kek', message: 'aiosudhf'},
            {senderName: 'Cheburek', message: 'sdf'},
        ]
    }

}

export let addNewMessage = (text) => {
    let newMessage = {
        senderName: 'John Dhow',
        message: text,
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderAllTree(state)
}

export default state;