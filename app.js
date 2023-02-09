const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

var todos = [
    {
        title: "Doctor's Appointment",
        notes: "Yearly physical"
    },
    {
        title: "Grocery Shopping",
        notes: "Buy eggs, bread, and milk"
    },
    {
        title: "Car Maintenance",
        notes: "Get the oil changed and tire rotation"
    },
    {
        title: "Laundry Day",
        notes: "Wash and fold clothes"
    },
    {
        title: "Workout Session",
        notes: "Gym session with personal trainer"
    },
    {
        title: "Book Club Meeting",
        notes: "Discuss the latest novel with book club members"
    },
    {
        title: "Meet with Team Lead",
        notes: "Discuss the project progress"
    },
    {
        title: "Weekly House Cleaning",
        notes: "Clean and organize the house"
    },
    {
        title: "Call Bank",
        notes: "Sort out account issue"
    },
    {
        title: "Dentist's Visit",
        notes: "Regular check-up and cleaning"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateAppointments(date, todos) {
    var appointments = [];
    todos = shuffle(todos);

    for (let i = 0; i < 3; i++) {
        let startTime = new Date(date.getTime());
        startTime.setUTCHours(i * 3 + 9);
        startTime.setUTCMinutes(0);
        startTime.setUTCSeconds(0);

        let endTime = new Date(startTime.getTime());
        endTime.setHours(startTime.getHours() + 1);

        appointments.push({
            title: todos[i].title,
            startDatetime: startTime,
            endDatetime: endTime,
            notes: todos[i].notes
        });
    }

    return appointments;
}

app.get('/appointments', (req, res) => {
    var date = new Date();

    if (req.query.date) {
        date = new Date(Date.parse(req.query.date));
    } 

    var appointments = generateAppointments(date, todos);

    res.json({
        appointments: appointments
    });
});

app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

app.use((req, res) => {
    res.status(500).json({ error: "Internal server error" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
