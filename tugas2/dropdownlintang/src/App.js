import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = 
  {
    jenjang: 'Pilih Jenjang',
    tingkatpilihan: 'Pilih Tingkatan',
    tingkat: ['Pilih Jenjangnya Dulu!']
  };

  prasekolah()
  {
    this.setState({
      jenjang: 'Pendidikan Pra Sekolah',      
      tingkat: ["PAUD (Pendidikan Anak Usia Dini)", "TK (Taman Kanak-kanak)", "RA (Raudhatul Athfal)"]
    })
  };

  dasar()
  {
    this.setState({
      jenjang: 'Pendidikan Dasar',
      tingkat: ["SD (Sekolah Dasar)", "MI (Madrasah Ibtidaiyah)", "SMP (Sekolah Menengah Pertama)", "MTs (Madrasah Tsanawiyah)"]
    })
  };

  menengah()
  {
    this.setState({
      jenjang: 'Pendidikan Menengah',
      tingkat: ["SMA (Sekolah Menengah Atas)", "MA (Madrasah Aliyah)", "SMK (Sekolah Menengah Kejuruan)"]
    })
  };

  tinggi()
  {
    this.setState({
      jenjang: 'Pendidikan Tinggi',
      tingkat: ["D3 Diploma", "S1/D4 Sarjana", "S2 Magister", "S3 Doktoral"]
    })
  };

  changed(nama)
  {
    this.setState({
      tingkatpilihan: nama
    })
  }


  render() {
    const pendidikan = this.state.tingkat.map((item, index) => {return <li key={index}><a onClick={() => this.changed(item)}>{item}</a></li>})
    return (
      <div className="col-md-10 col-md-offset-2">
        <div className="col-md-5">
          <div className="dropdown">
            <button className="btn btn-success dropdown-toggle" data-toggle="dropdown" style={{width:300,marginTop:150}}>
            {this.state.jenjang} <span className="caret"></span></button>
              <ul className="dropdown-menu">
                  <li><a onClick={() => this.prasekolah()}>Pendidikan Pra Sekolah</a></li>
                  <li><a onClick={() => this.dasar()}>Pendidikan Dasar</a></li>
                  <li><a onClick={() => this.menengah()}>Pendidikan Menengah</a></li>
                  <li><a onClick={() => this.tinggi()}>Pendidikan Tinggi</a></li>
              </ul>
          </div>
        </div>
        
        <div className="col-md-5">
          <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle" data-toggle="dropdown" style={{width:300,marginTop:150}}>
            {this.state.tingkatpilihan} <span className="caret"></span></button>
              <ul className="dropdown-menu">
                {pendidikan}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;