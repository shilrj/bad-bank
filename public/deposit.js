function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit] = React.useState('');
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
    console.log(balance,deposit);
    //balance = balance - deposit;
    if (!validate(deposit, 'Deposit Amount')) return;
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
               {/* Balance         <br/> */}
              {/* <input type="input" className="form-control" id="balance" placeholder="" value={balance-depositAmount} onChange={e => setBalance(balance)} /><br/> */}
              Deposit Amount<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>      
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit successfull</button>
              </>
            )}
    />
  )
}