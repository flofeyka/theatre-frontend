export type Ticket = {
    id: number;
    name: string;
    date: Date;
    count: number
}

export type User = {
    id: number;
    email: string;
    phoneNumber: string;
}

export type AuthResponse = {
    user: User;
    accessToken: string;
    refreshToken: string
}

export type AuthType = {
    email: string;
    password: string;
}

export type RegisterType = {
    email: string;
    password: string;
    repeatPassword: string;
    
}

export type Repertoire = {
    id: number;
    createdAt: Date;
    title: string;
    updatedAt: Date;
    category: number;
    description: string;
    sessions: [
        {
            id: number,
            time: Date,
            price: number;
            repertoireId: number;
            updatedAt: Date;
            createdAt: Date;
        }
    ]
}
