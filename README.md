# VanityNumber
Customer will dial the number given in the screenshot below
![MicrosoftTeams-image (3)](https://user-images.githubusercontent.com/1267014/116874924-87684800-ac33-11eb-9837-4e89865743eb.png)
 After dialing the phone number Customer will able to hear the 3 possible vanity numbers against his/her number.
 The record will also save in the dyanamo db with 5 best Vanity Numbers options
 
 
 # How we Implement
 1. A Contact flow is created in the Aamazon Connect Instance which is attached to a number.
 2. ![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/1267014/116875321-22f9b880-ac34-11eb-97c2-2bdc31acd4d0.png) 
 3. The caller will be hearing throughout the contact flow.
 4. We Create a lambda function that is being invoked from the contact flow and will generate the the 3 best Vanity Numbers against the callers number and promt will play for the caller that your 3 unique vanity number are (xxxxxx, xxxxxx, xxxxxx).
 5. Customer's number and the 5 unique Vantiy Number are stored in the Dynamo DB
 6. ![MicrosoftTeams-image (2)](https://user-images.githubusercontent.com/1267014/116875190-f2b21a00-ac33-11eb-8c5e-c11f148809e8.png)

