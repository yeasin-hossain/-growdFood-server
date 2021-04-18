### Api Endpoint and request configuration

**all route are secure, have to provide Authorization token**

> Base Route

        Public Routes

        router.use('/auth', )
        router.use('/public', )

        Secure Routes

        router.use('/users', Auth, )
        router.use('/products', Auth, )
        router.use('/orders', Auth, )
        router.use('/reviews', Auth, )


    https://phassignment11.herokuapp.com/api/auth

        router.post('/register')
        router.post('/login')

    https://phassignment11.herokuapp.com/api/users

        router.get('/', )
        router.get('/singleUser/:userID', )
        router.post('/updateRoleOrBan/:userID', )

    https://phassignment11.herokuapp.com/api/products

        router.get('/', )
        router.post('/saveProduct', )
        router.get('/productType/:type', )
        router.get('/singleProduct/:productId', )
        router.get('/productDelete/:productId', )
        router.get('/updateProductStock/:productId', )

    https://phassignment10.herokuapp.com/api/orders

        router.get('/', )
        router.post('/saveOrder',)
        router.post('/changeStatus/:orderId',)
        router.get('/orderByUserId/:userId',)
        router.get('/deleteOrder/:orderId',)

    https://phassignment11.herokuapp.com/api/reviews

        router.get('/', )
        router.post('/saveReview', )

    https://phassignment11.herokuapp.com/api/public

        router.get('/productType/:type', )
        router.get('/getAllProducts', )
        router.get('/getAllReviews', )
        router.get('/NewsLetter/:userEmail', )
        router.get('/getNewsLetter/', )
        router.post('/contact', )
        router.get('/getContact', )

`yarn dev Or npm run dev `
**Happy Coding**
