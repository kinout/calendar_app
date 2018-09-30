# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Schedule.create([
    {title: "誕生日", start: "2018-10-02"},
    {title: "呑み会", start: "2018-10-04", end: "2018-10-20"},
    {title: "納品日", start: "2018-10-11"}
  ])