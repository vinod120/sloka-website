
const AWS = require("aws-sdk");
// // Create an S3 instance
const s3 = new AWS.S3({
 });


// Upload JSON to S3
export const uploadJsonToS3 = async (data) => {
  console.log("data", data)
  const params = {
    Bucket: "",
    Key: "",
    Body: JSON.stringify(data),
    ContentType: "application/json",
  };

  try {
    await s3.putObject(params).promise();
    console.log("Uploaded JSON successfully")
  } catch (error) {
    console.error("Error uploading JSON file:", error);
  }
};

// Function to get JSON from S3

export const getJsonFromS3 = async () => {
  const params = {
    Bucket: "",
    Key: "",
  };

  try {
    // Retrieve the object from S3
    const data = await s3.getObject(params).promise();

    // Convert Buffer to string and parse JSON
    const jsonData = JSON.parse(data.Body.toString());
    return jsonData;
  } catch (err) {
    console.error("Error retrieving file", err);
  }
};

export const uploadImgToS3 = async (file) => {
  const params = {
    Bucket: "drslokabucket",
    Key: `images/${file?.name}`, 
    Body: file,
    ContentType: file?.type,
  };

  try {
    // Upload the file directly to S3
    const data = await s3.upload(params).promise();
    return data?.Location
  } catch (error) {
    console.error('Error uploading file:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to upload file', error }),
    };
  }
};
