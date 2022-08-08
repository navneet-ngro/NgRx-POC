import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct } from './product.interface';

export class ProductAPI implements InMemoryDbService {

    createDb() {
        const products: IProduct[] = [
            {
                'id': 1,
                'name': 'Leaf Rake',
                'code': 'GDN-0011',
                'description': 'Leaf rake with 48-inch wooden handle',
                'starRating': 3.2
            },
            {
                'id': 2,
                'name': 'Garden Cart',
                'code': 'GDN-0023',
                'description': '15 gallon capacity rolling garden cart',
                'starRating': 4.2
            },
            {
                'id': 3,
                'name': 'Hammer',
                'code': 'TBX-0048',
                'description': 'Curved claw steel hammer',
                'starRating': 4.8
            },
            {
                'id': 4,
                'name': 'Saw',
                'code': 'TBX-0022',
                'description': '15-inch steel blade hand saw',
                'starRating': 3.7
            },
            {
                'id': 5,
                'name': 'Video Game Controller',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 6,
                'name': 'DSLR',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 7,
                'name': 'Onida Oxygen 500',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 8,
                'name': 'Samsung Galaxy M30',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 9,
                'name': 'Mivi Roam2',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 10,
                'name': 'Voltas Fan',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 11,
                'name': 'Onida Thunder',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            },
            {
                'id': 12,
                'name': 'Jio Fiber',
                'code': 'GMG-0042',
                'description': 'Standard two-button video game controller',
                'starRating': 4.6
            }
        ];
        return { products };
    }
}
