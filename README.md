Checkr-API-Integration

Overview:
- API integration with candidate creation and automated invitation creation

Background:
- What is Checkr? Checkr screens both private and public databases to check for records that match the full name, date of birth, and address history of the candidate. This process is not as instantaneous as one may think, and often requires a manual check of public government records. In other words, Checkr handles extensive background checks.
- Who uses Checkr? Checkr has become a favorite of gig economy firms, including Uber, Instacart, Shipt, Postmates, and Lyft.

Task:
- Incorporate Checkr APIs into website form.
- On Form Submit, A checkr candidate must be created. Immediately after Checkr Candidate creation, we want to send an background check invitation to checkr candidate.

Note:
- Here are two tasks that need to be address here; candidate creation and invitation creation.
- Each require a different API call with different requirements on how/where to call the endpoint. For example, you can access the Checkr's Candidate Endpoint through front-end code, but YOU CANNOT access Checkr's invitation endpoint through front-end code. All requests for invitations must be delivered through backend code.

Result:
- Create Checkr Candidate on form submit. This Checkr API endpoint will be called via front-end code.
- If reposne is successful, retrieve/store newly created candidate ID.
- Call backend function that will use the newly created candidate ID to call the Checkr Invitation Endpoint.

How do we accomplish this?
- Create a Custom WordPress Rest API endpoint via a custom plugin
- Create a function within the PHP file that takes in the candidate ID and calls the Checkr Invitation Endpoint

Valuable Resources:
- https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/


Code Snippets:
1.	Create Custom WordPress Rest API Endpoint

![image](https://user-images.githubusercontent.com/40924201/138778281-5e0ff3da-5f24-40d3-8767-5bfccd3395e7.png)

2.	Create Function called when endpoint is reached

![image](https://user-images.githubusercontent.com/40924201/138778302-8cde9913-06a1-462e-8937-527523ecdae8.png)
 
3.	Save PHP file, add the following comment snippet and place it within wordpress site's plugin folder

![image](https://user-images.githubusercontent.com/40924201/138778320-aac58e21-99d3-43b6-8182-63368237d0ff.png)
 
4.	Activate Plugin in WordPress dashboard







