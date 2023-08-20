import React from 'react';
import { Form, Field } from 'react-final-form';
import { LoginFormData } from '@/types'
import { FormContainer, FormGroup, SubmitButton } from '@/components/FormData/Form.style'
import Loader from '@/components/Loader'
const DumbForm: React.FC<LoginFormData>  = ({handleSubmit, loading}) => (
    <Form onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <label>Region:</label>
            <Field name="region" component="select">
              <option value="">Select a region</option>
                <option value="uzbekistan">Uzbekistan</option>
              <option value="poland">Poland</option>
              <option value="usa">USA</option>
              <option value="georgia">Georgia</option>
            </Field>
          </FormGroup>

          <FormGroup>
            <label>Error Rate:</label>
            <Field name="errorRate" component="input" type="number" />
          </FormGroup>

          <FormGroup>
            <label>Seed:</label>
            <Field name="seed" component="input" type="text" />
          </FormGroup>

          <SubmitButton type="submit">{loading ? <Loader /> : "Generate Random"}</SubmitButton>
        </FormContainer>
      )}
    />
)

export default DumbForm