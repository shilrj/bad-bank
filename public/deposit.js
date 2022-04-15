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

  function handleDeposit(){
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
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="depositAmount" placeholder="Deposit" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>      
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit success</button>
              </>
            )}
    />
  )
}