# Why deploy the backend on Heroku?

Since the frontend is already deployed on Firebase, it would seem to make sense to display the backend there as well. However, I opted for Heroku here. There's multiple reasons for this:

- I deployed [Flask apps on Heroku](https://github.com/IsaacVerm/postcards-backend) in the past
- you're [required to enable billing](https://medium.com/firebase-developers/hosting-flask-servers-on-firebase-from-scratch-c97cfb204579) if you want to deploy `Flask` to Firebase

I prefer to avoid the risk of surprising costs. This is the relevant excerpt:

> To use Cloud Run with Firebase Hosting you currently need billing enabled, which requires putting a credit card on file. However! That doesn’t mean you’re going to get charged. Cloud Run comes with a free tier. You’ll likely operate in the free tier unless you are using it on a production site or sending large amounts of traffic to your site all month long.