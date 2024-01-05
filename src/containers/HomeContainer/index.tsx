import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';

const HomeContainer = () => {

  // interface for form props
    interface FormProps {
    email: string;
    name: string;
    password: string;
  }

  // onSubmit function for submit form
    onSubmit: async (values) => {
     await fetch('https://mock-api.arikmpt.com/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }); 
    },

    onSubmit: (values: FormProps) => console.log(values),

    // validation for username, email & password
    validationSchema: yup.object({
      name: yup.string().required('name tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password tidak boleh kosong'),
    }),
  });

  return (
    <Card border={false} className=" ">
      <Card border>
        {/* Step 1: Personal information = FullName, Email Address, Date of birth */}

        {step === 1 && (
          <form onSubmit={formMik.handleSubmit}>
            <p>Personal Information</p>
            {/* Input FullName */}
            <div className="m-1">
              <Text>{'FullName'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'nama'}
                value={formMik.values.fullname}
                onChange={formMik.handleChange('fullname')}
              />
              {/* add error validation text with yup for input FullName */}
              {formMik.errors.fullname && (
                <Text>{formMik.errors.fullname}</Text>
              )}
            </div>
            {/* Input Email address */}
            <div className="m-1">
              <Text>{'Email Address'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'email'}
                value={formMik.values.email}
                onChange={formMik.handleChange('email')}
              />
              {/* add error validation text with yup for input Email */}
              {formMik.errors.email && <Text>{formMik.errors.email}</Text>}
            </div>
            {/* Input Date of birth */}
            <div className="m-1">
              <Text>{'Date of birth'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'date'}
                value={formMik.values.date}
                onChange={formMik.handleChange('date')}
              />
              {/* add error validation text with yup for input date */}
              {formMik.errors.date && <Text>{formMik.errors.date}</Text>}
            </div>
            {/* Button previous */}
            <Button
              label={'Previous'}
              onClick={handlePrevious}
              type={'button'}
              className={'bg-green-500'}
            />
            {/* Button Next */}
            <Button
              label={'Next'}
              onClick={handleNext}
              type={'button'}
              className={'bg-green-500'}
            />
          </form>
        )}

        {/* Step 2 for Address information = Street Address, City, State, Zip Code */}

        {step === 2 && (
          <form onSubmit={formMik.handleSubmit}>
            <p>Address Information</p>
            {/* Input Street Address */}
            <div className="m-1">
              <Text>{'Street Address'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'alamat'}
                value={formMik.values.alamat}
                onChange={formMik.handleChange('alamat')}
              />
              {/* add error validation text with yup for input alamat */}
              {formMik.errors.alamat && <Text>{formMik.errors.alamat}</Text>}
            </div>

            {/* Input City */}
            <div className="m-1">
              <Text>{'City'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'kota'}
                value={formMik.values.kota}
                onChange={formMik.handleChange('kota')}
              />
              {/* add error validation text with yup for input kota */}
              {formMik.errors.kota && <Text>{formMik.errors.kota}</Text>}
            </div>

            {/* Input Zip Code */}
            <div className="m-1">
              <Text>{'Zip Code'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'kodepos'}
                value={formMik.values.kodepos}
                onChange={formMik.handleChange('kodepos')}
              />
              {/* add error validation text with yup for input kodepos */}
              {formMik.errors.kodepos && <Text>{formMik.errors.kodepos}</Text>}
            </div>

            {/* Button previous */}
            <Button
              label={'Previous'}
              onClick={handlePrevious}
              type={'button'}
              className={'bg-green-500'}
            />
            {/* Button Next */}
            <Button
              label={'Next'}
              onClick={handleNext}
              type={'button'}
              className={'bg-green-500'}
            />
          </form>
        )}

        {/* Step 3 for Account information = Username, Password */}
        {step === 3 && (
          // form element
          <form onSubmit={formMik.handleSubmit}>
            {/* Input Username */}
            <div className="m-1">
              <Text>{'Username'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'username'}
                value={formMik.values.username}
                onChange={formMik.handleChange('username')}
              />
              {/* add error validation text with yup for input username */}
              {formMik.errors.username && (
                <Text>{formMik.errors.username}</Text>
              )}
            </div>
            {/* Input Password */}
            <div className="m-1">
              <Text>{'Password'}</Text>
              <Input
                className="block border-emerald-700 border"
                name={'password'}
                value={formMik.values.password}
                onChange={formMik.handleChange('password')}
              />
              {/* add error validation text with yup for input password */}
              {formMik.errors.password && (
                <Text>{formMik.errors.password}</Text>
              )}
            </div>
            {/* Button previous */}
            <Button
              label={'Previous'}
              onClick={handlePrevious}
              type={'button'}
              className={'bg-green-500'}
            />
            {/* Button Submit */}
            <Button
              label={'Submit'}
              type={'submit'}
              className={'bg-green-500'}
            />
          </form>
        )}
      </Card>
    </Card>
  );
};

export default HomeContainer;