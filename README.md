# alarm-clock
alarm-clock

In this, project we have 3 main parts first to run current time contianer, second is form container in which we
will add form data to list in this case its time at which we want to create alert and third contianer is the list of alarms and 
each item having delete button to remove alarm from the list.

There are three main functions in js file currentTime,alertHandler, setAlarmHandler.
1.currentTime function fetch current time and call itself in every one sec.
2.alertHandler is used to create a pop up window when current time match with data inside array.
3.setAlarmhandler will create different nodes and append accordingly on click in last one event handler also added when clicked on delete button which will 
delete list item by deleting parent node and its childnode.
