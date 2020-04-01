---
layout: essay
type: essay
title: Final Project Idea
# All dates must be YYYY-MM-DD format!
date: 2020-03-31
labels:
  - Software Engineering
  - Meteor
  - React
---

<img class="ui medium left floated image" src="../images/javascript.jpeg" alt="" />

## Overview
<i>The problem:</i> Planning for events on any of the University of Hawaii campuses requires event planners to
coordinate with many different departments.  Furthermore, advertising for the events are often difficult, resource
heavy, and ineffective.

<i>The solution:</i> Create a website that provides event planners with a "one-stop-shop" resource that automatically
generates all required forms and sends them to the responsible department.  This same website will be used as a method
for participants to register for upcoming events, provide notifications, and display a map of the event location.
The website must be compatible across all devices to be effective.

## Mockup page ideas
The home page will offer a login/register link and feature upcoming events based on date/time or location.  There are
only two roles: users, who can login to receive information about upcoming events they are registered for or apply to
host an event; and Admins, who will review the events for validity or move/remove events that are cancelled or 
rescheduled.

## Use case ideas
The completed use case shows an end-to-end scenario of using the system.  
<list>
    <ul>
        New user goes to the landing page, sees an upcoming event they are interested in attending, clicks the 
        image/link and sees more details, clicks the button to register for the event, is brought to a 
        login/registration page, registers the user in the system and then automatically adds the user to the event's 
        registration, the user sees a confirmation they are registered and is sent to their personal profile page.
    </ul>
    <ul>
        User is emailed upon registering for an event and 48/24/2 hours before event to remind them of the event and 
        includes a link to remove their registration from the event.
    </ul>
    <ul>
        Admin user goes to landing page, logs in, returns to landing page, can click on any event, event displays an
        option for the admin to move the event date/time/location or delete the event. 
    </ul>
    <ul>
        Admin user goes to landing page, logs in, returns to landing page, clicks a link to approve new events, new
        events page shows information about user and the information submitted about the event, admin user has buttons
        to approve or deny the request and is prompted for a reason for denial, an email is then sent to the user
        to inform them of their submission status with the message from the admin, if event was approved, the system
        auto-generates the required forms using information gathered from the user and emails them to the responsible 
        department for review CC'ing the user for response/followup questions/information.
    </ul>
    <ul>
        Admin's are emailed to notify of new event registration requiring approval.
    </ul>
</list>

## Beyond the basics
After implementing basic functionality, here are ideas for more advanced features:
<list>
    <ul>
        Smartphone map showing location of the event and how to get there.
    </ul>
    <ul>
        Smartphone notification of upcoming events that the user is registered for or new events as they are posted.
    </ul>
    <ul>
        Links or additional information about guest speakers.
    </ul>
    <ul>
        Text message notifications for registered events.
    </ul>
    <ul>
        Monthly updates/reminders of upcoming events if the user has not logged in for a given period of time.
    </ul>
</list>
