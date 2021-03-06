define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authenticate user",
    "name": "Authenticate_User",
    "description": "<p>Authenticate new users with oauth2</p>",
    "group": "Authentication",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The type of loan i.e. savings or loans.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>The amount expecting from the loan.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>The currency of loan requesting amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>A unique identifier representing the user applying for the loan.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/auth/routes/index.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/learningLab/lab-contents/:contentId/status",
    "title": "Accept or Reject Learning Lab Content",
    "name": "Accept/Reject_Lab_Content",
    "description": "<p>Accept or reject lab contents</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>The Id of content to be accepted or rejected</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status of response 1 for accept and 2 for reject</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remarks",
            "description": "<p>Comments for rejected content</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "post",
    "url": "/learningLab/lab-contents/",
    "title": "Post Lab Contents Data",
    "name": "Create_Lab_Contents",
    "description": "<p>Create learning lab contents</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"content\": {\n   \"title\": \"Learning lab contents data\",\n   \"type\":\"video,\n   \"resource\":\"www.youtube.com/sTYfa\",\n   \"source\":\"www.youtube.com\",\n   \"category\":[\"categoryId\"],\n   \"description\":\"This is descriptions\",\n   \"tags\":[\"games\"],\n  \n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of posted content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>The source of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverUrl",
            "description": "<p>Cover image if the article has no imageUrl</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>The resource or content of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Array of category Ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of Tags</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "post",
    "url": "/learningLab",
    "title": "Create Learning Lab Category",
    "name": "Create_Learning_Lab_Category",
    "description": "<p>Create Learning Lab Category</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Health\",\n  \"description\":\"Category Info,\n  \"color\":\"#CCCCC\",\n  \"code\":\"RfahnTy4\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Learning Lab Category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of the category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color code of the category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Random generated code for each category</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "delete",
    "url": "/learningLab/lab-contents/contentId",
    "title": "Delete Learning Lab Content",
    "name": "Delete_Learning_lab_Content",
    "description": "<p>Delete learning lab contents</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "patch",
    "url": "/learningLab/",
    "title": "Edit Learning Lab Category",
    "name": "Edit_Learning_Lab_Category",
    "description": "<p>Edit Learning Lab Category</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Health\",\n  \"description\":\"Category Info,\n  \"color\":\"#CCCCC\",\n  \"code\":\"RfahnTy4\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The new name of Learning Lab Category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>The color code of category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Random generated code for each category</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "get",
    "url": "/learningLab/lab-contents",
    "title": "Get Draft Lab Contents Data",
    "name": "Get_Drafts_Contents",
    "description": "<p>Get all learning lab contents saved to draft</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "\"contents\" : [\n   {\n       \"_id\": \"5f51f4e0e0e7f300044eabce\",\n       \"likes_count\": 0,\n       \"search_count\": 0,\n       \"shares_count\": 0,\n       \"views_count\": 0,\n       \"approvedStatus\": \"pending\",\n       \"tags\": [],\n       \"category\": [\n           \"5ee2de2f8870ad0004f0ea8f\"\n       ],\n       \"ageRange\": [],\n       \"viewedBy\": [],\n       \"likedBy\": [],\n       \"status\":0,\n       \"sharedBy\": [],\n       \"deleted\": false,\n       \"source\": \"youtube.co.tz\",\n       \"title\": \"All of the stars\",\n       \"resource\": \"Write your article\",\n       \"userType\": \"1\",\n       \"readStatus\": true,\n       \"createdAt\": \"2020-09-04T08:03:44.280Z\",\n       \"updatedAt\": \"2020-09-04T08:03:44.280Z\",\n       \"__v\": 0,\n       \"createdBy\": \"\"\n   },",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "get",
    "url": "/learningLab/lab-contents",
    "title": "Get Lab Contents Data",
    "name": "Get_Lab_Contents",
    "description": "<p>Get learning lab contents</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "\"content\": {\n   \"title\": \"Learning lab contents data\",\n   \"type\":\"video,\n   \"resource\":\"www.youtube.com/sTYfa\",\n   \"source\":\"www.youtube.com\",\n   \"category\":[\"categoryId\"],\n   \"description\":\"This is descriptions\",\n   \"tags\":[\"skills\"],\n  \n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "get",
    "url": "/learningLab/",
    "title": "Get all learning lab categories",
    "name": "Get_Learning_Lab_Categories",
    "description": "<p>Fetches all learning lab categories</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "get",
    "url": "/learningLab/tags",
    "title": "Get all distinct tags",
    "name": "Get_Tags",
    "description": "<p>Fetches all tags</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": " {\n    \"success\": true,\n    \"message\": \"Success\",\n    \"statusCode\": 6100,\n    \"data\": [\n        \"entertainment\",\n        \"games\",\n        \"health\",\n        \"football\",\n        \"medical\",\n        \"medicine\",\n        \"events\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "get",
    "url": "/learningLab/:labId",
    "title": "",
    "name": "Get_single_lab_category",
    "description": "<p>Fetch a single learning lab category</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "post",
    "url": "/learningLab/lab-contents/publish",
    "title": "Publish lab content",
    "name": "Publish_Lab_content",
    "description": "<p>Publish learning lab contents</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"content\": {\n   \"title\": \"Learning lab contents data\",\n   \"type\":\"video,\n   \"resource\":\"www.youtube.com/sTYfa\",\n   \"source\":\"www.youtube.com\",\n   \"category\":[\"categoryId\"],\n   \"description\":\"This is descriptions\",\n   \"tags\":[\"skills\"],\n  \n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of posted content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>The source of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverUrl",
            "description": "<p>Cover image if the article has no imageUrl</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>The resource or content of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Array of category Ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of Tags</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "post",
    "url": "/learningLab/lab-contents/save",
    "title": "Save to Draft",
    "name": "Save_lab_content_to_draft",
    "description": "<p>Save learning lab content to draft</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"content\": {\n   \"title\": \"Learning lab contents data\",\n   \"type\":\"video,\n   \"resource\":\"www.youtube.com/sTYfa\",\n   \"source\":\"www.youtube.com\",\n   \"category\":[\"categoryId\"],\n   \"description\":\"This is descriptions\",\n   \"tags\":[\"games\"],\n  \n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of posted content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>The source of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverUrl",
            "description": "<p>Cover image if the article has no imageUrl</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>The resource or content of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Array of category Ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of Tags</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "delete",
    "url": "/learningLab/:labId",
    "title": "Delete Learning Lab Category",
    "name": "Soft_Delete_Learning_Lab_Category",
    "description": "<p>Soft deletes Learning Lab Category</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labId",
            "description": "<p>The id of Learning Lab Category to be deleted</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "post",
    "url": "/learningLab/lab-contents/suggest",
    "title": "Suggest Lab Content",
    "name": "Submit_contents_for_review",
    "description": "<p>Suggest learning lab contents for review</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"content\": {\n   \"title\": \"Learning lab contents data\",\n   \"type\":\"video,\n   \"resource\":\"www.youtube.com/sTYfa\",\n   \"source\":\"www.youtube.com\",\n   \"category\":[\"categoryId\"],\n   \"description\":\"This is descriptions\",\n   \"tags\":[\"medical\",\"health\"],\n\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of posted content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>The source of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverUrl",
            "description": "<p>Cover image if the article has no imageUrl</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>The resource or content of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Array of category Ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of Tags</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "put",
    "url": "/learningLab/lab-contents",
    "title": "Update Lab Contents Data",
    "name": "Update_Lab_Contents",
    "description": "<p>Update learning lab contents</p>",
    "group": "Learning_Lab",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"content\": {\n   \"title\": \"Learning lab contents data\",\n   \"type\":\"article,\n   \"resource\":\"www.google.com\",\n   \"source\":\"www.youtube.com\",\n   \"category\":[\"categoryId\"],\n   \"description\":\"This is descriptions\",\n   \"tags\":[\"skills\"],\n    \"coverUrl\":\"www.url.co.tz\",\n  \n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>ObjectId of the content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverUrl",
            "description": "<p>Cover url for articles with no imageUrl</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of posted content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>The source of content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Brief description of the content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>The resource or content of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Array of category Ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of Tags</p>"
          }
        ]
      }
    },
    "filename": "src/modules/learningLabs/routes/index.ts",
    "groupTitle": "Learning_Lab"
  },
  {
    "type": "get",
    "url": "/girlChild/interests",
    "title": "Fetch GirlChild Intersts",
    "name": "Fetch_GirlChild_Intersts",
    "description": "<p>Fetch interests available to girl child</p>",
    "group": "Onboarding",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"success\": false,\n  \"message\": \"Fetch successful!\",\n \"statusCode\": 6503,\n\"data\": [\n   {\n         \"_id\": \"5d59702585b68400049ae293\",\n         \"name\": \"Funding\",\n         \"color\": \"#717EBC\",\n         \"description\": \"Get opportunities to intern in organizations for you to gain work experience \",\n         \"code\": \"ei5y44jzh4t3vm\"\n     },\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Onboarding"
  },
  {
    "type": "post",
    "url": "/girlChild/onboarding/interests",
    "title": "Onboarding",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Add a girlChild  interests during onboarding</p>",
    "group": "Onboarding",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "interests",
            "description": "<p>An array of interest ID's  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Onboarding"
  },
  {
    "type": " patch ",
    "url": "/girlChild/dream",
    "title": "Fetch Opportunities by interest",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Onboarding",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dream",
            "description": "<p>a simple sentence with the girl child's dream</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n   \"dream\": \"A new idea of a dream\",\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n  \"success\": true,\n \"message\": \"Dream Updated!\",\n  \"statusCode\": 6100,\n   \"data\": {\n      \"userType\": \"girlChild\",\n     \"role\": null,\n     \"dream\": \"my need dream here\",\n     \"deleteReason\": \"too much email\",\n     \"changePassword\": false,\n     \"deleted\": true,\n     \"disabled\": false,\n     \"interests\": [],\n     \"_id\": \"5ea7442b17993f2335b04c47\",\n     \"email\": \"jbarac65@gmail.com\",\n     \"createdAt\": \"2020-04-27T20:44:27.513Z\",\n     \"updatedAt\": \"2020-04-28T17:03:04.385Z\",\n     \"__v\": 0\n }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Onboarding"
  },
  {
    "type": "post",
    "url": "/girlChild/profile/dream",
    "title": "Add GirlChild Dream",
    "name": "Girl_Child_Dream",
    "description": "<p>Post girl child's dream  string</p>",
    "group": "Onboarding",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dream",
            "description": "<p>A simple clear string as a dream with</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Onboarding"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities",
    "title": "Fetch Opportunities",
    "name": "Fetch_Opportunites",
    "description": "<p>Fetch all the available opportunities</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://riseupapi.herokuapp.com/api/v2/girlChild/opportunities",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n  \"statusCode\": 6100,\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/summary/:id",
    "title": "Fetch Summary of Opportunities by interest",
    "name": "Fetch_Opportunites_Summary_byInterest",
    "description": "<p>Fetch a summary of a maximum of  4 opportunities</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestId",
            "description": "<p>The id of the interest for the opportunities</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n  \"statusCode\": 6100,\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/interest/:id",
    "title": "Fetch Opportunities by interest",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities which are about to expire by interest</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestId",
            "description": "<p>The interstId of the opportunities</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n  \"statusCode\": 6100,\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/interest/:id",
    "title": "Fetch Opportunities by interest",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Opportunities",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>interest id for the opportunities you want to retrive</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/interest/:id",
    "title": "Fetch Opportunities by interest",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Opportunities",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>interest id for the opportunities you want to retrive</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/interest/:id",
    "title": "Fetch Opportunities by interest",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Opportunities",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>interest id for the opportunities you want to retrive</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/interest/:id",
    "title": "Fetch Opportunities by interest",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Opportunities",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>interest id for the opportunities you want to retrive</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/:opportunityId",
    "title": "Fetch Opportunity by Id",
    "name": "Fetch_Opportunity_by_ID",
    "description": "<p>Fetch opportunity details by opportunity ID</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/:opportunityId",
    "title": "Fetch Opportunity by Id",
    "name": "Fetch_Opportunity_by_ID",
    "description": "<p>Fetch opportunity details by opportunity ID</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/:opportunityId",
    "title": "Fetch Opportunity by Id",
    "name": "Fetch_Opportunity_by_ID",
    "description": "<p>Fetch opportunity details by opportunity ID</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "get",
    "url": "/girlChild/opportunities/:opportunityId",
    "title": "Fetch Opportunity by Id",
    "name": "Fetch_Opportunity_by_ID",
    "description": "<p>Fetch opportunity details by opportunity ID</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "post",
    "url": "/girlChild/opportunities/other/",
    "title": "Fetch other Opportunities",
    "name": "Fetch_other_Opportunites",
    "description": "<p>Explore other opportunities not subscribed to by girl child</p>",
    "group": "Opportunities",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "opportunityId",
            "description": "<p>The ids of the interests for the opportunities</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"We got all your opportunites!\",\n  \"statusCode\": 6100,\n  \"data\": [\n       {\n         \"userType\": \"admin\",\n          \"approvedStatus\": \"pending\",\n          \"interests\": [\n              {\n                  \"_id\": \"5d58be68322c520004841549\",\n                  \"name\": \"Jobs\",\n                  \"color\": \"#E75412\",\n                  \"description\": \"\",\n                  \"code\": \"f6y4ab4jzgdpvi1\"\n              }\n          ],\n          \"deleted\": true,\n          \"_id\": \"5d593c845c53e70004f259ae\",\n          \"title\": \"Seminar\",\n          \"description\": \"Sed accumsan tempus dapibus. Pellentesque sodales urna sit amet orci vehicula, quis interdum ligula tempor. In pellentesque dolor bibendum, tincidunt arcu eu, convallis mauris. Morbi et efficitur justo, sit amet egestas est.\",\n          \"resourceImg\": \"https://riseup-storage.s3.amazonaws.com/images/achievement.png\",\n          \"pdfUrl\": \"https://riseup-storage.s3.amazonaws.com/documents/invoice-2019-05-17.pdf\",\n          \"websiteUrl\": \"https://material.io/resources/icons/?search=more&icon=people&style=baseline\",\n          \"videoUrl\": \"https://youtu.be/LwQe4L9svUU\",\n          \"deadlineDate\": \"2020-02-13T00:00:00.000Z\",\n          \"status\": 1,\n          \"createdAt\": \"2019-08-18T11:54:44.945Z\",\n          \"updatedAt\": \"2019-11-21T13:42:48.848Z\",\n          \"__v\": 0\n      }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Opportunities"
  },
  {
    "type": "post ",
    "url": "/girlChild//profile/interests/add",
    "title": "Fetch Add Girl Child's interests",
    "name": "Add_GirlChild_Interests",
    "description": "<p>FAdd a single or multiple interests to a girl childs profile</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestIds",
            "description": "<p>The type of loan  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n   \"interestIds\": [\"56jnfjjr8or\",\"56cb91bdc3464f14678934ca\"]\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post ",
    "url": "/girlChild/profile/interests/add",
    "title": "Subscribe to new single Learning Lab",
    "name": "Add_GirlChild_Interests",
    "description": "<p>FAdd a single or multiple interests to a girl childs profile</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestIds",
            "description": "<p>The type of loan  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n   \"interestIds\": [\"56jnfjjr8or\",\"56cb91bdc3464f14678934ca\"]\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post ",
    "url": "/girlChild/profile/interests/add",
    "title": "Subscribe to new single Learning Lab",
    "name": "Add_GirlChild_Interests",
    "description": "<p>FAdd a single or multiple interests to a girl childs profile</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestIds",
            "description": "<p>The type of loan  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n   \"interestIds\": [\"56jnfjjr8or\",\"56cb91bdc3464f14678934ca\"]\n\n}\n//",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post ",
    "url": "/girlChild/profile/interests/add",
    "title": "Subscribe to new single Learning Lab",
    "name": "Add_GirlChild_Interests",
    "description": "<p>FAdd a single or multiple interests to a girl childs profile</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestIds",
            "description": "<p>The type of loan  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n   \"interestIds\": [\"56jnfjjr8or\",\"56cb91bdc3464f14678934ca\"]\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post ",
    "url": "/girlChild/profile/interests/add",
    "title": "Subscribe to new single Learning Lab",
    "name": "Add_GirlChild_Interests",
    "description": "<p>FAdd a single or multiple interests to a girl childs profile</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestIds",
            "description": "<p>The type of loan  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n   \"interestIds\": [\"56jnfjjr8or\",\"56cb91bdc3464f14678934ca\"]\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post ",
    "url": "/girlChild/profile/interests/add",
    "title": "Subscribe to new single Learning Lab",
    "name": "Add_GirlChild_Interests",
    "description": "<p>FAdd a single or multiple interests to a girl childs profile</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestIds",
            "description": "<p>The type of loan  e.g ['56cb91bdc3464f14678934ca']</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\n{\n   \"interestIds\": [\"56jnfjjr8or\",\"56cb91bdc3464f14678934ca\"]\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/girlChild/onboarding/checkUsername",
    "title": "Add Username",
    "name": "Add_Username",
    "description": "<p>Save a girl child's username eg. Tabby</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Add a new username eg. Tabby</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n   \"message\": \"Nickname already taken!\",\n \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/girlChild/onboarding/username",
    "title": "Add Username",
    "name": "Add_Username",
    "description": "<p>Save a girl child's username eg. Tabby</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Add a new username eg. Tabby</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"success\": true,\n   \"message\": \"Nickname already taken!\",\n \"data\": {}\n}ya",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/girlChild/profile/deactivate",
    "title": "Deactivate Account",
    "name": "Deactivate_account",
    "description": "<p>Suspend the account for a specific reason</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"reason\": \"some predefined reason text\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The  reason for account deactivation</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n   \"success\": true,\n \"message\": \"User account deactivated!\",\n  \n \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "delete",
    "url": "/girlChild/profile",
    "title": "",
    "name": "Delete_User_Profile",
    "description": "<p>Delete the user profile permanently</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"userID here\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>A unique user identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the girl child</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "put",
    "url": "/profile",
    "title": "Edit Biodata",
    "name": "Edit_BioData",
    "description": "<p>Edit your profile information</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The type of loan i.e. savings or loans.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>The amount expecting from the loan.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>The currency of loan requesting amount.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/girlChild/onboarding/email",
    "title": "Add Girl Child Email",
    "name": "Fetch_Opportunites_byInterest",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Any correct email would do .eg wakyj07@ gmail.com</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/girlChild/profile",
    "title": "Fetch Profile",
    "name": "Fetch_Porifile_information",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/chat/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/girlChild/profile",
    "title": "Fetch Profile",
    "name": "Fetch_Porifile_information",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/chat/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/girlChild/profile",
    "title": "Fetch Profile",
    "name": "Fetch_Porifile_information",
    "description": "<p>Fetch all the available opportunities by interest</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "post ",
    "url": "/girlChild/profile/interests/remove",
    "title": "Remove GirlChild's interest",
    "name": "Remove_Girl_Child's_interest",
    "description": "<p>Remove single interest</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interestId",
            "description": "<p>A unique identifier for the specific interest i.e  e.g '56cb91bdc3464f14678934ca'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n   \"interestId\": \"56jnfjjr8or\",\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  },
  {
    "type": "patch",
    "url": "/girlChild/profile/demographic",
    "title": "Update Demographic data",
    "name": "Update_Demographic_Data",
    "description": "<p>Update the demographic data</p>",
    "group": "Profile",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"educationLevel\": \"college\",\n  \"employmentStatus\":\"Unemployed\",\n  \"region\":\"Arusha\",\n  \"country\":\"Tanzania\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "educationLevel",
            "description": "<p>The education level of the girl child</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employmentStatus",
            "description": "<p>The employment status  of the girl child</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>The region name  string e.g Arusha</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country name  string e.g Tanzania</p>"
          }
        ]
      }
    },
    "filename": "src/modules/girl/routes/index.ts",
    "groupTitle": "Profile"
  }
] });
