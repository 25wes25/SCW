export default {
  Auth: {
    identityPoolId: "us-west-1:dde84c28-f86b-49df-9e9f-6e4d1fbfe54a", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "us-west-1", // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: "swanson-custom-woodworks", //REQUIRED -  Amazon S3 bucket name
      region: "us-west-1", //OPTIONAL -  Amazon service region
    },
  },
};
