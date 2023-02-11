export default {
  Auth: {
    identityPoolId: "us-west-1:dde84c28-f86b-49df-9e9f-6e4d1fbfe54a", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "us-west-1", // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: "tellico-woodworks", //REQUIRED -  Amazon S3 bucket name
      region: "us-east-1", //OPTIONAL -  Amazon service region
    },
  },
  Analytics: {
    AWSPinpoint: {
      appId: "66bd613d74bd4022b3923ccf45f870c0",
      region: "us-west-2",
      mandatorySignIn: false,
    }
  }
};
