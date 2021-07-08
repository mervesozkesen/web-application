const morgan =require('morgan');
const express=require('express');
const mongoose=require('mongoose');
const Ders=require('./models/ders');
const dersRoutes=require('./routes/dersRoutes');


const dbURI='mongodb+srv://merve:mervemerve@cluster1.meuvo.mongodb.net/blogDB?retryWrites=true&w=majority';
const app = express();

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(3004))
.catch((err)=>console.log(err));


app.set('view engine','ejs');
app.set('views','htmls');


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use('/dersler',dersRoutes);


app.get('/',(req,res)=>{
   res.redirect('/dersler');
   
});



app.get('/hakkimda',(req,res)=>{
    res.render('hakkimda',{hakkimda:'MetevreM Eğitim Hakkında'});
});
app.get('/ders/ekle',(req,res)=>{
    res.render('ekle');
});






app.use((req,res)=>{
    res.status(404).render('404');
})