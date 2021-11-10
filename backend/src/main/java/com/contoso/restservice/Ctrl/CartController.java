package com.contoso.restservice.Ctrl;


import com.contoso.restservice.Model.Cart;
import com.contoso.restservice.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/api")
@RestController
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/cart/user/{user}")
    public List<Cart> getUserCart(@PathVariable(value = "user") String user) {
        List<Cart> cart = cartService.getUserCart(user);
        return cart;
    }

    @PostMapping("/cart/add")
    public void addItemCart(@RequestBody Map<String, Object> body) {
        cartService.addItemCart(Integer.parseInt(body.get("id").toString()), body.get("user").toString());
        //return cart;
    }

    @PostMapping("/cart/item/decrement")
    public void cartItemDecrement(@RequestBody Map<String, Object> body) {
        cartService.cartItemDecrement(Integer.parseInt(body.get("id").toString()), body.get("user").toString());
        //return cart;
    }

    @PostMapping("/cart/item/increment")
    public void cartItemIncrement(@RequestBody Map<String, Object> body) {
        cartService.cartItemIncrement(Integer.parseInt(body.get("id").toString()), body.get("user").toString());
        //return cart;
    }

    @PostMapping("/cart/item/remove")
    public void cartItemRemove(@RequestBody Map<String, Object> body) {
        cartService.cartItemRemove(Integer.parseInt(body.get("id").toString()), body.get("user").toString());
        //return cart;
    }

    @PostMapping("/cart/clear")
    public void clearCart(@RequestBody Map<String, Object> body) {
        cartService.clearCart(body.get("user").toString());
        //return cart;
    }
}
