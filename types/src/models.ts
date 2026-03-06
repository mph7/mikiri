export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
}

export interface Material {
    _id: string;
    id?: string;
    title: string;
    content: string;
    url: string;
    source: string;
    type: string;
    postedAt: string | Date;
    metadata: {
        difficulty: string;
        length: number;
        tags: string[];
    };
}
