import {
  S3Client,
  CreateBucketsCommand,
  ListBucketsCommand,
} from "@aws-sdk/client-s3";
const client = new S3Client({ region: "us-east-1"});

const bucketConfig = {
  Bucket: "kk-sdk1-demo",
  CreateBucketConfiguration: {
    LocationConstraint: "us-east-2",
  },
};

const command = new CreateBucketCommand(BucketConfig);

const response = await client.send(command);

const listCommand = new ListBucketsCommand({});
const listResponse = await client.send(listCommand);

console.log(listResponse);