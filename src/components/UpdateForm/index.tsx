// Purpose: Provide a form for updating a list category.
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// interface
interface UpdateCategoryFormProps {
  onUpdateSuccess: () => void;
  onCancel: () => void;
  category: {
    id: string;
    name: string;
    is_active: boolean;
  };
}


// component
const UpdateForm: React.FC<UpdateCategoryFormProps> = ({
  onUpdateSuccess,
  onCancel,
  category,
}) => {

    // formik
    const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      is_active: category.is_active,
    },

    // validation
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      is_active: Yup.boolean().required('Required'),
    }),

    // submit
     onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          await updateCategory(values.id, values.name, values.is_active, token);
          onUpdateSuccess();
        }
      } catch (error) {
        console.error('Update category failed', error);
      }
    },
  });

// render
  return (
    <div>index</div>
  )
}

export default UpdateForm: