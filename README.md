### Api Endpoint and request configuration

**all route are secure, have to provide Authorization token**

    https://phassignment11.herokuapp.com/auth

        router.post('/register')
        router.post('/login')

    https://phassignment11.herokuapp.com/users

        router.get('/', )
        router.get('/singleUser/:userID', )
        router.post('/updateRoleOrBan/:userID', )

    https://phassignment11.herokuapp.com/products

        router.get('/', )
        router.post('/saveProduct', )
        router.get('/productType/:type', )
        router.get('/productDelete/:productId', )
        router.get('/updateProductStock/:productId', )

    https://phassignment10.herokuapp.com/orders

        router.get('/',)
        router.post('/saveOrder',)
        router.post('/changeStatus/:orderId')
        router.get('/deleteOrder/:orderId',)

    https://phassignment11.herokuapp.com/reviews

        router.get('/', )
        router.post('/saveReview', )
