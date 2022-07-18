# skill management tool

##

> user registers

```json
{
  "user": {
    "fullName": "sanjeev",
    "email": "sanjeev@gamil.com",
    "password": "202cb962ac59075b964b07152d234b70",
    "_id": "62d55c2ad0ea0487391daf24",
    "updatedAt": "2022-07-18T13:12:10.971Z",
    "createdAt": "2022-07-18T13:12:10.971Z",
    "__v": 0
  }
}
```

Authentication Required : No

This endpoint will registers a new user

### HTTP Request

`POST http://localhost:8086/user/register`

### Body Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| fullName  | string | Yes      |             |

##

> user login

```json
{
  "user": {
    "_id": "62d55c2ad0ea0487391daf24",
    "fullName": "sanjeev",
    "email": "sanjeev@gamil.com",
    "password": "202cb962ac59075b964b07152d234b70",
    "updatedAt": "2022-07-18T13:12:10.971Z",
    "createdAt": "2022-07-18T13:12:10.971Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU1YzJhZDBlYTA0ODczOTFkYWYyNCIsImlhdCI6MTY1ODE0OTk2OCwiZXhwIjoxNjg5Njg1OTY4fQ.gfjuQVXxXcde-cv0VmUcZRlFbBhooepcVDUX5YwltGs"
}
```

Authentication Required : No

This endpoint will login

### HTTP Request

`POST http://localhost:8086/user/login`

### Body Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| email     | string | Yes      |             |
| password  | string | Yes      |             |

## GET skills by search strings

> to get skills by search string

```json
{
  "data": [
    {
      "_id": "62d2ae70bf3089b80aba23fb",
      "skillName": "node.js",
      "updatedAt": "2022-07-17T09:49:15.974Z",
      "createdAt": "2022-07-17T09:49:15.974Z"
    }
  ]
}
```

Authentication Required : No

This endpoint retrieves details as per user's requirements

### HTTP Request

`GET http://localhost:8086/skill/getSkills?searchData=node`

### Query String Parameters

| Parameter  | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| searchData | String | Yes      |             |

## ADD skills by user

> to add skills by user

```json
{
  "data": {
    "userId": "62d55c2ad0ea0487391daf24",
    "skillId": "62d2aec4bf3089b80aba23fe",
    "levelId": "62d2e076bf3089b80aba2402",
    "proficiency": "30",
    "yearsOfExp": 5,
    "isExpert": false,
    "_id": "62d583d20a9d68089a4bf204",
    "updatedAt": "2022-07-18T16:01:22.176Z",
    "createdAt": "2022-07-18T16:01:22.176Z",
    "__v": 0
  }
}
```

Authentication Required : YES

This endpoint will add user's skills

### HTTP Request

`POST http://localhost:8086/skill/addSkills`

### BODY Parameters

| Parameter   | Type   | Required | Description |
| ----------- | ------ | -------- | ----------- |
| skillId     | String | Yes      |             |
| levelId     | String | Yes      |             |
| proficiency | String | Yes      |             |
| yearsOfExp  | NUMBER | Yes      |             |

## edit skills by skillUSerId

> get file name and url

```json
{
  "data": {
    "_id": "62d3f3ef41848190be0f7ab3",
    "userId": "62d2a615820b544f262fdbeb",
    "skillId": "62d2aea5bf3089b80aba23fc",
    "levelId": "62d2e076bf3089b80aba2402",
    "proficiency": "40",
    "yearsOfExp": 8,
    "isExpert": true,
    "updatedAt": "2022-07-17T11:35:11.786Z",
    "createdAt": "2022-07-17T11:35:11.786Z",
    "__v": 0
  }
}
```

Authentication Required : Yes

This endpoint edits skills

### HTTP Request

`PUT http://localhost:8086/skill/editSkills/{skill_user_id}`

## Get skills by userId

> to get all skills of user

```json
{
  "data": [
    {
      "_id": "62d3f3ef41848190be0f7ab3",
      "proficiency": "40",
      "yearsOfExp": 8,
      "isExpert": true,
      "updatedAt": "2022-07-17T11:35:11.786Z",
      "userName": "shubham divesh",
      "skillDetails": {
        "_id": "62d2aea5bf3089b80aba23fc",
        "skillName": "react.js"
      },
      "userEmail": "divesh.shubham@gmail.com",
      "levelDetails": {
        "_id": "62d2e076bf3089b80aba2402",
        "level": "ADVANCE"
      }
    },
    {
      "_id": "62d406dcc72d115687dfda19",
      "proficiency": "30",
      "yearsOfExp": 5,
      "isExpert": false,
      "updatedAt": "2022-07-17T12:55:56.072Z",
      "userName": "shubham divesh",
      "skillDetails": {
        "_id": "62d2aec4bf3089b80aba23fe",
        "skillName": "backend"
      },
      "userEmail": "divesh.shubham@gmail.com",
      "levelDetails": {
        "_id": "62d2e076bf3089b80aba2402",
        "level": "ADVANCE"
      }
    },
    {
      "_id": "62d4077512550df33b8c2c2e",
      "proficiency": "30",
      "yearsOfExp": 5,
      "isExpert": false,
      "updatedAt": "2022-07-17T12:58:29.347Z",
      "userName": "shubham divesh",
      "skillDetails": {
        "_id": "62d2aec4bf3089b80aba23fe",
        "skillName": "backend"
      },
      "userEmail": "divesh.shubham@gmail.com",
      "levelDetails": {
        "_id": "62d2e076bf3089b80aba2402",
        "level": "ADVANCE"
      }
    }
  ]
}
```

Authentication Required : YES

This endpoint will get skill for a user

### HTTP Request

`GET http://localhost:8086/skill/skillByUserId`

## Add assesment

> to add assesment

```json
{
  "data": {
    "assignId": "62d4cebebf3089b80aba2416",
    "skillId": "62d2ae70bf3089b80aba23fb",
    "userId": "62d2a615820b544f262fdbeb",
    "isCompleted": true,
    "levelId": "62d2e026bf3089b80aba2401",
    "profiencyScored": 40,
    "numberOfAssesment": 2,
    "isPending": false,
    "_id": "62d587a900b7b1b0b7dc6295",
    "updatedAt": "2022-07-18T16:17:45.112Z",
    "createdAt": "2022-07-18T16:17:45.112Z",
    "__v": 0
  }
}
```

Authentication Required : YES

This endpoint will add assesment for a user

### HTTP Request

`POST http://localhost:8086/assesment/addAssesment`

## Get assesment by user

> to get assesment by user

```json
{
  "data": [
    {
      "_id": "62d5024a37a66354a5b3ef3b",
      "isCompleted": true,
      "profiencyScored": 40,
      "numberOfAssesment": 2,
      "updatedAt": "2022-07-18T06:48:42.650Z",
      "userName": "shubham divesh",
      "skillDetails": {
        "_id": "62d2ae70bf3089b80aba23fb",
        "skillName": "node.js"
      },
      "userEmail": "divesh.shubham@gmail.com",
      "levelDetails": {
        "_id": "62d2e026bf3089b80aba2401",
        "level": "BEGINNER"
      },
      "assesMentDetails": {
        "_id": "62d4cebebf3089b80aba2416",
        "skillId": "62d2ae70bf3089b80aba23fb",
        "levelId": "62d2e026bf3089b80aba2401",
        "totalAssesments": 15
      }
    },
    {
      "_id": "62d53ca9a7a260272c94ea20",
      "isCompleted": true,
      "profiencyScored": 40,
      "numberOfAssesment": 2,
      "updatedAt": "2022-07-18T10:57:45.308Z",
      "userName": "shubham divesh",
      "skillDetails": {
        "_id": "62d2ae70bf3089b80aba23fb",
        "skillName": "node.js"
      },
      "userEmail": "divesh.shubham@gmail.com",
      "levelDetails": {
        "_id": "62d2e026bf3089b80aba2401",
        "level": "BEGINNER"
      },
      "assesMentDetails": {
        "_id": "62d4cebebf3089b80aba2416",
        "skillId": "62d2ae70bf3089b80aba23fb",
        "levelId": "62d2e026bf3089b80aba2401",
        "totalAssesments": 15
      }
    }
  ]
}
```

Authentication Required : YES

This endpoint will get assesment for a user

### HTTP Request

`GET http://localhost:8086/assesment/getDetails`

## Get self assesment by user

> get self assesment by user

```json
{
  "data": [
    {
      "_id": "62d54ef9ee89c2ff1871d32f",
      "totalExp": 5,
      "profiency": 45,
      "updatedAt": "2022-07-18T12:15:53.462Z",
      "userName": "shubham divesh",
      "skillDetails": {
        "_id": "62d2ae70bf3089b80aba23fb",
        "skillName": "node.js"
      },
      "userEmail": "divesh.shubham@gmail.com",
      "levelDetails": {
        "_id": "62d2e026bf3089b80aba2401",
        "level": "BEGINNER"
      }
    }
  ]
}
```

Authentication Required : YES

This endpoint will get self assesment by user

### HTTP Request

`GET http://localhost:8086/assesment/getSelfAssesment/{skillId}`

## Register admin

> register admin

```json
{
  "admin": {
    "adminName": "admin",
    "email": "shubham@gil.com",
    "password": "202cb962ac59075b964b07152d234b70",
    "_id": "62d56e5bbe51d8b73b0157f1",
    "updatedAt": "2022-07-18T14:29:47.175Z",
    "createdAt": "2022-07-18T14:29:47.175Z",
    "__v": 0
  }
}
```

### BODY Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| adminName | String | Yes      |             |
| email     | String | Yes      |             |
| password  | String | Yes      |             |

Authentication Required : YES

This endpoint will register a admin

### HTTP Request

`POST http://localhost:8086/admin/register`

## Add selfassesment

> add assesment

```json
{
  "adminData": {
    "_id": "62d56e5bbe51d8b73b0157f1",
    "adminName": "admin",
    "email": "shubham@gil.com",
    "password": "202cb962ac59075b964b07152d234b70",
    "updatedAt": "2022-07-18T14:29:47.175Z",
    "createdAt": "2022-07-18T14:29:47.175Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU2ZTViYmU1MWQ4YjczYjAxNTdmMSIsImlhdCI6MTY1ODE1NDY2NSwiZXhwIjoxNjg5NjkwNjY1fQ.6UXTcOegM1RH5yoJX0Kg_4-CW7K3IKm88sugA4tWqW0"
}
```

### BODY Parameters

| Parameter         | Type    | Required | Description |
| ----------------- | ------- | -------- | ----------- |
| assignId          | String  | Yes      |             |
| skillId           | String  | Yes      |             |
| levelId           | String  | Yes      |             |
| isCompleted       | Boolean | Yes      |             |
| profiencyScored   | Number  | Yes      |             |
| numberOfAssesment | Number  | Yes      |             |

Authentication Required : YES

This endpoint will login a admin

### HTTP Request

`POST http://localhost:8086/assesment/addAssesment`

## Register login

> register login

```json
{
  "adminData": {
    "_id": "62d56e5bbe51d8b73b0157f1",
    "adminName": "admin",
    "email": "shubham@gil.com",
    "password": "202cb962ac59075b964b07152d234b70",
    "updatedAt": "2022-07-18T14:29:47.175Z",
    "createdAt": "2022-07-18T14:29:47.175Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU2ZTViYmU1MWQ4YjczYjAxNTdmMSIsImlhdCI6MTY1ODE1NDY2NSwiZXhwIjoxNjg5NjkwNjY1fQ.6UXTcOegM1RH5yoJX0Kg_4-CW7K3IKm88sugA4tWqW0"
}
```

### BODY Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| email     | String | Yes      |             |
| password  | String | Yes      |             |

Authentication Required : YES

This endpoint will login a admin

### HTTP Request

`POST http://localhost:8086/admin/login`

## Add skills by admin

> add skills by admin

```json
{
  "data": {
    "skillName": "react native",
    "_id": "62d58dc9fff5db459fce62f7",
    "updatedAt": "2022-07-18T16:43:53.097Z",
    "createdAt": "2022-07-18T16:43:53.097Z",
    "__v": 0
  }
}
```

### BODY Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| skillName | String | Yes      |             |

Authentication Required : YES

This endpoint will add skills by admin

### HTTP Request

`POST http://localhost:8086/admin/level`

## Add level by admin

> add level by admin

```json
{
  "data": {
    "level": "PRO STAR",
    "_id": "62d58e47fff5db459fce62fb",
    "updatedAt": "2022-07-18T16:45:59.442Z",
    "createdAt": "2022-07-18T16:45:59.442Z",
    "__v": 0
  }
}
```

### BODY Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| level     | String | Yes      |             |

Authentication Required : YES

This endpoint will add level by admin

### HTTP Request

`POST http://localhost:8086/admin/addSkills`

## Get skills by admin

> get skills by admin

```json
{
  "data": [
    {
      "_id": "62d2ae70bf3089b80aba23fb",
      "skillName": "node.js",
      "updatedAt": "2022-07-18T14:59:22.527Z",
      "createdAt": "2022-07-18T14:59:22.527Z"
    },
    {
      "_id": "62d2aea5bf3089b80aba23fc",
      "skillName": "react.js",
      "updatedAt": "2022-07-18T14:59:22.527Z",
      "createdAt": "2022-07-18T14:59:22.527Z"
    },
    {
      "_id": "62d2aeb7bf3089b80aba23fd",
      "skillName": "C++",
      "updatedAt": "2022-07-18T14:59:22.527Z",
      "createdAt": "2022-07-18T14:59:22.527Z"
    },
    {
      "_id": "62d2aec4bf3089b80aba23fe",
      "skillName": "backend",
      "updatedAt": "2022-07-18T14:59:22.527Z",
      "createdAt": "2022-07-18T14:59:22.527Z"
    }
  ]
}
```

Authentication Required : YES

This endpoint will get skills by admin

### HTTP Request

`GET http://localhost:8086/admin/skills`

## Get skills by admin

> get skills by admin

```json
{
  "data": [
    {
      "_id": "62d2e026bf3089b80aba2401",
      "level": "BEGINNER",
      "updatedAt": "2022-07-18T15:10:11.725Z",
      "createdAt": "2022-07-18T15:10:11.725Z"
    },
    {
      "_id": "62d2e076bf3089b80aba2402",
      "level": "ADVANCE",
      "updatedAt": "2022-07-18T15:10:11.725Z",
      "createdAt": "2022-07-18T15:10:11.725Z"
    },
    {
      "_id": "62d2e07fbf3089b80aba2403",
      "level": "MASTER",
      "updatedAt": "2022-07-18T15:10:11.725Z",
      "createdAt": "2022-07-18T15:10:11.725Z"
    },
    {
      "_id": "62d2e090bf3089b80aba2404",
      "level": "EXPERT",
      "updatedAt": "2022-07-18T15:10:11.726Z",
      "createdAt": "2022-07-18T15:10:11.726Z"
    },
    {
      "_id": "62d2e09dbf3089b80aba2405",
      "level": "STAR",
      "updatedAt": "2022-07-18T15:10:11.726Z",
      "createdAt": "2022-07-18T15:10:11.726Z"
    }
  ]
}
```

Authentication Required : YES

This endpoint will get levels by admin

### HTTP Request

`GET http://localhost:8086/admin/levels`
