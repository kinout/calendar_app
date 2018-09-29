# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Schedule.create([
    {ymd: "20181002", comment: "誕生日"},
    {ymd: "20181004", comment: "呑み会"},
    {ymd: "20181009", comment: "面接"}
  ])