const fs = require('fs');

const routesHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write(`<html>
                    <head><title>Enter your message:</title></head>
                        <body>
                            <form action="/message" method="POST">
                                <input type="text" name="message">
                                <button type="submit">submit</button>
                            </form>    
                        </body>
                  </html>`);
        //process.exit();--->to manually stop the event loop
        return res.end();
    }
    if(url === '/message' && method === "POST"){
        const body=[];
        req.on('data',(chunk)=>{//when data is still arriving in chunks event
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end',()=>{//when all data has arrived event
            const parsedBody = Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];

            fs.writeFile('message.txt',message,(err)=>{//callback for after logging the message
                res.statusCode=302;//i.e. redirtecting to some other url
                res.setHeader('Location','/');//redirecting to homepage by modifying the header
                return res.end();
            })
        })
    }

}

const dummyText = `just another export! **wink`;

module.exports = {
                    routesHandler,
                    dummyText
                };