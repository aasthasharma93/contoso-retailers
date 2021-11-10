package com.contoso.restservice.Service;


import com.contoso.restservice.Model.Cart;
import com.contoso.restservice.Repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    public List<Cart> getUserCart(String user) {
        List<Cart> cart = cartRepository.findAllByUser(user);
        return cart;
    }

    public void addItemCart(Integer id, String user) {
        cartRepository.addToCart(id, user);
    }

    public void cartItemDecrement(Integer id, String user) {
        cartRepository.cartItemDecrement(id, user);
    }

    public void cartItemIncrement(Integer id, String user) {
        cartRepository.cartItemIncrement(id, user);
    }

    public void cartItemRemove(Integer id, String user) {
        cartRepository.cartItemRemove(id, user);
    }

    public void clearCart(String user) {
        cartRepository.clearCart(user);
    }
}
