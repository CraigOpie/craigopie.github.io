---
layout: essay
type: essay
image: images/java-beans.jpeg
title: The Art of Designing Patterns in Software
# All dates must be YYYY-MM-DD format!
date: 2020-04-30
labels:
  - Technical
  - Design Patterns
  - Java
  - Javascript
  - React
  - Meteor
  - MongoDb
---

<img class="ui medium left floated image" src="../images/java-beans.jpeg" alt="" width="200" />

## Doing things right, the first time

Design patterns are methods used to solve problems that programmers typically see when dealing with objects in collaborative works.  The most well known reference to design patterns may be a book titled Design Patterns: Elements of Reusable Object-Oriented Software which was published in 1994 by the infamous “Gang of Four” - Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (GoF).  While the work of the GoF received great praise and even earned the group the Programming Languages Achievement Award in 1995, the context of design patterns for software development was pioneered by Kent Beck and Ward Cunningham in 1987.  Over the years programming languages have been improved and design patterns identified by the GoF have been implemented as part of the underlying frameworks for languages like JavaEE. 

## You have three main food groups

There are three basic groups of design patterns: creational, structural, and behavioral design patterns.  Creational design patterns are in relation to class instantiation which mainly consists of using inheritance or using delegation effectively to accomplish the required task.  Structural design patterns mainly consist of class and object composition to use inheritance or methods to support new functionality.  Behavioral design patterns address the interfacing amongst objects within a class to support communication between the objects.  The gravity of design patterns is immense and the further you research the topic the stronger the gravity becomes, as if the topic were a black hole just waiting to swallow all time and space.  This article is going to address one aspect of creational design patterns called the singleton.

## Being all alone, but not affraid

A singleton is a single instance of an object that is only instantiated once within the lifecycle of an application.  Once a singleton is created it remains in memory and is not destroyed until the application terminates.  This lends the object to be a global used as a global point of access to something which is used multiple times during the operation of the application.  Utilizing singletons to access features of an object means that the overhead of creating the object is only encountered once.  In my team’s final project for ICS-314, https://manoalist.github.io, we utilized a singleton to subscribe to a collection within a Mongo database using Meteor, React, and JavaScript.
```javascript
/** This subscription publishes only the documents associated with the logged in user */
meteor.publish('User', function publish() {
    if (this.userId) {
        const username = Meteor.users.findOne(this.userId).username;
        return User.find({ email: username });
    }
    return this.ready();
});
```

Singletons are great for application logs or connections to databases, but singletons are not limited to such trivial purposes.  However, implementation of a singleton can be very much non-trivial in most programming languages.  Singletons often run into issues of thread safety so the developer is required to identify and prevent thread collisions before they happen.  To ensure thread safety, programmers often double-check locking, use private constructors, and nested synchronization.  
```java
public class PoolSupervisor {
    private static PoolSupervisor instance;

    private PoolSupervisor() {
        // constructor here
    }

    public static synchronized PoolSupervisor getInstance() {
        if (instance == null) {
            instance = new PoolSupervisor();
        }
        return instance;
    }
}
```
Some languages support singletons within the framework, such as JavaEE.  An example of a JavaEE singleton that ensures thread safety is as follows:
```java
import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;

@Singleton
public class PoolSupervisor {
    private Queue<Object> pooledObjects = new linkedBlockingQueue<>(1_000);

    public PoolSupervisor() {
        for(int i = 0; i <= 1000; i++) {
            pooledObjects.offer(new Object());
        }
    }

    public void returnObject(Object object) {
        pooledObjects.offer(object);
    }

    public Object borrowObject() {
        return pooledObjects.poll();
    }
}
```
In JavaEE utilizing the @Singleton annotation with the above code requires the object to be created only when called for the first time, and for access to the object to be serialized so that we don’t have to worry about thread safety at all.  

## Don’t bite off more than you can chew

Understanding more than just what a design pattern is and where it should be used is fundamental to deploying a successful application that is reliable and secure.  Using a design pattern that is tried and true increases the probability for successful runtime operations and improves useability amongst development teams, but software engineers must burden the responsibility of fully understanding how their code will execute and what vulnerabilities will be exposed when implementing widely used design patterns.

### Work cited
https://sourcemaking.com/design_patterns <br />
https://www.linkedin.com/learning/java-ee-design-patterns-and-architecture/ <br />
https://archive.org/details/codecomplete0000mcco <br />
http://courses.ics.hawaii.edu/ics314s20/morea/design-patterns/reading-screencast-introduction-design-patterns.html <br />
http://courses.ics.hawaii.edu/ics314s20/morea/design-patterns/reading-screencast-bowfolios-design-patterns.html
