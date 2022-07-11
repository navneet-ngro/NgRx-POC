/* Defines the product entity */
export interface IProduct {
    id: number | null;
    productName: string;
    productCode: string;
    starRating: number;
    description: string;
}

export const PRODUCT =  {id: 1, description: ``, productCode: ``, productName: ``, starRating: null};
