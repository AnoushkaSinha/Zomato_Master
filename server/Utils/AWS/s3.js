import AWS from "aws-sdk";



const s3Bucket = new AWS.S3({
  accessKeyId:
  "AKIAZJIHEZV33QIDUWU2" ,
  secretAccessKey:"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" ,
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};