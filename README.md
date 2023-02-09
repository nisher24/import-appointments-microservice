# import-appointments-microservice
Microservice for partner's project - CS361: Software Engineering I at OSU

## API Reference

### Endpoints

#### GET /appointments

- REQUEST data:
    - Send a HTTP GET request to the microservice to request data from it.
    - Query parameter: date. Generate random appointments by providing a date. If no date is specified, the appointments will be generated for the current date.
    - Sample `curl http://127.0.0.1:5000/appointments?date=2023-02-20`

- RECEIVE data:
    - Returns a list of random appointments based on the given date.
    - Format: JSON
    - Sample:
```
{
  "appointments": [
    {
      "title": "Book Club Meeting",
      "startDatetime": "2023-02-20T09:00:00.000Z",
      "endDatetime": "2023-02-20T10:00:00.000Z",
      "notes": "Discuss the latest novel with book club members"
    },
    {
      "title": "Grocery Shopping",
      "startDatetime": "2023-02-20T12:00:00.000Z",
      "endDatetime": "2023-02-20T13:00:00.000Z",
      "notes": "Buy eggs, bread, and milk"
    },
    {
      "title": "Weekly House Cleaning",
      "startDatetime": "2023-02-20T15:00:00.000Z",
      "endDatetime": "2023-02-20T16:00:00.000Z",
      "notes": "Clean and organize the house"
    }
  ]
}
```

- UML sequence diagram

![Sequence diagram](https://github.com/nisher24/import-appointments-microservice/blob/main/sequence_diagram.png)
