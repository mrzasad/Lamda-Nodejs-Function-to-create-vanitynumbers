# VanityNumber
Customer will dial the number given in the screenshot below
![MicrosoftTeams-image (3)](https://user-images.githubusercontent.com/1267014/116874924-87684800-ac33-11eb-9837-4e89865743eb.png)
 After dialing the phone number Customer will able to hear the 3 possible vanity numbers against his/her number.
 The record will also save in the dyanamo db with 5 best Vanity Numbers options
 
 
 # How we Implement
 1. We Create a lambda function that will generate the the 5 best Vanity Numbers against the number we will give.
 2. Will save the Customer number and the Vantiy Number in the Dynamo Db
 3. ![MicrosoftTeams-image (2)](https://user-images.githubusercontent.com/1267014/116875190-f2b21a00-ac33-11eb-8c5e-c11f148809e8.png)
 4. Created the Contact flow in the Aamazon Connect Instance In which we inegrate the lamdba we created for vanity number and play the bets 3 Vanity Numbers in the Loop Prompt Block.
 5. ![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/1267014/116875321-22f9b880-ac34-11eb-97c2-2bdc31acd4d0.png)
