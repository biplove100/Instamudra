import "./Form.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Fees from "./Fees";

function Form() {
  return (
    <>
      <Navbar />

      <Hero />

      <Fees />

      <div className="row mb-4 border-bottom"></div>
      
      <div className="container">
        {/* FORM STARTS */}
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border rounded-3 p-4 my-4">
            <h3>New Transaction:</h3>
            <div class="mb-3">
              <label for="transaction" class="form-label">
                Type:
              </label>
              <select
                id="transaction"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Type of Transaction:</option>
                <option value="1">Card Withdraw</option>
                <option value="2">Cash Payment</option>
                <option value="3">Bill Payment</option>
                <option value="4">Bank Transfer</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="amount" class="form-label">
                Total Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="amount"
                placeholder="0000"
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>
              <input type="email" class="form-control" id="description" />
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">
                Date
              </label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="mb-3">
              <label for="cardholder" class="form-label">
                Cardholder Name
              </label>
              <input type="text" class="form-control" id="cardholder" />
            </div>
            <div class="mb-3">
              <label for="bank" class="form-label">
                Bank Name
              </label>
              <input type="text" class="form-control" id="bank" />
            </div>
            <div class="mb-3">
              <label for="cardNumber" class="form-label">
                Card Number (last 4 digit)
              </label>
              <input type="Number" class="form-control" id="cardNumber" />
            </div>
            <div class="mb-3">
              <label for="expiry" class="form-label">
                Expiry Date (MM/YY)
              </label>
              <input
                type="number"
                class="form-control"
                id="expiry"
                placeholder="MM/YY"
              />
            </div>
            <div class="mb-3">
              <label for="cardNumber" class="form-label">
                Card Number (last 4 digit)
              </label>
              <input type="Number" class="form-control" id="cardNumber" />
            </div>
            <div class="mb-3">
              <label for=""></label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Card Type:</option>
                <option value="1">Visa (1.8%)</option>
                <option value="2">HDFC Visa (2.5%)</option>
                <option value="3">MasterCard (2.9%)</option>
                <option value="4">AMEX (2.5%)</option>
              </select>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        {/* FORM ENDS */}

        <div className="row">
        <div className="col border rounded-3 p-4 my-4 text-wrap fs-6">
            <table className="table table-striped table-bordered">
              <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Cardholder Name</th>
                <th scope="col">Card Name</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Card Number</th>
                <th scope="col">Card Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Fee</th>
                <th scope="col">Contributor</th>
                <th scope="col">Verified By:</th>
                <th scope="col">Actions:</th>
              </tr>
              </thead>
              <tbody>
      <tr>
        <td>2024-02-24</td>
        <td>Card Withdraw</td>
        <td>John Doe</td>
        <td>Visa Classic</td>
        <td>Chase Bank</td>
        <td>**** 1234</td>
        <td>Visa (1.8%)</td>
        <td>$500</td>
        <td>$9</td>
        <td>Jane Smith</td>
        <td>Admin</td>
        <td>
          <button className="btn btn-warning btn-sm me-1">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
      <tr>
        <td>2024-02-23</td>
        <td>Bank Transfer</td>
        <td>Emma Brown</td>
        <td>MasterCard Gold</td>
        <td>Wells Fargo</td>
        <td>**** 5678</td>
        <td>MasterCard (2.9%)</td>
        <td>$1,000</td>
        <td>$29</td>
        <td>Michael Johnson</td>
        <td>Admin</td>
        <td>
          <button className="btn btn-warning btn-sm me-1">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
      <tr>
        <td>2024-02-22</td>
        <td>Bill Payment</td>
        <td>David Wilson</td>
        <td>AMEX Platinum</td>
        <td>Bank of America</td>
        <td>**** 7890</td>
        <td>AMEX (2.5%)</td>
        <td>$200</td>
        <td>$5</td>
        <td>Sarah Lee</td>
        <td>Manager</td>
        <td>
          <button className="btn btn-warning btn-sm me-1">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    </tbody>
            </table>
          </div>
        </div>


      </div>
    </>
  );
}

export default Form;
