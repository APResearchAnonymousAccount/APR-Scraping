
const OPENAI_AUTHORIZATION_KEY = "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJ0aGlzaXNmb3JyZXNlYXJjaGlzd2VhckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZ2VvaXBfY291bnRyeSI6IlVTIn0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1PdlFKV3lDWG83ZW1lTVJEU29WSVJhRDcifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzOThmN2RmMmJmNmRiZTc3ZTI5NDZjYSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY3MzIxNzY0MCwiZXhwIjoxNjczODIyNDQwLCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9mZmxpbmVfYWNjZXNzIn0.AirG8r6F9c9L10zwsfyrrDv3j8INlbXsS1tTA56PaydJayUE4_YvzQolpmrgz5iKGUgnV0Nw0-egdxm-27AM1W9FFh_4daesnkSgO-JQUCXs5G8ecSfPu8wu5kTOx6JCKFnxRpmOrfQmiFZs_UBy7ODxSDT8Bgixqpc3trJxOCQbAsyvHC25Xsuspp1KqrNcMDrqqOYd09kCmu51UsF9zjOCsR-JTki8I9z6d5M_4dqzjr5IR-3JJhinTD1GzXm5gDaorMDP8AW3AoeVakKHfA1iYPHFLRy4PBPld-2E2iVX_9JE32kckAPhwBWHP3Qwf6jKtrjHgsTiRS-tJISyrQ"
const OPENAI_COOKIE = "Cookie: _ga=GA1.2.972225900.1670967803; cf_clearance=vWjhSRkchrs60msWjuNqtoR5btOu_Xt8Dox7OmuGe4k-1673400055-0-1-5d2233ee.a63b96f1.a236c0e-160; intercom-device-id-dgkjq2bp=4e417016-dda2-4142-a4c4-ba583caa97ac; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Cp4pu6WdsD93gBl_.bWs0sSM2eVm5SRumR1iCteq4NglsHMQZcIlSnIkhwwWWBX-D4FEXOPo7I1RkG1OE5WFl7K5bExBZqpKEGmG1lJnmBaYlUfWS5y2BLBDq0glYVbqMxu6nnBf-ESW7KTKCchSz8b3RN_j11aMQdk0BlQUklV98eeTvSYv7jB7I8AfgGBuDaf5N2u36E6nXvVT79uS6k4zWnqKD1Nm9x7mhLKZxjNIGj5QP2wec0cKNrHQgD8Ql_ERAUk1C2z-vNMGVbGrZSulCYGq1uheUO3zGZ-5foyP_okaLOq8MFFLx5hqHUZ3lTb1y-OGFfUugp3b-MlBhRX1XaVu5dMhQuIpc95s3WYHFcshHXsRi1m1GjpEisDuZAaT7M-sk7SP33lm5p7bC2KN6-FDmmXMAC9g0-dFxZrHaGLR0B1Vh1Bb4r0Mhdbb4XRdD5JioUZ-UgzcvzB1wgUjBHH_gjwIv-QmBNws-tJsRG-l9STs98bwn-h6pcMH7fuHf6bMOcUAj_vAeSl2SlzrXxSDl0eLrf5P5E5AaV26vmT1Ngoq4xgKIIhoRIxe16h6IXov_XKIx0_iuIbpi0DcyZ4Ipp7PiVVQ68quM8f80ExCAyIpyevvywa1gSKVrSZCuetB0SjHxU8y7lwk1dYR0LxOls37ApXYRgqLoVkPGlydn2o9oDJMZ9pMRiseXUYgQF4jqUZu8RIRlCv7JNvbzxRuZ6UnSj60uXaR5c6joekuEZwMWini57W0IT8-z9dr2FnWLXdR5s3-ppCZj5fzQdw6xFj6Uz3ZBT_ppJp3GxjE84oo1WDr_7ZVCsM92mDttMqnNMneFFPVz7NwAYLYzrUTi4PqE5-2ZCFr5-KYJkMEk2R3LfnuMkGOKc9A7xVbKugyoKmbkt_VlQdVgcfYfBsGyHDBe13x9akgNDZHFkajvYnziSCYX2Jq0I_bMbfG0dz8bFOsjlkXAqqb-PS2L3-lYxGwmJz8v8dgjlMNQFk5A01MXEzbUWi11pqi_apm9jjP2tsKv8nSPVbqn0eNmuavsZJg9E_Q0dInObcdTxHt6VeAjITYJHW_9CP_dQKf8wmPGCZRJGhtWkuPl5hXVAGFxK6oDKj6WNsch9wuarqjg1pRiGjhDQ9c5OGCwzX6Bhq0do2yOVQQcGQQRWyzto3stivpvXn8rJE1jcR6qhwYcaWiu-XS05XavA-PMgYWFg5p7udzAYOwgAfIeggkC7kZCPJx3xNjuPF11VV-6B0X_nRyqE_jA6AdfphKvDeYFCE6LUEgoD-A0-uY-QHnIvzAAerkIEFvBfw1Uod09AM4IkPX-SemToUfsU2Sh57uqXHf_fGFr8unws5wFY-Y9jwd6vyeDJRYvD5nuD4eHJG3nKwGvx5y2JLkuyS6ml7x2MehA1vkPtapaa3nLP5T1TEHwdhHTF_hVp0rqj0Urc4E7HnDkTqzbo7tIqy8vTX6m1HMq66CMJNq_fOnLKT2iHeAbj6C3dCC14PlpFN82yOxQ0JvNyrUe_--2ZfuVXgQmagGzUTsTRXkYqsfq3E77A_4v4vDHzEjlJ_TebZIaPLkk5oLcdhsaEJIg0ILKvdmYrX15_g-VAl3HbTGHmhfn7UOkSfS0fF9ufGMOy3gBnQCWUb_vDOA_SZgsZiULdEdv48_Zgu1f8t2W7Mgb0VExXjwX3tJKgoG0lnF3ySw9UyNkrta5n0De4-MmV3CfKOILpOMkRRyE5JKMY7UO4MvTJ5kbXry60X9r6cVAMZ8ev490RVqUx5feTjg-VVxOydjC3AMaE2ikInD4L9wKte1aGhW6xYXlRCW6jeiS2ZOCHOGbGPZfU4aMu-TdxBJJrZvzgC4hvOk83xAaNGuXxCmn7c6gtv61BNjDEBo4JDY34jSBVpS9yoCsgZMZGjcHRQw8PC_A7yFV-PgdkkCZ_hp3kndHWsbxJLxAi3sF3gYoU9yuXAok23NRzMJVRbQdzhloYZVudqhMxPvHlEHOWq4QEdiiJXpySGUpW0IWUEI2mJhZtsXCs5EKtKEYi0SpYV7Yf0KBgj2Ekq9opa1RC4qgEbUgBBvJg475tAOioBTJZg4U_sa6eTG8ftxDRZZZRCpuArSl_ijxQkKuLNWxpbrE_QSaxOo8aGdU0vjFTOwZUi1UQFM3YJrCUj-Rlsao72kQMaBogS7p8nSoMpHpqz26Pxjvvlf5LJgzbBBh6riurCE-7r3yN4bwjGC08gCxg6V32-dR96DcGIbRSGUoFUR9meBmJMZ7ZJ-fceODuMYr1mhUa4lnKBw3VohrQQkMj4Sf52WrjF-VYNd15t1dnZeGxCy28tU3gIz8zlkfE8SwKb8jowmcHZOsJXKR9fyG-g5N67oZhxKrib5q-syar9RobOaJSME3zxzb-SfSHHdkdnte1Ul8JtPyq5-4l_iAsrO0nCPiNQ.quMgFnaP3D7-cebXaHkytg; intercom-id-dgkjq2bp=69cbc2e0-cbbf-4fe1-96c7-fc7f50d8e9c6; intercom-session-dgkjq2bp=; __Host-next-auth.csrf-token=490b178ae704a56834e27aa370f0356889f8c1634e3ecc0ae0627f5c22552444%7C150074bfe1da276a2f1570e3c4628d01228901d5b0ec6b476b5994923a2e9499; __Secure-next-auth.callback-url=https%3A%2F%2Fchat.openai.com; _cfuvid=0ZRCLAIwLMa16Fcr8u4.2U6ug2ZTpsyqR7LZ82pBEgk-1673400055305-0-604800000; _gid=GA1.2.1517380640.1673388221; __cf_bm=Z1rGHLKAyCbgu_MQgeGUkvVwWmwYAsGrDGcLDBFFlZY-1673400057-0-Ac+9IogdTkdqhN67j4AJU0Hmf08AnayhkPW1rTDLAHqvKyuhqp22GREhbYBPYOXaDd6jkSVqPnr7B7J3u2ULKw67+ZP8Em1uFwiYQQXiBvdMABir5TST81ftSevyKEV/KbVQK80c13PuyeZhpAra1DckE61fxfCvHrLXhnTo8VKTpthYgrw53YOirbUec4bc4A=="
var text = "Rewrite this tweet: \"The single biggest mystery in my mind is how does Donald Trump keep ever single Republican in line, protecting all his criminality? Why are they so afraid of him? We see #KingCon behind the curtain, but what strings does he pull? Is there kompromat on the entire party?\""
console.log({
    "headers": {

        "authority": "chat.openai.com",

        "accept": " text/event-stream",

        "authorization": OPENAI_AUTHORIZATION_KEY,

        "content-type": "application/json",

        "cookie": OPENAI_COOKIE,

        "origin": "https://chat.openai.com",

        "referer": "https://chat.openai.com/chat",

        "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,

        "sec-ch-ua-mobile": `?0`,

        "sec-ch-ua-platform": `macOS`,

        "sec-fetch-dest": `empty`,

        "sec-fetch-mode": `cors`,

        "sec-fetch-site": `same-origin`,

        "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36`,

        "x-openai-assistant-app-id": "",

    },

    "body": JSON.stringify({

        "action": "next",

        "messages": [{

            "id": "228661c2-5f1e-4d02-b24c-db8016f0ce76",

            "role": "user",

            "content": { "content_type": "text", "parts": [text]}

        }],

        "conversation_id": "5766c133-85f7-48e7-85b9-7cb82760836a",

        "parent_message_id": "d24f6993-2906-4843-bd20-e1de95f41532",

        "model": "text-davinci-002-render"

    }),

    "method": "POST"

})
const aiResponse = await fetch("https://chat.openai.com/backend-api/conversation", {
    "headers": {

        "authority": "chat.openai.com",

        "accept": " text/event-stream",

        "authorization": OPENAI_AUTHORIZATION_KEY,

        "content-type": "application/json",

        "cookie": OPENAI_COOKIE,

        "origin": "https://chat.openai.com",

        "referer": "https://chat.openai.com/chat",

        "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,

        "sec-ch-ua-mobile": `?0`,

        "sec-ch-ua-platform": `macOS`,

        "sec-fetch-dest": `empty`,

        "sec-fetch-mode": `cors`,

        "sec-fetch-site": `same-origin`,

        "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36`,

        "x-openai-assistant-app-id": "",

    },

    "body": JSON.stringify({

        "action": "next",

        "messages": [{

            "id": "228661c2-5f1e-4d02-b24c-db8016f0ce76",

            "role": "user",

            "content": { "content_type": "text", "parts": [text]}

        }],

        "conversation_id": "5766c133-85f7-48e7-85b9-7cb82760836a",

        "parent_message_id": "d24f6993-2906-4843-bd20-e1de95f41532",

        "model": "text-davinci-002-render"

    }),

    "method": "POST"

});

console.log(aiResponse)