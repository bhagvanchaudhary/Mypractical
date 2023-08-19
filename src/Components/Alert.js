import Alert from 'react-bootstrap/Alert';

function AlertModel(props) {
  return (
    <>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {props.message}
        </Alert>
      ))}
    </>
  );
}

export default AlertModel;