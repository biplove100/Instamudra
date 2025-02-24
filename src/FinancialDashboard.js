import Financial from "./Financial";
import Hero from "./Hero";
import Navbar from "./Navbar";

function FinancialDashboard() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <div className="row mb-4 border-bottom"></div>
            <Financial />
        </>
     );
}

export default FinancialDashboard;