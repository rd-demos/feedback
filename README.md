# feedback

Client for sending out survey emails to get feedback from customers and clients to a simple yes / no question.
Tracking on these clicks is available, and all sending is done via SendGrid

As a note - due to changes with the SendGrid API and efforts to comply with Spoofing and legal Email Marketing Regulations — functionality for customizing the "from" email for these submissions (i.e. previously, you had the option to choose a domain and address from which to send your emails if you desired - such as no-reply@feedback.com) has been disabled. However, if a client theoretically wished to use this function, as long as they owned the domain from which they wished to send — it would be possible to implement this feature rather easily by verifying via that DNS service and generating a unique API key.

For display in this sample project — all emails are instead sent to recipients via my personal account of rjd.atx@gmail.com

# Active Deployment

https://mysterious-meadow-05355.herokuapp.com/

# Stack

React, Node.JS
