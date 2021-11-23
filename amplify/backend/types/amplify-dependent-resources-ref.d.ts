export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "ladcounterinvites": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "lad30counter": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "lad30counter": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}