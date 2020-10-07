import React from 'react';
import Utama from './Component/Utama';
// import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
          <a class="navbar-brand" href="/">Beranda</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/TentangSaya">Tentang Saya <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/Karya">Infromasi <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/Kontak">Kontak <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
        <p><Utama /></p>
      </div>
    );
  }
}


export default App;
