// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
/*if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
    }
else {*/
  // author(s):  Patrice-Morgan Ongoly
    // version: 0.1.0.10
    // last modified: MONDAY, JUNE 29, 2020 23:04 EDT
    // description:

    // required modules
    /*
    var keypress = require('keypress');
    var maiden = false;
    var menuFocus = 1;

    var droneIsFlying = false;
    var commandQueueIsEmpty = true;
    var commandQueue = [];
    var commandHistory = [];
   // var name = "";
    var bebop = require('node-bebop');
    var droneMovingSpeed = 5;
    var droneTurningSpeed = function(){
        return Math.min(droneMovingSpeed*2, 100);
    };

    */
    var bodyParser = require('body-parser');
    var express = require('express');
    var WhichBrowser = require('which-browser');
    // main application instance
    
    var path =  require("path");
    // var keypress = require('keypress');

    var app = express();

    // main application settings

    var config = {
        PORT: process.env.PORT || 3000,
        DIRECTORY: [
            "./",           /* 0 */
            "./css",        /* 1 */
            "./js",         /* 2 */
            "./media/texture",  /* 3 */
            "./media/gifs", /* 4 */
            "./media/pattern", /* 5 */
            "./media/img",  /* 6 */
            "./media/audio",   /* 7 */
            "./media/model",    /* 8 */
            "./media/upload",       /* 9 */
            "./media/fonts",     /* 10 */
            "./media/ico",  /* 11 */
            "./media/vid",  /* 12 */
            "./media/tf-models",  /* 13 */
        ]
    };

    var deviceType = 'unknown';
    let dir = config.DIRECTORY;

    app.engine('html', require('ejs').renderFile);

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    app.use(express.static('/'));

    app.get('/', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('index.html',{root: dir[0]});
    });

    app.get('/door', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('door.html',{root: dir[0]});
    });

    app.get('/en', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('en.html',{root: dir[0]});
    });

    app.get('/about', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('about.html',{root: dir[0]});
    });

    app.get('/hands', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('hands.html',{root: dir[0]});
    });

    app.get('/raisingHands', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('raisingHands.html',{root: dir[0]});
    });


    app.get('/dock', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('dock.html',{root: dir[0]});
    });

    app.get('/dock/en', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('dock_en.html',{root: dir[0]});
    });

    app.get('/dock/replace', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('replace.html',{root: dir[0]});
    });

    app.get('/pARk/connect', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('connect.html',{root: dir[0]});
    });

    app.get('/pARk/enter', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('enter.html',{root: dir[0]});
    });

    app.get('/caas/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/oldrow/maryland/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/oldrow/maryland/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/oldrow/massachusetts/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/oldrow/man/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/oldrow/nature/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/oldrow/pledge/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo.html',{root: dir[0]});
    });

    app.get('/pARk/rooms/ai', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('ai.html',{root: dir[0]});
    });
    
    app.get('/pARk/rooms/class', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('class.html',{root: dir[0]});
    });

    app.get('/pARk/rooms/work', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('work.html',{root: dir[0]});
    });

    app.get('/pARk/rooms/veldt', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('veldt.html',{root: dir[0]});
    });

    app.get('/pARk/rooms/library', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('library.html',{root: dir[0]});
    });

    app.get('/pARk/rooms/news', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('news.html',{root: dir[0]});
    });

    app.get('/pARk/rooms/space', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('inspace.html',{root: dir[0]});
    });

    app.get('/pARk/pamo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('patricemorgan.html',{root: dir[0]});
    });

    app.get('/pARk/cameron', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('cameron.html',{root: dir[0]});
    });

    app.get('/pARk/vaibhav', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('vaibhav.html',{root: dir[0]});
    });

    app.get('/pARk/louis', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('louis.html',{root: dir[0]});
    });
    
    app.get('/pARk/eric', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('eric.html',{root: dir[0]});
    });

    app.get('/pARk/roger', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('roger.html',{root: dir[0]});
    });
    
    app.get('/pARk/adam', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('adam.html',{root: dir[0]});
    });

    app.get('/products', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('products.html',{root: dir[0]});
    });

    app.get('/team', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('team.html',{root: dir[0]});
    });
    
    app.get('/bantxr', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('bantxr.html',{root: dir[0]});
    });

    app.get('/weare/atown', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('atown.html',{root: dir[0]});
    });

    app.get('/weare/human', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('human.html',{root: dir[0]});
    });

    app.get('/weare/orgs', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('orgs.html',{root: dir[0]});
    });

    app.get('/weare/acommunity', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('acommunity.html',{root: dir[0]});
    });

    app.get('/weare/acommunity/demo', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('demo1.html',{root: dir[0]});
    });

    app.get('/weare/safe', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('safe.html',{root: dir[0]});
    });

    app.get('/oldrow/maryland', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('maryland.html',{root: dir[0]});
    });

    app.get('/oldrow/massachusetts', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('massachusetts.html',{root: dir[0]});
    });

    app.get('/oldrow/pledge', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('pledge.html',{root: dir[0]});
    });

    app.get('/oldrow/nature', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('nature.html',{root: dir[0]});
    });
    
    app.get('/oldrow/man', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('man.html',{root: dir[0]});
    });

    app.get('/oldrow/tomorrow', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('tomorrow.html',{root: dir[0]});
    });

    app.get('/lyoko', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('lyoko.html',{root: dir[0]});
    });

    app.get('/caas', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('caas.html',{root: dir[0]});
    });

    app.get('/vantage', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('vantage.html',{root: dir[0]});
    });

    app.get('/pARk', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('pARk.html',{root: dir[0]});
    });

    app.get('/origin', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('origin.html',{root: dir[0]});
    });

    app.get('/vision', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('vision.html',{root: dir[0]});
    });

    app.get('/clavier', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        
        if(result.isType('desktop')){
            console.log('Desktop computer accessing DIA: KEYBOARD');
            deviceType = 'desktop';
        }
        else{
            console.log('Mobile device accessing DIA: KEYBOARD');
            deviceType = 'mobile';
        }
        
        res.render('keyboard.html',{root: dir[0]});
    });

    app.get('/office', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        
        if(result.isType('desktop')){
            console.log('Desktop computer accessing DIA: OFFICE');
            deviceType = 'desktop';
        }
        else{
            console.log('Mobile device accessing DIA: OFFICE');
            deviceType = 'mobile';
        }
        
        res.render('office.html',{root: dir[0]});
    });
    
    app.get('/rooms', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('rooms.html',{root: dir[0]});
    });

    app.get('/rooms/veldt', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('veldt.html',{root: dir[0]});
    });

    app.get('/rooms/class', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('class.html',{root: dir[0]});
    });

    app.get('/rooms/work', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('work.html',{root: dir[0]});
    });

    app.get('/rooms/library', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('library.html',{root: dir[0]});
    });

    app.get('/rooms/inspace', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('inspace.html',{root: dir[0]});
    });

    app.get('/rooms/ai', function(req, res){
       var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('ai.html',{root: dir[0]});
    });   

    app.get('/class', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('class.html',{root: dir[0]});
    });

    app.get('/annesflowershop', function(req, res){
        var result = new WhichBrowser(req.headers);
        console.log(result.toString());
        if(result.isType('desktop')){
            console.log('This is a desktop computer.');
            deviceType = 'desktop';
        }
        else{
            console.log('This is a mobile device.');
            deviceType = 'mobile';
        }

        res.render('annesflowershop.html',{root: dir[0]});
    });

    app.get('/css/:stylesheet_id', function(req, res){
        let stylesheet_id = req.params.stylesheet_id;
        res.sendFile(stylesheet_id, {root: dir[1]});
    });

    app.get('/js/:script_id', function(req, res){
        var script_id = req.params.script_id;
        res.sendFile(script_id, {root: dir[2]});
    });

    app.get('/media/texture/:texture_id', function(req, res){
        var texture_id = req.params.texture_id;
        res.sendFile(texture_id, {root: dir[3]});
    });

    app.get('/media/gifs/:gif_id', function(req, res){
        var gif_id = req.params.gif_id;
        res.sendFile(gif_id, {root: dir[4]});
    });

    app.get('/media/pattern/:pattern_id', function(req, res){
        var pattern_id = req.params.pattern_id;
        res.sendFile(pattern_id, {root: dir[5]});
    });

    app.get('/media/img/:img_id', function(req, res){
        var img_id = req.params.img_id;
        res.sendFile(img_id, {root: dir[6]});
    });

    app.get('/media/icon/:icon_id', function(req, res){
        var icon_id = req.params.icon_id;
        res.sendFile(icon_id, {root: dir[11]});
    });

    app.get('/media/audio/:audio_id', function(req, res){
        var audio_id = req.params.audio_id;
        res.sendFile(audio_id, {root: dir[7]});
    });

    app.get('/media/model/:model_id', function(req, res){
        var model_id = req.params.model_id;
        res.sendFile(model_id, {root: dir[8]});
    });

    app.get('/media/model/NewZealandPoloWithShorts/:model_id0', function(req, res){
        var model_id0 = req.params.model_id0;
        res.sendFile(model_id0, {root: dir[8]+"/NewZealandPoloWithShorts"});
    });

    app.get('/media/model/NewZealandPoloWithShorts/:model_id1', function(req, res){
        var model_id1 = req.params.model_id1;
        res.sendFile(model_id1, {root: dir[8]+"/NewZealandPoloWithShorts"});
    });

    app.get('/media/model/PSGDBFEWSExeterHat/:model_id2', function(req, res){
        var model_id2 = req.params.model_id2;
        res.sendFile(model_id2, {root: dir[8]+"/PSGDBFEWSExeterHat"});
    });
   
    app.get('/media/uploads/:upload_id', function(req, res){
        var upload_id = req.params.upload_id;
        res.sendFile(upload_id, {root: dir[9]});
    });

    app.get('/media/fonts/:font_id', function(req, res){
        var font_id = req.params.font_id;
        res.sendFile(font_id, {root: dir[10]});
    });

    app.get('/media/vid/:vid_id', function(req, res){
        var vid_id = req.params.vid_id;
        res.sendFile(vid_id, {root: dir[12]});
    });

    var io = require('socket.io').listen(app.listen(config.PORT, function(){
        console.log(`booting up your ARrow...\n\n\n--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log(`--      HOUSE OF VENUS BENEFIT CORPORATION      --`);
        console.log(`--------------------------------------------------`);
        console.log(`--                    BANTXR                    --`);
        console.log(`--                  V. 0.1.0.10                 --`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log(`--     listening on port ${config.PORT}                   --`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log(`--         connecting to the HOV THDL...        --`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log(`-----------      HOUSE OF VENUS       ------------`);
        console.log(`-----     TreeHouse Distributed Ledger      ------`);
        console.log(`--               version 0.0.2.0                --`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log("--     loading LEDGER...                        --");
        console.log("--     connected to TREEHOUSE DL                --");
        console.log("--     opening portal to ACORN pARk             --");
        console.log("--     .....                                    --");
        console.log("--     ....                                     --");
        console.log("--     ...                                      --");
        console.log("--     ..                                       --");
        console.log("--     .                                        --");
        console.log(`--------------------------------------------------`);
    }));

    io.sockets.on('connection', function(socket){
        var conn = socket;

        socket.on("CLIENTconnectToSERVER", function(data){
            console.log("CLIENT connected to SERVER...");
            let message = data;
            if(message.targetDIA=="Foodid"){
                socket.emit("SERVERloadRestaurantMetaDataAtNodesOnCLIENT", {status: true, locations: Restaurants});
            }
            else if(message.targetDIA=="New York Times"){
                socket.emit("SERVERloadImmersiveNewspaperOnCLIENT", {status: true, paper: DecentralizedImmersiveApplications["New York Times"].object.dataSource});
                
                ActiveDias.push({id: socket, name: "NYT", ver: "0.0.24", aut: "@pamo"});
                console.log("active dia registered");
            }
            else{
                console.log("no associated dia found in registry.")
            }
             
        });
       
        socket.on('disconnect', function(){
            console.log(`socket ${socket.id} disconnected.`);
        });
    });
//}//