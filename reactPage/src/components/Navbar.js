import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

function Navbar() {
   return( 
   <nav>
        <ul>
            <li><Link id="home" to="/">Home</Link></li>
            <li><Link id="steel" to="/steel">Steel Tubing Calculator</Link></li>
            <li><Link id="results" to="/results">Results</Link></li>
        </ul>
    </nav>
   );
}

export default Navbar;