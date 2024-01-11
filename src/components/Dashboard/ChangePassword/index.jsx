import { TextField } from '@mui/material';
import { Formik, ErrorMessage } from 'formik';
import { Container } from './style';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChangePassword = () => {
  const { t } = useTranslation();

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  const handleReset = (resetForm) => {
    resetForm();
  };

  return (
    <Container className='container'>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={Yup.object().shape({
          currentPassword: Yup.string().required(`${t('current')}`),
          newPassword: Yup.string().required(`${t('new')}`),
          confirmNewPassword: Yup.string()
            .oneOf([Yup.ref('newPassword')], `${t('confirm')}`)
            .required(`${t('noConfirm')}`),
        })}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        {(formik) => (
          <Container.Form onSubmit={formik.handleSubmit}>
            <Container.Title>{t('change')}</Container.Title>
            <TextField
              id='standard-password-input'
              label={`${t('current')}`}
              fullWidth
              type='password'
              margin={'normal'}
              size='small'
              name='currentPassword'
              variant='standard'
            />
            <ErrorMessage name='currentPassword'>
              {(msg) => (
                <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>
              )}
            </ErrorMessage>

            <TextField
              id='standard-password-input'
              label={`${t('new')}`}
              fullWidth
              type='password'
              size='small'
              margin={'normal'}
              name='newPassword'
              variant='standard'
            />
            <ErrorMessage name='newPassword'>
              {(msg) => (
                <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>
              )}
            </ErrorMessage>
            <TextField
              id='standard-password-input'
              label={`${t('repeat')}`}
              fullWidth
              type='password'
              size='small'
              margin={'normal'}
              name='confirmNewPassword'
              variant='standard'
            />
            <ErrorMessage name='confirmNewPassword'>
              {(msg) => (
                <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>
              )}
            </ErrorMessage>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <Button
                type='reset'
                sx={{
                  color: '#111827',
                }}
              >
                {t('cancel')}
              </Button>
              <Button
                variant='contained'
                type='submit'
                sx={{
                  maxWidth: '300px',
                  width: 'fit-content',
                  background: '#6E3BA7',
                }}
              >
                {' '}
                {t('save')}
              </Button>
            </div>
          </Container.Form>
        )}
      </Formik>
    </Container>
  );
};

export default ChangePassword;
