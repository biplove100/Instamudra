function Navbar() {
  return (
    <>
      {/* NAVBAR STARTS */}
      <div className="mb-4" style={{ width: "100%", height: "60px" }}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h3>Instantmudra Tally Dashboard</h3>
            </a>
            <form class="d-flex" role="search">
              <h5 className="text-muted">Welcome, UsErNaMe</h5>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button class="btn btn-outline-secondary">
                Logout <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </form>
          </div>
        </nav>
      </div>
      {/* NAVBAR ENDS */}
    </>
  );
}

export default Navbar;
