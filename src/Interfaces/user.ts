interface IUser {
    name: {
        first: string,
        last: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    }
    location: {
        city: string,
        state: string,
    },
    email: string,
    phone: string,
    registered: {
        date: Date;
    }
}

export default IUser;