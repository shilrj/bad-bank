function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleLogin(){
    console.log(balance,depositAmount);
    if (!validate(depositAmount, 'Deposit Amount')) return;
    ctx.users.push({depositAmount,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Deposit Amount"
      status={status}
      body={show ? (  
              <>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="name" placeholder="Deposit" value={name} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>      
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}