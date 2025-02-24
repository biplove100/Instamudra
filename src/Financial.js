function Financial() {
  return (
    <>
      <div className="row mb-4 mx-4">
        <div class="col-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h3 className="mb-4">Today's Overview</h3>
              <p className="text-muted">Total Amount</p>
              <h3 mb-1>&#8377;142530</h3>
              <p>Transaction</p>
              <h4>3</h4>
              <p className="text-muted">Fees</p>
              <p className="text-muted">&#8377;2763.53</p>
            </div>
          </div>
        </div>
        <div class="col-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h3 className="mb-4">This Week</h3>
              <p className="text-muted">Total Amount</p>
              <h3 mb-1>&#8377;142530</h3>
              <p>Transaction</p>
              <h4>3</h4>
              <p className="text-muted">Fees</p>
              <p className="text-muted">&#8377;2763.53</p>
            </div>
          </div>
        </div>
        <div class="col-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h3 className="mb-4">This Month</h3>
              <p className="text-muted">Total Amount</p>
              <h3 mb-1>&#8377;306030.30</h3>
              <p>Transaction</p>
              <h4>12</h4>
              <p className="text-muted">Fees</p>
              <p className="text-muted">&#8377;3166.53</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border rounded-3">
        <div className="row mb-4 mx-4">
          <h4>Transaction Types Breakdown</h4>
          <div className="col-6">
            <div className="Withdraws">
              <h6>Card Withdrawls Credit</h6>
              <p>9 transactions</p>
            </div>
            <div className="Withdraws">
              <h6>&#8377;182030.46</h6>
              <p>59.5%</p>
            </div>
          </div>
          <div className="col-6">
          <div className="Withdraws">
              <h6>Card Withdrawls Credit</h6>
              <p>9 transactions</p>
            </div>
            <div className="Withdraws">
              <h6>&#8377;182030.46</h6>
              <p>59.5%</p>
            </div>
          </div>
        </div>
        
      </div> */}
    </>
  );
}

export default Financial;
