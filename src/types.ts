type Bullet = {
    [key: string]: string;
}

type Image = {
    fields: {
        description: string;
        file: {
            url: string;
        }
    }
}

export type Landmark = {
    fields: {
        name: string;
        borough: string;
        location: {
            lon: number;
            lat: number;
        };
        bullets: Bullet[];
        moreInfoUrl: string;
        image: Image;
        image_url: string;    
    }
}[];