import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct } from './product.interface';

export class ProductAPI implements InMemoryDbService {

    createDb() {
        const products: IProduct[] = [
            {
                'id': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'description': 'Leaf rake with 48-inch wooden handle',
                'starRating': 3.2
            },
            {
                'id': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'description': '15 gallon capacity rolling garden cart',
                'starRating': 4.2
            },
            {
                'id': 3,
                'productName': 'Hammer',
                'productCode': 'TBX-0048',
                'description': 'Curved claw steel hammer',
                'starRating': 4.8
            },
            {
                'id': 4,
                'productName': 'Saw',
                'productCode': 'TBX-0022',
                'description': '15-inch steel blade hand saw',
                'starRating': 3.7
            },
            {
                'id': 5,
                'productName': 'Video Game Controller',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 6,
                'productName': 'DSLR',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 7,
                'productName': 'Onida Oxygen 500',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 8,
                'productName': 'Samsung Galaxy M30',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 9,
                'productName': 'Mivi Roam2',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 10,
                'productName': 'Voltas Fan',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 11,
                'productName': 'Onida Thunder',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 12,
                'productName': 'Jio Fiber',
                'productCode': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            }
        ];
        return { products };
    }
}
