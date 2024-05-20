class CreatePatients < ActiveRecord::Migration[7.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :dob
      t.string :notes
      t.string :medications
      t.string :gender, limit: 6
      t.string :email

      t.timestamps
    end
    add_index :patients, :email
  end
end
