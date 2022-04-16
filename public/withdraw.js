function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleWithdraw(){
    console.log(balance,withdrawAmount);
    if (!validate(withdrawAmount, 'Withdraw Amount')) return;
    ctx.users.push({withdrawAmount,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? (
               <>
              Balance         $100 <br/>
              Withdraw Amount<br/>
              <input type="input" className="form-control" id="withdrawAmount" placeholder="Withdraw Amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>    
              <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw successfull</button>
              </>
            )}
    />
  )
}