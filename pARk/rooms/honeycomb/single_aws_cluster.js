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
    // version: 0.2.2
    // last modified: Saturday, June 29, 2019 14:32 EST
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

    app.get('/dev', function(req, res){
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

        res.sendFile(path.join(__dirname, '../', "dev-index.html"));
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
        res.sendFile(pattern_id+'.patt', {root: dir[5]});
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
        res.sendFile(sound_id, {root: dir[7]});
    });

    app.get('/media/model/:model_id', function(req, res){
        var model_id = req.params.model_id;
        res.sendFile(model_id, {root: dir[8]});
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
        console.log(`--      AR RECEIVER ORGANIZES WORLDSTREAMS      --`);
        console.log(`--                   V. 0.2.2                   --`);
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
        console.log(`--                 version 0.0.1                --`);
        console.log(`--------------------------------------------------`);
        console.log(`--------------------------------------------------`);
        console.log("--     loading ledger...                        --");
        console.log("--     connected to TreeHouse DL                --");
        console.log("--     opening portal to Acorn pARk             --");
        console.log("--     .....                                    --");
        console.log("--     ....                                     --");
        console.log("--     ...                                      --");
        console.log("--     ..                                       --");
        console.log("--     .                                        --");
        console.log(`--------------------------------------------------`);
    }));

    var SilverSpringRestaurants = [
        {
            position: {lat: 38.9962903, lng: -77.0276627},
            icon: "../media/img/hov-ig-logo.png",
            name: "Acorn Park Pharmacy",
            description: "Suppliers of name-brand over the counter medication and medical marijuana prescriptions",
            rating: "****4.8",
            tables: [
                {
                    productName: "Tylenol",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/tylenol.png"
                },
                {
                    productName: "PanadoL",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/panadol.png"
                },
                {
                    productName: "Tempra",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/tempra.png"
                },
                {
                    productName: "Motrin",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/motrin.png"
                },
                {
                    productName: "Advil",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/advil.png"
                },
                {
                    productName: "Naprosyn",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/naprosyn.png"
                }
            ],
            menu: {
                Item0: {
                    price: 9.99,
                    prepTime: 10.5,
                    description: "item 0 food description"
                }
            }
        },
        {   
            position: {lat: 38.9966568, lng: -77.025325},
            icon: "../media/img/hov-ig-logo.png",
            name: "Evan Opter's",
            description: "Your neighborhood grocer with all your essentials: excellent food, drink, and news from the places you want it most.",
            rating: "****4.5",
            tables: [
                {
                    productName: "Water",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/water.png"
                },
                {
                    productName: "Plantain Chips",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/plantain-chips.png"
                },
                {
                    productName: "Bread",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/bread.png"
                },
                {
                    productName: "Mandarines",
                    productMetaData: {
                        thc: 0,
                        thc: 0,
                        thc: 0,
                    },
                    cover: "../media/img/mandarine.png"
                }
            ],
            menu: {
                Item1: {
                    price: 9.99,
                    prepTime: 10.5,
                    description: "item 0 food description"
                }
            }
        }    
    ];

    var Restaurants = [
            {
                position: {lat: 39.258572, lng: -76.863297},
                icon: "../media/img/hov-ig-logo.png",
                name: "Acorn Park Pharmacy",
                description: "Suppliers of name-brand over the counter medication and medical marijuana prescriptions",
                rating: "****4.8",
                tables: [
                    {
                        productName: "Tylenol",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/tylenol.png"
                    },
                    {
                        productName: "PanadoL",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/panadol.png"
                    },
                    {
                        productName: "Tempra",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/tempra.png"
                    },
                    {
                        productName: "Motrin",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/motrin.png"
                    },
                    {
                        productName: "Advil",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/advil.png"
                    },
                    {
                        productName: "Naprosyn",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/naprosyn.png"
                    }
                ],
                menu: {
                    Item0: {
                        price: 9.99,
                        prepTime: 10.5,
                        description: "item 0 food description"
                    }
                }
            },
            {   
                position: {lat: 39.243270, lng: -76.842570},
                icon: "../media/img/hov-ig-logo.png",
                name: "Evan Opter's",
                description: "Your neighborhood grocer with all your essentials: excellent food, drink, and news from the places you want it most.",
                rating: "****4.5",
                tables: [
                    {
                        productName: "Water",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/water.png"
                    },
                    {
                        productName: "Plantain Chips",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/plantain-chips.png"
                    },
                    {
                        productName: "Bread",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/bread.png"
                    },
                    {
                        productName: "Mandarines",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/mandarine.png"
                    }
                ],
                menu: {
                    Item1: {
                        price: 9.99,
                        prepTime: 10.5,
                        description: "item 0 food description"
                    }
                }
            },
            {
                position: {lat: 39.249620, lng: -76.836200},
                icon: "../media/img/hov-ig-logo.png",
                name: "V's Store",
                description: "pARk storefront for goods distributed by Vaibhav Ponnuri",
                rating: "N/A",
                tables: [
                    {
                        productName: "Sample 0",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/water.png"
                    },
                    {
                        productName: "Sample 1",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/plantain-chips.png"
                    },
                    {
                        productName: "Sample 2",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/bread.png"
                    },
                    {
                        productName: "Sample 3",
                        productMetaData: {
                            thc: 0,
                            thc: 0,
                            thc: 0,
                        },
                        cover: "../media/img/mandarine.png"
                    }
                ],
                menu: {
                    Item1: {
                        price: 9.99,
                        prepTime: 10.5,
                        description: "item 0 food description"
                    }
                }
            }
        ];

    var Cart = {}
    
    function incrementCartItem(target){
        let item = target;
        let exitValue = 0;
        if(Cart.hasOwnProperty(item)){
            Cart[item].count++;
            //exitValue = Cart[item].count;
        }
        else{
            Cart[item] = {
                count: 1,
                orderType: "delivery"
            };
        }
        exitValue = Cart[item].count;
        console.log("-------------------------");
        console.log(exitValue);
        console.log("-------------------------");
        console.table(Cart);
        return exitValue;
    }

    function decrementCartItem(target){
        let item = target;
        let exitValue = 0;
        if(Cart.hasOwnProperty(item)&&Cart[item].count>0){
            Cart[item].count--;
            exitValue = Cart[item].count;
            if(Cart[item].count==0){
                delete Cart[item];
                conn.emit("SERVERremoveItemFromCheckoutCartOnCLIENT", {status: true, itemName: item});
                exitValue = 0;
            }
        }
        else{
            //another exitValue handler
        }
        console.log("-------------------------");
        console.log(exitValue);
        console.log("-------------------------");
        console.table(Cart);
        return exitValue;
    }
    
    var conn;

    io.sockets.on('connection', function(socket){
        conn = socket;
        
        socket.on("CLIENTconnectToSERVER", function(data){
            console.log("CLIENT connected to SERVER...");
             socket.emit("SERVERloadRestaurantMetaDataAtNodesOnCLIENT", {status: true, locations: Restaurants});
        });
        
        socket.on("CLIENTrequestCartItemsForCheckoutFromSERVER", function(data){
            let cartData = Cart;
            console.log("CLICKED ON THE DAMN CART!");
            if(data.status){
                console.log("emitting response!!!!");
                socket.emit("SERVERloadCartItemsForCheckoutOnCLIENT", {status: true, cart: cartData});
            }
        });
        
        socket.on("CLIENTincreaseItemCountInCartOnSERVER", function(data){
            let item = data.itemName;
            let responseValue = 0;
            if(data.status){
                responseValue = incrementCartItem(item);
                socket.emit("SERVERupdateItemCountInCartOnCLIENT", {status: true, post: responseValue, target: item});
            }
        });
        
        socket.on("CLIENTdecreaseItemCountInCartOnSERVER", function(data){
            let item = data.itemName;
            let responseValue = 0;
            if(data.status){
                responseValue = decrementCartItem(item);                
                if(responseValue>0){
                    socket.emit("SERVERupdateItemCountInCartOnCLIENT", {status: true, post: responseValue, target: item});
                }
            }
        });
        
        socket.on("CLIENTaddItemToCartOnSERVER", function(data){
            let item = data.item;
            
            if(Object.keys(Cart).length === 0 && Cart.constructor === Object){
                socket.emit("SERVERrevealCartButtonOnCLIENT", {status: true});
            }
            
            if(data.status){
                incrementCartItem(item);
            }
            
        });
       
        socket.on('disconnect', function(){
            console.log(`socket ${socket.id} disconnected.`);
        });
    });
//}//
