const app = require('./app');

app.listen(3333, () => {
    var dtNow = new Date;
    console.log('--------------------------------------');
    console.log('    Server running: ' + dtNow.getHours() + ":" + dtNow.getMinutes() + ":" + dtNow.getSeconds());
    console.log('--------------------------------------');
});