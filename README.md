# Active Deployment

https://mysterious-meadow-05355.herokuapp.com/

# feedback app

Client for sending out survey emails to get feedback from customers and clients to a simple yes / no question.
Tracking on these clicks is available, and all email handling is done via SendGrid

As a note - due to changes with the SendGrid API and efforts to comply with Spoofing and legal Email Marketing Regulations — functionality for customizing the "from" email for these submissions (i.e. previously, you had the option to choose a domain and address from which to send your emails if you desired - such as no-reply@feedback.com) has been disabled. However, if a client theoretically wished to use this function, as long as they owned the domain from which they wished to send — it would be possible to implement this feature rather easily by verifying via that DNS service and generating a unique API key for their account. This functionality was not explored in this rendition.

For display in this sample project — all emails are instead sent to recipients via my personal account of rjd.atx@gmail.com

# Sign In

Designated to Google OAuth only for time being, in favor of building out a dedicated sign-up functionality

# "Credits" Purchasing and Explanation

Stripe API implemented in order to further explore and learn about E-Commerce Topics. By selecting the Add Credits functionality (after logging in) — you can use the Stripe API "test" card of 4242-4242-4242-4242, any date MM/YY in the future, and SVC = 123. Press submit to 'pay' \$5.00 and notify the server to update your credit count dynamically. One credit is valid for a single survey send, with the database theoretically being able to support email sends to recipient lists of up to and greater than 100,000 addresses.

# Stack

React, Node.JS, Express, Passport, Redux
