## Info
This webapp runs an example website that will catch in a JavaScript library the page the user visited, and his email and post the information via AJAX to a webapp Tracker outside from this


## Usage

First you need to install the tracker, you can get more information on how to do this at:
```
https://github.com/alexandresebrao/UserTracker
```

You need to modify the JS file
```
app/assets/javascript/tracker.js
```
where is a comment to change the URL pointing to the tracker location where it's executing

To run this WebApp you need Rails 4.2.4 or greater and Ruby 2.2.1

Then execute the following lines
```
bundle install
```

```
rake db:migrate
```

```
rails s
```

## Credit

Develop by Alexandre Sebrao (a.k.a. XandizitxU on Xbox Live)
