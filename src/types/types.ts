export type Session = {
  id: number;
  time: Date;
  price: number;
  occupiedPlaces: {
    row: number;
    place: number;
    session_id: number;
    type: "hall" | "balcony"
  }[];
  createdAt: Date;
  updatedAt: Date;
  repertoireId: number;
};

export type User = {
  id: number;
  email: string;
  phoneNumber: string;
  fullName: string;
  birth: Date;
  createdAt: Date;
};

export type AuthResponse = {
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
  status: number;
};

export type AuthType = {
  email: string;
  password: string;
};

export type RegisterType = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type Repertoire = {
  id: number;
  createdAt: Date;
  title: string;
  updatedAt: Date;
  image: string;
  category: number;
  description: string;
  sessions: [
    {
      id: number;
      time: Date;
      price: number;
      repertoireId: number;
      updatedAt: Date;
      createdAt: Date;
    }
  ];
};
