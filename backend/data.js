import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Gabriel',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Matheus',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            //_id: '1',
            name: 'Camiseta Lula Livre',
            slug: 'Camiseta Lula',
            category: 'Camiseta',
            image: '/images/7681b55e8e32f3acbd819e0657410b85.jfif', //679px x 829px
            price: 120,
            countInStock: 10,
            brand: 'Lula',
            rating: 4.5,
            numReviews: 10, 
            description: 'Camiseta Lula Livre para manifestações'
        },
        {
            //_id: '2',
            name: 'Camiseta Bolsonaro Presidente',
            slug: 'Camiseta Bolsonaro',
            category: 'Camiseta',
            image: '/images/6e041179b8dfccbfb5c5be29454fe4bb.jfif',
            price: 120,
            countInStock: 0,
            brand: 'Bolsonaro',
            rating: 4.5,
            numReviews: 10, 
            description: 'Camiseta Bolsonaro Presidente para manifestações'
        },
        {
            //_id: '3',
            name: 'Camiseta Borussia Dortmund',
            slug: 'Camiseta Borussia',
            category: 'Camiseta',
            image: '/images/bc02827f70f7c4ff640abfdb741f7e21.jfif',
            price: 120,
            countInStock: 10,
            brand: 'Borussia',
            rating: 4.5,
            numReviews: 10, 
            description: 'Camiseta Time Borussia Dortmund'
        },
        {
            //_id: '4',
            name: 'Camiseta Vans',
            slug: 'Camiseta Vans',
            category: 'Camiseta',
            image: '/images/Camisa-reserva-do-Borussia-Dortmund-2020-2021-PUMA-2-2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Vans',
            rating: 4.5,
            numReviews: 10, 
            description: 'Camiseta Skate Vans'
        },
        {
            //_id: '6',
            name: 'Calça',
            slug: 'Calça Jeans',
            category: 'Calça',
            image: '/images/2b36a76a146ed36b1369185b56138eb0.jpg',
            price: 90,
            countInStock: 5,
            brand: 'Lee',
            rating: 3.5,
            numReviews: 3, 
            description: 'Calça Jeans Lee'
        },
        {
            //_id: '6',
            name: 'Roupa dog',
            slug: 'dog',
            category: 'Animal',
            image: '/images/CAMISA-TPT-LIBERTY-PETArtboard-1_3_250x.webp',
            price: 50,
            countInStock: 15,
            brand: 'Rolinha',
            rating: 4.0,
            numReviews: 3, 
            description: 'Roupa para seu melhor amigo'
        }
    ],
};

export default data;