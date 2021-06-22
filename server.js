const express = require('express')
const path = require('path')
const app = express()
//l'utilisateur yathreb 3a localhost 5000 c tt
//si on a une seule page
// app.get('/',(req,res) =>{
//     // envoyer une chose au front avec res.send
//     res.sendFile(path.join(__dirname,'public', 'Homepage.html'))
// })

// app.get('/contact',(req,res) =>{
//     // envoyer une chose au front avec res.send
//     res.sendFile(path.join(__dirname,'public', 'Contactus.html'))
// })

//Middleware
app.use(express.static(path.join(__dirname, 'public')))


//ngoula ne5dem 3al port 5000 ET  si il y'a une err ygouli

app.listen(5000, (err) =>{
    if(err){
        throw err}
        else{
            console.log('server is up and RUNNING...')
        }
    }
)