import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Red Sparrow Swagg" category="RED SPORTY" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="sepatu.png" alt="Foto Sepatu" title="Sepatu" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon 60% Off</p>
    );
  }
  else if (isDiscount == "coming") {
    return (
      <p>Akan ada diskon!</p>
    );
  }
  else {
    return (
      <p>Belum ada diskon yang tersedia</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tahan air", "Bahan lebih berkualitas", "Tidak gampang dimaling"];
  const listBenefits = benefits.map((itemBenefits) =>
    <li>{itemBenefits}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Category">{category}</p>
        <h1 className="Title">Red Sparrow Swagg</h1>
        <p className="Price">IDR 149.900.999</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          One of most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.</p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to cart </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli " + e);
}

export default App;
