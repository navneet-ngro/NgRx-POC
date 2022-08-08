/* Defines the product entity */
export interface IProduct {
    id: number | null;
    name: string;
    code: string;
    starRating: number;
    description: string;
}

export const PRODUCT =  {id: 1, description: ``, code: ``, name: ``, starRating: null};
