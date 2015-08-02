Gadfly is a **software-independent** set of rules for using semantically defined comments to try to make consensus more scalable.  So, you can "use" the system with pen and paper if you want, but it's designed with the internet in mind.  This is the repo for a prototype implementation of it as a web application.  You can play with it here.

The way Gadfly works is that it's a nested commenting system, except that you can tag your comments as agreements or disagreements.  All comments start with a value of 1, agreements add their value to the thing they refer to, and disagreements subtract their value.  So the theory is that no matter how divergent your argument/discussion is, it never truly gets off-topic because the discussion always culminates in a number that can be used as a conclusion.  Also, unlike just voting, it requires people to justify their opinions.  If you didn't get it, don't worry, there's a more drawn-out explanation here, or, once again, you can actually play with it here.

It's also worth mentioning that this implementation of Gadfly happens to contain an experimental way of viewing/interacting with nested comments that we refer to as the "graph view".  It's based on [D3's Force Layout](https://github.com/mbostock/d3/wiki/Force-Layout) and it's fundamentally unrelated to Gadfly, though it's advantageous for conveying information in some ways, in addition to being fun and spunky.

At an abstract level, the reason for this project's existence is that I think that consensus-aggregating systems that take advantage of the internet's capabilities are going to become more and more necessary as society grows in complexity.

[Here's my presentation on Gadfly from the Meteor Devshop](https://www.youtube.com/watch?v=Gt0KG9wUpec)

Email me at tylsmith@gmail.com for any reason at all.
