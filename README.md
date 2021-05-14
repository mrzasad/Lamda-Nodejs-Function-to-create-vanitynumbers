# VanityNumber
Customer will dial the number given in the screenshot below
![MicrosoftTeams-image (3)](https://user-images.githubusercontent.com/1267014/116874924-87684800-ac33-11eb-9837-4e89865743eb.png)
 After dialing the phone number Customer will able to hear the 3 possible vanity numbers against his/her number.
 The record will also save in the dyanamo db with 5 best Vanity Numbers options
 
 
 # How I Implemented the solution 
 1. A Contact flow is created in the Aamazon Connect Instance which is attached to a number.
 2. ![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/1267014/116875321-22f9b880-ac34-11eb-97c2-2bdc31acd4d0.png) 
 3. The caller will be hearing throughout the contact flow.
 4. I Created a lambda function that is being invoked from the contact flow and will generate the the 3 best Vanity Numbers against the callers number and promt will play for the caller that your 3 unique vanity number are (xxxxxx, xxxxxx, xxxxxx).
 5. Customer's number and the 5 unique Vantiy Number are stored in the Dynamo DB
 6. ![MicrosoftTeams-image (2)](https://user-images.githubusercontent.com/1267014/116875190-f2b21a00-ac33-11eb-8c5e-c11f148809e8.png)

# Reason I took this approach for the solution
The logic i implemented in the code seems to be easy to read and understand by any new member in the team .
I created an array of the aplhaphets and repleace it with the numbers to get the Vanity number against the number i will pass.
After passing the number in the object it will check the number and replace it with the alphabets.
First i tried to do it with the ASCII code at some point i got stucked what to do next So, I created an alphabets array and replace it with the numbers.

# some stuff to work on as time permits 
I was getting the Undefined string before every Vanity Number.
To address that I created a substring and remove the Undefined string form the generated Vanity Number.  I think this is not the best practice we should not get undefined if we implement the proper solution. Due to time constraint with my current project work I could not invest further time on this implementation. 
