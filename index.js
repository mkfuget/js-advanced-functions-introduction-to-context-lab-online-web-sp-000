// Your code here
function createEmployeeRecord(array)
{
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []

  }
}
function createEmployeeRecords(array)
{
  return array.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(employeeRecord, date)
{
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: date.substring(11,12),
    date: date.substring(0, 9)
  })
  return employeeRecord
}
