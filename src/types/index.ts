export interface INavLink {
    imgURL: string;
    route: string;
    label: string;
}

export interface IUpdateUser {
    userId: string;
    name: string;
    bio: string;
    imageId: string;
    imageUrl: URL | string;
    file: File[]
}

export interface INewPost {
    userId: string;
    caption: string;
    file: File[]
    location?: string;
    tags?: string;
}

export interface IUpdatePost {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
}

export interface INewUser {
    name: string
    email: string
    username: string
    password: string
}

export interface IContext {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    checkAuthUser: () => Promise<boolean>
}

export interface IUser { 
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
}