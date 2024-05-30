const {Router} = require('express')
const axios = require('axios')
const router = Router()


router.get('/',(req,res)=>{
    let isActive = false
    const users =[
        {
            id:1,
            name: 'Oscar',
            lastname: 'Acuna'
        },
        {
            id:2,
            name: 'Mei',
            lastname: 'Routture'
        }
    ]
    res.render('index', {
        isActive,
        users
    })
})

router.get('/about',(req,res)=>{
    const title = 'Mi pagina creada desde Express, about'
    res.render('about',{title});
});



router.get('/posts',async (req,res)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data

    res.render('posts',{posts});
});

router.get('/dashboard',(req,res)=>{
    

    res.render('dashboard');
});

module.exports = router