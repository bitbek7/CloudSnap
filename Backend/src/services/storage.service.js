
import imagekit from "@imagekit/nodejs";
const imageKit=new imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
});
async function uploadFile(buffer){
const result=await imageKit.files.upload({
file:buffer.toString("base64"),
fileName:"image.jpg"
})
return result;
}
export default uploadFile;





/*
import { BlobServiceClient } from "@azure/storage-blob";

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);

const containerName = "images";

async function uploadFile(buffer, originalName) {
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // better filename (dynamic + original name)
  const blobName = `${Date.now()}-${originalName}`;

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  await blockBlobClient.uploadData(buffer);

  return {
    url: blockBlobClient.url,
}

export default uploadFile;
*/