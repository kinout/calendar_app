class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.string :title
      t.date :start
      t.date :end

      t.timestamps
    end
  end
end
