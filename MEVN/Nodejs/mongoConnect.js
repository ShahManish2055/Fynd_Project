const mongodb = require("mongodb");
//
const url = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(url);

/**
 * connecting to mongodb and running find queries on socialApp db
 */
async function run() {
    try {
        //connecting to client: sending connection request
        await client.connect();//wait here unless session opens
        //selecting the users collection
        const UserCollection = client.db("School").collection("college");
        //finding the user colllection
        const cursor = UserCollection.find({});
        //iterating over the curosr
        await cursor.forEach((docs) => {
            console.log(docs);
        });
        console.log("Aggregation query");
    }

    catch (e) {
        console.error(e);
      } 
      finally {
        await client.close();//wait
      }
}
run();


// ''''''''''''''''''''''''''''''''''''''''''''''''''''''
// const mongodb=require("mongodb");

// const url="mongodb://localhost:27017";

// const client=new mongodb.MongoClient(url);

// async function run(){
//     try{
//         await client.connect();
//         const UserCollection=client.db("School").collection("college");
//         const cursor=UserCollection.find({});
//         await cursor.forEach((docs)=>{
//         console.log(docs);
//         });

//         console.log("Aggregation query");

//         // const aggregate=UserCollection.aggregate([
//         //     {
//         //         $lookup:{
//         //             from:"posts",
//         //             localField:"postid",
//         //             foreignField:"postid",
//         //             as:"user_posts",

//         //         }
//         //     }
//         // ])
//     }

//     catch (e) {
//         console.error(e);
//       } finally {
//         await client.close();//wait
//       }
// }
// run();

