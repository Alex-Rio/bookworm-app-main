import React from "react";
import { HashRouter,Route, Routes } from "react-router-dom";
import "../../css/app.css";
import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "./footer/Footer";
import HomePage from "../../page/HomePage";
import ShopPage from "../../page/ShopPage";
import AboutPage from "../../page/AboutPage";
import CartPage from "../../page/CartPage";
import ProductPage from "../../page/ProductPage";

export default function Welcome() {
        return (
            <HashRouter>

                <Container>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/shop" element={<ShopPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/detail/:id" element={<ProductPage />} />
                    <Route exact path="/shop/category/:categoryId" element={<ShopPage />} />
                    <Route exact path="/shop/author/:authorId" element={<ShopPage />} />
                    <Route exact path="/shop/star/:star" element={<ShopPage />} />
                </Routes>
                </Container>
                <Footer/>
            </HashRouter>
        );
    }


