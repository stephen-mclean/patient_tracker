require 'rails_helper'

describe Patients::Create do
  let(:patient_params) do
    {
      first_name: 'John',
      last_name: 'Doe',
      dob: '1980-01-01',
      email: 'john.doe@example.com',
      gender: 'male',
      notes: 'Some notes',
      medications: 'Some medications'
    }
  end

  context 'when the patient is valid' do
    it 'creates a patient' do
      outcome = described_class.run(patient_params)
      expect(outcome.success?).to eq(true)
      expect(outcome.result.persisted?).to eq(true)
      expect(outcome.result.first_name).to eq('John')
      expect(outcome.result.last_name).to eq('Doe')
      expect(outcome.result.dob).to eq(Date.new(1980, 1, 1))
      expect(outcome.result.email).to eq('john.doe@example.com')
      expect(outcome.result.gender).to eq('male')
      expect(outcome.result.notes).to eq('Some notes')
      expect(outcome.result.medications).to eq('Some medications')
    end
  end

  context 'with an invalid email' do
    it 'returns an error' do
      outcome = described_class.run(patient_params.merge(email: 'invalid_email'))
      expect(outcome.success?).to eq(false)
    end
  end

  context 'with an invalid gender' do
    it 'returns an error' do
      outcome = described_class.run(patient_params.merge(gender: 'invalid_gender'))
      expect(outcome.success?).to eq(false)
    end
  end

  context 'with missing required fields' do
    it 'returns an error' do
      outcome = described_class.run({})
      expect(outcome.success?).to eq(false)
    end
  end
end
