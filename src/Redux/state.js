import {renderEntireThree} from "../render";

let state = {
    profilePage: {posts: [
        {id: '1', message: 'Здорово Корова', likeCounts: '15'},
        {id: '2', message: 'Я Бык!', likeCounts: '30'}
    ],
        newPostText: 'itkamasutra.com'
    },
    dialogsPage: {dialogs: [
        {id: 1, name: 'Конь в пальто', avatar: 'https://i.pinimg.com/originals/cf/20/e9/cf20e9b409544bd9e371d23385b2cd65.jpg'},
        {id: 2, name: 'Мышка норушка', avatar: 'https://cdn52.zvuk.com/pic?type=artist&id=480682&size=600x600&ext=jpg'},
        {id: 3, name: 'Кот в сапогах', avatar: 'http://185504.selcdn.ru/static/tkani.reshops.ru/catalog/2371/17484001460e996a49215f_original.jpg'},
        {id: 4, name: 'Серый волк', avatar: 'https://sun9-71.userapi.com/impf/c625818/v625818430/2f1bb/_bwuoTRwRQw.jpg?size=748x844&quality=96&sign=22d26c94145f72f9e8475f2a04fdb150&c_uniq_tag=epHZA2gN5EtpfwmFgTPzc3hRKrhvCAOFZ9nhcM1x1dA&type=album'},
        {id: 5, name: 'Панда', avatar: 'https://krot.info/uploads/posts/2021-03/1614993981_34-p-krutaya-panda-art-kartinki-36.jpg'}
    ], messages: [
        {id: 1, message: 'Привет, как дела?'},
        {id: 2, message: 'Учу React'},
        {id: 3, message: 'Yo'}
    ],
    newMessageText: 'Привет я Зверь'
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Andrew', avatar: 'https://i.pinimg.com/736x/cb/bc/98/cbbc9846dc4ae6e550ae71e7be2a36a2.jpg'},
            {id: 1, name: 'Sasha', avatar: 'https://w-dog.ru/wallpapers/15/2/363636011932313/venecianskie-maskarad-maski-zoloto-predstavlyayut-perya-vzglyad.jpg'},
            {id: 1, name: 'Sveta', avatar: 'https://yt3.ggpht.com/a/AATXAJxt-7CxlV8jVQxsuSRXe1VF6be_MnGwmNYsOe0A=s900-c-k-c0x00ffffff-no-rj'}
        ]
    }
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ''
    renderEntireThree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireThree(state)
}


export let addPost = () => {
    let newPost = {
        id: '3',
        message: state.profilePage.newPostText,
        likeCounts: 0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireThree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireThree(state);
}


export default state